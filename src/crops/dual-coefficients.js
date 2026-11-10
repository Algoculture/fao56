import { clamp, finiteNumber, nonNegative, numberInRange } from '../shared.js'
import { actualDualCropEvapotranspiration } from './evapotranspiration.js'
import { adjustedBasalCropCoefficient, basalCropCoefficient } from './coefficients.js'
import { getCropProfile } from './data.js'

const METHODS = new Set(['original', 'skin-layer'])

function validateMethod(method) {
  if (!METHODS.has(method)) throw new RangeError('method must be original or skin-layer')
}

function validateTiming(wettingTiming) {
  if (!['early', 'late'].includes(wettingTiming)) {
    throw new RangeError('wettingTiming must be early or late')
  }
}

function validateEvaporationStorage(depletionMm, tewMm, rewMm) {
  nonNegative(depletionMm, 'depletionMm')
  nonNegative(tewMm, 'tewMm')
  nonNegative(rewMm, 'rewMm')
  if (rewMm > tewMm) throw new RangeError('rewMm cannot exceed tewMm')
  if (depletionMm > tewMm) throw new RangeError('depletionMm cannot exceed tewMm')
}

function wettingDepth({ precipitationMm, runoffMm, irrigationMm, fractionWetted }) {
  for (const [name, value] of Object.entries({ precipitationMm, runoffMm, irrigationMm })) {
    nonNegative(value, name)
  }
  numberInRange(fractionWetted, 'fractionWetted', 0.01, 1)
  if (runoffMm > precipitationMm) throw new RangeError('runoffMm cannot exceed precipitationMm')
  return precipitationMm - runoffMm + irrigationMm / fractionWetted
}

function startOfPeriodDepletion(previousDepletionMm, capacityMm, wettingMm, wettingTiming) {
  return wettingTiming === 'early'
    ? clamp(previousDepletionMm - wettingMm, 0, capacityMm)
    : previousDepletionMm
}

/** FAO-56 Rev.1 Eq. 7.4. Upper crop-coefficient limit after wetting. */
export function maximumCropCoefficient({
  kcb,
  windSpeed2mMps,
  minRelativeHumidityPercent,
  cropHeightM,
  wetSoilCoefficient = 1.2,
}) {
  nonNegative(kcb, 'kcb')
  numberInRange(windSpeed2mMps, 'windSpeed2mMps', 0, 100)
  numberInRange(minRelativeHumidityPercent, 'minRelativeHumidityPercent', 0, 100)
  finiteNumber(cropHeightM, 'cropHeightM')
  if (cropHeightM <= 0) throw new RangeError('cropHeightM must be positive')
  nonNegative(wetSoilCoefficient, 'wetSoilCoefficient')

  const u2 = clamp(windSpeed2mMps, 1, 6)
  const rhMin = clamp(minRelativeHumidityPercent, 20, 80)
  const height = clamp(cropHeightM, 0.1, 10)
  const climateLimit = wetSoilCoefficient
    + (0.04 * (u2 - 2) - 0.004 * (rhMin - 45)) * Math.pow(height / 3, 0.3)
  return Math.max(climateLimit, kcb + 0.05)
}

/** FAO-56 Rev.1 Eq. 7.5. Total evaporable water [mm]. */
export function totalEvaporableWater({ fieldCapacity, wiltingPoint, evaporationDepthM }) {
  numberInRange(fieldCapacity, 'fieldCapacity', 0, 1)
  numberInRange(wiltingPoint, 'wiltingPoint', 0, 1)
  nonNegative(evaporationDepthM, 'evaporationDepthM')
  if (fieldCapacity < wiltingPoint) {
    throw new RangeError('fieldCapacity must be greater than or equal to wiltingPoint')
  }
  return 1000 * (fieldCapacity - 0.5 * wiltingPoint) * evaporationDepthM
}

