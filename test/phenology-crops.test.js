import test from 'node:test'
import assert from 'node:assert/strict'
import {
  CROP_PROFILES,
  actualCropEvapotranspiration,
  actualDualCropEvapotranspiration,
  accumulateGrowingDegreeDays,
  adjustCropCoefficient,
  calculateCropEvapotranspiration,
  calculateActualCropEvapotranspiration,
  cropCoefficient,
  getCropProfile,
  growingDegreeDays,
  growthStage,
  growthStageProgress,
} from '../src/index.js'

test('FAO56rev GDD caps daily mean at the upper threshold', () => {
  assert.equal(growingDegreeDays({ tMinC: 16, tMaxC: 40, tBaseC: 10, tUpperC: 25 }), 15)
  assert.equal(growingDegreeDays({ tMinC: 2, tMaxC: 8, tBaseC: 10, tUpperC: 30 }), 0)
  assert.equal(accumulateGrowingDegreeDays([2, 3.5, 0, 4]), 9.5)
})

test('actual ET follows FAO56 Rev.1 Equations 8.1 and 8.2', () => {
  assert.equal(actualCropEvapotranspiration(5, 1.1, 0.5), 2.75)
  assert.equal(actualDualCropEvapotranspiration(5, 1, 0.1, 0.5), 3)
  assert.throws(() => actualCropEvapotranspiration(5, 1.1, 1.01), RangeError)
})

test('FAO56 Rev.1 Example 8.2 stress sequence is reproduced', () => {
  const expectedStart = [55, 60.5, 66, 71.4, 76.5, 81.2, 85.8, 90, 94, 97.8]
  const expectedKs = [1, 1, 0.98, 0.92, 0.87, 0.82, 0.77, 0.73, 0.69, 0.65]
  const expectedActual = [5.5, 5.5, 5.4, 5.1, 4.8, 4.5, 4.3, 4, 3.8, 3.6]
  let depletionMm = 55

  for (let day = 0; day < 10; day += 1) {
    assert.ok(Math.abs(depletionMm - expectedStart[day]) < 0.051)
    const ks = depletionMm <= 64 ? 1 : (160 - depletionMm) / (160 - 64)
    const actual = actualCropEvapotranspiration(5, 1.1, ks)
    assert.ok(Math.abs(ks - expectedKs[day]) < 0.006)
    assert.ok(Math.abs(actual - expectedActual[day]) < 0.051)
    depletionMm += actual
  }
})

test('staged actual ET reports standard and stressed coefficients', () => {
  const result = calculateActualCropEvapotranspiration({
    etoMm: 5,
    crop: 'tomato',
    cumulativeGdd: 100,
    depletionMm: 70,
    tawMm: 100,
    rawMm: 40,
  })
  assert.deepEqual(result, {
    etcStandardMm: 3,
    etcActualMm: 1.5,
    kcStandard: 0.6,
    kcActual: 0.3,
    ks: 0.5,
    stage: 'initial',
    basis: 'gdd',
  })
})

test('growth stages use cumulative stage lengths', () => {
  const stages = { initial: 100, development: 200, midSeason: 300, lateSeason: 100 }
  assert.equal(growthStage(99, stages), 'initial')
  assert.equal(growthStage(100, stages), 'development')
  assert.equal(growthStage(300, stages), 'mid-season')
  assert.equal(growthStage(600, stages), 'late-season')
  assert.equal(growthStage(700, stages), 'complete')
  assert.deepEqual(growthStageProgress(200, stages), {
    stage: 'development', stageStart: 100, stageEnd: 300, stageFraction: 0.5, total: 700,
  })
})

test('bundled Rev.1 profiles use corrected cardinal temperatures', () => {
  assert.equal(CROP_PROFILES.tomato.thermal.tBaseC, 7)
  assert.equal(CROP_PROFILES.tomato.thermal.tUpperC, 28)
  assert.equal(CROP_PROFILES.potato.thermal.tBaseC, 2)
  assert.equal(CROP_PROFILES.maize.thermal.tUpperC, 32)
  assert.equal(getCropProfile('carrot').thermal.stages.initial, 320)
})

test('Kc is interpolated over GDD development and late stages', () => {
  const atStart = cropCoefficient('tomato', { cumulativeGdd: 325 })
  const halfway = cropCoefficient('tomato', { cumulativeGdd: 325 + 330 })
  const lateHalfway = cropCoefficient('tomato', { cumulativeGdd: 325 + 660 + 880 + 100 })
  assert.equal(atStart.kc, 0.6)
  assert.equal(halfway.kc, 0.875)
  assert.ok(Math.abs(lateHalfway.kc - 0.975) < 1e-12)
})

test('calendar fallback is available only when requested', () => {
  assert.equal(cropCoefficient('eggplant', { day: 100 }).basis, 'calendar-day')
  assert.throws(() => cropCoefficient('eggplant', { cumulativeGdd: 100 }), TypeError)
})

test('Kc climate adjustment and ETc remain unrounded', () => {
  const adjusted = adjustCropCoefficient(1.15, {
    windSpeed2mMps: 4,
    minRelativeHumidityPercent: 30,
    cropHeightM: 1,
  })
  assert.ok(adjusted > 1.15)
  assert.equal(adjustCropCoefficient(0.35, {
    windSpeed2mMps: 4,
    minRelativeHumidityPercent: 30,
    cropHeightM: 1,
    endSeason: true,
  }), 0.35)

  const result = calculateCropEvapotranspiration({ etoMm: 5, crop: 'tomato', cumulativeGdd: 100 })
  assert.equal(result.etc, 3)
})
