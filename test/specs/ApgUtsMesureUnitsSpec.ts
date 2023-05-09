/** -----------------------------------------------------------------------
 * @module [Uts/Test]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/08] Github Beta
 * @version 0.9.7 [APG 2023/05/06] Separation of concerns lib/src + Measure units
 * ------------------------------------------------------------------------
 */

import { ApgUtsSpecable } from "../../lib/classes/ApgUtsSpecable.ts";
import { eApgUtsSpecRun } from "../../lib/enums/eApgUtsSpecRun.ts";
import { ApgUtsMeasureUnitValue, eApgUtsMeasureUnitsIds } from "../../mod.ts";

export class ApgUtsMeasureUnitsSpec extends ApgUtsSpecable {

    constructor() {
        super(import.meta.url)

        this.flags = {
            [this.S01_Conversions.name]: eApgUtsSpecRun.yes,
        }
    }

    S01_Conversions() {

        const run = this.specInit(this.S01_Conversions.name);
        if (!run) return;

        const V1 = 20;

        const values = [
            new ApgUtsMeasureUnitValue(V1, eApgUtsMeasureUnitsIds.meters),
            new ApgUtsMeasureUnitValue(undefined, eApgUtsMeasureUnitsIds.error),
            new ApgUtsMeasureUnitValue(V1, eApgUtsMeasureUnitsIds.thousands),
            new ApgUtsMeasureUnitValue(V1/100, eApgUtsMeasureUnitsIds.hundreds),
        ]

        this.specWhen(`Trying to convert from ${V1} meters to millimeters`);
        let converted = values[0].convert(eApgUtsMeasureUnitsIds.millimeters);
        let expected = V1 * 1000;
        let r = (converted.error == "" && converted.type == eApgUtsMeasureUnitsIds.millimeters && converted.value === expected);
        this.specWeExpect(`to get the value [${expected}]`)
        this.specWeGot(`${converted.value} ${converted.type}`, r);

        this.specWhen(`Trying to convert from ${V1} meters to kilometers`);
        converted = values[0].convert(eApgUtsMeasureUnitsIds.kilometers);
        expected = V1 / 1000;
        r = (converted.error == "" && converted.type == eApgUtsMeasureUnitsIds.kilometers && converted.value === expected);
        this.specWeExpect(`to get the value [${expected}]`)
        this.specWeGot(`${converted.value} ${converted.type}`, r);

        this.specWhen(`Trying to convert from ${V1} meters to centimeters`);
        converted = values[0].convert(eApgUtsMeasureUnitsIds.centimeters);
        expected = V1 * 100;
        r = (converted.error == "" && converted.type == eApgUtsMeasureUnitsIds.centimeters && converted.value === expected);
        this.specWeExpect(`to get the value [${expected}]`)
        this.specWeGot(`${converted.value} ${converted.type}`, r);

        this.specWhen(`Trying to convert from ${V1} meters to decimeters`);
        converted = values[0].convert(eApgUtsMeasureUnitsIds.decimeters);
        expected = V1 * 10;
        r = (converted.error == "" && converted.type == eApgUtsMeasureUnitsIds.decimeters && converted.value === expected);
        this.specWeExpect(`to get the value [${expected}]`)
        this.specWeGot(`${converted.value} ${converted.type}`, r);

        this.specWhen(`Trying to convert from ${V1} meters to squared meters`);
        converted = values[0].convert(eApgUtsMeasureUnitsIds.squaredMeters);
        r = (converted.error != "" && converted.type == eApgUtsMeasureUnitsIds.error && converted.value === undefined);
        this.specWeExpect(`to get a conversion error `)
        this.specWeGot(`${converted.value} ${converted.type}`, r);

        this.specWhen(`Trying to convert from ${V1} meters to an undefined measure unit`);
        converted = values[0].convert('NotDefinedMU');
        r = (converted.error != "" && converted.type == eApgUtsMeasureUnitsIds.error && converted.value === undefined);
        this.specWeExpect(`to get a conversion error `)
        this.specWeGot(`${converted.value} ${converted.type}`, r);

        this.specWhen(`Trying to convert from an undefined measure unit to a valid measure unit`);
        converted = values[1].convert(eApgUtsMeasureUnitsIds.meters);
        r = (converted.error != "" && converted.type == eApgUtsMeasureUnitsIds.error && converted.value === undefined);
        this.specWeExpect(`to get a conversion error `)
        this.specWeGot(`${converted.value} ${converted.type}`, r);

        this.specWhen(`Trying to convert from ${V1} thousands to pieces`);
        converted = values[2].convert(eApgUtsMeasureUnitsIds.pieces);
        expected = V1 * 1000;
        r = (converted.error == "" && converted.type == eApgUtsMeasureUnitsIds.pieces && converted.value === expected);
        this.specWeExpect(`to get the value [${expected}]`)
        this.specWeGot(`${converted.value} ${converted.type}`, r);

        this.specWhen(`Trying to convert from ${V1} thousands to pairs`);
        converted = values[2].convert(eApgUtsMeasureUnitsIds.pairs);
        expected = V1 * 1000 /2;
        r = (converted.error == "" && converted.type == eApgUtsMeasureUnitsIds.pairs && converted.value === expected);
        this.specWeExpect(`to get the value [${expected}]`)
        this.specWeGot(`${converted.value} ${converted.type}`, r);

        this.specWhen(`Trying to assign a real number value ${V1 / 100} to hundreds`);
        converted = values[3];
        r = (converted.error != "" && converted.type == eApgUtsMeasureUnitsIds.error && converted.value === undefined);
        this.specWeExpect(`to get the value [${undefined}]`)
        this.specWeGot(`${converted.value} ${converted.type}`, r);

        this.specResume();
    }


    override specExecuteSync() {
        this.S01_Conversions();
    }

}