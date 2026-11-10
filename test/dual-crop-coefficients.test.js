import test from 'node:test'
import assert from 'node:assert/strict'
import {
  adjustedBasalCropCoefficient,
  basalCropCoefficient,
  calculateDualCropEvapotranspiration,
  exposedWettedFraction,
  maximumCropCoefficient,
  soilEvaporationCoefficient,
  totalEvaporableWater,
  vegetationCoverFraction,
} from '../src/index.js'

const rounded = (value, digits = 2) => Number(value.toFixed(digits))

test('FAO56 Rev.1 Examples 7.1-7.2 stage and climate-adjust basal Kcb', () => {
  const bean = {
    kcb: { initial: 0.15, midSeason: 1, end: 0.3, heightM: 0.5 },
    calendarStages: { initial: 25, development: 25, midSeason: 30, lateSeason: 20 },
    thermal: null,
  }
  assert.equal(basalCropCoefficient(bean, { day: 12 }).kcb, 0.15)
  assert.equal(rounded(basalCropCoefficient(bean, { day: 90 }).kcb), 0.65)
  const climate = {
    windSpeed2mMps: 2.2,
    minRelativeHumidityPercent: 30,
  }
  assert.equal(rounded(adjustedBasalCropCoefficient(bean, { day: 37 }, climate).kcb), 0.58)
  const adjusted = adjustedBasalCropCoefficient(bean, { day: 65 }, climate)
  assert.equal(rounded(adjusted.kcb), 1.04)
})

test('FAO56 Rev.1 Examples 7.4-7.6 reproduce sprinkler, furrow, and drip limits', () => {
  const kcMax = maximumCropCoefficient({
    kcb: 0.9,
    windSpeed2mMps: 3,
    minRelativeHumidityPercent: 20,
    cropHeightM: 1,
  })
  const fc = vegetationCoverFraction({ kcb: 0.9, kcMin: 0.15, kcMax, cropHeightM: 1 })
  assert.equal(rounded(kcMax, 3), 1.301)
  assert.equal(rounded(fc), 0.53)

  const sprinklerFew = exposedWettedFraction(fc, 1)
  const furrowFew = exposedWettedFraction(fc, 0.3)
  const dripFew = exposedWettedFraction(fc, 0.3, { shadedDrip: true })
  assert.equal(rounded(soilEvaporationCoefficient({ kr: 1, kcMax, kcb: 0.9, few: sprinklerFew })), 0.4)
  assert.equal(rounded(soilEvaporationCoefficient({ kr: 1, kcMax, kcb: 0.9, few: furrowFew })), 0.39)
  assert.equal(rounded(dripFew), 0.19)
  assert.equal(rounded(soilEvaporationCoefficient({ kr: 1, kcMax, kcb: 0.9, few: dripFew })), 0.25)
})

test('FAO56 Rev.1 Example 7.3 original method reproduces bare-soil drying', () => {
  const expectedKe = [1.05, 1.05, 1.01, 0.57, 0.33, 0.19, 0.11, 0.06, 0.03, 0.02]
  const expectedEnd = [4.73, 9.45, 13.98, 16.57, 18.04, 18.88, 19.36, 19.64, 19.79, 19.88]
  let depletionMm = 0

  for (let day = 0; day < 10; day += 1) {
    const result = calculateDualCropEvapotranspiration({
      method: 'original',
      etoMm: 4.5,
      kcb: 0.15,
      kcMax: 1.2,
      fractionCovered: 0,
      fractionWetted: 1,
      previousDepletionMm: depletionMm,
      tewMm: 20,
      rewMm: 9,
    })
    assert.ok(Math.abs(result.ke - expectedKe[day]) < 0.006)
    depletionMm = result.evaporationState.depletionMm
    assert.ok(Math.abs(depletionMm - expectedEnd[day]) < 0.006)
  }
})

