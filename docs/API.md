# API reference

This document covers every public export of `@algoculture/fao56` 0.1.0.
The library is dependency-free, uses ECMAScript modules, and does not round
calculation results.

## Contents

- [Imports](#imports)
- [Conventions](#conventions)
- [Reference evapotranspiration](#reference-evapotranspiration)
  - [Meteorology](#meteorology)
  - [Radiation](#radiation)
  - [ET₀ models](#et0-models)
- [Phenology](#phenology)
- [Crops and ETc](#crops-and-etc)
- [Soil water](#soil-water)
- [Irrigation](#irrigation)

## Imports

Every export is available from the package root. Focused subpaths expose only
the APIs for their domain.

```js
import * as fao56 from '@algoculture/fao56'
import * as eto from '@algoculture/fao56/eto'
import * as phenology from '@algoculture/fao56/phenology'
import * as crops from '@algoculture/fao56/crops'
import * as soil from '@algoculture/fao56/soil'
import * as irrigation from '@algoculture/fao56/irrigation'
```

## Conventions

### Units

| Quantity | Unit |
| --- | --- |
| Temperature | °C |
| GDD | °C day |
| Radiation | MJ/m²/day |
| Wind speed | m/s |
| Vapour pressure | kPa |
| Vapour-pressure slope and psychrometric constant | kPa/°C |
| Rain, evapotranspiration, soil-water depletion, irrigation | mm |
| Soil water capacity | mm of water per metre of soil |
| Area-equivalent water volume | `1 mm = 1 L/m²` |

### Dates

Radiation functions accept a day as one of:

- an integer day of year from 1 through 366;
- a JavaScript `Date`, interpreted using its UTC calendar date; or
- a `YYYY-MM-DD` string.

### Errors and precision

- Required values must be finite numbers unless a signature explicitly allows
  `Infinity`.
- A `TypeError` indicates a missing value or an invalid value type.
- A `RangeError` indicates an impossible or unsupported value.
- Results retain full JavaScript floating-point precision. Round only when
  formatting output.

## Reference evapotranspiration

The functions in this section are exported by `@algoculture/fao56/eto`.

### Meteorology

#### `atmosphericPressure(elevationM)`

FAO-56 Equation 7. Estimates atmospheric pressure at an elevation.

- `elevationM`: station elevation in metres.
- Returns atmospheric pressure in kPa.
- Throws when the elevation is outside the supported atmosphere model.

```js
const pressureKPa = atmosphericPressure(1800) // ≈ 81.756
```

#### `psychrometricConstant(pressureKPa)`

FAO-56 Equation 8.

- `pressureKPa`: positive atmospheric pressure in kPa.
- Returns the psychrometric constant in kPa/°C.

```js
const gamma = psychrometricConstant(81.756) // ≈ 0.05437
```

#### `saturationVapourPressure(temperatureC)`

FAO-56 Equation 11.

- `temperatureC`: air temperature in °C.
- Returns saturation vapour pressure in kPa.

```js
const pressure = saturationVapourPressure(20) // ≈ 2.338 kPa
```

#### `meanSaturationVapourPressure(tMinC, tMaxC)`

FAO-56 Equation 12. Averages saturation vapour pressure calculated separately
at the daily minimum and maximum temperatures.

- `tMinC`, `tMaxC`: daily minimum and maximum temperature in °C.
- Returns mean saturation vapour pressure in kPa.
- Requires `tMaxC >= tMinC`.

```js
const es = meanSaturationVapourPressure(12, 25)
```

#### `saturationVapourPressureSlope(temperatureC)`

FAO-56 Equation 13.

- `temperatureC`: air temperature in °C, usually the daily mean.
- Returns the saturation vapour-pressure curve slope in kPa/°C.

```js
const delta = saturationVapourPressureSlope(20) // ≈ 0.1447
```

#### `actualVapourPressure(input)`

Resolves actual vapour pressure using the best supplied FAO-56 method. The
priority order is measured pressure, dew point, RHmax/RHmin, RHmax, RHmean,
then a Tmin estimate.

Input fields:

| Field | Required | Description |
| --- | --- | --- |
| `valueKPa` | No | Measured actual vapour pressure in kPa |
| `dewPointC` | No | Dew-point temperature in °C |
| `tMinC` | Conditional | Required for relative-humidity and Tmin methods |
| `tMaxC` | Conditional | Required for relative-humidity and Tmin methods |
| `rhMinPercent` | No | Minimum relative humidity, 0–100% |
| `rhMaxPercent` | No | Maximum relative humidity, 0–100% |
| `rhMeanPercent` | No | Mean relative humidity, 0–100% |
| `estimateFromTMin` | No | Permit `ea = e°(Tmin)`; default `false` |

Returns `{ value, method }`, where `value` is in kPa and `method` is one of
`measured`, `dew-point`, `rh-min-max`, `rh-max`, `rh-mean`, or
`tmin-estimate`. Throws if no usable humidity data are supplied.

```js
const humidity = actualVapourPressure({
  tMinC: 12,
  tMaxC: 25,
  rhMinPercent: 45,
  rhMaxPercent: 85,
})
// { value: ..., method: 'rh-min-max' }
```

#### `windSpeedAt2m(speedMps, measurementHeightM = 2)`

FAO-56 Equation 47. Converts wind measured at height `z` to the standard 2 m
height.

- `speedMps`: non-negative measured wind speed in m/s.
- `measurementHeightM`: positive measurement height in metres; default `2`.
- Returns wind speed at 2 m in m/s.

```js
const u2 = windSpeedAt2m(3.2, 10) // ≈ 2.393 m/s
```

### Radiation

#### `dayOfYear(value)`

Converts a supported date value to an integer from 1 through 366.

```js
dayOfYear('2026-07-01')
dayOfYear(new Date('2026-07-01T00:00:00Z'))
dayOfYear(182)
```

Invalid dates and out-of-range integers throw.

#### `inverseRelativeEarthSunDistance(day)`

FAO-56 Equation 23. Returns the dimensionless inverse relative Earth–Sun
distance for a date or day of year.

```js
const dr = inverseRelativeEarthSunDistance(182)
```

#### `solarDeclination(day)`

FAO-56 Equation 24. Returns solar declination in radians.

```js
const declinationRad = solarDeclination('2026-07-01')
```

#### `sunsetHourAngle(latitudeDegrees, day)`

FAO-56 Equation 25.

- `latitudeDegrees`: latitude from −90° to 90°; north is positive.
- `day`: a supported date or day of year.
- Returns the sunset hour angle in radians.

```js
const omega = sunsetHourAngle(46, 182)
```

#### `daylightHours(latitudeDegrees, day)`

FAO-56 Equation 34. Returns maximum possible daylight duration in hours.

```js
const maximumSunshine = daylightHours(46, 182)
```

#### `extraterrestrialRadiation(latitudeDegrees, day)`

FAO-56 Equation 21. Returns daily extraterrestrial radiation `Ra` in
MJ/m²/day.

```js
const ra = extraterrestrialRadiation(46, '2026-07-01')
```

Latitude must be from −90° through 90°.

#### `clearSkyRadiation(extraterrestrialRadiationMJ, elevationM = 0)`

FAO-56 Equation 37. Estimates clear-sky radiation `Rso`.

- `extraterrestrialRadiationMJ`: non-negative `Ra` in MJ/m²/day.
- `elevationM`: station elevation in metres; default `0`.
- Returns `Rso` in MJ/m²/day.

```js
const rso = clearSkyRadiation(32.2, 180)
```

#### `solarRadiationFromSunshine(Ra, sunshineHours, daylightHours, aS = 0.25, bS = 0.5)`

FAO-56 Equation 35, the Angström estimate of solar radiation `Rs`.

- `Ra`: non-negative extraterrestrial radiation in MJ/m²/day.
- `sunshineHours`: non-negative measured bright-sunshine duration.
- `daylightHours`: positive maximum daylight duration; sunshine cannot exceed
  it.
- `aS`, `bS`: Angström coefficients; defaults `0.25` and `0.5`.
- Returns `Rs` in MJ/m²/day.

```js
const rs = solarRadiationFromSunshine(32.2, 8, 14.5)
```

#### `solarRadiationFromTemperature(Ra, tMinC, tMaxC, coefficient = 0.16)`

FAO-56 Equation 50. Estimates `Rs` from daily temperature range.

- `Ra`: non-negative extraterrestrial radiation in MJ/m²/day.
- `tMinC`, `tMaxC`: daily temperatures in °C; requires `tMaxC >= tMinC`.
- `coefficient`: non-negative adjustment coefficient; default `0.16` for
  interior locations. FAO-56 commonly uses `0.19` for coastal locations.
- Returns `Rs` in MJ/m²/day.

```js
const rs = solarRadiationFromTemperature(32.2, 18, 30)
```

#### `netShortwaveRadiation(solarRadiationMJ, albedo = 0.23)`

FAO-56 Equation 38.

- `solarRadiationMJ`: non-negative `Rs` in MJ/m²/day.
- `albedo`: value from 0 through 1; default `0.23` for the grass reference
  crop.
- Returns net shortwave radiation `Rns` in MJ/m²/day.

```js
const rns = netShortwaveRadiation(20)
```

#### `netLongwaveRadiation(input)`

FAO-56 Equation 39. Calculates net outgoing longwave radiation `Rnl`.

| Input field | Unit and constraint |
| --- | --- |
| `tMinC` | °C |
| `tMaxC` | °C; must be at least `tMinC` |
| `actualVapourPressureKPa` | Non-negative kPa |
| `solarRadiationMJ` | Non-negative MJ/m²/day |
| `clearSkyRadiationMJ` | Non-negative MJ/m²/day |

Returns `Rnl` in MJ/m²/day. Returns zero when clear-sky radiation is zero. The
relative solar-radiation term is constrained to FAO-56's supported range.

```js
const rnl = netLongwaveRadiation({
  tMinC: 12,
  tMaxC: 25,
  actualVapourPressureKPa: 1.5,
  solarRadiationMJ: 20,
  clearSkyRadiationMJ: 25,
})
```

#### `netRadiation(shortwaveMJ, longwaveMJ)`

FAO-56 Equation 40. Returns `Rns - Rnl` in MJ/m²/day. Both arguments must be
non-negative; the result itself can be negative.

```js
const rn = netRadiation(15.4, 4.1)
```

### ET0 models

#### `hargreavesSamani(input)`

FAO-56 Equation 52 / Hargreaves–Samani reference ET₀ fallback.

| Input field | Required | Description |
| --- | --- | --- |
| `tMinC` | Yes | Minimum temperature in °C |
| `tMaxC` | Yes | Maximum temperature in °C |
| `tMeanC` | No | Mean temperature; defaults to `(Tmin + Tmax) / 2` |
| `extraterrestrialRadiationMJ` | Conditional | `Ra` in MJ/m²/day |
| `latitudeDegrees` | Conditional | Used to calculate `Ra` when it is omitted |
| `date` | Conditional | Used to calculate `Ra` when it is omitted |

Returns ET₀ in mm/day. `tMaxC` must be at least `tMinC`. Supply either `Ra` or
both latitude and date.

```js
const eto = hargreavesSamani({
  tMinC: 18,
  tMaxC: 30,
  latitudeDegrees: -20,
  date: 246,
})
```

#### `penmanMonteithDaily(input)`

Low-level FAO-56 Equation 6. Use this when all equation terms are already
available; otherwise prefer `calculatePenmanMonteithDaily`.

| Input field | Unit |
| --- | --- |
| `netRadiationMJ` | MJ/m²/day |
| `soilHeatFluxMJ` | MJ/m²/day; default `0` |
| `tMeanC` | °C |
| `windSpeed2mMps` | Non-negative m/s at 2 m |
| `saturationVapourPressureKPa` | Non-negative kPa |
| `actualVapourPressureKPa` | Non-negative kPa |
| `vapourPressureSlopeKPaC` | kPa/°C |
| `psychrometricConstantKPaC` | kPa/°C |

Returns non-negative grass-reference ET₀ in mm/day.

```js
const eto = penmanMonteithDaily({
  netRadiationMJ: 13.3,
  tMeanC: 16.9,
  windSpeed2mMps: 2.1,
  saturationVapourPressureKPa: 2.0,
  actualVapourPressureKPa: 1.3,
  vapourPressureSlopeKPaC: 0.12,
  psychrometricConstantKPaC: 0.067,
})
```

#### `calculatePenmanMonteithDaily(input)`

Calculates the complete daily Penman–Monteith chain and returns intermediate
diagnostics. `tMinC`, `tMaxC`, and `windSpeedMps` are always required.

Weather input:

| Field | Default or use |
| --- | --- |
| `tMinC`, `tMaxC` | Required, °C |
| `tMeanC` | `(tMinC + tMaxC) / 2` |
| `elevationM` | `0` m |
| `pressureKPa` | Calculated from elevation when omitted |
| `windSpeedMps` | Required, measured wind in m/s |
| `windMeasurementHeightM` | `2` m |
| `actualVapourPressureKPa` | Highest-priority humidity input |
| `dewPointC` | Alternative humidity input |
| `rhMinPercent`, `rhMaxPercent`, `rhMeanPercent` | Alternative humidity inputs |
| `estimateHumidityFromTMin` | Permit Tmin humidity estimate; default `false` |
| `netRadiationMJ` | Measured `Rn`; bypasses other radiation inputs |
| `solarRadiationMJ` | Measured `Rs` |
| `sunshineHours` | Used to estimate `Rs` when measured radiation is absent |
| `latitudeDegrees`, `date` | Required unless net radiation is supplied |
| `coastal` | Use temperature coefficient `0.19` instead of `0.16` |
| `soilHeatFluxMJ` | `0` MJ/m²/day |
| `albedo` | `0.23` |

Returns:

```js
{
  eto,                 // mm/day
  method,              // 'fao56-penman-monteith'
  radiationMethod,     // measured-net, measured-solar, sunshine-estimate,
                       // or temperature-estimate
  humidityMethod,      // method selected by actualVapourPressure
  diagnostics: {
    pressureKPa,
    psychrometricConstantKPaC,
    vapourPressureSlopeKPaC,
    saturationVapourPressureKPa,
    actualVapourPressureKPa,
    vapourPressureDeficitKPa,
    windSpeed2mMps,
    extraterrestrialRadiationMJ,
    clearSkyRadiationMJ,
    solarRadiationMJ,
    netShortwaveRadiationMJ,
    netLongwaveRadiationMJ,
    netRadiationMJ,
  },
}
```

Diagnostics that were bypassed by measured net radiation are `null`.

```js
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
```

#### `calculateDailyEto(input, options = {})`

Recommended ET₀ entry point. `options.method` accepts:

- `auto` (default): Penman–Monteith when wind and humidity are present;
  otherwise Hargreaves–Samani;
- `penman-monteith`: require the Penman–Monteith chain; or
- `hargreaves-samani`: force the fallback.

Returns a common result with `eto`, `method`, `radiationMethod`,
`humidityMethod`, and `diagnostics`. The Hargreaves result has `null` humidity
and diagnostics.

```js
const result = calculateDailyEto(weather)
const strictResult = calculateDailyEto(weather, { method: 'penman-monteith' })
```

An unsupported method throws a `RangeError`.

## Phenology

These exports are available from `@algoculture/fao56/phenology`.

### `GROWTH_STAGES`

Frozen stage-name array:

```js
['initial', 'development', 'mid-season', 'late-season', 'complete']
```

### `growingDegreeDays(input)`

Calculates FAO56rev simplified daily GDD:

```text
max(0, min((Tmax + Tmin) / 2, Tupper) - Tbase)
```

Input fields are `tMinC`, `tMaxC`, `tBaseC`, and optional `tUpperC` (default
`Infinity`). Returns °C day. Requires `tMaxC >= tMinC` and
`tUpperC > tBaseC`.

```js
const gdd = growingDegreeDays({
  tMinC: 14,
  tMaxC: 31,
  tBaseC: 7,
  tUpperC: 28,
})
```

### `accumulateGrowingDegreeDays(values, thermalThresholds = null)`

Sums either precomputed non-negative GDD values or temperature observations.
When observations are supplied, provide `{ tBaseC, tUpperC }`.

```js
const totalFromGdd = accumulateGrowingDegreeDays([4.5, 6, 7.25])

const totalFromWeather = accumulateGrowingDegreeDays([
  { tMinC: 12, tMaxC: 25 },
  { tMinC: 14, tMaxC: 28 },
], { tBaseC: 7, tUpperC: 28 })
```

`values` must be an array. Temperature entries without thresholds throw.

### `validateStageThresholds(thresholds)`

Validates and returns the same stage-length object:

```js
const stages = validateStageThresholds({
  initial: 325,
  development: 660,
  midSeason: 880,
  lateSeason: 200,
})
```

All four fields are required, finite, and non-negative. Values are stage
lengths, not cumulative end boundaries. Their unit can be GDD or days as long
as `cumulative` uses the same basis.

### `growthStage(cumulative, thresholds)`

Returns the current stage name for cumulative progress. Negative progress is
treated as zero. Boundary values enter the following stage.

```js
const stage = growthStage(500, stages) // 'development'
```

### `growthStageProgress(cumulative, thresholds)`

Returns stage details for scheduling or display:

```js
{
  stage,          // current stage name
  stageStart,     // cumulative start
  stageEnd,       // cumulative end
  stageFraction,  // 0 through 1 within the stage
  total,          // sum of all stage lengths
}
```

For `complete`, start and end both equal `total` and the fraction is `1`.

```js
const progress = growthStageProgress(500, stages)
```

## Crops and ETc

These exports are available from `@algoculture/fao56/crops`.

### `CROP_PROFILES`

A frozen record combining every Rev.1 Tables 6.1–6.5 row with the 40 stable
legacy profile IDs. The legacy IDs are:

```text
eggplant, cucumber, zucchini, melon, melon-long, pepper, pumpkin, tomato,
tomato-industry, cabbage, spinach, lettuce, lettuce-long, garlic, garlic-long,
broadBean, bean, bean-long, onion, pea, pea-industry, leek, beet, carrot,
potato, potato-long, radish, barley, barley-long, wheat, wheat-winter-long,
wheat-spring, maize, maize-long, asparagus, strawberry, lawn, orchard,
vineyard, vineyard-late
```

Each profile has this shape:

```js
{
  id,
  label,
  kc: { initial, midSeason, end, heightM },
  kcb: { initial, midSeason, end, heightM } | null,
  rootDepthMRange: [minimum, maximum] | null,
  maximumHeightM,
  maximumGroundCover,
  depletionFraction,
  calendarStages: { initial, development, midSeason, lateSeason },
  thermal: {
    tBaseC,
    tUpperC,
    stages: { initial, development, midSeason, lateSeason } | null,
  } | null,
  sources,
  fieldSources,
}
```

Published ranges remain two-element arrays. Published `<` and `>` bounds remain
`{ operator, value }`; absent values are `null`. The original 40 IDs retain
their existing Kc, calendars, and thermal behaviour while exposing Rev.1 Kcb,
root-depth, ground-cover, and depletion metadata where published. New table-row
IDs are kebab-case.

`thermal.stages === null` means no sourced standard GDD segmentation is
available. Do not infer GDD stages from calendar lengths.

```js
const tomato = CROP_PROFILES.tomato
```

### `REV1_CROP_CATALOG`

The source-faithful 412-row catalog from Rev.1 Tables 6.1–6.5, joined to Kcb
and maximum ground cover from Tables 7.1–7.3 where available. Each record
contains its kebab-case ID, source label, category, Kc, nullable Kcb, published
height/root/cover values, nullable seasonal-average Kc, and field-level table
provenance. It contains 102 vegetable, 69 field, 181 woody, 23 grassland, and
37 wetland records.

No midpoint is selected for a published range. In particular, callers must
select a site-specific maximum root depth before root-zone calculations.

### `REV1_DEPLETION_FRACTIONS`

All 192 entries from Rev.1 Tables 8.1–8.4. Numeric entries expose
`depletionFraction`. The two rice entries defined relative to saturation or
field-capacity water content retain `depletionFraction: null` and expose their
published `threshold` instead of inventing a p value.

### `REV1_THERMAL_THRESHOLDS`

All 114 base/upper temperature pairs from Rev.1 Table 6.10. Each keyed record
contains `{ id, label, tBaseC, tUpperC, source }`.

### `REV1_GDD_STAGES`

All 117 season rows from Rev.1 Tables 6.11 and 6.12. Each record contains its
published season descriptor, four stage lengths, total GDD, and exact table
provenance. Table 6.12 minimum/maximum-season rows remain separate and values
are not reordered when an individual published stage is non-monotonic.

### `BASAL_COEFFICIENT_GUIDANCE`

The complete nine-row guidance of Rev.1 Table 7.4 for deriving Kcb when a
selected publication does not provide it. Rules retain fixed values, ranges,
Kc offsets, and required climate adjustments as structured metadata. These
rules are not applied automatically because ground condition and wetting
practice are site decisions.

### `getCropProfile(id)`

Returns a bundled profile by ID. Unknown IDs throw a `RangeError`.

```js
const tomato = getCropProfile('tomato')
```

### `cropCoefficient(profileOrId, progress)`

FAO-56 Equation 66 piecewise-linear single crop coefficient.

- `profileOrId`: a bundled profile ID or compatible custom profile.
- `progress.cumulativeGdd`: preferred when sourced thermal stages exist.
- `progress.day`: calendar-day fallback.

Returns `{ kc, stage, basis }`, where `basis` is `gdd` or `calendar-day`.
Development interpolates from `Kc initial` to `Kc mid`; late season
interpolates from `Kc mid` to `Kc end`. Missing compatible progress data
throws rather than inventing thresholds.

```js
const coefficient = cropCoefficient('tomato', { cumulativeGdd: 1_100 })
```

### `adjustCropCoefficient(kcTabulated, climate)`

FAO-56 Equation 62/65 climate adjustment for mid- and end-season Kc.

| Climate field | Constraint |
| --- | --- |
| `windSpeed2mMps` | 0–100 m/s; equation input is constrained to 1–6 |
| `minRelativeHumidityPercent` | 0–100%; equation input is constrained to 20–80 |
| `cropHeightM` | Positive metres; equation input is constrained to 0.1–10 |
| `endSeason` | Default `false`; skips adjustment when `Kc end <= 0.45` |

Returns the adjusted coefficient.

```js
const kc = adjustCropCoefficient(1.15, {
  windSpeed2mMps: 4,
  minRelativeHumidityPercent: 30,
  cropHeightM: 1,
})
```

### `adjustedCropCoefficient(profileOrId, progress, climate)`

Combines stage resolution and climate adjustment. Initial and development
stages are returned unchanged with `adjusted: false`. For later stages,
`cropHeightM` defaults to the profile's tabulated height.

Returns `{ kc, stage, basis, adjusted }`.

```js
const coefficient = adjustedCropCoefficient(
  'tomato',
  { cumulativeGdd: 1_200 },
  { windSpeed2mMps: 3, minRelativeHumidityPercent: 35 },
)
```

### `basalCropCoefficient(profileOrId, progress)`

Resolves the piecewise-linear basal coefficient Kcb from a crop profile's
`kcb` values. Progress selection and interpolation follow `cropCoefficient`:
sourced GDD stages are preferred, with calendar days as the explicit fallback.
Returns `{ kcb, stage, basis }`. Profiles without Kcb data throw.

### `adjustedBasalCropCoefficient(profileOrId, progress, climate)`

Combines staged Kcb with the FAO-56 Rev.1 Equation 7.2 climate adjustment.
The climate fields and limits are the same as `adjustCropCoefficient`. Returns
`{ kcb, stage, basis, adjusted }`.

### `cropEvapotranspiration(etoMm, kc)`

FAO-56 Equation 58, `ETc = Kc × ET₀`.

- `etoMm`: non-negative reference ET in mm/day.
- `kc`: non-negative crop coefficient.
- Returns crop evapotranspiration in mm/day.

```js
const etc = cropEvapotranspiration(5.2, 1.15)
```

### `actualCropEvapotranspiration(etoMm, kc, ks)`

FAO-56 Rev.1 Equation 8.2, `ETc act = Ks × Kc × ET₀`, for the single crop
coefficient approach.

- `etoMm`: non-negative reference ET in mm/day.
- `kc`: non-negative standard crop coefficient.
- `ks`: water-stress coefficient from 0 through 1.
- Returns actual crop evapotranspiration in mm/day.

```js
const etcActual = actualCropEvapotranspiration(5, 1.1, 0.75)
```

### `actualDualCropEvapotranspiration(etoMm, kcb, ke, ks)`

FAO-56 Rev.1 Equation 8.1, `ETc act = (Ks × Kcb + Ke) × ET₀`. Water stress
reduces crop transpiration but does not reduce evaporation from the soil.

- `etoMm`: non-negative reference ET in mm/day.
- `kcb`: non-negative basal crop coefficient.
- `ke`: non-negative soil evaporation coefficient.
- `ks`: water-stress coefficient from 0 through 1.
- Returns actual crop evapotranspiration in mm/day.

```js
const etcActual = actualDualCropEvapotranspiration(5, 1, 0.1, 0.75)
```

### `calculateCropEvapotranspiration(input)`

Calculates staged Kc and ETc together.

| Field | Description |
| --- | --- |
| `etoMm` | Reference ET in mm/day |
| `crop` | Profile ID or custom profile |
| `cumulativeGdd` | Thermal progress when available |
| `day` | Calendar progress fallback |
| `climate` | Optional climate adjustment fields |

Returns `{ etc, kc, stage, basis }` and, when climate data are supplied,
`adjusted`.

```js
const result = calculateCropEvapotranspiration({
  etoMm: 5.2,
  crop: 'tomato',
  cumulativeGdd: 1_100,
  climate: { windSpeed2mMps: 2.5, minRelativeHumidityPercent: 40 },
})
```

### `calculateActualCropEvapotranspiration(input)`

Combines staged single Kc, root-zone water stress, standard ETc, and actual ETc.

| Field | Description |
| --- | --- |
| `etoMm` | Non-negative reference ET in mm/day |
| `crop` | Profile ID or compatible custom profile |
| `cumulativeGdd` | Thermal progress when sourced stages are available |
| `day` | Calendar-day fallback |
| `climate` | Optional Kc climate-adjustment fields |
| `depletionMm` | Current root-zone depletion in mm |
| `tawMm` | Total available water in mm |
| `rawMm` | Readily available water in mm |

Returns standard and stressed values without rounding:

```js
{
  etcStandardMm,
  etcActualMm,
  kcStandard,
  kcActual,
  ks,
  stage,
  basis,
  adjusted, // present when climate data were supplied
}
```

```js
const result = calculateActualCropEvapotranspiration({
  etoMm: 5,
  crop: 'tomato',
  cumulativeGdd: 1_100,
  depletionMm: 70,
  tawMm: 100,
  rawMm: 40,
})
```

### `SOIL_EVAPORATION_PARAMETERS`

Frozen, source-backed ranges from FAO-56 Rev.1 Table 7.5 for `sand`,
`loamy-sand`, `sandy-loam`, `loam`, `silt-loam`, `silt`,
`silty-clay-loam`, `silty-clay`, and `clay`. Each entry contains published
ranges for volumetric field capacity, wilting point, available water, REW, and
TEW plus source metadata. Ranges are retained as `[minimum, maximum]`; the
library does not select a midpoint.

### `WETTED_FRACTION_RANGES`

Frozen ranges of `fw` from FAO-56 Rev.1 Table 7.6 for precipitation and common
sprinkler, basin, border, furrow, micro-spray, and drip systems. Select or
measure a site-specific fraction before calculation.

### `maximumCropCoefficient(input)`

FAO-56 Rev.1 Equation 7.4. Calculates the upper limit `Kc max` after wetting.

| Field | Description |
| --- | --- |
| `kcb` | Non-negative basal coefficient |
| `windSpeed2mMps` | Wind at 2 m; constrained to 1–6 in the equation |
| `minRelativeHumidityPercent` | Minimum RH; constrained to 20–80% |
| `cropHeightM` | Positive crop height; constrained to 0.1–10 m |
| `wetSoilCoefficient` | Wet-soil aerodynamic term; default `1.2` |

The result is never less than `kcb + 0.05`. Rev.1 notes that the wet-soil term
can be reduced to about `1.1` for daily or two-day wetting; callers must make
that management choice explicitly.

### `totalEvaporableWater(input)`

FAO-56 Rev.1 Equation 7.5:

```text
TEW = 1000 × (θFC − 0.5 θWP) × Ze
```

`fieldCapacity` and `wiltingPoint` are volumetric fractions (m³/m³), and
`evaporationDepthM` is the selected evaporation-layer depth in metres. Returns
TEW in mm.

### `evaporationReductionCoefficient(depletionMm, tewMm, rewMm)`

FAO-56 Rev.1 Equation 7.6 for the original method. Returns `Kr = 1` through
stage 1 (`De <= REW`), then decreases linearly to zero at `De = TEW`.

### `skinLayerStage1Fraction(input)`

FAO-56 Rev.1 Equation 7.12. Input fields are `drewMm`, `rewMm`, `kcMax`, and
`etoMm`. Returns the fraction of the period in stage-1 evaporation from 0 to 1.

### `skinLayerEvaporationReductionCoefficient(input)`

FAO-56 Rev.1 Equation 7.11. Combines stage-1 and stage-2 portions of a period.
Input fields are `depletionMm`, `tewMm`, `rewMm`, and `stage1Fraction`.
Returns `Kr` from 0 to 1.

### `vegetationCoverFraction(input)`

FAO-56 Rev.1 Equation 7.8. Estimates effective vegetation cover `fc` from
`kcb`, `kcMin`, `kcMax`, and `cropHeightM`. Returns a fraction from 0 through
0.99. Field observations should be preferred where available.

### `exposedWettedFraction(fractionCovered, fractionWetted, options)`

FAO-56 Rev.1 Equation 7.7, `few = min(1 − fc, fw)`. Both inputs are fractions.
Set `options.shadedDrip` to `true` to apply Rev.1's simple shaded-emitter
adjustment, `fw × [1 − (2/3)fc]`.

### `soilEvaporationCoefficient(input)`

FAO-56 Rev.1 Equation 7.3:

```text
Ke = min(Kr × [Kc max − Ks Kcb], few × Kc max)
```

Input fields are `kr`, `kcMax`, `kcb`, optional `ks` (default `1`), and `few`.
The result is constrained to be non-negative.

### `updateEvaporationLayerWaterBalance(input)`

Advances the original FAO evaporation-layer depletion using Equations 7.9 and
7.10. Inputs are:

- `previousDepletionMm` and `tewMm`;
- precipitation, runoff, and infiltrated irrigation depths in mm;
- `fractionWetted` (`fw`) and `few`;
- field-average `evaporationMm`;
- optional `transpirationFromLayerMm` (default zero); and
- `wettingTiming`, `early` by default or `late`.

Returns `{ depletionMm, deepPercolationMm, wettingMm, wettingTiming }`.
Irrigation is localized as `I/fw`, and evaporation as `E/few`.

### `calculateDualCropEvapotranspiration(input)`

Calculates one daily or shorter dual-Kc period and advances the selected
evaporation state. `method` is required and must be `original` or
`skin-layer`; there is no default.

Common required inputs:

| Field | Description |
| --- | --- |
| `method` | Explicit evaporation method |
| `etoMm` | Reference ET for the period, mm |
| `kcb` | Basal crop coefficient |
| `fractionWetted` | Selected or observed `fw` |
| `previousDepletionMm` | Previous `De`, from 0 through TEW |
| `tewMm`, `rewMm` | Selected evaporation capacities |

Provide `kcMax` directly or provide wind, minimum RH, and crop height for
Equation 7.4. Provide observed `fractionCovered`, or provide `kcMin` and crop
height for Equation 7.8. The skin-layer method additionally requires
`previousReadilyEvaporableDepletionMm` (`DREW`). Optional fields include `ks`,
rain, runoff, irrigation, shaded-drip handling, surface-layer transpiration,
and wetting timing.

Returns an unrounded audit trail:

```js
{
  method,
  kcb, ks, kr, ke, kcMax,
  kcStandard, kcActual,
  transpirationMm,
  soilEvaporationMm,
  etcStandardMm,
  etcActualMm,
  fractionCovered,
  fractionWetted,
  few,
  stage1Fraction, // null for original
  startDepletionMm,
  startReadilyEvaporableDepletionMm, // null for original
  evaporationState,
}
```

```js
const result = calculateDualCropEvapotranspiration({
  method: 'skin-layer',
  etoMm: 4.5,
  kcb: 0.15,
  kcMax: 1.2,
  fractionCovered: 0,
  fractionWetted: 1,
  previousDepletionMm: 0,
  previousReadilyEvaporableDepletionMm: 0,
  tewMm: 20,
  rewMm: 9,
})
```

### `calculateStagedDualCropEvapotranspiration(input)`

Resolves Kcb from `crop`, `cumulativeGdd` or `day`, and optional `climate`,
then delegates to `calculateDualCropEvapotranspiration`. It adds `stage`,
`basis`, and, when climate data are supplied, `adjusted`. The crop profile must
contain sourced `kcb` values.

### `selectMaximumRootDepth(profileOrId, maximumRootDepthM)`

Validates a caller-selected site-specific maximum root depth against the
profile's published Rev.1 range. It returns the selected depth unchanged.
Values outside the range, or profiles with no published root-depth range,
throw `RangeError`; the package never silently selects a range midpoint.

### `rootDepthFromBasalCoefficient(input)`

Implements original FAO-56 Annex 8 Equations 8-1 and 8-2. Required fields are
`kcb`, `kcbInitial`, `kcbMid`, `initialRootDepthM`, and
`maximumRootDepthM`. `previousRootDepthM` defaults to the initial depth, and
`stage` may be `initial`, `development`, `mid-season`, `late-season`, or
`complete`.

During development, depth grows in proportion to
`(Kcb − Kcb initial) / (Kcb mid − Kcb initial)`. It never falls below the
supplied previous depth and is forced to the maximum by mid-season. The initial
and maximum depths are caller inputs; this function does not infer either.

### `calculateDynamicRootZone(input)`

Combines Annex 8 root growth with Rev.1 Equations 8.3–8.5. Inputs are:

- `crop`, current `kcb`, and optional Kcb initial/mid overrides;
- current `stage`, caller-selected initial and maximum root depths, and optional
  previous root depth;
- field-capacity and wilting-point storage in mm/m;
- current root-zone `depletionMm`; and
- optional `depletionFraction`, defaulting to the profile's published p.

The selected maximum is validated against the crop range. Returns:

```js
{
  rootDepthM,
  rootDepthIncreaseM,
  maximumRootDepthM,
  tawMm,
  rawMm,
  ks,
  depletionFraction,
}
```

```js
const rootZone = calculateDynamicRootZone({
  crop: 'tomato',
  kcb: 0.6,
  stage: 'development',
  initialRootDepthM: 0.2,
  maximumRootDepthM: 0.8, // selected from tomato's published 0.6–1.2 m range
  previousRootDepthM: 0.2,
  fieldCapacityMmPerM: 200,
  wiltingPointMmPerM: 100,
  depletionMm: 30,
})
```

## Soil water

These exports are available from `@algoculture/fao56/soil`.

### `SOIL_PROPERTIES`

Frozen representative hydraulic properties for `sand`, `sandyLoam`, `loam`,
`siltLoam`, `clayLoam`, `siltyClay`, `clay`, and `peat`.

Each value contains:

```js
{
  fieldCapacityMmPerM,
  wiltingPointMmPerM,
  infiltrationMmPerHour,
}
```

These are representative defaults, not a substitute for measured site data.

```js
const loam = SOIL_PROPERTIES.loam
```

### `getSoilProperties(id)`

Returns a bundled soil profile. Unknown IDs throw a `RangeError`.

```js
const loam = getSoilProperties('loam')
```

### `totalAvailableWater(input)`

FAO-56 Equation 82. Calculates root-zone total available water, TAW.

| Field | Description |
| --- | --- |
| `fieldCapacityMmPerM` | Water at field capacity, mm/m |
| `wiltingPointMmPerM` | Water at wilting point, mm/m |
| `rootDepthM` | Non-negative root depth, m |

Returns TAW in mm. Field capacity must be at least the wilting point.

```js
const taw = totalAvailableWater({
  fieldCapacityMmPerM: 190,
  wiltingPointMmPerM: 75,
  rootDepthM: 0.7,
})
```

### `totalAvailableWaterForSoil(soilId, rootDepthM)`

Convenience wrapper using a bundled soil profile. Returns TAW in mm.

```js
const taw = totalAvailableWaterForSoil('loam', 0.7)
```

### `adjustDepletionFraction(baseFraction, etcMm)`

FAO-56 adjustment of depletion fraction `p` for ETc other than 5 mm/day.

- `baseFraction`: value from 0 through 1.
- `etcMm`: non-negative ETc in mm/day.
- Returns the adjusted fraction, constrained to 0.1–0.8.

```js
const p = adjustDepletionFraction(0.5, 7) // 0.42
```

### `readilyAvailableWater(tawMm, depletionFraction)`

FAO-56 Equation 83, `RAW = p × TAW`.

- `tawMm`: non-negative TAW in mm.
- `depletionFraction`: value from 0 through 1.
- Returns RAW in mm of depletion.

```js
const raw = readilyAvailableWater(80.5, 0.5)
```

RAW is a depletion threshold, not the water that must remain in the soil.

### `waterStressCoefficient(depletionMm, tawMm, rawMm)`

FAO-56 Equation 84.

- Returns `1` while depletion is at or below RAW.
- Declines linearly after RAW.
- Returns `0` at or beyond TAW.

All inputs are non-negative and `rawMm` cannot exceed `tawMm`.

```js
const ks = waterStressCoefficient(70, 100, 40) // 0.5
```

### `updateRootZoneWaterBalance(input)`

FAO-56 Equation 85 form. Depletion is zero at field capacity and equals TAW at
wilting point.

| Field | Default | Description |
| --- | --- | --- |
| `previousDepletionMm` | Required | Previous root-zone depletion |
| `tawMm` | Required | Total available water |
| `precipitationMm` | `0` | Daily precipitation |
| `runoffMm` | `0` | Runoff; cannot exceed precipitation |
| `irrigationMm` | `0` | Gross applied irrigation |
| `irrigationEfficiency` | `1` | Fraction from 0 through 1 |
| `capillaryRiseMm` | `0` | Root-zone contribution from below |
| `cropEvapotranspirationMm` | Required | Daily ETc |
| `deepPercolationMm` | Automatic | Explicit drainage when supplied |

Returns:

```js
{
  depletionMm,
  availableWaterMm,
  effectivePrecipitationMm,
  effectiveIrrigationMm,
  deepPercolationMm,
  deficitBeyondWiltingMm,
}
```

The reported depletion is constrained to 0–TAW. Water in excess of field
capacity drains automatically when `deepPercolationMm` is omitted. A demand
beyond TAW is reported separately as `deficitBeyondWiltingMm`.

```js
const balance = updateRootZoneWaterBalance({
  previousDepletionMm: 30,
  tawMm: 100,
  precipitationMm: 8,
  runoffMm: 1,
  irrigationMm: 10,
  irrigationEfficiency: 0.8,
  cropEvapotranspirationMm: 5,
})
```

## Irrigation

These exports are available from `@algoculture/fao56/irrigation`.

### `netCropWaterRequirement(cropEvapotranspirationMm, effectiveRainMm = 0)`

Returns the non-negative daily crop-water gap in mm:

```text
max(0, crop evapotranspiration - effective rain)
```

Both arguments must be non-negative.

```js
const requirement = netCropWaterRequirement(5.5, 2) // 3.5 mm
```

### `irrigationRequirement(input)`

Determines whether projected root-zone depletion reaches RAW and calculates
net and gross irrigation.

| Field | Default | Description |
| --- | --- | --- |
| `depletionMm` | Required | Current root-zone depletion |
| `rawMm` | Required | Irrigation trigger threshold |
| `tawMm` | Required | Total available water |
| `targetDepletionMm` | `0` | Desired depletion after irrigation |
| `forecastEffectiveRainMm` | `0` | Forecast rain expected to enter the root zone |
| `applicationEfficiency` | `1` | Fraction from 0.01 through 1 |
| `maxApplicationMm` | `Infinity` | Maximum gross application in this event |

Returns:

```js
{
  triggered,
  projectedDepletionMm,
  netIrrigationMm,
  grossIrrigationMm,
  deferredNetIrrigationMm,
}
```

The function triggers when projected depletion is greater than or equal to
RAW. Forecast rain can defer the event. If `maxApplicationMm` limits the event,
the unmet net amount is returned as `deferredNetIrrigationMm`.

Constraints:

- `rawMm <= tawMm`;
- `depletionMm <= tawMm`;
- `targetDepletionMm <= rawMm`; and
- all water depths are non-negative.

```js
const need = irrigationRequirement({
  depletionMm: 55,
  rawMm: 40,
  tawMm: 100,
  targetDepletionMm: 10,
  applicationEfficiency: 0.75,
})
// netIrrigationMm: 45, grossIrrigationMm: 60
```
