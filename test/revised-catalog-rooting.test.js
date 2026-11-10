import test from 'node:test'
import assert from 'node:assert/strict'
import {
  BASAL_COEFFICIENT_GUIDANCE,
  CROP_PROFILES,
  REV1_CROP_CATALOG,
  REV1_DEPLETION_FRACTIONS,
  REV1_GDD_STAGES,
  REV1_THERMAL_THRESHOLDS,
  calculateDynamicRootZone,
  rootDepthFromBasalCoefficient,
  selectMaximumRootDepth,
} from '../src/index.js'

test('the complete revised crop tables retain every row and exact provenance', () => {
  const records = Object.values(REV1_CROP_CATALOG)
  assert.equal(records.length, 412)
  assert.deepEqual(
    Object.fromEntries(['vegetable', 'field', 'woody', 'grassland', 'wetland'].map(category => [
      category,
      records.filter(record => record.category === category).length,
    ])),
    { vegetable: 102, field: 69, woody: 181, grassland: 23, wetland: 37 },
  )
  assert.equal(records.filter(record => record.kcb != null).length, 345)
  assert.ok(Object.keys(REV1_CROP_CATALOG).every(id => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)))
  assert.ok(records.every(record => record.sources.every(source => source.license === 'CC BY 4.0')))

  assert.deepEqual(REV1_CROP_CATALOG.asparagus.maximumRootDepthM, [1.2, 1.8])
  assert.deepEqual(REV1_CROP_CATALOG['wheat-durum-winter-low-grain-moisture-at-harvest'].kc, {
    initial: 0.5,
    midSeason: 1.05,
    end: 0.25,
  })
  assert.deepEqual(REV1_CROP_CATALOG['olive-young'].maximumHeightM, [1.5, 2])
  assert.equal(REV1_CROP_CATALOG['olive-young'].maximumRootDepthM, null)
  assert.deepEqual(REV1_CROP_CATALOG['wine-grapes-very-low-diverse-trellis-and-trainings-2-000-3-300-pl-ha-1'].maximumGroundCover, {
    operator: '<',
    value: 0.15,
  })
  assert.equal(
    REV1_CROP_CATALOG['butter-bean-lima-bean'].label,
    'Butter bean, lima bean (Phaseolus lunatus)',
  )
  assert.equal(REV1_CROP_CATALOG['savanna-grasslands'].label, 'Savanna grasslands')
  assert.equal(
    REV1_CROP_CATALOG['big-sagebrush'].label,
    'Big sagebrush (Artemisia tridentata)',
  )
  assert.ok(records.every(record => !/^[a-d]\.\s/.test(record.label)))
})

test('Tables 6.10-6.12, 7.4, and 8.1-8.4 are complete and source-backed', () => {
  assert.equal(Object.keys(REV1_THERMAL_THRESHOLDS).length, 114)
  assert.equal(Object.keys(REV1_GDD_STAGES).length, 117)
  assert.equal(BASAL_COEFFICIENT_GUIDANCE.length, 9)
  assert.equal(Object.keys(REV1_DEPLETION_FRACTIONS).length, 192)

  assert.deepEqual(REV1_THERMAL_THRESHOLDS.tomato, {
    id: 'tomato',
    label: 'Tomato (Solanum lycopersicum)',
    tBaseC: 7,
    tUpperC: 28,
    source: REV1_THERMAL_THRESHOLDS.tomato.source,
  })
  assert.deepEqual(REV1_GDD_STAGES['tomato-industry'].stages, {
    initial: 280,
    development: 520,
    midSeason: 880,
    lateSeason: 220,
  })
  assert.equal(REV1_GDD_STAGES['tomato-industry'].totalGdd, 1900)
  assert.equal(REV1_GDD_STAGES['celery-roots-minimum-length'].stages.initial, 400)
  assert.equal(REV1_GDD_STAGES['celery-roots-maximum-length'].stages.initial, 130)

  const counts = Object.values(REV1_DEPLETION_FRACTIONS).reduce((result, record) => {
    result[record.source.table] = (result[record.source.table] ?? 0) + 1
    return result
  }, {})
  assert.deepEqual(counts, {
    '8.1': 85,
    '8.2': 42,
    '8.3': 51,
    '8.4': 14,
  })
  assert.deepEqual(REV1_DEPLETION_FRACTIONS['rice-flooded-paddies-anaerobic'].threshold, {
    fraction: 0.8,
    basis: 'saturation-water-content',
  })
})

test('legacy crop IDs preserve Kc while exposing revised metadata', () => {
  assert.deepEqual(CROP_PROFILES.tomato.kc, {
    initial: 0.6,
    midSeason: 1.15,
    end: 0.8,
    heightM: 0.6,
  })
  assert.deepEqual(CROP_PROFILES.tomato.kcb, {
    initial: 0.15,
    midSeason: 1.05,
    end: 0.9,
    heightM: 0.6,
  })
  assert.deepEqual(CROP_PROFILES.tomato.rootDepthMRange, [0.6, 1.2])
  assert.equal(CROP_PROFILES.tomato.depletionFraction, 0.4)
  assert.equal(CROP_PROFILES.tomato.maximumGroundCover, 0.9)
})

test('Annex 8 root depth grows with Kcb, reaches maximum by mid-season, and never decreases', () => {
  const common = {
    kcbInitial: 0.15,
    kcbMid: 1.05,
    initialRootDepthM: 0.2,
    maximumRootDepthM: 0.8,
  }
  assert.equal(rootDepthFromBasalCoefficient({ ...common, kcb: 0.15, stage: 'initial' }), 0.2)
  assert.equal(rootDepthFromBasalCoefficient({ ...common, kcb: 0.6, stage: 'development' }), 0.5)
  assert.equal(rootDepthFromBasalCoefficient({ ...common, kcb: 0.7, stage: 'mid-season' }), 0.8)
  assert.equal(rootDepthFromBasalCoefficient({
    ...common,
    kcb: 0.3,
    stage: 'development',
    previousRootDepthM: 0.65,
  }), 0.65)
})

test('dynamic root-zone water requires a site selection from the published range', () => {
  assert.equal(selectMaximumRootDepth('tomato', 0.8), 0.8)
  assert.throws(() => selectMaximumRootDepth('tomato', 0.5), RangeError)
  assert.throws(() => selectMaximumRootDepth('orchard', 1), RangeError)

  const zone = calculateDynamicRootZone({
    crop: 'tomato',
    kcb: 0.6,
    stage: 'development',
    initialRootDepthM: 0.2,
    maximumRootDepthM: 0.8,
    previousRootDepthM: 0.2,
    fieldCapacityMmPerM: 200,
    wiltingPointMmPerM: 100,
    depletionMm: 30,
  })
  assert.deepEqual(zone, {
    rootDepthM: 0.5,
    rootDepthIncreaseM: 0.3,
    maximumRootDepthM: 0.8,
    tawMm: 50,
    rawMm: 20,
    ks: 2 / 3,
    depletionFraction: 0.4,
  })
})
