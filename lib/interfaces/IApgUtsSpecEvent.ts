/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/02] Github Beta
 * -----------------------------------------------------------------------
*/
import { eApgUtsSpecClause } from "../enums/eApgUtsSpecClause.ts"

export interface IApgUtsSpecEvent {
    clause: eApgUtsSpecClause,
    message: string,
    hrt: number,
    payload?: unknown
}