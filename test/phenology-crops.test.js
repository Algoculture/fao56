import test from 'node:test'
import assert from 'node:assert/strict'
import {
  CROP_PROFILES,
  accumulateGrowingDegreeDays,
  adjustCropCoefficient,
  calculateCropEvapotranspiration,
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
