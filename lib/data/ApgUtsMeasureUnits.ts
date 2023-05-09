/** ---------------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.9.7 [APG 2023/05/06] Separation of concerns lib/src + Measure units
 * ----------------------------------------------------------------------------
 */

import { IApgUtsMeasureUnit } from "../interfaces/IApgUtsMeasureUnit.ts";
import { eApgUtsMeasureUnitsIds } from "../enums/eApgUtsMeasureUnitsIds.ts";
import { eApgUtsMeasureUnitsTypes } from "../enums/eApgUtsMeasureUnitsTypes.ts";
import { eApgUtsMagnitude } from "../enums/eApgUtsMagnitude.ts";

/**
 * Collection of measure units definitions
 */
export const ApgUtsMeasureUnits: Record<eApgUtsMeasureUnitsIds | string, IApgUtsMeasureUnit>= {
    [eApgUtsMeasureUnitsIds.undefined]:
    {
        unit: eApgUtsMeasureUnitsIds.undefined,
        base: eApgUtsMeasureUnitsIds.undefined,
        toBase: eApgUtsMagnitude.unity,
        type: eApgUtsMeasureUnitsTypes.undefined
    },
    [eApgUtsMeasureUnitsIds.error]:
    {
        unit: eApgUtsMeasureUnitsIds.error,
        base: eApgUtsMeasureUnitsIds.error,
        toBase: eApgUtsMagnitude.unity,
        type: eApgUtsMeasureUnitsTypes.undefined
    },
    [eApgUtsMeasureUnitsIds.meters]:
    {
        unit: eApgUtsMeasureUnitsIds.meters,
        base: eApgUtsMeasureUnitsIds.meters,
        toBase: eApgUtsMagnitude.unity,
        type: eApgUtsMeasureUnitsTypes.primary
    },
    [eApgUtsMeasureUnitsIds.millimeters]:
    {
        unit: eApgUtsMeasureUnitsIds.millimeters,
        base: eApgUtsMeasureUnitsIds.meters,
        toBase: eApgUtsMagnitude.milli,
        type: eApgUtsMeasureUnitsTypes.secondary
    },
    [eApgUtsMeasureUnitsIds.centimeters]:
    {
        unit: eApgUtsMeasureUnitsIds.centimeters,
        base: eApgUtsMeasureUnitsIds.meters,
        toBase: eApgUtsMagnitude.centi,
        type: eApgUtsMeasureUnitsTypes.secondary
    },
    [eApgUtsMeasureUnitsIds.decimeters]:
    {
        unit: eApgUtsMeasureUnitsIds.decimeters,
        base: eApgUtsMeasureUnitsIds.meters,
        toBase: eApgUtsMagnitude.deci,
        type: eApgUtsMeasureUnitsTypes.secondary
    },
    [eApgUtsMeasureUnitsIds.kilometers]:
    {
        unit: eApgUtsMeasureUnitsIds.kilometers,
        base: eApgUtsMeasureUnitsIds.meters,
        toBase: eApgUtsMagnitude.kilo,
        type: eApgUtsMeasureUnitsTypes.secondary
    },
    [eApgUtsMeasureUnitsIds.squaredMeters]:
    {
        unit: eApgUtsMeasureUnitsIds.squaredMeters,
        base: eApgUtsMeasureUnitsIds.squaredMeters,
        toBase: eApgUtsMagnitude.unity,
        type: eApgUtsMeasureUnitsTypes.primary
    },
    [eApgUtsMeasureUnitsIds.squaredMillimeters]:
    {
        unit: eApgUtsMeasureUnitsIds.squaredMillimeters,
        base: eApgUtsMeasureUnitsIds.squaredMeters,
        toBase: eApgUtsMagnitude.milli,
        type: eApgUtsMeasureUnitsTypes.primary
    },
    [eApgUtsMeasureUnitsIds.squaredMeters]:
    {
        unit: eApgUtsMeasureUnitsIds.squaredMeters,
        base: eApgUtsMeasureUnitsIds.squaredMeters,
        toBase: eApgUtsMagnitude.unity,
        type: eApgUtsMeasureUnitsTypes.primary
    },
    [eApgUtsMeasureUnitsIds.cubicMeters]:
    {
        unit: eApgUtsMeasureUnitsIds.cubicMeters,
        base: eApgUtsMeasureUnitsIds.cubicMeters,
        toBase: eApgUtsMagnitude.unity,
        type: eApgUtsMeasureUnitsTypes.primary
    },
    [eApgUtsMeasureUnitsIds.cubicMillimeters]:
    {
        unit: eApgUtsMeasureUnitsIds.cubicMillimeters,
        base: eApgUtsMeasureUnitsIds.cubicMeters,
        toBase: eApgUtsMagnitude.milli,
        type: eApgUtsMeasureUnitsTypes.secondary
    },
    [eApgUtsMeasureUnitsIds.cubicDecimeters]:
    {
        unit: eApgUtsMeasureUnitsIds.cubicDecimeters,
        base: eApgUtsMeasureUnitsIds.cubicMeters,
        toBase: eApgUtsMagnitude.deci,
        type: eApgUtsMeasureUnitsTypes.secondary
    },
    [eApgUtsMeasureUnitsIds.litres]:
    {
        unit: eApgUtsMeasureUnitsIds.litres,
        base: eApgUtsMeasureUnitsIds.cubicMeters,
        toBase: eApgUtsMagnitude.deci,
        type: eApgUtsMeasureUnitsTypes.secondary
    },
    [eApgUtsMeasureUnitsIds.grams]:
    {
        unit: eApgUtsMeasureUnitsIds.grams,
        base: eApgUtsMeasureUnitsIds.grams,
        toBase: eApgUtsMagnitude.unity,
        type: eApgUtsMeasureUnitsTypes.primary
    },
    [eApgUtsMeasureUnitsIds.milligrams]:
    {
        unit: eApgUtsMeasureUnitsIds.milligrams,
        base: eApgUtsMeasureUnitsIds.grams,
        toBase: eApgUtsMagnitude.milli,
        type: eApgUtsMeasureUnitsTypes.secondary
    },
    [eApgUtsMeasureUnitsIds.kilograms]:
    {
        unit: eApgUtsMeasureUnitsIds.kilograms,
        base: eApgUtsMeasureUnitsIds.grams,
        toBase: eApgUtsMagnitude.kilo,
        type: eApgUtsMeasureUnitsTypes.secondary
    },
    [eApgUtsMeasureUnitsIds.tonnes]:
    {
        unit: eApgUtsMeasureUnitsIds.tonnes,
        base: eApgUtsMeasureUnitsIds.grams,
        toBase: eApgUtsMagnitude.mega,
        type: eApgUtsMeasureUnitsTypes.secondary
    },
    [eApgUtsMeasureUnitsIds.kilogramsPerCubicDecimeter]:
    {
        unit: eApgUtsMeasureUnitsIds.kilogramsPerCubicDecimeter,
        base: eApgUtsMeasureUnitsIds.kilogramsPerCubicDecimeter,
        toBase: eApgUtsMagnitude.unity,
        type: eApgUtsMeasureUnitsTypes.primary
    },
    [eApgUtsMeasureUnitsIds.pieces]:
    {
        unit: eApgUtsMeasureUnitsIds.pieces,
        base: eApgUtsMeasureUnitsIds.pieces,
        toBase: eApgUtsMagnitude.unity,
        type: eApgUtsMeasureUnitsTypes.primary
    },
    [eApgUtsMeasureUnitsIds.couples]:
    {
        unit: eApgUtsMeasureUnitsIds.couples,
        base: eApgUtsMeasureUnitsIds.couples,
        toBase: eApgUtsMagnitude.unity,
        type: eApgUtsMeasureUnitsTypes.primary
    },
    [eApgUtsMeasureUnitsIds.pairs]:
    {
        unit: eApgUtsMeasureUnitsIds.pairs,
        base: eApgUtsMeasureUnitsIds.pieces,
        toBase: eApgUtsMagnitude.double,
        type: eApgUtsMeasureUnitsTypes.secondary
    },
    [eApgUtsMeasureUnitsIds.hundreds]:
    {
        unit: eApgUtsMeasureUnitsIds.hundreds,
        base: eApgUtsMeasureUnitsIds.pieces,
        toBase: eApgUtsMagnitude.etto,
        type: eApgUtsMeasureUnitsTypes.secondary
    },
    [eApgUtsMeasureUnitsIds.thousands]:
    {
        unit: eApgUtsMeasureUnitsIds.thousands,
        base: eApgUtsMeasureUnitsIds.pieces,
        toBase: eApgUtsMagnitude.kilo,
        type: eApgUtsMeasureUnitsTypes.secondary
    }
};



