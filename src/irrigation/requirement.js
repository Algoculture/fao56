import { nonNegative, numberInRange } from '../shared.js'

/** Daily crop water gap [mm], equivalent to litres/m². */
export function netCropWaterRequirement(cropEvapotranspirationMm, effectiveRainMm = 0) {
  nonNegative(cropEvapotranspirationMm, 'cropEvapotranspirationMm')
  nonNegative(effectiveRainMm, 'effectiveRainMm')
  return Math.max(0, cropEvapotranspirationMm - effectiveRainMm)
}

/**
 * Determine net and gross irrigation from root-zone depletion.
 * Irrigation is triggered when projected depletion reaches RAW.
 */
export function irrigationRequirement({
  depletionMm,
  rawMm,
  tawMm,
  targetDepletionMm = 0,
  forecastEffectiveRainMm = 0,
  applicationEfficiency = 1,
  maxApplicationMm = Infinity,
}) {
  for (const [name, value] of Object.entries({
    depletionMm,
    rawMm,
    tawMm,
    targetDepletionMm,
    forecastEffectiveRainMm,
  })) nonNegative(value, name)
  numberInRange(applicationEfficiency, 'applicationEfficiency', 0.01, 1)
  if (maxApplicationMm !== Infinity) nonNegative(maxApplicationMm, 'maxApplicationMm')
  if (rawMm > tawMm) throw new RangeError('rawMm cannot exceed tawMm')
  if (depletionMm > tawMm) throw new RangeError('depletionMm cannot exceed tawMm')
  if (targetDepletionMm > rawMm) throw new RangeError('targetDepletionMm cannot exceed rawMm')

  const projectedDepletionMm = Math.max(0, depletionMm - forecastEffectiveRainMm)
  if (projectedDepletionMm < rawMm) {
    return {
      triggered: false,
      projectedDepletionMm,
      netIrrigationMm: 0,
      grossIrrigationMm: 0,
      deferredNetIrrigationMm: 0,
    }
  }

  const requiredNetMm = Math.max(0, projectedDepletionMm - targetDepletionMm)
  const netIrrigationMm = Math.min(requiredNetMm, maxApplicationMm * applicationEfficiency)
  const grossIrrigationMm = netIrrigationMm / applicationEfficiency
  return {
    triggered: true,
    projectedDepletionMm,
    netIrrigationMm,
    grossIrrigationMm,
    deferredNetIrrigationMm: requiredNetMm - netIrrigationMm,
  }
}