/** FAO-56 Rev.1 Eq. 7.6. Original evaporation reduction coefficient Kr. */
export function evaporationReductionCoefficient(depletionMm, tewMm, rewMm) {
  validateEvaporationStorage(depletionMm, tewMm, rewMm)
  if (depletionMm <= rewMm) return 1
  if (tewMm === rewMm) return 0
  return clamp((tewMm - depletionMm) / (tewMm - rewMm), 0, 1)
}

/** FAO-56 Rev.1 Eq. 7.12. Fraction of the period in stage-1 evaporation. */
export function skinLayerStage1Fraction({ drewMm, rewMm, kcMax, etoMm }) {
  nonNegative(drewMm, 'drewMm')
  nonNegative(rewMm, 'rewMm')
  nonNegative(kcMax, 'kcMax')
  nonNegative(etoMm, 'etoMm')
  if (drewMm > rewMm) throw new RangeError('drewMm cannot exceed rewMm')
  if (kcMax === 0 || etoMm === 0) return 0
  return clamp((rewMm - drewMm) / (kcMax * etoMm), 0, 1)
}

/** FAO-56 Rev.1 Eq. 7.11. Skin-layer weighted reduction coefficient Kr. */
export function skinLayerEvaporationReductionCoefficient({
  depletionMm,
  tewMm,
  rewMm,
  stage1Fraction,
}) {
  validateEvaporationStorage(depletionMm, tewMm, rewMm)
  numberInRange(stage1Fraction, 'stage1Fraction', 0, 1)
  const stage2 = tewMm === rewMm
    ? 0
    : clamp((tewMm - depletionMm) / (tewMm - rewMm), 0, 1)
  return clamp(stage2 * (1 - stage1Fraction) + stage1Fraction, 0, 1)
}

/** FAO-56 Rev.1 Eq. 7.8. Estimate effective vegetation cover. */
export function vegetationCoverFraction({ kcb, kcMin, kcMax, cropHeightM }) {
  nonNegative(kcb, 'kcb')
  nonNegative(kcMin, 'kcMin')
  nonNegative(kcMax, 'kcMax')
  nonNegative(cropHeightM, 'cropHeightM')
  if (kcMax <= kcMin) throw new RangeError('kcMax must be greater than kcMin')
  const ratio = Math.max(kcb - kcMin, 0.01) / (kcMax - kcMin)
  return clamp(Math.pow(ratio, 1 + 0.5 * cropHeightM), 0, 0.99)
}

/** FAO-56 Rev.1 Eq. 7.7. Exposed and wetted soil fraction. */
export function exposedWettedFraction(fractionCovered, fractionWetted, { shadedDrip = false } = {}) {
  numberInRange(fractionCovered, 'fractionCovered', 0, 0.99)
  numberInRange(fractionWetted, 'fractionWetted', 0.01, 1)
  const effectiveWetted = shadedDrip
    ? fractionWetted * (1 - (2 / 3) * fractionCovered)
    : fractionWetted
  return Math.min(1 - fractionCovered, effectiveWetted)
}

/** FAO-56 Rev.1 Eq. 7.3. Soil evaporation coefficient Ke. */
export function soilEvaporationCoefficient({ kr, kcMax, kcb, ks = 1, few }) {
  numberInRange(kr, 'kr', 0, 1)
  nonNegative(kcMax, 'kcMax')
  nonNegative(kcb, 'kcb')
  numberInRange(ks, 'ks', 0, 1)
  numberInRange(few, 'few', 0.01, 1)
  return Math.max(0, Math.min(kr * (kcMax - ks * kcb), few * kcMax))
}

