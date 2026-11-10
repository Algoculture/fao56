/** @param {number} value @param {string} name */
export function finiteNumber(value, name) {
  if (!Number.isFinite(value)) throw new TypeError(`${name} must be a finite number`)
  return value
}

/** @param {number} value @param {number} min @param {number} max */
export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

/** @param {number} value @param {string} name @param {number} min @param {number} max */
export function numberInRange(value, name, min, max) {
  finiteNumber(value, name)
  if (value < min || value > max) {
    throw new RangeError(`${name} must be between ${min} and ${max}`)
  }
  return value
}

/** @param {number} value @param {string} name */
export function nonNegative(value, name) {
  finiteNumber(value, name)
  if (value < 0) throw new RangeError(`${name} must be non-negative`)
  return value
}
