import { clamp, finiteNumber, numberInRange } from '../shared.js'
import { growthStage } from '../phenology/stages.js'
import { getCropProfile } from './data.js'

function resolveProfile(profileOrId) {
  return typeof profileOrId === 'string' ? getCropProfile(profileOrId) : profileOrId
}

/** Piecewise-linear FAO single crop coefficient (Eq. 66). */
export function cropCoefficient(profileOrId, { cumulativeGdd, day } = {}) {
  const profile = resolveProfile(profileOrId)
  if (!profile?.kc) throw new TypeError('a crop profile with kc values is required')

  let progress
  let thresholds
  let basis
  if (cumulativeGdd != null && profile.thermal?.stages) {
    progress = cumulativeGdd
    thresholds = profile.thermal.stages
    basis = 'gdd'
  } else if (day != null && profile.calendarStages) {
    progress = day
    thresholds = profile.calendarStages
    basis = 'calendar-day'
  } else {
    throw new TypeError('cumulativeGdd with sourced GDD stages, or day with calendar stages, is required')
  }
  finiteNumber(progress, basis === 'gdd' ? 'cumulativeGdd' : 'day')
  progress = Math.max(0, progress)

  const stage = growthStage(progress, thresholds)
  const endInitial = thresholds.initial
  const endDevelopment = endInitial + thresholds.development
  const endMid = endDevelopment + thresholds.midSeason

  let kc
  if (stage === 'initial') kc = profile.kc.initial
  else if (stage === 'development') {
    const fraction = thresholds.development === 0 ? 1 : (progress - endInitial) / thresholds.development
    kc = profile.kc.initial + fraction * (profile.kc.midSeason - profile.kc.initial)
  } else if (stage === 'mid-season') kc = profile.kc.midSeason
  else if (stage === 'late-season') {
    const fraction = thresholds.lateSeason === 0 ? 1 : (progress - endMid) / thresholds.lateSeason
    kc = profile.kc.midSeason + fraction * (profile.kc.end - profile.kc.midSeason)
  } else kc = profile.kc.end

  return { kc, stage, basis }
}

/** FAO-56 Eq. 62/65 climate adjustment for Kc mid or Kc end. */
export function adjustCropCoefficient(kcTabulated, {
  windSpeed2mMps,
  minRelativeHumidityPercent,
  cropHeightM,
  endSeason = false,
}) {
  finiteNumber(kcTabulated, 'kcTabulated')
  numberInRange(windSpeed2mMps, 'windSpeed2mMps', 0, 100)
  numberInRange(minRelativeHumidityPercent, 'minRelativeHumidityPercent', 0, 100)
  finiteNumber(cropHeightM, 'cropHeightM')
  if (cropHeightM <= 0) throw new RangeError('cropHeightM must be positive')
  if (endSeason && kcTabulated <= 0.45) return kcTabulated

  const u2 = clamp(windSpeed2mMps, 1, 6)
  const rhMin = clamp(minRelativeHumidityPercent, 20, 80)
  const height = clamp(cropHeightM, 0.1, 10)
  return kcTabulated
    + (0.04 * (u2 - 2) - 0.004 * (rhMin - 45)) * Math.pow(height / 3, 0.3)
}

/** Resolve a staged Kc and apply climate adjustment where FAO-56 permits it. */
export function adjustedCropCoefficient(profileOrId, progress, climate) {
  const profile = resolveProfile(profileOrId)
  const result = cropCoefficient(profile, progress)
  if (!['mid-season', 'late-season', 'complete'].includes(result.stage)) {
    return { ...result, adjusted: false }
  }
  const kc = adjustCropCoefficient(result.kc, {
    ...climate,
    cropHeightM: climate.cropHeightM ?? profile.kc.heightM,
    endSeason: result.stage !== 'mid-season',
  })
  return { ...result, kc, adjusted: kc !== result.kc }
}
