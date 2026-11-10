export interface DailyWeatherInput {
  tMinC: number
  tMaxC: number
  tMeanC?: number
  elevationM?: number
  latitudeDegrees?: number
  date?: string | Date | number
  windSpeedMps?: number
  windMeasurementHeightM?: number
  pressureKPa?: number
  netRadiationMJ?: number
  solarRadiationMJ?: number
  extraterrestrialRadiationMJ?: number
  sunshineHours?: number
  actualVapourPressureKPa?: number
  dewPointC?: number
  rhMinPercent?: number
  rhMaxPercent?: number
  rhMeanPercent?: number
  estimateHumidityFromTMin?: boolean
  coastal?: boolean
  soilHeatFluxMJ?: number
  albedo?: number
}

export interface StageThresholds {
  initial: number
  development: number
  midSeason: number
  lateSeason: number
}

export interface CropProfile {
  id: string
  label: string
  kc: { initial: number; midSeason: number; end: number; heightM: number }
  calendarStages: StageThresholds | null
  thermal: { tBaseC: number; tUpperC: number; stages: StageThresholds | null } | null
  sources: readonly object[]
}

export function atmosphericPressure(elevationM: number): number
export function psychrometricConstant(pressureKPa: number): number
export function saturationVapourPressure(temperatureC: number): number
export function meanSaturationVapourPressure(tMinC: number, tMaxC: number): number
export function saturationVapourPressureSlope(temperatureC: number): number
export function actualVapourPressure(input: object): { value: number; method: string }
export function windSpeedAt2m(speedMps: number, measurementHeightM?: number): number
export function dayOfYear(value: string | Date | number): number
export function inverseRelativeEarthSunDistance(day: string | Date | number): number
export function solarDeclination(day: string | Date | number): number
export function sunsetHourAngle(latitudeDegrees: number, day: string | Date | number): number
export function daylightHours(latitudeDegrees: number, day: string | Date | number): number
export function extraterrestrialRadiation(latitudeDegrees: number, day: string | Date | number): number
export function clearSkyRadiation(extraterrestrialRadiationMJ: number, elevationM?: number): number
export function solarRadiationFromSunshine(ra: number, sunshine: number, daylight: number, aS?: number, bS?: number): number
export function solarRadiationFromTemperature(ra: number, tMinC: number, tMaxC: number, coefficient?: number): number
export function netShortwaveRadiation(solarRadiationMJ: number, albedo?: number): number
export function netLongwaveRadiation(input: object): number
export function netRadiation(shortwaveMJ: number, longwaveMJ: number): number
export function hargreavesSamani(input: DailyWeatherInput): number
export function penmanMonteithDaily(input: object): number
export function calculatePenmanMonteithDaily(input: DailyWeatherInput): object & { eto: number; method: string }
export function calculateDailyEto(input: DailyWeatherInput, options?: { method?: 'auto' | 'penman-monteith' | 'hargreaves-samani' }): object & { eto: number; method: string }
export function growingDegreeDays(input: { tMinC: number; tMaxC: number; tBaseC: number; tUpperC?: number }): number
export function accumulateGrowingDegreeDays(values: Array<number | { tMinC: number; tMaxC: number }>, thermal?: { tBaseC: number; tUpperC: number }): number
export const GROWTH_STAGES: readonly string[]
export function validateStageThresholds(thresholds: StageThresholds): StageThresholds
export function growthStage(cumulative: number, thresholds: StageThresholds): string
export function growthStageProgress(cumulative: number, thresholds: StageThresholds): object
export const CROP_PROFILES: Readonly<Record<string, CropProfile>>
export function getCropProfile(id: string): CropProfile
export function cropCoefficient(crop: string | CropProfile, progress: { cumulativeGdd?: number; day?: number }): { kc: number; stage: string; basis: string }
export function adjustCropCoefficient(kc: number, climate: object): number
export function adjustedCropCoefficient(crop: string | CropProfile, progress: object, climate: object): object & { kc: number }
export function cropEvapotranspiration(etoMm: number, kc: number): number
export function calculateCropEvapotranspiration(input: object): object & { etc: number; kc: number }
export function actualCropEvapotranspiration(etoMm: number, kc: number, ks: number): number
export function actualDualCropEvapotranspiration(etoMm: number, kcb: number, ke: number, ks: number): number
export function calculateActualCropEvapotranspiration(input: {
  etoMm: number
  crop: string | CropProfile
  cumulativeGdd?: number
  day?: number
  climate?: object
  depletionMm: number
  tawMm: number
  rawMm: number
}): {
  etcStandardMm: number
  etcActualMm: number
  kcStandard: number
  kcActual: number
  ks: number
  stage: string
  basis: string
  adjusted?: boolean
}
export const SOIL_PROPERTIES: Readonly<Record<string, object>>
export function getSoilProperties(id: string): object
export function totalAvailableWater(input: { fieldCapacityMmPerM: number; wiltingPointMmPerM: number; rootDepthM: number }): number
export function totalAvailableWaterForSoil(soilId: string, rootDepthM: number): number
export function adjustDepletionFraction(baseFraction: number, etcMm: number): number
export function readilyAvailableWater(tawMm: number, depletionFraction: number): number
export function waterStressCoefficient(depletionMm: number, tawMm: number, rawMm: number): number
export function updateRootZoneWaterBalance(input: object): object
export function netCropWaterRequirement(etcMm: number, effectiveRainMm?: number): number
export function irrigationRequirement(input: object): object
