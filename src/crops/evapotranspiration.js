import { finiteNumber, nonNegative } from '../shared.js'
import { adjustedCropCoefficient, cropCoefficient } from './coefficients.js'

/** FAO-56 Eq. 58. Crop evapotranspiration ETc [mm/day]. */
export function cropEvapotranspiration(etoMm, kc) {
  nonNegative(etoMm, 'etoMm')
  finiteNumber(kc, 'kc')
  if (kc < 0) throw new RangeError('kc must be non-negative')
  return etoMm * kc
}

/** Compute staged Kc and ETc together. */
export function calculateCropEvapotranspiration({ etoMm, crop, cumulativeGdd, day, climate }) {
  const coefficient = climate
    ? adjustedCropCoefficient(crop, { cumulativeGdd, day }, climate)
    : cropCoefficient(crop, { cumulativeGdd, day })
  return {
    etc: cropEvapotranspiration(etoMm, coefficient.kc),
    ...coefficient,
  }
}
