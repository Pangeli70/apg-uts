/** ---------------------------------------------------------------------------
 * @module [Brd/Uts]
 * @author APG
 * @version 0.2 APG 20230418
 * ----------------------------------------------------------------------------
 */

import { eBrdUtsMUIds } from "../enums/eBrdUtsMUIds.ts";
import { eBrdUtsMUTypes } from "../enums/eBrdUtsMUTypes.ts";
import { eBrdUtsMagnitude } from "../enums/eBrdUtsMagnitude.ts";

/**
 * Measure unit definition prearranged for conversions
 */
export class BrdUtsMUDef {
  
  /** Current unit */
  unit = eBrdUtsMUIds.undefined;
  
  /** Base unit */
  base = eBrdUtsMUIds.undefined;
  
  /** Magniutude conversion factor from unit to base */
  toBase = eBrdUtsMagnitude.unity;

  /** Categorization of measure unit by type */
  type = eBrdUtsMUTypes.undefined;

}
