const KC_SOURCE = Object.freeze({ edition: 'FAO-56', year: 1998, tables: [11, 12] })
const GDD_SOURCE = Object.freeze({
  edition: 'FAO-56 Rev.1 companion guidance',
  year: 2025,
  authors: 'Paredes et al.',
  tables: [1, 2, 3, 5, 6],
})

function freezeProfile(profile) {
  return Object.freeze({
    ...profile,
    kc: Object.freeze(profile.kc),
    calendarStages: profile.calendarStages ? Object.freeze(profile.calendarStages) : null,
    thermal: profile.thermal ? Object.freeze({
      ...profile.thermal,
      stages: profile.thermal.stages ? Object.freeze(profile.thermal.stages) : null,
    }) : null,
    sources: Object.freeze(profile.sources ?? [KC_SOURCE, GDD_SOURCE]),
  })
}

const rawProfiles = {
  eggplant: ['Eggplant', [.60, 1.05, .90, .8], [30, 45, 40, 25], [10, 35]],
  cucumber: ['Cucumber', [.60, 1.00, .75, .3], [20, 30, 40, 15], [10, 32]],
  zucchini: ['Squash / zucchini', [.50, .95, .75, .3], [20, 30, 25, 15], [10, 32]],
  melon: ['Melon, short season', [.50, 1.05, .75, .4], [25, 35, 40, 20], [10, 38], [185, 520, 315, 155]],
  'melon-long': ['Melon, long season', [.50, 1.05, .75, .4], [25, 35, 40, 20], [10, 38], [140, 545, 460, 455]],
  pepper: ['Bell pepper', [.60, 1.05, .90, .7], [30, 35, 40, 20], [10, 35], [445, 1180, 745, 45]],
  pumpkin: ['Pumpkin', [.50, 1.00, .80, .4], [20, 30, 30, 20], [10, 32]],
  tomato: ['Tomato, market', [.60, 1.15, .80, .6], [30, 40, 45, 30], [7, 28], [325, 660, 880, 200]],
  'tomato-industry': ['Tomato, industry', [.60, 1.15, .80, .6], [30, 40, 45, 30], [7, 28], [280, 520, 880, 220]],
  cabbage: ['Cabbage', [.70, 1.05, .95, .4], [25, 35, 40, 15], [4.5, 30]],
  spinach: ['Spinach', [.70, 1.00, .95, .3], [20, 20, 20, 5], [4, 25]],
  lettuce: ['Lettuce, short season', [.70, 1.00, .95, .3], [25, 35, 30, 10], [4, 28], [365, 385, 215, 20]],
  'lettuce-long': ['Lettuce, long season', [.70, 1.00, .95, .3], [25, 35, 30, 10], [4, 28], [360, 455, 455, 20]],
  garlic: ['Garlic, short season', [.70, 1.00, .70, .3], [20, 40, 70, 30], [4, 30], [150, 340, 335, 315]],
  'garlic-long': ['Garlic, long season', [.70, 1.00, .70, .3], [20, 40, 70, 30], [4, 30], [580, 615, 315, 240]],
  broadBean: ['Fava bean', [.50, 1.15, 1.10, .8], [20, 30, 35, 15], [5, 30]],
  bean: ['Bean for seed, short season', [.50, 1.05, .90, .4], [20, 30, 30, 10], [10, 32], [160, 260, 360, 180]],
  'bean-long': ['Bean for seed, long season', [.50, 1.05, .90, .4], [20, 30, 30, 10], [10, 32], [320, 410, 400, 220]],
  onion: ['Onion', [.70, 1.05, .75, .4], [15, 25, 70, 40], [4.5, 35], [460, 470, 880, 480]],
  pea: ['Fresh pea, market', [.50, 1.15, 1.10, .5], [15, 25, 35, 15], [5, 27], [155, 350, 575, 320]],
  'pea-industry': ['Fresh pea, industry', [.50, 1.15, 1.10, .5], [15, 25, 35, 15], [5, 27], [90, 300, 510, 25]],
  leek: ['Leek', [.70, 1.05, .75, .4], [25, 30, 70, 40], null],
  beet: ['Table beet', [.50, 1.05, .95, .4], [25, 30, 25, 10], [4.5, 30]],
  carrot: ['Carrot', [.70, 1.05, .95, .3], [30, 40, 60, 20], [6, 30], [320, 465, 500, 290]],
  potato: ['Potato, short season', [.50, 1.15, .75, .6], [30, 35, 50, 30], [2, 30], [260, 490, 525, 325]],
  'potato-long': ['Potato, long season', [.50, 1.15, .75, .6], [30, 35, 50, 30], [2, 30], [405, 530, 490, 835]],
  radish: ['Radish', [.70, .90, .85, .3], [5, 10, 15, 5], [4.5, 30]],
  barley: ['Barley, short season', [.30, 1.15, .25, 1], [20, 25, 60, 30], [0, 30], [290, 455, 345, 360]],
  'barley-long': ['Barley, long season', [.30, 1.15, .25, 1], [20, 25, 60, 30], [0, 30], [300, 675, 690, 660]],
  wheat: ['Winter wheat, short season', [.30, 1.15, .35, 1], [20, 25, 60, 30], [0, 35], [395, 445, 440, 365]],
  'wheat-winter-long': ['Winter wheat, long season', [.30, 1.15, .35, 1], [20, 25, 60, 30], [0, 35], [560, 405, 730, 410]],
  'wheat-spring': ['Spring wheat, short season', [.30, 1.15, .35, 1], [20, 25, 60, 30], [0, 35], [360, 480, 590, 190]],
  maize: ['Grain maize, short season', [.30, 1.20, .60, 2], [30, 40, 50, 30], [10, 32], [200, 380, 500, 340]],
  'maize-long': ['Grain maize, long season', [.30, 1.20, .60, 2], [30, 40, 50, 30], [10, 32], [295, 420, 775, 465]],
  asparagus: ['Asparagus', [.50, .95, .30, 1], [50, 30, 100, 50], [4.5, 35]],
  strawberry: ['Strawberry', [.40, .85, .75, .2], [20, 30, 40, 20], [3, 30]],
  lawn: ['Cool-season grass', [.90, .95, .95, .1], [5, 5, 350, 5], [4, 30]],
  orchard: ['Apple / pear orchard', [.45, .95, .70, 4], [20, 70, 90, 30], [4, 35]],
  vineyard: ['Wine grapes', [.30, .70, .45, 1.5], [20, 50, 90, 20], [10, 35], [435, 1225, 505, 160]],
  'vineyard-late': ['Wine grapes, late maturation', [.30, .70, .45, 1.5], [20, 50, 90, 20], [10, 35], [465, 1145, 800, 590]],
}

/** Audited crop profiles. GDD stages are null when Rev.1 provides no standard. */
export const CROP_PROFILES = Object.freeze(Object.fromEntries(
  Object.entries(rawProfiles).map(([id, [label, kc, calendar, thermal, gdd]]) => [id, freezeProfile({
    id,
    label,
    kc: { initial: kc[0], midSeason: kc[1], end: kc[2], heightM: kc[3] },
    calendarStages: { initial: calendar[0], development: calendar[1], midSeason: calendar[2], lateSeason: calendar[3] },
    thermal: thermal ? {
      tBaseC: thermal[0],
      tUpperC: thermal[1],
      stages: gdd ? { initial: gdd[0], development: gdd[1], midSeason: gdd[2], lateSeason: gdd[3] } : null,
    } : null,
  })]),
))

export function getCropProfile(id) {
  const profile = CROP_PROFILES[id]
  if (!profile) throw new RangeError(`unknown crop profile: ${id}`)
  return profile
}
