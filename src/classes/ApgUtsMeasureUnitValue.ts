/** ---------------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.9.7 [APG 2023/05/06] Separation of concerns lib/src + Measure units
 * ----------------------------------------------------------------------------
*/
import { ApgUtsMeasureUnits } from "../data/ApgUtsMeasureUnits.ts";
import { eApgUtsMeasureUnitsIds } from "../enums/eApgUtsMeasureUnitsIds.ts";

/**
 * Numeric value with its measure unit pre arranged for conversions
 */
export class ApgUtsMeasureUnitValue {
    private _value: number;
    private _id: eApgUtsMeasureUnitsIds | string;
    private _error = "";

    constructor(avalue: number, aid: eApgUtsMeasureUnitsIds | string, aerror = "") {
        
        this._value = avalue;

        const thisMu = ApgUtsMeasureUnits[aid];

        if (thisMu == undefined) {
            this._error = `The measure unit id of this value [${aid}] is not defined in ApgUtsMeasureUnits`
            this._id = eApgUtsMeasureUnitsIds.error;
        }
        else { 
            this._id = aid;
            this._error = aerror;
        }

    }

    get value() { return this._value; }
    get type() { return this._id; }
    get error() { return this._error; }


    convert(anewId: eApgUtsMeasureUnitsIds | string) {

        const thisMu = ApgUtsMeasureUnits[this._id];
        if (thisMu == undefined) {
            const error = `The measure unit id of this value [${this._id}] is not defined in ApgUtsMeasureUnits`
            return new ApgUtsMeasureUnitValue(this._value, eApgUtsMeasureUnitsIds.error, error);
        }
        const newMU = ApgUtsMeasureUnits[anewId];
        if (newMU == undefined) {
            const error = `The measure unit id of the desired unit [${anewId}] is not defined in ApgUtsMeasureUnits`
            return new ApgUtsMeasureUnitValue(this._value, eApgUtsMeasureUnitsIds.error, error);
        }
        if (thisMu.base !== newMU.base) {
            const error = `The current measure unit [${this._id}] do not share the same base unit of the desired one [${anewId}]. Conversion is noit possible`
            return new ApgUtsMeasureUnitValue(this._value, eApgUtsMeasureUnitsIds.error, error);
        }
        const unifiedValue = this._value * thisMu.toBase;
        const newValue = unifiedValue / newMU.toBase;
        if (newMU.base == eApgUtsMeasureUnitsIds.pieces) {
            const rest = newValue - Math.trunc(newValue);
            if (rest > 0) {
                const error = `The value [${newValue}] obtained for the new measure unit [${anewId}] is not compatible: should be an integer number.`
                return new ApgUtsMeasureUnitValue(this._value, eApgUtsMeasureUnitsIds.error, error);
            }
        }

        return new ApgUtsMeasureUnitValue(newValue, anewId);
    }
}