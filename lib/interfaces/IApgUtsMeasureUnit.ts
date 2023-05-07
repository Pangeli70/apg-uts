/** ---------------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.9.7 [APG 2023/05/06] Separation of concerns lib/src + Measure units
 * ----------------------------------------------------------------------------
 */

import { eApgUtsMeasureUnitsIds } from "../enums/eApgUtsMeasureUnitsIds.ts";
import { eApgUtsMeasureUnitsTypes } from "../enums/eApgUtsMeasureUnitsTypes.ts";
import { eApgUtsMagnitude } from "../enums/eApgUtsMagnitude.ts";

/**
 * Measure unit definition prearranged for conversions
 */
export interface IApgUtsMeasureUnit {
  
  /** Current unit */
  unit : eApgUtsMeasureUnitsIds;
  
  /** Base unit */
  base : eApgUtsMeasureUnitsIds;
  
  /** Magniutude conversion factor from unit to base */
  toBase : eApgUtsMagnitude;

  /** Categorization of measure unit by type */
  type : eApgUtsMeasureUnitsTypes;

}