test('FAO56 Rev.1 Examples 7.7 and 7.8 reproduce skin-layer drying and rewetting', () => {
  const expectedDryKe = [1.05, 1.05, 1.01, 0.57, 0.33, 0.19, 0.11, 0.06, 0.03, 0.02]
  const expectedRewetKe = [1.05, 1.05, 1.01, 0.57, 0.33, 0.19, 1.05, 0.96, 0.20, 0.11]
  let dry = { depletionMm: 0, readilyEvaporableDepletionMm: 0 }
  let rewet = { ...dry }

  for (let day = 0; day < 10; day += 1) {
    const common = {
      method: 'skin-layer',
      etoMm: 4.5,
      kcb: 0.15,
      kcMax: 1.2,
      fractionCovered: 0,
      fractionWetted: 1,
      tewMm: 20,
      rewMm: 9,
    }
    const dryResult = calculateDualCropEvapotranspiration({
      ...common,
      previousDepletionMm: dry.depletionMm,
      previousReadilyEvaporableDepletionMm: dry.readilyEvaporableDepletionMm,
    })
    assert.ok(Math.abs(dryResult.ke - expectedDryKe[day]) < 0.006)
    dry = dryResult.evaporationState

    const rewetResult = calculateDualCropEvapotranspiration({
      ...common,
      previousDepletionMm: rewet.depletionMm,
      previousReadilyEvaporableDepletionMm: rewet.readilyEvaporableDepletionMm,
      irrigationMm: day === 5 ? 10 : 0,
      wettingTiming: 'late',
    })
    assert.ok(Math.abs(rewetResult.ke - expectedRewetKe[day]) < 0.006)
    rewet = rewetResult.evaporationState
  }
  assert.equal(rounded(rewet.depletionMm), 19.32)
})

test('FAO56 Rev.1 Example 7.9 conserves the ten-day total with both methods', () => {
  const eto = [4.5, 5, 3.9, 4.2, 4.8, 2.7, 5.8, 5.1, 4.7, 5.2]
  const kcbValues = [0.30, 0.31, 0.32, 0.33, 0.34, 0.36, 0.37, 0.38, 0.39, 0.40]
  const exposedOriginal = [0.92, 0.91, 0.91, 0.90, 0.89, 0.89, 0.88, 0.87, 0.87, 0.86]

  function simulate(method) {
    let depletionMm = 18
    let readilyEvaporableDepletionMm = 8
    let total = 0
    const daily = []
    for (let day = 0; day < 10; day += 1) {
      const kcb = kcbValues[day]
      const result = calculateDualCropEvapotranspiration({
        method,
        etoMm: eto[day],
        kcb,
        windSpeed2mMps: 1.6,
        minRelativeHumidityPercent: 35,
        cropHeightM: 0.3,
        kcMin: 0.15,
        fractionCovered: method === 'original' ? 1 - exposedOriginal[day] : undefined,
        fractionWetted: day < 5 ? 0.8 : 1,
        previousDepletionMm: depletionMm,
        previousReadilyEvaporableDepletionMm:
          method === 'skin-layer' ? readilyEvaporableDepletionMm : undefined,
        tewMm: 18,
        rewMm: 8,
        irrigationMm: day === 0 ? 40 : 0,
        precipitationMm: day === 5 ? 6 : 0,
        wettingTiming: 'early',
      })
      total += result.etcStandardMm
      daily.push(rounded(result.etcStandardMm, 1))
      depletionMm = result.evaporationState.depletionMm
      if (method === 'skin-layer') {
        readilyEvaporableDepletionMm = result.evaporationState.readilyEvaporableDepletionMm
      }
    }
    return { total, daily }
  }

  const original = simulate('original')
  const skin = simulate('skin-layer')
  assert.deepEqual(original.daily, [5.5, 6.1, 3.8, 2.9, 2.6, 2.6, 4.7, 2.9, 2.3, 2.4])
  assert.deepEqual(skin.daily, [5.5, 6.1, 3.8, 2.9, 2.6, 3.3, 5.6, 2, 1.9, 2.1])
  assert.ok(Math.abs(original.total - skin.total) < 0.02)
  assert.ok(Math.abs(original.total - 35.7) < 0.2)

  // The worked table applies the day-6 rain to the prior skin state (Eq. 7.13
  // with i+1 wetting), producing the published day-7 start values.
  const publishedDay7 = calculateDualCropEvapotranspiration({
    method: 'skin-layer',
    etoMm: 5.8,
    kcb: 0.37,
    windSpeed2mMps: 1.6,
    minRelativeHumidityPercent: 35,
    cropHeightM: 0.3,
    kcMin: 0.15,
    fractionWetted: 1,
    previousDepletionMm: 13.7,
    previousReadilyEvaporableDepletionMm: 5.9,
    tewMm: 18,
    rewMm: 8,
  })
  assert.equal(rounded(publishedDay7.etcStandardMm, 1), 5.1)
})

test('TEW follows Equation 7.5 and dual method selection is explicit', () => {
  assert.equal(totalEvaporableWater({
    fieldCapacity: 0.23,
    wiltingPoint: 0.1,
    evaporationDepthM: 0.1,
  }), 18)
  assert.throws(() => calculateDualCropEvapotranspiration({}), RangeError)
})
