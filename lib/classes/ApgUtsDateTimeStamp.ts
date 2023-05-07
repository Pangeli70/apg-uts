/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.0 [APG 2022/08/12] Extracted from ApgUtils
 * @version 0.9.1 [APG 2022/09/18] Github Beta
 * -----------------------------------------------------------------------
 */

export class ApgUtsDateTimeStamp {
    private _value;


    constructor(aparam: string | Date) {
        if (typeof aparam == 'string') {
            this._value = aparam;
        }
        else {
            this._value = this.#value(aparam)
        }
    }

    #value(adate: Date) {
        return adate.getFullYear() + '-' +
            (adate.getMonth() + 1).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + '-' +
            adate.getDate().toLocaleString(undefined, { minimumIntegerDigits: 2 }) + '-' +
            adate.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 }) + '-' +
            adate.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 }) + '-' +
            adate.getSeconds().toLocaleString(undefined, { minimumIntegerDigits: 2 });
    }

    get Date() {
        const splits = this._value.split('-');
        const str = `${splits[0]}-${splits[1]}-${splits[2]}T${splits[3]}:${splits[4]}:${splits[5]}`;
        return new Date(str);
    }

    get Value() {
        return this._value;
    }
}