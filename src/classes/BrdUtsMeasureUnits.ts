/** ---------------------------------------------------------------------------
 * @module [Brd/Uts]
 * @author APG
 * @version 0.2 APG 20230418
 * ----------------------------------------------------------------------------
 */

import { eBrdUtsMUIds } from "../enums/eBrdUtsMUIds.ts";
import { eBrdUtsMUTypes } from "../enums/eBrdUtsMUTypes.ts";
import { eBrdUtsMagnitude } from "../enums/eBrdUtsMagnitude.ts";
import { BrdUtsMUDef } from "./BrdUtsMUDef.ts";

/**
 * Collection of predefined measure units definitions
 */
export class BrdUtsMeasureUnits {

    /**
     * Collection container
     */
    private static _collection: Map<eBrdUtsMUIds, BrdUtsMUDef> | undefined = undefined;

    /**
     * Initialize the collection
     */
    static Init() {
        if (this._collection) {
            return;
        }
        const h = this._collection = new Map();

        h.set(
            eBrdUtsMUIds.undefined,
            {
                unit: eBrdUtsMUIds.undefined,
                base: eBrdUtsMUIds.undefined,
                toBase: eBrdUtsMagnitude.unity,
                type: eBrdUtsMUTypes.undefined
            }
        );

        h.set(
            eBrdUtsMUIds.error,
            {
                unit: eBrdUtsMUIds.error,
                base: eBrdUtsMUIds.error,
                toBase: eBrdUtsMagnitude.unity,
                type: eBrdUtsMUTypes.undefined
            }
        );


        h.set(
            eBrdUtsMUIds.meters,
            {
                unit: eBrdUtsMUIds.meters,
                base: eBrdUtsMUIds.meters,
                toBase: eBrdUtsMagnitude.unity,
                type: eBrdUtsMUTypes.primary
            }
        );
        h.set(
            eBrdUtsMUIds.millimeters,
            {
                unit: eBrdUtsMUIds.millimeters,
                base: eBrdUtsMUIds.meters,
                toBase: eBrdUtsMagnitude.milli,
                type: eBrdUtsMUTypes.secondary
            }
        );
        h.set(
            eBrdUtsMUIds.kilometers,
            {
                unit: eBrdUtsMUIds.kilometers,
                base: eBrdUtsMUIds.meters,
                toBase: eBrdUtsMagnitude.kilo,
                type: eBrdUtsMUTypes.secondary
            }
        );

        h.set(
            eBrdUtsMUIds.grams,
            {
                unit: eBrdUtsMUIds.grams,
                base: eBrdUtsMUIds.grams,
                toBase: eBrdUtsMagnitude.unity,
                type: eBrdUtsMUTypes.primary
            }
        );
        h.set(
            eBrdUtsMUIds.milligrams,
            {
                unit: eBrdUtsMUIds.milligrams,
                base: eBrdUtsMUIds.grams,
                toBase: eBrdUtsMagnitude.milli,
                type: eBrdUtsMUTypes.secondary
            }
        );
        h.set(
            eBrdUtsMUIds.kilograms,
            {
                unit: eBrdUtsMUIds.kilograms,
                base: eBrdUtsMUIds.grams,
                toBase: eBrdUtsMagnitude.kilo,
                type: eBrdUtsMUTypes.secondary
            }
        );
        h.set(
            eBrdUtsMUIds.tonnes,
            {
                unit: eBrdUtsMUIds.tonnes,
                base: eBrdUtsMUIds.grams,
                toBase: eBrdUtsMagnitude.mega,
                type: eBrdUtsMUTypes.secondary
            }
        );


        h.set(
            eBrdUtsMUIds.pieces,
            {
                unit: eBrdUtsMUIds.pieces,
                base: eBrdUtsMUIds.pieces,
                toBase: eBrdUtsMagnitude.unity,
                type: eBrdUtsMUTypes.primary
            }
        );
        h.set(
            eBrdUtsMUIds.couples,
            {
                unit: eBrdUtsMUIds.couples,
                base: eBrdUtsMUIds.couples,
                toBase: eBrdUtsMagnitude.unity,
                type: eBrdUtsMUTypes.primary
            }
        );
        h.set(
            eBrdUtsMUIds.hundreds,
            {
                unit: eBrdUtsMUIds.hundreds,
                base: eBrdUtsMUIds.pieces,
                toBase: eBrdUtsMagnitude.etto,
                type: eBrdUtsMUTypes.secondary
            }
        );
        h.set(
            eBrdUtsMUIds.thousands,
            {
                unit: eBrdUtsMUIds.thousands,
                base: eBrdUtsMUIds.pieces,
                toBase: eBrdUtsMagnitude.kilo,
                type: eBrdUtsMUTypes.secondary
            }
        );

    }

    /**
     * Get a Measure unit definition from the collection
     * @param aunitId identifier of the measure unit to get
     * @returns the defined measure unit
     */
    static Get(aunitId: eBrdUtsMUIds) {
        this.Init();
        const attempt = this._collection!.get(aunitId);
        if (!attempt) {
            return this._collection!.get(eBrdUtsMUIds.undefined)!;
        }
        return attempt;
    }

}