/** FAO-56 Rev.1 Eq. 7.9/7.10. Update the classic evaporation-layer balance. */
export function updateEvaporationLayerWaterBalance({
  previousDepletionMm,
  tewMm,
  precipitationMm = 0,
  runoffMm = 0,
  irrigationMm = 0,
  fractionWetted,
  few,
  evaporationMm,
  transpirationFromLayerMm = 0,
  wettingTiming = 'early',
}) {
  validateEvaporationStorage(previousDepletionMm, tewMm, 0)
  validateTiming(wettingTiming)
  numberInRange(few, 'few', 0.01, 1)
  nonNegative(evaporationMm, 'evaporationMm')
  nonNegative(transpirationFromLayerMm, 'transpirationFromLayerMm')
  const wettingMm = wettingDepth({ precipitationMm, runoffMm, irrigationMm, fractionWetted })
  const deepPercolationMm = Math.max(0, wettingMm - previousDepletionMm)
  const depletionMm = clamp(
    previousDepletionMm - wettingMm + evaporationMm / few
      + transpirationFromLayerMm + deepPercolationMm,
    0,
    tewMm,
  )
  return { depletionMm, deepPercolationMm, wettingMm, wettingTiming }
}

function calculateEvaporationState({
  method,
  previousDepletionMm,
  previousReadilyEvaporableDepletionMm,
  tewMm,
  rewMm,
  precipitationMm,
  runoffMm,
  irrigationMm,
  fractionWetted,
  few,
  evaporationMm,
  transpirationFromLayerMm,
  wettingTiming,
}) {
  if (method === 'original') return updateEvaporationLayerWaterBalance({
    previousDepletionMm,
    tewMm,
    precipitationMm,
    runoffMm,
    irrigationMm,
    fractionWetted,
    few,
    evaporationMm,
    transpirationFromLayerMm,
    wettingTiming,
  })

  nonNegative(previousReadilyEvaporableDepletionMm, 'previousReadilyEvaporableDepletionMm')
  if (previousReadilyEvaporableDepletionMm > rewMm) {
    throw new RangeError('previousReadilyEvaporableDepletionMm cannot exceed rewMm')
  }
  const wettingMm = wettingDepth({ precipitationMm, runoffMm, irrigationMm, fractionWetted })
  const localizedEvaporationMm = evaporationMm / few
  const depletionBeforeEvaporationMm = startOfPeriodDepletion(
    previousDepletionMm,
    tewMm,
    wettingMm,
    wettingTiming,
  )
  const drewBeforeEvaporationMm = startOfPeriodDepletion(
    previousReadilyEvaporableDepletionMm,
    rewMm,
    wettingMm,
    wettingTiming,
  )
  const depletionMm = clamp(
    depletionBeforeEvaporationMm
      + localizedEvaporationMm
      - (wettingTiming === 'late' ? wettingMm : 0),
    0,
    tewMm,
  )
  const readilyEvaporableDepletionMm = clamp(
    drewBeforeEvaporationMm
      + localizedEvaporationMm
      - (wettingTiming === 'late' ? wettingMm : 0),
    0,
    rewMm,
  )
  return {
    depletionMm,
    readilyEvaporableDepletionMm,
    waterBelowEvaporationLayerMm: Math.max(0, wettingMm - previousDepletionMm),
    wettingMm,
    wettingTiming,
  }
}

/**
 * Calculate one daily/hourly dual-Kc period and advance its evaporation state.
 * `method` is mandatory to prevent silently selecting either scientific method.
 */
