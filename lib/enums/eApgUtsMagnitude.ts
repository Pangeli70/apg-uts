/** ---------------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.9.7 [APG 2023/05/06] Separation of concerns lib/src + Measure units
 * ----------------------------------------------------------------------------
 */

/**
 * Magnitudes used as coefficents to convert values to and from different measure units
 */
export enum eApgUtsMagnitude {
  unity = 1,
  double = 0.5,
  deca = 0.1,
  etto = 0.01,
  kilo = 0.001,
  mega = 0.000001,
  half = 2,
  deci = 10,
  centi = 100,
  milli = 1000,
  nano = 1000000
}
