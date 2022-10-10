/** -----------------------------------------------------------------------
 * @module [Uts/Test]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/08] Github Beta
 * ------------------------------------------------------------------------
 */
import { eApgUtsSpecRun } from "./src/enums/eApgUtsSpecRun.ts";
import { ApgUtsObjSpec } from "./test/src/ApgUtsObjSpec.ts";

const objSpec = new ApgUtsObjSpec();
objSpec.specRunSync(eApgUtsSpecRun.yes);