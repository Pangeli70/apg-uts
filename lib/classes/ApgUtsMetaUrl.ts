/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/08/09]
 * @version 0.9.1 [APG 2022/09/18] Github
 * -----------------------------------------------------------------------
 */


export type TApgUtilsMetaUrl = string;

export class ApgUtsMetaUrl {

    private _URL: URL;
    
    constructor(aimportMetaUrl: TApgUtilsMetaUrl) { 
        this._URL = new URL('', aimportMetaUrl);
    }

    get SourcePath() {
        const file = this._URL.pathname;
        const index = file.lastIndexOf("/");
        return file.substring(1, index);
    }

    get FileName() {
        const file = this._URL.pathname;
        const slashIndex = file.lastIndexOf("/");
        const dotIndex = file.lastIndexOf(".");
        return file.substring(slashIndex + 1, dotIndex);
    }
}