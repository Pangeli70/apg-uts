/** ----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.4.0 [APG 2018/10/20]
 * @version 0.5.0 [APG 2018/11/25]
 * @version 0.7.0 [APG 2019/08/15]
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.8.0 [APG 2022/03/19] Porting to Deno
 * @version 0.9.1 [APG 2022/09/11] Github Beta
 * -----------------------------------------------------------------------
 */


import { StdPath } from "../../deps.ts";
import { ApgUtsFs } from "./ApgUtsFs.ts"


/** 
 * Wrapper for safer json file manipulation
 */
export class ApgUtsJsonFile {


  static ExistsSync(afile: string) {

    const file = StdPath.normalize(afile);
    return ApgUtsFs.FileExistsSync(file);

  }


  static async Read(afile: string) {

    const file = StdPath.normalize(afile);
    let r: unknown = {};

    if (this.ExistsSync(file)) {
      try {
        const rawJson = await Deno.readTextFile(file)
        r = JSON.parse(rawJson);
      } catch (err) {
        r = err;
      }
    }

    return r;
  }


  static async Write(adata: unknown, afile: string) {

    let r = "";
    const file = StdPath.normalize(afile);

    if (adata) {
      if (typeof (adata) == 'object' || Array.isArray(adata)) {
        r = JSON.stringify(adata);
      }
      else if (typeof (adata) == 'number') {
        r = adata.toString();
      }
      else if (typeof (adata) == 'string') {
        r = adata;
      }
    }

    try {
      await Deno.writeTextFile(file, r);
    }
    catch (err) {
      r = err.message;
    }

    return r;
  }


}
