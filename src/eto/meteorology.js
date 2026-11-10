import { finiteNumber, numberInRange } from '../shared.js'

/** FAO-56 Eq. 7. Atmospheric pressure [kPa] at elevation [m]. */
export function atmosphericPressure(elevationM) {
  finiteNumber(elevationM, 'elevationM')
  const base = (293 - 0.0065 * elevationM) / 293
  if (base <= 0) throw new RangeError('elevationM is outside the supported atmosphere model')
  return 101.3 * Math.pow(base, 5.26)
}

/** FAO-56 Eq. 8. Psychrometric constant [kPa/°C]. */
export function psychrometricConstant(pressureKPa) {
  finiteNumber(pressureKPa, 'pressureKPa')
  if (pressureKPa <= 0) throw new RangeError('pressureKPa must be positive')
  return 0.000665 * pressureKPa
}

/** FAO-56 Eq. 11. Saturation vapour pressure [kPa]. */
export function saturationVapourPressure(temperatureC) {
  finiteNumber(temperatureC, 'temperatureC')
  return 0.6108 * Math.exp((17.27 * temperatureC) / (temperatureC + 237.3))
}

/** FAO-56 Eq. 12. Mean saturation vapour pressure [kPa]. */
export function meanSaturationVapourPressure(tMinC, tMaxC) {
  finiteNumber(tMinC, 'tMinC')
  finiteNumber(tMaxC, 'tMaxC')
  if (tMaxC < tMinC) throw new RangeError('tMaxC must be greater than or equal to tMinC')
  return (saturationVapourPressure(tMinC) + saturationVapourPressure(tMaxC)) / 2
}

/** FAO-56 Eq. 13. Slope of the saturation vapour pressure curve [kPa/°C]. */
export function saturationVapourPressureSlope(temperatureC) {
  const es = saturationVapourPressure(temperatureC)
  return (4098 * es) / Math.pow(temperatureC + 237.3, 2)
}

/**
 * Determine actual vapour pressure [kPa] using the best available FAO-56 method.
 * Priority: direct value, dew point, RHmax/RHmin, RHmax, RHmean, then Tmin estimate.
 */
export function actualVapourPressure({
  valueKPa,
  dewPointC,
  tMinC,
  tMaxC,
  rhMinPercent,
  rhMaxPercent,
  rhMeanPercent,
  estimateFromTMin = false,
}) {
  if (valueKPa != null) {
    finiteNumber(valueKPa, 'valueKPa')
    if (valueKPa < 0) throw new RangeError('valueKPa must be non-negative')
    return { value: valueKPa, method: 'measured' }
  }

  if (dewPointC != null) {
    return { value: saturationVapourPressure(dewPointC), method: 'dew-point' }
  }

  if (tMinC == null || tMaxC == null) {
    throw new TypeError('tMinC and tMaxC are required when actual vapour pressure is not supplied')
  }
  finiteNumber(tMinC, 'tMinC')
  finiteNumber(tMaxC, 'tMaxC')

  if (rhMaxPercent != null && rhMinPercent != null) {
    numberInRange(rhMaxPercent, 'rhMaxPercent', 0, 100)
    numberInRange(rhMinPercent, 'rhMinPercent', 0, 100)
    return {
      value: (saturationVapourPressure(tMinC) * rhMaxPercent / 100
        + saturationVapourPressure(tMaxC) * rhMinPercent / 100) / 2,
      method: 'rh-min-max',
    }
  }

  if (rhMaxPercent != null) {
    numberInRange(rhMaxPercent, 'rhMaxPercent', 0, 100)
    return {
      value: saturationVapourPressure(tMinC) * rhMaxPercent / 100,
      method: 'rh-max',
    }
  }

  if (rhMeanPercent != null) {
    numberInRange(rhMeanPercent, 'rhMeanPercent', 0, 100)
    return {
      value: meanSaturationVapourPressure(tMinC, tMaxC) * rhMeanPercent / 100,
      method: 'rh-mean',
    }
  }

  if (estimateFromTMin) {
    return { value: saturationVapourPressure(tMinC), method: 'tmin-estimate' }
  }

  throw new TypeError('humidity, dew point, or actual vapour pressure is required')
}

/** FAO-56 Eq. 47. Convert wind speed measured at height z [m] to 2 m [m/s]. */
export function windSpeedAt2m(speedMps, measurementHeightM = 2) {
  finiteNumber(speedMps, 'speedMps')
  finiteNumber(measurementHeightM, 'measurementHeightM')
  if (speedMps < 0) throw new RangeError('speedMps must be non-negative')
  if (measurementHeightM <= 0) throw new RangeError('measurementHeightM must be positive')
  if (measurementHeightM === 2) return speedMps
  return speedMps * 4.87 / Math.log(67.8 * measurementHeightM - 5.42)
}
