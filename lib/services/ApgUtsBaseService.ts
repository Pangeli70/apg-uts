/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/08/08]
 * @version 0.9.1 [APG 2022/09/24] Github Beta
 * @version 0.9.7 [APG 2023/05/13] Separation of concerns lib/src
 * -----------------------------------------------------------------------
*/

import { ApgUtsMetaUrl } from "../classes/ApgUtsMetaUrl.ts";

/**
 * Basic Apg Service that owns a class name form source file name through import.meta.url
 */
export abstract class ApgUtsBaseService {

    private readonly _META_URL: ApgUtsMetaUrl;
    
    readonly CLASS_NAME: string;

    constructor(aimportMetaUrl: string) {
        this._META_URL = new ApgUtsMetaUrl(aimportMetaUrl);
        this.CLASS_NAME = this._META_URL.FileName;
    }

}


