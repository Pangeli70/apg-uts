/** ---------------------------------------------------------------------------
 * @module [Brd/Uts]
 * @author APG
 * @version 0.2 APG 20230418
 * ----------------------------------------------------------------------------
 */

/**
 * Measure units identificators
 */
export enum eBrdUtsMUIds {

    undefined = "",
    error = "e",

    // Weight units
    milligrams = 'mg', //ok
    grams = 'g', //ok
    kilograms = 'kg', //ok
    tonnes = 't', //ok

    // Length units
    meters = 'm', //ok
    millimeters = 'mm', //ok
    decimeters = 'dm', //ok
    centimeters = 'cm', //ok
    kilometers = 'km', //ok

    // Surface units
    squaredMeters = 'm2',

    // Volume units
    litres = 'l',
    cubicMillimeters = 'mm3',
    cubicDecimeters = 'dm3',
    cubicMeters = 'm3',

    // Quantity units
    pieces = 'pz', //ok
    pairs = 'pa',
    couples = 'cp', //ok
    hundreds = 'h', //ok
    thousands = 't', //ok

    // Density units
    kilogramsPerCubicDecimeter = 'kg/dm3',

}


