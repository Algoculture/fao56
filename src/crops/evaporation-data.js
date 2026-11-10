const TABLE_7_5_SOURCE = Object.freeze({
  edition: 'FAO-56 Rev.1',
  year: 2025,
  table: '7.5',
  license: 'CC BY 4.0',
})

const TABLE_7_6_SOURCE = Object.freeze({
  edition: 'FAO-56 Rev.1',
  year: 2025,
  table: '7.6',
  license: 'CC BY 4.0',
})

function range(min, max) {
  return Object.freeze([min, max])
}

function evaporationProfile(fieldCapacity, wiltingPoint, availableWater, rewMm, tewMm) {
  return Object.freeze({
    fieldCapacity: range(...fieldCapacity),
    wiltingPoint: range(...wiltingPoint),
    availableWater: range(...availableWater),
    rewMm: range(...rewMm),
    tewMm: range(...tewMm),
    source: TABLE_7_5_SOURCE,
  })
}

/** Published ranges from FAO-56 Rev.1 Table 7.5; no midpoint is implied. */
export const SOIL_EVAPORATION_PARAMETERS = Object.freeze({
  sand: evaporationProfile([0.07, 0.17], [0.02, 0.07], [0.05, 0.11], [2, 7], [6, 12]),
  'loamy-sand': evaporationProfile([0.11, 0.19], [0.03, 0.10], [0.06, 0.12], [4, 8], [9, 14]),
  'sandy-loam': evaporationProfile([0.18, 0.28], [0.06, 0.16], [0.11, 0.15], [6, 10], [15, 20]),
  loam: evaporationProfile([0.20, 0.30], [0.07, 0.17], [0.13, 0.18], [8, 10], [16, 22]),
  'silt-loam': evaporationProfile([0.22, 0.36], [0.09, 0.21], [0.13, 0.19], [8, 11], [18, 25]),
  silt: evaporationProfile([0.28, 0.36], [0.12, 0.22], [0.16, 0.20], [8, 11], [22, 26]),
  'silty-clay-loam': evaporationProfile([0.30, 0.37], [0.17, 0.24], [0.13, 0.18], [8, 11], [22, 27]),
  'silty-clay': evaporationProfile([0.30, 0.42], [0.17, 0.29], [0.13, 0.19], [8, 12], [22, 28]),
  clay: evaporationProfile([0.32, 0.40], [0.20, 0.24], [0.12, 0.20], [8, 12], [22, 29]),
})

function wettedFraction(min, max = min) {
  return Object.freeze({ range: range(min, max), source: TABLE_7_6_SOURCE })
}

/** Published wetted-fraction values from FAO-56 Rev.1 Table 7.6. */
export const WETTED_FRACTION_RANGES = Object.freeze({
  precipitation: wettedFraction(1),
  'sprinkler-field-crops': wettedFraction(1),
  'sprinkler-orchards': wettedFraction(0.7, 1),
  basin: wettedFraction(1),
  border: wettedFraction(1),
  'furrow-every-narrow-bed': wettedFraction(0.6, 1),
  'furrow-every-wide-bed': wettedFraction(0.4, 0.6),
  'furrow-alternated': wettedFraction(0.3, 0.5),
  'micro-spray-orchards': wettedFraction(0.5, 0.8),
  drip: wettedFraction(0.3, 0.4),
})
