/** -----------------------------------------------------------------------
 * @module [SVC]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/08/08]
 * @version 0.9.1 [APG 2022/09/24] Github Beta
 * -----------------------------------------------------------------------
*/

import { ApgUtsMetaUrl } from "./ApgUtsMetaUrl.ts";

/** Basic Apg Service */
export abstract class ApgUtsMeta {
    private readonly _META_URL: ApgUtsMetaUrl;
    readonly CLASS_NAME: string;

    constructor(aimportMetaUrl: string) {
        this._META_URL = new ApgUtsMetaUrl(aimportMetaUrl);
        this.CLASS_NAME = this._META_URL.FileName;
    }

}


