import { clamp, finiteNumber, nonNegative, numberInRange } from '../shared.js'

const SOLAR_CONSTANT = 0.0820 // MJ m-2 min-1
const STEFAN_BOLTZMANN = 4.903e-9 // MJ K-4 m-2 day-1

/** Convert an ISO date, Date, or day number to day-of-year [1..366]. */
export function dayOfYear(value) {
  if (Number.isInteger(value)) {
    if (value < 1 || value > 366) throw new RangeError('dayOfYear must be between 1 and 366')
    return value
  }
  const date = value instanceof Date ? new Date(value.getTime()) : new Date(`${value}T12:00:00Z`)
  if (Number.isNaN(date.getTime())) throw new TypeError('date must be a valid Date or YYYY-MM-DD string')
  const year = date.getUTCFullYear()
  return Math.floor((Date.UTC(year, date.getUTCMonth(), date.getUTCDate()) - Date.UTC(year, 0, 1)) / 86400000) + 1
}

/** FAO-56 Eq. 23. */
export function inverseRelativeEarthSunDistance(day) {
  return 1 + 0.033 * Math.cos((2 * Math.PI / 365) * dayOfYear(day))
}

/** FAO-56 Eq. 24. Solar declination [rad]. */
export function solarDeclination(day) {
  return 0.409 * Math.sin((2 * Math.PI / 365) * dayOfYear(day) - 1.39)
}

/** FAO-56 Eq. 25. Sunset hour angle [rad]. */
export function sunsetHourAngle(latitudeDegrees, day) {
  numberInRange(latitudeDegrees, 'latitudeDegrees', -90, 90)
  const latitude = latitudeDegrees * Math.PI / 180
  const declination = solarDeclination(day)
  return Math.acos(clamp(-Math.tan(latitude) * Math.tan(declination), -1, 1))
}

/** FAO-56 Eq. 34. Maximum daylight duration [hours]. */
export function daylightHours(latitudeDegrees, day) {
  return 24 / Math.PI * sunsetHourAngle(latitudeDegrees, day)
}

/** FAO-56 Eq. 21. Daily extraterrestrial radiation Ra [MJ/m²/day]. */
export function extraterrestrialRadiation(latitudeDegrees, day) {
  numberInRange(latitudeDegrees, 'latitudeDegrees', -90, 90)
  const j = dayOfYear(day)
  const latitude = latitudeDegrees * Math.PI / 180
  const declination = solarDeclination(j)
  const omega = sunsetHourAngle(latitudeDegrees, j)
  const dr = inverseRelativeEarthSunDistance(j)
  return 24 * 60 / Math.PI * SOLAR_CONSTANT * dr * (
    omega * Math.sin(latitude) * Math.sin(declination)
    + Math.cos(latitude) * Math.cos(declination) * Math.sin(omega)
  )
}

/** FAO-56 Eq. 37. Clear-sky radiation Rso [MJ/m²/day]. */
export function clearSkyRadiation(extraterrestrialRadiationMJ, elevationM = 0) {
  nonNegative(extraterrestrialRadiationMJ, 'extraterrestrialRadiationMJ')
  finiteNumber(elevationM, 'elevationM')
  return (0.75 + 2e-5 * elevationM) * extraterrestrialRadiationMJ
}

/** FAO-56 Eq. 35. Angström estimate of solar radiation Rs [MJ/m²/day]. */
export function solarRadiationFromSunshine(
  extraterrestrialRadiationMJ,
  sunshineHours,
  maximumDaylightHours,
  aS = 0.25,
  bS = 0.5,
) {
  nonNegative(extraterrestrialRadiationMJ, 'extraterrestrialRadiationMJ')
  nonNegative(sunshineHours, 'sunshineHours')
  finiteNumber(maximumDaylightHours, 'maximumDaylightHours')
  if (maximumDaylightHours <= 0) throw new RangeError('maximumDaylightHours must be positive')
  if (sunshineHours > maximumDaylightHours) throw new RangeError('sunshineHours cannot exceed maximumDaylightHours')
  finiteNumber(aS, 'aS')
  finiteNumber(bS, 'bS')
  return (aS + bS * sunshineHours / maximumDaylightHours) * extraterrestrialRadiationMJ
}

/** FAO-56 Eq. 50. Temperature-range estimate of solar radiation [MJ/m²/day]. */
export function solarRadiationFromTemperature(
  extraterrestrialRadiationMJ,
  tMinC,
  tMaxC,
  adjustmentCoefficient = 0.16,
) {
  nonNegative(extraterrestrialRadiationMJ, 'extraterrestrialRadiationMJ')
  finiteNumber(tMinC, 'tMinC')
  finiteNumber(tMaxC, 'tMaxC')
  nonNegative(adjustmentCoefficient, 'adjustmentCoefficient')
  if (tMaxC < tMinC) throw new RangeError('tMaxC must be greater than or equal to tMinC')
  return adjustmentCoefficient * Math.sqrt(tMaxC - tMinC) * extraterrestrialRadiationMJ
}

/** FAO-56 Eq. 38. Net shortwave radiation Rns [MJ/m²/day]. */
export function netShortwaveRadiation(solarRadiationMJ, albedo = 0.23) {
  nonNegative(solarRadiationMJ, 'solarRadiationMJ')
  numberInRange(albedo, 'albedo', 0, 1)
  return (1 - albedo) * solarRadiationMJ
}

/** FAO-56 Eq. 39. Net outgoing longwave radiation Rnl [MJ/m²/day]. */
export function netLongwaveRadiation({
  tMinC,
  tMaxC,
  actualVapourPressureKPa,
  solarRadiationMJ,
  clearSkyRadiationMJ,
}) {
  finiteNumber(tMinC, 'tMinC')
  finiteNumber(tMaxC, 'tMaxC')
  nonNegative(actualVapourPressureKPa, 'actualVapourPressureKPa')
  nonNegative(solarRadiationMJ, 'solarRadiationMJ')
  nonNegative(clearSkyRadiationMJ, 'clearSkyRadiationMJ')
  if (tMaxC < tMinC) throw new RangeError('tMaxC must be greater than or equal to tMinC')
  if (clearSkyRadiationMJ === 0) return 0

  const tMaxK = tMaxC + 273.16
  const tMinK = tMinC + 273.16
  const cloudiness = 1.35 * Math.min(1, solarRadiationMJ / clearSkyRadiationMJ) - 0.35
  const humidity = 0.34 - 0.14 * Math.sqrt(actualVapourPressureKPa)
  return Math.max(0, STEFAN_BOLTZMANN * (Math.pow(tMaxK, 4) + Math.pow(tMinK, 4)) / 2 * humidity * cloudiness)
}

/** FAO-56 Eq. 40. Net radiation Rn [MJ/m²/day]. */
export function netRadiation(shortwaveMJ, longwaveMJ) {
  nonNegative(shortwaveMJ, 'shortwaveMJ')
  nonNegative(longwaveMJ, 'longwaveMJ')
  return shortwaveMJ - longwaveMJ
}
