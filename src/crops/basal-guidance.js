const SOURCE = Object.freeze({
  edition: 'FAO-56 Rev.1',
  year: 2025,
  table: '7.4',
  license: 'CC BY 4.0',
  doi: '10.4060/cd6621en',
})

function guidance(id, stage, groundCondition, rule, furtherAdjustment = null) {
  return Object.freeze({ id, stage, groundCondition, rule, furtherAdjustment, source: SOURCE })
}

/** Complete FAO-56 Rev.1 Table 7.4 guidance for deriving Kcb from Kc. */
export const BASAL_COEFFICIENT_GUIDANCE = Object.freeze([
  guidance('initial-annual-bare', 'initial', 'Annual crop; nearly bare soil surface', Object.freeze({ type: 'fixed', value: 0.15 })),
  guidance('initial-perennial-bare', 'initial', 'Perennial crop; nearly bare soil surface', Object.freeze({ type: 'range', value: Object.freeze([0.15, 0.20]) })),
  guidance('initial-frost', 'initial', 'Grasses, brush and trees; killing frost', Object.freeze({ type: 'range', value: Object.freeze([0.30, 0.40]) })),
  guidance('initial-perennial-infrequent', 'initial', 'Perennial crop with some ground or leaf cover; infrequently sprinkler- or surface-irrigated', Object.freeze({ type: 'subtract-from-kc-initial', value: 0.10, kcTable: '6.3' })),
  guidance('initial-perennial-frequent', 'initial', 'Perennial crop with some ground or leaf cover; frequently micro- or drip-irrigated', Object.freeze({ type: 'subtract-from-kc-initial', value: 0.20, kcTable: '6.1' })),
  guidance('mid-cover-over-80', 'mid-season', 'Ground cover greater than approximately 80%', Object.freeze({ type: 'subtract-from-kc-mid', value: 0.05, kcTables: '6.1–6.3' }), 'climate (Equation 7.2)'),
  guidance('mid-cover-under-80', 'mid-season', 'Ground cover less than approximately 80%', Object.freeze({ type: 'subtract-from-kc-mid', value: 0.10, kcTables: '6.1–6.3' }), 'climate (Equation 7.2)'),
  guidance('end-infrequent', 'end-season', 'Infrequently irrigated or wetted during late season', Object.freeze({ type: 'subtract-from-kc-end', value: 0.05 })),
  guidance('end-frequent', 'end-season', 'Frequently irrigated or wetted during late season', Object.freeze({ type: 'subtract-from-kc-end', value: 0.10 }), 'climate (Equation 7.2)'),
])
