import { finiteNumber, nonNegative } from '../shared.js'

/**
 * FAO56rev simplified daily growing degree days [°C day].
 * GDD = max(0, min((Tmax + Tmin) / 2, Tupper) - Tbase)
 */
export function growingDegreeDays({ tMinC, tMaxC, tBaseC, tUpperC = Infinity }) {
  finiteNumber(tMinC, 'tMinC')
  finiteNumber(tMaxC, 'tMaxC')
  finiteNumber(tBaseC, 'tBaseC')
  if (tUpperC !== Infinity) finiteNumber(tUpperC, 'tUpperC')
  if (tMaxC < tMinC) throw new RangeError('tMaxC must be greater than or equal to tMinC')
  if (tUpperC <= tBaseC) throw new RangeError('tUpperC must be greater than tBaseC')
  return Math.max(0, Math.min((tMinC + tMaxC) / 2, tUpperC) - tBaseC)
}

/** Sum daily GDD values or temperature observations. */
export function accumulateGrowingDegreeDays(values, thermalThresholds = null) {
  if (!Array.isArray(values)) throw new TypeError('values must be an array')
  return values.reduce((sum, value, index) => {
    if (typeof value === 'number') {
      nonNegative(value, `values[${index}]`)
      return sum + value
    }
    if (!thermalThresholds) {
      throw new TypeError('thermalThresholds are required when values contain temperatures')
    }
    return sum + growingDegreeDays({
      tMinC: value.tMinC,
      tMaxC: value.tMaxC,
      tBaseC: thermalThresholds.tBaseC,
      tUpperC: thermalThresholds.tUpperC,
    })
  }, 0)
}
