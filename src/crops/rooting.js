import { clamp, finiteNumber, nonNegative, numberInRange } from '../shared.js'
import { readilyAvailableWater, totalAvailableWater } from '../soil/properties.js'
import { waterStressCoefficient } from '../soil/water-balance.js'
import { getCropProfile } from './data.js'

const MID_OR_LATER = new Set(['mid-season', 'late-season', 'complete'])
const STAGES = new Set(['initial', 'development', ...MID_OR_LATER])

function profile(profileOrId) {
  return typeof profileOrId === 'string' ? getCropProfile(profileOrId) : profileOrId
}

/** Validate a caller-selected maximum root depth against its published Rev.1 range. */
export function selectMaximumRootDepth(profileOrId, maximumRootDepthM) {
  const crop = profile(profileOrId)
  finiteNumber(maximumRootDepthM, 'maximumRootDepthM')
  if (maximumRootDepthM <= 0) throw new RangeError('maximumRootDepthM must be positive')
  if (!crop?.rootDepthMRange) {
    throw new RangeError('crop profile has no published maximum root-depth range')
  }
  const [minimum, maximum] = crop.rootDepthMRange
  if (maximumRootDepthM < minimum || maximumRootDepthM > maximum) {
    throw new RangeError(`maximumRootDepthM must be selected between ${minimum} and ${maximum}`)
  }
  return maximumRootDepthM
}

/**
 * Original FAO-56 Annex 8 Equations 8-1 and 8-2.
 * Root growth is proportional to Kcb growth and cannot reverse from the
 * caller-supplied previous depth. Maximum depth is forced by mid-season.
 */
export function rootDepthFromBasalCoefficient({
  kcb,
  kcbInitial,
  kcbMid,
  initialRootDepthM,
  maximumRootDepthM,
  previousRootDepthM = initialRootDepthM,
  stage,
}) {
  for (const [name, value] of Object.entries({ kcb, kcbInitial, kcbMid })) {
    nonNegative(value, name)
  }
  for (const [name, value] of Object.entries({
    initialRootDepthM,
    maximumRootDepthM,
    previousRootDepthM,
  })) {
    finiteNumber(value, name)
    if (value <= 0) throw new RangeError(`${name} must be positive`)
  }
  if (maximumRootDepthM < initialRootDepthM) {
    throw new RangeError('maximumRootDepthM cannot be less than initialRootDepthM')
  }
  if (previousRootDepthM < initialRootDepthM || previousRootDepthM > maximumRootDepthM) {
    throw new RangeError('previousRootDepthM must be between initial and maximum root depth')
  }
  if (stage != null && !STAGES.has(stage)) {
    throw new RangeError('stage must be initial, development, mid-season, late-season, or complete')
  }
  if (MID_OR_LATER.has(stage)) return maximumRootDepthM
  if (stage === 'initial') return Math.max(initialRootDepthM, previousRootDepthM)
  if (kcbMid <= kcbInitial) {
    throw new RangeError('kcbMid must be greater than kcbInitial for dynamic root growth')
  }

  const growthFraction = clamp((kcb - kcbInitial) / (kcbMid - kcbInitial), 0, 1)
  const proportionalDepth = initialRootDepthM
    + growthFraction * (maximumRootDepthM - initialRootDepthM)
  return Math.min(maximumRootDepthM, Math.max(previousRootDepthM, proportionalDepth))
}

/** Calculate dynamic Zr, TAW, RAW, and Ks with a validated crop root-depth selection. */
export function calculateDynamicRootZone({
  crop: profileOrId,
  kcb,
  kcbInitial,
  kcbMid,
  stage,
  initialRootDepthM,
  maximumRootDepthM,
  previousRootDepthM = initialRootDepthM,
  fieldCapacityMmPerM,
  wiltingPointMmPerM,
  depletionFraction,
  depletionMm,
}) {
  const crop = profile(profileOrId)
  if (!crop?.kcb) throw new TypeError('a crop profile with kcb values is required')
  const selectedMaximumRootDepthM = selectMaximumRootDepth(crop, maximumRootDepthM)
  const rootDepthM = rootDepthFromBasalCoefficient({
    kcb,
    kcbInitial: kcbInitial ?? crop.kcb.initial,
    kcbMid: kcbMid ?? crop.kcb.midSeason,
    initialRootDepthM,
    maximumRootDepthM: selectedMaximumRootDepthM,
    previousRootDepthM,
    stage,
  })
  const tawMm = totalAvailableWater({
    fieldCapacityMmPerM,
    wiltingPointMmPerM,
    rootDepthM,
  })
  const selectedDepletionFraction = depletionFraction ?? crop.depletionFraction
  if (selectedDepletionFraction == null) {
    throw new TypeError('depletionFraction is required when the crop profile has no published value')
  }
  numberInRange(selectedDepletionFraction, 'depletionFraction', 0, 1)
  nonNegative(depletionMm, 'depletionMm')
  const rawMm = readilyAvailableWater(tawMm, selectedDepletionFraction)
  return {
    rootDepthM,
    rootDepthIncreaseM: rootDepthM - previousRootDepthM,
    maximumRootDepthM: selectedMaximumRootDepthM,
    tawMm,
    rawMm,
    ks: waterStressCoefficient(depletionMm, tawMm, rawMm),
    depletionFraction: selectedDepletionFraction,
  }
}
