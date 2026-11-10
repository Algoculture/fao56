import { clamp, nonNegative, numberInRange } from '../shared.js'

/** FAO-56 Eq. 84. Water stress coefficient Ks. */
export function waterStressCoefficient(depletionMm, tawMm, rawMm) {
  nonNegative(depletionMm, 'depletionMm')
  nonNegative(tawMm, 'tawMm')
  nonNegative(rawMm, 'rawMm')
  if (rawMm > tawMm) throw new RangeError('rawMm cannot exceed tawMm')
  if (depletionMm <= rawMm) return 1
  if (tawMm === rawMm) return depletionMm <= rawMm ? 1 : 0
  return clamp((tawMm - depletionMm) / (tawMm - rawMm), 0, 1)
}

/**
 * FAO-56 root-zone daily water balance (Eq. 85 form).
 * Depletion is zero at field capacity and TAW at wilting point.
 */
export function updateRootZoneWaterBalance({
  previousDepletionMm,
  tawMm,
  precipitationMm = 0,
  runoffMm = 0,
  irrigationMm = 0,
  irrigationEfficiency = 1,
  capillaryRiseMm = 0,
  cropEvapotranspirationMm,
  deepPercolationMm,
}) {
  for (const [name, value] of Object.entries({
    previousDepletionMm,
    tawMm,
    precipitationMm,
    runoffMm,
    irrigationMm,
    capillaryRiseMm,
    cropEvapotranspirationMm,
  })) nonNegative(value, name)
  numberInRange(irrigationEfficiency, 'irrigationEfficiency', 0, 1)
  if (runoffMm > precipitationMm) throw new RangeError('runoffMm cannot exceed precipitationMm')
  if (previousDepletionMm > tawMm) throw new RangeError('previousDepletionMm cannot exceed tawMm')
  if (deepPercolationMm != null) nonNegative(deepPercolationMm, 'deepPercolationMm')

  const effectivePrecipitationMm = precipitationMm - runoffMm
  const effectiveIrrigationMm = irrigationMm * irrigationEfficiency
  const beforeDrainage = previousDepletionMm
    + cropEvapotranspirationMm
    - effectivePrecipitationMm
    - effectiveIrrigationMm
    - capillaryRiseMm
  const drainage = deepPercolationMm ?? Math.max(0, -beforeDrainage)
  const unconstrainedDepletion = beforeDrainage + drainage
  const depletionMm = clamp(unconstrainedDepletion, 0, tawMm)

  return {
    depletionMm,
    availableWaterMm: tawMm - depletionMm,
    effectivePrecipitationMm,
    effectiveIrrigationMm,
    deepPercolationMm: drainage,
    deficitBeyondWiltingMm: Math.max(0, unconstrainedDepletion - tawMm),
  }
}
