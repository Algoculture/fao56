import { finiteNumber, nonNegative } from '../shared.js'

export const GROWTH_STAGES = Object.freeze(['initial', 'development', 'mid-season', 'late-season', 'complete'])

/** @param {{initial:number,development:number,midSeason:number,lateSeason:number}} thresholds */
export function validateStageThresholds(thresholds) {
  if (!thresholds || typeof thresholds !== 'object') throw new TypeError('thresholds are required')
  for (const key of ['initial', 'development', 'midSeason', 'lateSeason']) {
    nonNegative(thresholds[key], `thresholds.${key}`)
  }
  return thresholds
}

/** Determine the FAO segmented crop stage from cumulative progress. */
export function growthStage(cumulative, thresholds) {
  finiteNumber(cumulative, 'cumulative')
  validateStageThresholds(thresholds)
  const value = Math.max(0, cumulative)
  const endInitial = thresholds.initial
  const endDevelopment = endInitial + thresholds.development
  const endMid = endDevelopment + thresholds.midSeason
  const endLate = endMid + thresholds.lateSeason

  if (value < endInitial) return 'initial'
  if (value < endDevelopment) return 'development'
  if (value < endMid) return 'mid-season'
  if (value < endLate) return 'late-season'
  return 'complete'
}

/** Return stage boundaries and fractional progress for UI or scheduling. */
export function growthStageProgress(cumulative, thresholds) {
  finiteNumber(cumulative, 'cumulative')
  validateStageThresholds(thresholds)
  const value = Math.max(0, cumulative)
  const stage = growthStage(value, thresholds)
  const boundaries = {
    initial: [0, thresholds.initial],
    development: [thresholds.initial, thresholds.initial + thresholds.development],
    'mid-season': [
      thresholds.initial + thresholds.development,
      thresholds.initial + thresholds.development + thresholds.midSeason,
    ],
    'late-season': [
      thresholds.initial + thresholds.development + thresholds.midSeason,
      thresholds.initial + thresholds.development + thresholds.midSeason + thresholds.lateSeason,
    ],
  }
  const total = Object.values(thresholds).reduce((sum, item) => sum + item, 0)
  if (stage === 'complete') {
    return { stage, stageStart: total, stageEnd: total, stageFraction: 1, total }
  }
  const [stageStart, stageEnd] = boundaries[stage]
  const stageFraction = stageEnd === stageStart ? 1 : Math.min(1, (value - stageStart) / (stageEnd - stageStart))
  return { stage, stageStart, stageEnd, stageFraction, total }
}
