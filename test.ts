/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/08] Github Beta
 * ------------------------------------------------------------------------
 */
import { eApgUtsSpecRun } from "./lib/enums/eApgUtsSpecRun.ts";
import { ApgUtsMeasureUnitsSpec } from "./test/specs/ApgUtsMesureUnitsSpec.ts";
import { ApgUtsObjSpec } from "./test/specs/ApgUtsObjSpec.ts";

async function ApgUtsTests(arun: eApgUtsSpecRun) {

    if (arun != eApgUtsSpecRun.yes) return;

    const URI = "https://apg-tst.deno.dev/store";
    
    const objSpec = new ApgUtsObjSpec();
    objSpec.specRunSync(eApgUtsSpecRun.yes);
    const _r1 = await objSpec.sendToTestService(URI, "Uts", objSpec.CLASS_NAME);

    const measureUnitSpec = new ApgUtsMeasureUnitsSpec();
    measureUnitSpec.specRunSync(eApgUtsSpecRun.yes);
    const _r2 = await measureUnitSpec.sendToTestService(URI, "Uts", measureUnitSpec.CLASS_NAME);
}

await ApgUtsTests(eApgUtsSpecRun.yes);