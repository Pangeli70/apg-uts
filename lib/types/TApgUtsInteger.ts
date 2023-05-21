/** -----------------------------------------------------------------------
 * @module [apg-uts] General purpose Utilities
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.7 [APG 2023/05/06] Separation of concerns lib/src + Measure units
 * ------------------------------------------------------------------------
 */

export type TApgUtsInteger<N extends number> =
    number extends N ? N : `${N}` extends `${bigint}` ? N : never;