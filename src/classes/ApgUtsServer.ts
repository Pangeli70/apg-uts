/** -----------------------------------------------------------------------
 * @module [Uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.1 [APG 2022/09/11] Deno Deploy Beta
 * -----------------------------------------------------------------------
*/

import { IApgUtsServerInfo } from "../interfaces/IApgUtsServerInfo.ts";
import { ApgUtsStr } from "./ApgUtsStr.ts";

export class ApgUtsServer {

  static StartupResume(info: IApgUtsServerInfo) {
    const now = new Date().toISOString();
    console.log(`\n\n\n`);
    console.log(ApgUtsStr.FilledCentered('', 80, "+", "-"));
    console.log(ApgUtsStr.FilledCentered(info.name, 80, "|", " "));
    console.log(ApgUtsStr.FilledCentered(info.title, 80, "|", " "));
    console.log(ApgUtsStr.FilledCentered(info.subtitle, 80, "|", " "));
    console.log(ApgUtsStr.FilledCentered(`${now} (ISO)`, 80, "|", " "));
    console.log(ApgUtsStr.FilledCentered(`http://localhost:${info.localPort}`, 80, "|", " "));
    console.log(ApgUtsStr.FilledCentered(`Drash Server ready to receive requests`, 80, "|", " "));
    console.log(ApgUtsStr.FilledCentered('', 80, "+", "-"));
    console.log(`\n\n\n`);
  }

}
