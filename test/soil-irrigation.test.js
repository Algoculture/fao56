import test from 'node:test'
import assert from 'node:assert/strict'
import {
  adjustDepletionFraction,
  irrigationRequirement,
  netCropWaterRequirement,
  readilyAvailableWater,
  totalAvailableWaterForSoil,
  updateRootZoneWaterBalance,
  waterStressCoefficient,
} from '../src/index.js'

test('TAW and RAW retain FAO depletion semantics', () => {
  const taw = totalAvailableWaterForSoil('loam', 0.7)
  assert.ok(Math.abs(taw - 80.5) < 1e-12)
  assert.equal(readilyAvailableWater(100, 0.4), 40)
  assert.equal(adjustDepletionFraction(0.5, 5), 0.5)
  assert.equal(adjustDepletionFraction(0.5, 7), 0.42)
})

test('water stress begins only after depletion exceeds RAW', () => {
  assert.equal(waterStressCoefficient(40, 100, 40), 1)
  assert.equal(waterStressCoefficient(70, 100, 40), 0.5)
  assert.equal(waterStressCoefficient(100, 100, 40), 0)
})

test('daily water balance handles rain, efficient irrigation, and drainage', () => {
  const day = updateRootZoneWaterBalance({
    previousDepletionMm: 30,
    tawMm: 100,
    precipitationMm: 8,
    runoffMm: 1,
    irrigationMm: 10,
    irrigationEfficiency: 0.8,
    cropEvapotranspirationMm: 5,
  })
  assert.equal(day.depletionMm, 20)
  assert.equal(day.effectivePrecipitationMm, 7)
  assert.equal(day.effectiveIrrigationMm, 8)

  const saturated = updateRootZoneWaterBalance({
    previousDepletionMm: 5,
    tawMm: 100,
    precipitationMm: 30,
    cropEvapotranspirationMm: 2,
  })
  assert.equal(saturated.depletionMm, 0)
  assert.equal(saturated.deepPercolationMm, 23)
})

test('irrigation triggers against depletion, not remaining soil water', () => {
  const wait = irrigationRequirement({ depletionMm: 39, rawMm: 40, tawMm: 100 })
  assert.equal(wait.triggered, false)

  const irrigate = irrigationRequirement({
    depletionMm: 55,
    rawMm: 40,
    tawMm: 100,
    targetDepletionMm: 10,
    applicationEfficiency: 0.75,
  })
  assert.equal(irrigate.triggered, true)
  assert.equal(irrigate.netIrrigationMm, 45)
  assert.equal(irrigate.grossIrrigationMm, 60)
  assert.equal(netCropWaterRequirement(5.5, 2), 3.5)
})

test('forecast effective rain can defer irrigation', () => {
  const result = irrigationRequirement({
    depletionMm: 45,
    rawMm: 40,
    tawMm: 100,
    forecastEffectiveRainMm: 10,
  })
  assert.equal(result.triggered, false)
  assert.equal(result.projectedDepletionMm, 35)
})