export function calculateDualCropEvapotranspiration({
  method,
  etoMm,
  kcb,
  ks = 1,
  kcMax: suppliedKcMax,
  windSpeed2mMps,
  minRelativeHumidityPercent,
  cropHeightM,
  wetSoilCoefficient = 1.2,
  fractionCovered,
  kcMin,
  fractionWetted,
  shadedDrip = false,
  previousDepletionMm,
  previousReadilyEvaporableDepletionMm,
  tewMm,
  rewMm,
  precipitationMm = 0,
  runoffMm = 0,
  irrigationMm = 0,
  transpirationFromLayerMm = 0,
  wettingTiming = 'early',
}) {
  validateMethod(method)
  validateTiming(wettingTiming)
  nonNegative(etoMm, 'etoMm')
  nonNegative(kcb, 'kcb')
  numberInRange(ks, 'ks', 0, 1)
  validateEvaporationStorage(previousDepletionMm, tewMm, rewMm)
  const wettingMm = wettingDepth({ precipitationMm, runoffMm, irrigationMm, fractionWetted })
  const kcMax = suppliedKcMax ?? maximumCropCoefficient({
    kcb,
    windSpeed2mMps,
    minRelativeHumidityPercent,
    cropHeightM,
    wetSoilCoefficient,
  })
  nonNegative(kcMax, 'kcMax')
  const fc = fractionCovered ?? vegetationCoverFraction({ kcb, kcMin, kcMax, cropHeightM })
  const few = exposedWettedFraction(fc, fractionWetted, { shadedDrip })
  const startDepletionMm = startOfPeriodDepletion(
    previousDepletionMm,
    tewMm,
    wettingMm,
    wettingTiming,
  )

  let startDrewMm = null
  let stage1Fraction = null
  let kr
  if (method === 'skin-layer') {
    nonNegative(previousReadilyEvaporableDepletionMm, 'previousReadilyEvaporableDepletionMm')
    if (previousReadilyEvaporableDepletionMm > rewMm) {
      throw new RangeError('previousReadilyEvaporableDepletionMm cannot exceed rewMm')
    }
    startDrewMm = startOfPeriodDepletion(
      previousReadilyEvaporableDepletionMm,
      rewMm,
      wettingMm,
      wettingTiming,
    )
    stage1Fraction = skinLayerStage1Fraction({ drewMm: startDrewMm, rewMm, kcMax, etoMm })
    kr = skinLayerEvaporationReductionCoefficient({
      depletionMm: startDepletionMm,
      tewMm,
      rewMm,
      stage1Fraction,
    })
  } else {
    kr = evaporationReductionCoefficient(startDepletionMm, tewMm, rewMm)
  }

  const ke = soilEvaporationCoefficient({ kr, kcMax, kcb, ks, few })
  const soilEvaporationMm = ke * etoMm
  const transpirationMm = ks * kcb * etoMm
  const evaporationState = calculateEvaporationState({
    method,
    previousDepletionMm,
    previousReadilyEvaporableDepletionMm,
    tewMm,
    rewMm,
    precipitationMm,
    runoffMm,
    irrigationMm,
    fractionWetted,
    few,
    evaporationMm: soilEvaporationMm,
    transpirationFromLayerMm,
    wettingTiming,
  })

  return {
    method,
    kcb,
    ks,
    kr,
    ke,
    kcMax,
    kcStandard: kcb + ke,
    kcActual: ks * kcb + ke,
    transpirationMm,
    soilEvaporationMm,
    etcStandardMm: (kcb + ke) * etoMm,
    etcActualMm: actualDualCropEvapotranspiration(etoMm, kcb, ke, ks),
    fractionCovered: fc,
    fractionWetted,
    few,
    stage1Fraction,
    startDepletionMm,
    startReadilyEvaporableDepletionMm: startDrewMm,
    evaporationState,
  }
}

/** Resolve staged Kcb from a crop profile, then calculate one dual-Kc period. */
export function calculateStagedDualCropEvapotranspiration({
  crop,
  cumulativeGdd,
  day,
  climate,
  ...input
}) {
  const profile = typeof crop === 'string' ? getCropProfile(crop) : crop
  const coefficient = climate
    ? adjustedBasalCropCoefficient(profile, { cumulativeGdd, day }, climate)
    : basalCropCoefficient(profile, { cumulativeGdd, day })
  return {
    ...calculateDualCropEvapotranspiration({
      ...input,
      kcb: coefficient.kcb,
      windSpeed2mMps: input.windSpeed2mMps ?? climate?.windSpeed2mMps,
      minRelativeHumidityPercent:
        input.minRelativeHumidityPercent ?? climate?.minRelativeHumidityPercent,
      cropHeightM:
        input.cropHeightM ?? climate?.cropHeightM ?? profile.kcb?.heightM ?? profile.kc?.heightM,
    }),
    stage: coefficient.stage,
    basis: coefficient.basis,
    ...(Object.hasOwn(coefficient, 'adjusted') ? { adjusted: coefficient.adjusted } : {}),
  }
}
