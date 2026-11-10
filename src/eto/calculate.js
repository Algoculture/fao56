import { hargreavesSamani } from './hargreaves-samani.js'
import { calculatePenmanMonteithDaily } from './penman-monteith.js'

/**
 * Select a daily ET0 method. Auto uses Penman–Monteith when wind and humidity
 * information are available, otherwise Hargreaves–Samani.
 */
export function calculateDailyEto(input, { method = 'auto' } = {}) {
  const hasHumidity = input.actualVapourPressureKPa != null
    || input.dewPointC != null
    || input.rhMinPercent != null
    || input.rhMaxPercent != null
    || input.rhMeanPercent != null
    || input.estimateHumidityFromTMin === true
  const canUsePenman = input.windSpeedMps != null && hasHumidity

  if (method === 'penman-monteith' || (method === 'auto' && canUsePenman)) {
    return calculatePenmanMonteithDaily(input)
  }
  if (method !== 'auto' && method !== 'hargreaves-samani') {
    throw new RangeError('method must be auto, penman-monteith, or hargreaves-samani')
  }
  return {
    eto: hargreavesSamani(input),
    method: 'hargreaves-samani',
    radiationMethod: input.extraterrestrialRadiationMJ == null ? 'astronomical' : 'provided',
    humidityMethod: null,
    diagnostics: null,
  }
}
