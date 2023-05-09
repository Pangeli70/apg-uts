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
export * from './classes/ApgUtsEnum.ts';
export * from './classes/ApgUtsFs.ts';
export * from './classes/ApgUtsIs.ts';
export * from './classes/ApgUtsJsonFile.ts';
export * from './classes/ApgUtsMap.ts';
export * from './classes/ApgUtsMath.ts';
export * from './classes/ApgUtsMeasureUnitValue.ts';
export * from './classes/ApgUtsMeta.ts';
export * from './classes/ApgUtsMetaUrl.ts';
export * from './classes/ApgUtsObj.ts';
export * from './classes/ApgUtsServer.ts';
export * from './classes/ApgUtsSpecable.ts';
export * from './classes/ApgUtsStr.ts';


export { eApgUtsLogMode } from "./enums/eApgUtsLogMode.ts";
export { eApgUtsMagnitude } from "./enums/eApgUtsMagnitude.ts";
export { eApgUtsMeasureUnitsIds } from "./enums/eApgUtsMeasureUnitsIds.ts";
export { eApgUtsMeasureUnitsTypes } from "./enums/eApgUtsMeasureUnitsTypes.ts";
export { eApgUtsSpecClause } from "./enums/eApgUtsSpecClause.ts";
export { eApgUtsSpecRun } from "./enums/eApgUtsSpecRun.ts";


export type { IApgUtsServerInfo } from './interfaces/IApgUtsServerInfo.ts';
export type { IApgUtsSpecEvent } from './interfaces/IApgUtsSpecEvent.ts';
export type {
    IApgUtsDevlog,
    IApgUtsDevlogDone,
    IApgUtsDevlogTodo
} from './interfaces/IApgUtsDevlog.ts';
export type {
    IApgUtsHyperlink,
    IApgUtsHyperlinksGroup
} from './interfaces/IApgUtsHyperlinks.ts';
export type { IApgUtsMeasureUnit } from './interfaces/IApgUtsMeasureUnit.ts';


export type {
    TApgUtsInteger
} from './types/ApgUtsTypes.ts'