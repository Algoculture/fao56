# Third-party notices

The MIT license in `LICENSE` covers original project code and documentation.
It does not replace the license on the FAO-derived material described below.

## FAO-56 Rev.1 data

This package includes data and guidance adapted from:

Pereira et al. (2025), *Crop evapotranspiration — Guidelines for computing
crop water requirements*, second edition, FAO Irrigation and Drainage Paper
No. 56 Rev.1. © FAO 2025. https://doi.org/10.4060/cd6621en.

This material is licensed under the Creative Commons Attribution 4.0
International license (CC BY 4.0):
https://creativecommons.org/licenses/by/4.0/.
The full license terms are available at:
https://creativecommons.org/licenses/by/4.0/legalcode.

FAO-derived data and guidance occur in:

- `src/crops/revised-catalog.js`
- `src/crops/thermal-data.js`
- `src/crops/evaporation-data.js`
- `src/crops/basal-guidance.js`
- `src/crops/data.js` (Rev.1-derived profile fields)

Record-level source metadata identifies the relevant tables. Adaptations
include transcription into JavaScript records, normalized identifiers and
field names, and joining related table records into crop profiles. Published
ranges and missing values are preserved.

When redistributing this material, retain its attribution, license reference,
and indication of adaptations, and identify any further changes you make.
Neither FAO nor the publication's authors endorse this package.

## Other scientific references

The implementation also references Allen, Pereira, Raes & Smith (1998),
*Crop evapotranspiration — Guidelines for computing crop water requirements*,
FAO Irrigation and Drainage Paper 56. Legacy profile source metadata identifies
references to that edition; the CC BY 4.0 notice above applies to the identified
2025 material, not to the 1998 publication as a whole.
