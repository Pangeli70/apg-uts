/** -----------------------------------------------------------------------
 * @module [Uts] General purpose Utilities
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/08] Github Beta
 * @version 0.9.3 [APG 2022/12/13] Missing exports
 * @version 0.9.5 [APG 2023/03/04] Devlog
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
export type { IApgUtsDevlog } from './src/interfaces/IApgUtsDevlog.ts';