import { finiteNumber, nonNegative } from '../shared.js'

/** Representative hydraulic properties in mm of water per metre of soil. */
export const SOIL_PROPERTIES = Object.freeze({
  sand: Object.freeze({ fieldCapacityMmPerM: 90, wiltingPointMmPerM: 30, infiltrationMmPerHour: 250 }),
  sandyLoam: Object.freeze({ fieldCapacityMmPerM: 140, wiltingPointMmPerM: 55, infiltrationMmPerHour: 100 }),
  loam: Object.freeze({ fieldCapacityMmPerM: 190, wiltingPointMmPerM: 75, infiltrationMmPerHour: 50 }),
  siltLoam: Object.freeze({ fieldCapacityMmPerM: 210, wiltingPointMmPerM: 85, infiltrationMmPerHour: 30 }),
  clayLoam: Object.freeze({ fieldCapacityMmPerM: 230, wiltingPointMmPerM: 100, infiltrationMmPerHour: 15 }),
  siltyClay: Object.freeze({ fieldCapacityMmPerM: 250, wiltingPointMmPerM: 115, infiltrationMmPerHour: 8 }),
  clay: Object.freeze({ fieldCapacityMmPerM: 260, wiltingPointMmPerM: 130, infiltrationMmPerHour: 4 }),
  peat: Object.freeze({ fieldCapacityMmPerM: 330, wiltingPointMmPerM: 130, infiltrationMmPerHour: 20 }),
})

export function getSoilProperties(id) {
  const properties = SOIL_PROPERTIES[id]
  if (!properties) throw new RangeError(`unknown soil profile: ${id}`)
  return properties
}

/** FAO-56 Eq. 82. Total available water TAW [mm]. */
export function totalAvailableWater({ fieldCapacityMmPerM, wiltingPointMmPerM, rootDepthM }) {
  finiteNumber(fieldCapacityMmPerM, 'fieldCapacityMmPerM')
  finiteNumber(wiltingPointMmPerM, 'wiltingPointMmPerM')
  nonNegative(rootDepthM, 'rootDepthM')
  if (fieldCapacityMmPerM < wiltingPointMmPerM) {
    throw new RangeError('fieldCapacityMmPerM must be at least wiltingPointMmPerM')
  }
  return (fieldCapacityMmPerM - wiltingPointMmPerM) * rootDepthM
}

/** TAW convenience function using a bundled soil profile. */
export function totalAvailableWaterForSoil(soilId, rootDepthM) {
  return totalAvailableWater({ ...getSoilProperties(soilId), rootDepthM })
}

/** FAO-56 adjustment of depletion fraction p for ETc different from 5 mm/day. */
export function adjustDepletionFraction(baseFraction, etcMm) {
  finiteNumber(baseFraction, 'baseFraction')
  nonNegative(etcMm, 'etcMm')
  if (baseFraction < 0 || baseFraction > 1) throw new RangeError('baseFraction must be between 0 and 1')
  return Math.min(0.8, Math.max(0.1, baseFraction + 0.04 * (5 - etcMm)))
}

/** FAO-56 Eq. 83. Readily available water RAW [mm of depletion]. */
export function readilyAvailableWater(tawMm, depletionFraction) {
  nonNegative(tawMm, 'tawMm')
  finiteNumber(depletionFraction, 'depletionFraction')
  if (depletionFraction < 0 || depletionFraction > 1) {
    throw new RangeError('depletionFraction must be between 0 and 1')
  }
  return tawMm * depletionFraction
}
