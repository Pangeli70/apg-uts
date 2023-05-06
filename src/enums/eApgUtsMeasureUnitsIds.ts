/** ---------------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.9.7 [APG 2023/05/06] Separation of concerns lib/src + Measure units
 * ----------------------------------------------------------------------------
 */

/**
 * Measure units identificators
 */
export enum eApgUtsMeasureUnitsIds {

    undefined = "",
    error = "e",

    // Weight units
    milligrams = 'mg', 
    grams = 'g', 
    kilograms = 'kg', 
    tonnes = 't', 

    // Length units
    meters = 'm', 
    millimeters = 'mm', 
    decimeters = 'dm', 
    centimeters = 'cm', 
    kilometers = 'km', 

    // Surface units
    squaredMeters = 'm2',
    squaredMillimeters = 'mm2',

    // Volume units
    litres = 'l',
    cubicMillimeters = 'mm3',
    cubicDecimeters = 'dm3',
    cubicMeters = 'm3',

    // Quantity units
    pieces = 'pz',
    pairs = 'pa',
    couples = 'cp',
    hundreds = 'h',
    thousands = 't',

    // Density units
    kilogramsPerCubicDecimeter = 'kg/dm3',

}


