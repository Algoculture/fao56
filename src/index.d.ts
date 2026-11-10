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
  kcb?: { initial: number; midSeason: number; end: number; heightM?: number }
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
export function basalCropCoefficient(crop: string | CropProfile, progress: { cumulativeGdd?: number; day?: number }): { kcb: number; stage: string; basis: string }
export function adjustedBasalCropCoefficient(crop: string | CropProfile, progress: object, climate: object): object & { kcb: number }
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
export const SOIL_EVAPORATION_PARAMETERS: Readonly<Record<string, {
  fieldCapacity: readonly [number, number]
  wiltingPoint: readonly [number, number]
  availableWater: readonly [number, number]
  rewMm: readonly [number, number]
  tewMm: readonly [number, number]
  source: object
}>>
export const WETTED_FRACTION_RANGES: Readonly<Record<string, {
  range: readonly [number, number]
  source: object
}>>
export function maximumCropCoefficient(input: object): number
export function totalEvaporableWater(input: {
  fieldCapacity: number
  wiltingPoint: number
  evaporationDepthM: number
}): number
export function evaporationReductionCoefficient(depletionMm: number, tewMm: number, rewMm: number): number
export function skinLayerStage1Fraction(input: { drewMm: number; rewMm: number; kcMax: number; etoMm: number }): number
export function skinLayerEvaporationReductionCoefficient(input: {
  depletionMm: number
  tewMm: number
  rewMm: number
  stage1Fraction: number
}): number
export function vegetationCoverFraction(input: { kcb: number; kcMin: number; kcMax: number; cropHeightM: number }): number
export function exposedWettedFraction(fractionCovered: number, fractionWetted: number, options?: { shadedDrip?: boolean }): number
export function soilEvaporationCoefficient(input: { kr: number; kcMax: number; kcb: number; ks?: number; few: number }): number
export function updateEvaporationLayerWaterBalance(input: object): {
  depletionMm: number
  deepPercolationMm: number
  wettingMm: number
  wettingTiming: 'early' | 'late'
}
export function calculateDualCropEvapotranspiration(input: object & {
  method: 'original' | 'skin-layer'
}): object & {
  method: 'original' | 'skin-layer'
  kcb: number
  ks: number
  kr: number
  ke: number
  kcMax: number
  kcStandard: number
  kcActual: number
  transpirationMm: number
  soilEvaporationMm: number
  etcStandardMm: number
  etcActualMm: number
  evaporationState: object
}
export function calculateStagedDualCropEvapotranspiration(input: object & {
  method: 'original' | 'skin-layer'
  crop: string | CropProfile
}): ReturnType<typeof calculateDualCropEvapotranspiration> & {
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
