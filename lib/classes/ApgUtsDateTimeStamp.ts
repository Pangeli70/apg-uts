/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.0 [APG 2022/08/12] Extracted from ApgUtils
 * @version 0.9.1 [APG 2022/09/18] Github Beta
 * -----------------------------------------------------------------------
 */

/**
 * Custom Apg date time stamps. These are meant to be used as immutable identifiers 
 */
export class ApgUtsDateTimeStamp {

    private readonly _stamp: string;

    constructor(aparam: Date) {
        if (typeof aparam == 'string') {
            this._stamp = aparam;
        }
        else {
            this._stamp = this.#value(aparam)
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
        const splits = this._stamp.split('-');
        const str = `${splits[0]}-${splits[1]}-${splits[2]}T${splits[3]}:${splits[4]}:${splits[5]}`;
        return new Date(str);
    }

    get Stamp() {
        return this._stamp;
    }
}