import { finiteNumber, nonNegative } from '../shared.js'
import { waterStressCoefficient } from '../soil/water-balance.js'
import { adjustedCropCoefficient, cropCoefficient } from './coefficients.js'

/** FAO-56 Eq. 58. Crop evapotranspiration ETc [mm/day]. */
export function cropEvapotranspiration(etoMm, kc) {
  nonNegative(etoMm, 'etoMm')
  finiteNumber(kc, 'kc')
  if (kc < 0) throw new RangeError('kc must be non-negative')
  return etoMm * kc
}

/** FAO-56 Rev.1 Eq. 8.2. Actual single-coefficient ETc [mm/day]. */
export function actualCropEvapotranspiration(etoMm, kc, ks) {
  nonNegative(etoMm, 'etoMm')
  nonNegative(kc, 'kc')
  finiteNumber(ks, 'ks')
  if (ks < 0 || ks > 1) throw new RangeError('ks must be between 0 and 1')
  return etoMm * kc * ks
}

/** FAO-56 Rev.1 Eq. 8.1. Actual dual-coefficient ETc [mm/day]. */
export function actualDualCropEvapotranspiration(etoMm, kcb, ke, ks) {
  nonNegative(etoMm, 'etoMm')
  nonNegative(kcb, 'kcb')
  nonNegative(ke, 'ke')
  finiteNumber(ks, 'ks')
  if (ks < 0 || ks > 1) throw new RangeError('ks must be between 0 and 1')
  return etoMm * (ks * kcb + ke)
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

/** Compute staged single Kc, Ks, standard ETc, and actual ETc together. */
export function calculateActualCropEvapotranspiration({
  etoMm,
  crop,
  cumulativeGdd,
  day,
  climate,
  depletionMm,
  tawMm,
  rawMm,
}) {
  const coefficient = climate
    ? adjustedCropCoefficient(crop, { cumulativeGdd, day }, climate)
    : cropCoefficient(crop, { cumulativeGdd, day })
  const ks = waterStressCoefficient(depletionMm, tawMm, rawMm)
  return {
    etcStandardMm: cropEvapotranspiration(etoMm, coefficient.kc),
    etcActualMm: actualCropEvapotranspiration(etoMm, coefficient.kc, ks),
    kcStandard: coefficient.kc,
    kcActual: coefficient.kc * ks,
    ks,
    stage: coefficient.stage,
    basis: coefficient.basis,
    ...(Object.hasOwn(coefficient, 'adjusted') ? { adjusted: coefficient.adjusted } : {}),
  }
}
