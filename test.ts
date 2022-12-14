/** -----------------------------------------------------------------------
 * @module [Uts/Test]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/08] Github Beta
 * ------------------------------------------------------------------------
 */
import { eApgUtsSpecRun } from "./src/enums/eApgUtsSpecRun.ts";
import { ApgUtsObjSpec } from "./test/src/ApgUtsObjSpec.ts";

export async function ApgUtsTests(arun: eApgUtsSpecRun) {

    if (arun != eApgUtsSpecRun.yes) return;

    const URI = "https://apg-tst.deno.dev/store";
    // const URI = "http://localhost:49609/store";
    
    const objSpec = new ApgUtsObjSpec();
    objSpec.specRunSync(eApgUtsSpecRun.yes);
    const _r2 = await objSpec.sendToTestService(URI, "Uts", "ApgUtsObjSpec");
}

await ApgUtsTests(eApgUtsSpecRun.yes);