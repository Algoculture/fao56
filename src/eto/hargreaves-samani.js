import { finiteNumber } from '../shared.js'
import { extraterrestrialRadiation } from './radiation.js'

/**
 * FAO-56 Eq. 52 / Hargreaves–Samani reference evapotranspiration [mm/day].
 */
export function hargreavesSamani({
  tMinC,
  tMaxC,
  tMeanC = (tMinC + tMaxC) / 2,
  extraterrestrialRadiationMJ,
  latitudeDegrees,
  date,
}) {
  finiteNumber(tMinC, 'tMinC')
  finiteNumber(tMaxC, 'tMaxC')
  finiteNumber(tMeanC, 'tMeanC')
  if (tMaxC < tMinC) throw new RangeError('tMaxC must be greater than or equal to tMinC')

  const ra = extraterrestrialRadiationMJ ?? extraterrestrialRadiation(latitudeDegrees, date)
  finiteNumber(ra, 'extraterrestrialRadiationMJ')
  if (ra < 0) throw new RangeError('extraterrestrialRadiationMJ must be non-negative')
  return Math.max(0, 0.0023 * (tMeanC + 17.8) * Math.sqrt(tMaxC - tMinC) * ra * 0.408)
}
