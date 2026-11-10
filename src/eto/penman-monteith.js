import { finiteNumber } from '../shared.js'
import {
  actualVapourPressure,
  atmosphericPressure,
  meanSaturationVapourPressure,
  psychrometricConstant,
  saturationVapourPressureSlope,
  windSpeedAt2m,
} from './meteorology.js'
import {
  clearSkyRadiation,
  daylightHours,
  extraterrestrialRadiation,
  netLongwaveRadiation,
  netRadiation,
  netShortwaveRadiation,
  solarRadiationFromSunshine,
  solarRadiationFromTemperature,
} from './radiation.js'

/**
 * FAO-56 Eq. 6. Daily grass-reference evapotranspiration [mm/day].
 * All radiation inputs are MJ/m²/day and wind speed is m/s at 2 m.
 */
export function penmanMonteithDaily({
  netRadiationMJ,
  soilHeatFluxMJ = 0,
  tMeanC,
  windSpeed2mMps,
  saturationVapourPressureKPa,
  actualVapourPressureKPa,
  vapourPressureSlopeKPaC,
  psychrometricConstantKPaC,
}) {
  for (const [name, value] of Object.entries({
    netRadiationMJ,
    soilHeatFluxMJ,
    tMeanC,
    windSpeed2mMps,
    saturationVapourPressureKPa,
    actualVapourPressureKPa,
    vapourPressureSlopeKPaC,
    psychrometricConstantKPaC,
  })) finiteNumber(value, name)

  if (windSpeed2mMps < 0) throw new RangeError('windSpeed2mMps must be non-negative')
  if (actualVapourPressureKPa < 0 || saturationVapourPressureKPa < 0) {
    throw new RangeError('vapour pressures must be non-negative')
  }

  const radiationTerm = 0.408 * vapourPressureSlopeKPaC * (netRadiationMJ - soilHeatFluxMJ)
  const aerodynamicTerm = psychrometricConstantKPaC * 900 / (tMeanC + 273)
    * windSpeed2mMps * Math.max(0, saturationVapourPressureKPa - actualVapourPressureKPa)
  const denominator = vapourPressureSlopeKPaC
    + psychrometricConstantKPaC * (1 + 0.34 * windSpeed2mMps)
  return Math.max(0, (radiationTerm + aerodynamicTerm) / denominator)
}

/**
 * Compute the complete daily FAO-56 Penman–Monteith chain from weather data.
 * Returns ET0 plus intermediate values and estimation methods for auditability.
 */
export function calculatePenmanMonteithDaily(input) {
  const {
    tMinC,
    tMaxC,
    tMeanC = (tMinC + tMaxC) / 2,
    elevationM = 0,
    latitudeDegrees,
    date,
    windSpeedMps,
    windMeasurementHeightM = 2,
    pressureKPa,
    netRadiationMJ: measuredNetRadiation,
    solarRadiationMJ: measuredSolarRadiation,
    sunshineHours,
    coastal = false,
    soilHeatFluxMJ = 0,
    albedo = 0.23,
  } = input

  finiteNumber(tMinC, 'tMinC')
  finiteNumber(tMaxC, 'tMaxC')
  finiteNumber(tMeanC, 'tMeanC')
  finiteNumber(windSpeedMps, 'windSpeedMps')
  if (tMaxC < tMinC) throw new RangeError('tMaxC must be greater than or equal to tMinC')

  const pressure = pressureKPa ?? atmosphericPressure(elevationM)
  const gamma = psychrometricConstant(pressure)
  const delta = saturationVapourPressureSlope(tMeanC)
  const es = meanSaturationVapourPressure(tMinC, tMaxC)
  const eaResult = actualVapourPressure({
    valueKPa: input.actualVapourPressureKPa,
    dewPointC: input.dewPointC,
    tMinC,
    tMaxC,
    rhMinPercent: input.rhMinPercent,
    rhMaxPercent: input.rhMaxPercent,
    rhMeanPercent: input.rhMeanPercent,
    estimateFromTMin: input.estimateHumidityFromTMin ?? false,
  })
  const u2 = windSpeedAt2m(windSpeedMps, windMeasurementHeightM)

  let rn = measuredNetRadiation
  let ra = null
  let rs = measuredSolarRadiation ?? null
  let rso = null
  let rns = null
  let rnl = null
  let radiationMethod = measuredNetRadiation != null ? 'measured-net' : 'measured-solar'

  if (rn == null) {
    ra = extraterrestrialRadiation(latitudeDegrees, date)
    rso = clearSkyRadiation(ra, elevationM)
    if (rs == null && sunshineHours != null) {
      rs = solarRadiationFromSunshine(ra, sunshineHours, daylightHours(latitudeDegrees, date))
      radiationMethod = 'sunshine-estimate'
    } else if (rs == null) {
      rs = solarRadiationFromTemperature(ra, tMinC, tMaxC, coastal ? 0.19 : 0.16)
      radiationMethod = 'temperature-estimate'
    }
    rns = netShortwaveRadiation(rs, albedo)
    rnl = netLongwaveRadiation({
      tMinC,
      tMaxC,
      actualVapourPressureKPa: eaResult.value,
      solarRadiationMJ: rs,
      clearSkyRadiationMJ: rso,
    })
    rn = netRadiation(rns, rnl)
  }

  const eto = penmanMonteithDaily({
    netRadiationMJ: rn,
    soilHeatFluxMJ,
    tMeanC,
    windSpeed2mMps: u2,
    saturationVapourPressureKPa: es,
    actualVapourPressureKPa: eaResult.value,
    vapourPressureSlopeKPaC: delta,
    psychrometricConstantKPaC: gamma,
  })

  return {
    eto,
    method: 'fao56-penman-monteith',
    radiationMethod,
    humidityMethod: eaResult.method,
    diagnostics: {
      pressureKPa: pressure,
      psychrometricConstantKPaC: gamma,
      vapourPressureSlopeKPaC: delta,
      saturationVapourPressureKPa: es,
      actualVapourPressureKPa: eaResult.value,
      vapourPressureDeficitKPa: Math.max(0, es - eaResult.value),
      windSpeed2mMps: u2,
      extraterrestrialRadiationMJ: ra,
      clearSkyRadiationMJ: rso,
      solarRadiationMJ: rs,
      netShortwaveRadiationMJ: rns,
      netLongwaveRadiationMJ: rnl,
      netRadiationMJ: rn,
    },
  }
}
