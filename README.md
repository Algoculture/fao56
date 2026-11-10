# @algoculture/fao56

Dependency-free JavaScript calculations for reference evapotranspiration, crop
water use, thermal-time phenology, root-zone water balance, and irrigation.

The scientific baseline is **FAO Irrigation and Drainage Paper 56, Rev.1
(2025)**. Original 1998 equations and tables remain in use where Rev.1 retains
them. The package uses `ETo` rather than the ambiguous term “potential ET/ETP”.

> The package is currently `UNLICENSED`. Choose a licence before publishing it.

## Install

```sh
npm install @algoculture/fao56
```

Node.js 20 or newer and ECMAScript modules are required.

## Daily reference evapotranspiration

```js
import { calculateDailyEto } from '@algoculture/fao56'

const result = calculateDailyEto({
  tMinC: 12.3,
  tMaxC: 21.5,
  elevationM: 100,
  latitudeDegrees: 50.8,
  date: '2026-07-06',
  windSpeedMps: 10 / 3.6,
  windMeasurementHeightM: 10,
  rhMaxPercent: 84,
  rhMinPercent: 63,
  sunshineHours: 9.25,
})

console.log(result.eto)              // mm/day
console.log(result.method)           // fao56-penman-monteith
console.log(result.radiationMethod)  // sunshine-estimate
```

`calculateDailyEto` selects Penman–Monteith when wind and humidity information
are present. Otherwise it uses Hargreaves–Samani. Pass
`{ method: 'penman-monteith' }` to prohibit fallback.

All inputs and outputs use these units:

- temperature: °C
- radiation: MJ/m²/day
- wind: m/s, with its measurement height in metres
- vapour pressure: kPa
- rainfall, ET, depletion, and irrigation: mm (`1 mm = 1 L/m²`)

## GDD, crop coefficient, and ETc

```js
import {
  calculateCropEvapotranspiration,
  getCropProfile,
  growingDegreeDays,
} from '@algoculture/fao56'

const tomato = getCropProfile('tomato')
const todayGdd = growingDegreeDays({
  tMinC: 14,
  tMaxC: 31,
  tBaseC: tomato.thermal.tBaseC,
  tUpperC: tomato.thermal.tUpperC,
})

const crop = calculateCropEvapotranspiration({
  etoMm: 5.2,
  crop: tomato,
  cumulativeGdd: 1_100 + todayGdd,
  climate: { windSpeed2mMps: 2.5, minRelativeHumidityPercent: 40 },
})
```

Bundled data distinguishes published GDD thresholds from calendar-only
profiles. A GDD calculation fails when a crop has no sourced stage thresholds;
provide `day` or a custom profile instead of silently using invented values.

## Soil balance and irrigation

```js
import {
  irrigationRequirement,
  readilyAvailableWater,
  totalAvailableWaterForSoil,
  updateRootZoneWaterBalance,
} from '@algoculture/fao56'

const taw = totalAvailableWaterForSoil('loam', 0.7)
const raw = readilyAvailableWater(taw, 0.5)

const balance = updateRootZoneWaterBalance({
  previousDepletionMm: 35,
  tawMm: taw,
  precipitationMm: 2,
  irrigationMm: 0,
  cropEvapotranspirationMm: crop.etc,
})

const need = irrigationRequirement({
  depletionMm: balance.depletionMm,
  rawMm: raw,
  tawMm: taw,
  applicationEfficiency: 0.8,
})
```

`RAW` is a depletion threshold: irrigation becomes due when root-zone
depletion reaches RAW. It is not the amount of water that must remain in soil.

## Design guarantees

- Pure calculations with no API, database, locale, or UI coupling.
- No early rounding; callers decide display precision.
- Missing-data estimation methods are reported in results.
- Invalid dimensions and physically impossible values throw errors.
- Crop profiles carry source metadata and can be replaced by local profiles.

## Scope

The first release implements daily grass-reference ETo, Hargreaves fallback,
single Kc curves, Rev.1 GDD stages, ETc, water stress, daily root-zone balance,
and net/gross irrigation need. Dual `Kcb + Ke`, salinity, remote sensing, and
hourly models are not yet included.

## References

- Pereira et al. (2025), *Crop evapotranspiration — Guidelines for computing
  crop water requirements*, second edition, FAO Irrigation and Drainage Paper
  No. 56 Rev.1, DOI `10.4060/cd6621en`.
- Allen, Pereira, Raes & Smith (1998), FAO Irrigation and Drainage Paper 56.
- Paredes et al. (2025), FAO56rev companion guidance for crop-specific GDD
  thresholds and segmented Kc curves.

## Test

```sh
npm test
npm run test:coverage
```

The suite includes FAO-56 Examples 18 and 20 and published equation values.
