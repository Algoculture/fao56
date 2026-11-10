import test from 'node:test'
import assert from 'node:assert/strict'
import {
  atmosphericPressure,
  calculateDailyEto,
  calculatePenmanMonteithDaily,
  extraterrestrialRadiation,
  hargreavesSamani,
  psychrometricConstant,
  saturationVapourPressure,
  saturationVapourPressureSlope,
  windSpeedAt2m,
} from '../src/index.js'

const closeTo = (actual, expected, tolerance) => {
  assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} is not within ${tolerance} of ${expected}`)
}

test('FAO-56 meteorological equations reproduce handbook values', () => {
  closeTo(atmosphericPressure(1800), 81.8, 0.1)
  closeTo(psychrometricConstant(atmosphericPressure(1800)), 0.054, 0.001)
  closeTo(saturationVapourPressure(24.5), 3.075, 0.001)
  closeTo(saturationVapourPressureSlope(20), 0.145, 0.001)
  closeTo(windSpeedAt2m(3.2, 10), 2.4, 0.02)
})

test('extraterrestrial radiation and Hargreaves reproduce the worked case', () => {
  const ra = extraterrestrialRadiation(-20, 246)
  closeTo(ra, 32.2, 0.05)
  closeTo(hargreavesSamani({
    tMinC: 18,
    tMaxC: 30,
    tMeanC: 24,
    extraterrestrialRadiationMJ: ra,
  }), 4.38, 0.02)
})

test('FAO-56 Example 18 daily Penman-Monteith gives about 3.88 mm/day', () => {
  const result = calculatePenmanMonteithDaily({
    tMinC: 12.3,
    tMaxC: 21.5,
    elevationM: 100,
    latitudeDegrees: 50.8,
    date: 187,
    windSpeedMps: 10 / 3.6,
    windMeasurementHeightM: 10,
    rhMaxPercent: 84,
    rhMinPercent: 63,
    sunshineHours: 9.25,
  })
  closeTo(result.eto, 3.877, 0.02)
  closeTo(result.diagnostics.netRadiationMJ, 13.27, 0.08)
  assert.equal(result.radiationMethod, 'sunshine-estimate')
  assert.equal(result.humidityMethod, 'rh-min-max')
})

test('FAO-56 Example 20 estimates missing humidity and radiation', () => {
  const result = calculatePenmanMonteithDaily({
    tMinC: 14.8,
    tMaxC: 26.6,
    elevationM: 200,
    latitudeDegrees: 45.72,
    date: 196,
    windSpeedMps: 2,
    estimateHumidityFromTMin: true,
  })
  closeTo(result.eto, 4.55, 0.03)
  assert.equal(result.radiationMethod, 'temperature-estimate')
  assert.equal(result.humidityMethod, 'tmin-estimate')
})

test('automatic method selection is explicit in the result', () => {
  const fallback = calculateDailyEto({
    tMinC: 18,
    tMaxC: 30,
    latitudeDegrees: -20,
    date: 246,
  })
  assert.equal(fallback.method, 'hargreaves-samani')

  const penman = calculateDailyEto({
    tMinC: 18,
    tMaxC: 30,
    latitudeDegrees: -20,
    date: 246,
    elevationM: 20,
    windSpeedMps: 2,
    rhMeanPercent: 60,
  })
  assert.equal(penman.method, 'fao56-penman-monteith')
})

test('invalid meteorological inputs fail rather than producing NaN', () => {
  assert.throws(() => saturationVapourPressure(Number.NaN), TypeError)
  assert.throws(() => hargreavesSamani({ tMinC: 25, tMaxC: 20, extraterrestrialRadiationMJ: 30 }), RangeError)
})
