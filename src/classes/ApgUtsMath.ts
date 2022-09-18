/** -----------------------------------------------------------------------
 * @module [Uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.0 [APG 2018/11/25]
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.8.0 [APG 2022/05/01] Refactoring names
 * @version 0.9.0 [APG 2022/09/10] Split in several module + Escape Html
 * @version 0.9.1 [APG 2022/09/11] Deno Deploy Beta
 * -----------------------------------------------------------------------
 */

import { ApgUtsIs } from "./ApgUtsIs.ts";

/** 
 * Static general purpose utility functions
 */
export class ApgUtsMath {
    static readonly EPSILON = 0.000001;

    static SafeInteger(atext: string | undefined): number | undefined {
        if (atext && ApgUtsIs.IsInteger(atext)) {
            return parseInt(atext, 10);
        }
        else {
            return undefined;
        }
    }

    static RoundToSignificant(an: number, adigits = 5): number {
        const exponentialNotation = an.toExponential(adigits - 1);
        let r = parseFloat(exponentialNotation);
        const abs = Math.abs(r);
        if (abs < this.EPSILON) r = 0;
        return r;
    }

    /**
     * @param   type  The type of adjustment (round, floor, ceil).
     * @param   avalue The number.
     * @param   aexp   The exponent (the 10 logarithm of the adjustment base).
     * @returns       The adjusted value.
     */
    static #decimalAdjust(atype: string, avalue: number, aexp?: number) {

        // Typescript hack
        const fun =
            (atype === "round") ? "round" :
                (atype === "floor") ? "floor" :
                    (atype === "ceil") ? "ceil" : undefined;

        if (!fun || isNaN(avalue)) {
            return NaN;
        }

        // If the exp is undefined or zero...
        if (!aexp || +aexp === 0) {
            return Math[fun](avalue);
        }

        aexp = +aexp;
        // If the value is not a number or the exp is not an integer...
        if (!(typeof aexp === 'number' && aexp % 1 === 0)) {
            return NaN;
        }
        // Shift
        let values = avalue.toString().split('e');
        avalue = Math[fun](+(values[0] + 'e' + (values[1] ? (+values[1] - aexp) : -aexp)));
        // Shift back
        values = avalue.toString().split('e');
        return +(values[0] + 'e' + (values[1] ? (+values[1] + aexp) : aexp));
    }

    static Round(value: number, exp: number) {
        return this.#decimalAdjust('round', value, exp);
    }

    static Floor(value: number, exp: number) {
        return this.#decimalAdjust('floor', value, exp);
    }

    static Ceil(value: number, exp: number) {
        return this.#decimalAdjust('ceil', value, exp);
    }
}

