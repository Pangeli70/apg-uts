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
export * from './src/classes/ApgUtsDateTimeStamp.ts';
export * from './src/classes/ApgUtsEnum.ts';
export * from './src/classes/ApgUtsFs.ts';
export * from './src/classes/ApgUtsIs.ts';
export * from './src/classes/ApgUtsJsonFile.ts';
export * from './src/classes/ApgUtsMap.ts';
export * from './src/classes/ApgUtsMath.ts';
export * from './src/classes/ApgUtsMeta.ts';
export * from './src/classes/ApgUtsMetaUrl.ts';
export * from './src/classes/ApgUtsObj.ts';
export * from './src/classes/ApgUtsServer.ts';
export * from './src/classes/ApgUtsSpecable.ts';
export * from './src/classes/ApgUtsStr.ts';

export { eApgUtsLogMode } from "./src/enums/eApgUtsLogMode.ts";
export { eApgUtsSpecClause } from "./src/enums/eApgUtsSpecClause.ts";
export { eApgUtsSpecRun } from "./src/enums/eApgUtsSpecRun.ts";

export type { IApgUtsServerInfo } from './src/interfaces/IApgUtsServerInfo.ts';
export type { IApgUtsSpecEvent } from './src/interfaces/IApgUtsSpecEvent.ts';
export type {
    IApgUtsDevlog,
    IApgUtsDevlogDone,
    IApgUtsDevlogTodo
} from './src/interfaces/IApgUtsDevlog.ts';

export type {
    IApgUtsHyperlink,
    IApgUtsHyperlinksGroup
} from './src/interfaces/IApgUtsHyperlinks.ts';

export type { IApgUtsMeasureUnit } from './src/interfaces/IApgUtsMeasureUnit.ts';

export type {
    TApgUtsInteger
} from './src/types/ApgUtsTypes.ts'