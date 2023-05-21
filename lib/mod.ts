/** -----------------------------------------------------------------------
 * @module [apg-uts] General purpose Utilities
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/08] Github Beta
 * @version 0.9.3 [APG 2022/12/13] Missing exports
 * @version 0.9.5 [APG 2023/03/04] Devlog
 * @version 0.9.6 [APG 2023/04/08] Hypelinks
 * @version 0.9.7 [APG 2023/05/06] Separation of concerns lib/src
 * ------------------------------------------------------------------------
 */

export * from './classes/ApgUtsDateTimeStamp.ts';

export * from './classes/ApgUtsMetaUrl.ts';


export * as Std from './deps/deno.land.std.ts';

export * from "./enums/eApgUtsLogMode.ts";
export * from "./enums/eApgUtsMagnitude.ts";

export type { IApgUtsHyperlink, } from './interfaces/IApgUtsHyperlink.ts';
export type { IApgUtsHyperlinksGroup } from './interfaces/IApgUtsHyperlinksGroup.ts';

export * from './services/ApgUtsBaseService.ts';

export * from './statics/ApgUtsEnum.ts';
export * from './statics/ApgUtsFs.ts';
export * from './statics/ApgUtsIs.ts';
export * from './statics/ApgUtsJsonFile.ts';
export * from './statics/ApgUtsMap.ts';
export * from './statics/ApgUtsMath.ts';
export * from './statics/ApgUtsObj.ts';
export * from './statics/ApgUtsStr.ts';

export type { TApgUtsInteger } from './types/TApgUtsInteger.ts'
