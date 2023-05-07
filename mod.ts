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

export * from './lib/classes/ApgUtsDateTimeStamp.ts';
export * from './lib/classes/ApgUtsEnum.ts';
export * from './lib/classes/ApgUtsFs.ts';
export * from './lib/classes/ApgUtsIs.ts';
export * from './lib/classes/ApgUtsJsonFile.ts';
export * from './lib/classes/ApgUtsMap.ts';
export * from './lib/classes/ApgUtsMath.ts';
export * from './lib/classes/ApgUtsMeasureUnitValue.ts';
export * from './lib/classes/ApgUtsMeta.ts';
export * from './lib/classes/ApgUtsMetaUrl.ts';
export * from './lib/classes/ApgUtsObj.ts';
export * from './lib/classes/ApgUtsServer.ts';
export * from './lib/classes/ApgUtsSpecable.ts';
export * from './lib/classes/ApgUtsStr.ts';


export { eApgUtsLogMode } from "./lib/enums/eApgUtsLogMode.ts";
export { eApgUtsMagnitude } from "./lib/enums/eApgUtsMagnitude.ts";
export { eApgUtsMeasureUnitsIds } from "./lib/enums/eApgUtsMeasureUnitsIds.ts";
export { eApgUtsMeasureUnitsTypes } from "./lib/enums/eApgUtsMeasureUnitsTypes.ts";
export { eApgUtsSpecClause } from "./lib/enums/eApgUtsSpecClause.ts";
export { eApgUtsSpecRun } from "./lib/enums/eApgUtsSpecRun.ts";


export type { IApgUtsServerInfo } from './lib/interfaces/IApgUtsServerInfo.ts';
export type { IApgUtsSpecEvent } from './lib/interfaces/IApgUtsSpecEvent.ts';
export type {
    IApgUtsDevlog,
    IApgUtsDevlogDone,
    IApgUtsDevlogTodo
} from './lib/interfaces/IApgUtsDevlog.ts';
export type {
    IApgUtsHyperlink,
    IApgUtsHyperlinksGroup
} from './lib/interfaces/IApgUtsHyperlinks.ts';
export type { IApgUtsMeasureUnit } from './lib/interfaces/IApgUtsMeasureUnit.ts';


export type {
    TApgUtsInteger
} from './lib/types/ApgUtsTypes.ts'