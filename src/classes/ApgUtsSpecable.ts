/** -----------------------------------------------------------------------
 * @module [UTS]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/06/26] Removing Rhum
 * @version 0.9.2 [APG 2022/10/02] Github Beta
 * -----------------------------------------------------------------------
 */
import { StdColors } from "../../deps.ts"
import { ApgUtsMeta } from "./ApgUtsMeta.ts";
import { ApgUtsObj } from "./ApgUtsObj.ts";


export abstract class ApgUtsSpecable extends ApgUtsMeta {

  static readonly CONSOLE_WIDTH = 80;
  static readonly SPACER = "-".repeat(ApgUtsSpecable.CONSOLE_WIDTH - 1)



  protected static _startTime = 0;
  protected static _totalSkipped = 0;
  protected static _totalSuccessful = 0;
  protected static _totalFailed = 0;

  protected _flags: { [name: string]: boolean } = {}

  protected _titleTime = 0;
  protected _skipped = 0;
  protected _successful = 0;
  protected _failed = 0;

  specTitle(atitle: string) {
    const spacer = ApgUtsSpecable.SPACER;
    console.log(StdColors.yellow(`\n+${spacer}\n| ${atitle}\n+${spacer}`));
    this._titleTime = performance.now();
  }

  specName(aname: string) {
    console.log("|\n+-" + aname + "\n|");
    return (this._flags[aname] === undefined) ? false : this._flags[aname];
  }

  specWhen(acase: string) {
    console.log("|   " + acase);
  }

  specSkip(askip: boolean, amessage = "") {
    if (askip) { 

      const res = StdColors.gray("       SKIPPED");
      if (amessage == "") {
        amessage = "This test was..."
      }
      
      this._skipped++;
      ApgUtsSpecable._totalSkipped++;
      console.log("|     " + amessage + "\n|" + res);
    }
    return !askip;
  }

  specResult(aresult: string, ar: boolean) {
    let res = StdColors.green("       SUCCESS");
    if (ar === true) {
      this._successful++;
      ApgUtsSpecable._totalSuccessful++;
    }
    else {
      res = StdColors.red("       FAILURE");
      this._failed++;
      ApgUtsSpecable._totalFailed++;
    }
    console.log("|     " + aresult + "\n|" + res);
  }

  specResume() {
    const elapsed = performance.now() - this._titleTime;
    const totalTime = StdColors.blue(`${elapsed.toFixed(1)}ms`);
    const successfull = StdColors.green(`${this._successful}`);
    const failed = StdColors.red(`${this._failed}`);
    const skipped = StdColors.gray(`${this._skipped}`);

    const spacer = ApgUtsSpecable.SPACER;
    const resume = StdColors.yellow(
      `+${spacer}\n` +
      `| Total time > ${totalTime} \n` +
      `| Successful: ${successfull}, Failed: ${failed}, Skipped: ${skipped} \n` +
      `+${spacer}\n`);
    console.log(resume);
  }

  static InitTimer() {
    this._startTime = performance.now();
  }

  static FinalResume() {
    const elapsed = performance.now() - this._startTime;
    const totalTime = StdColors.blue(`${elapsed.toFixed(1)}ms`);
    const successfull = StdColors.green(`${this._totalSuccessful}`);
    const failed = StdColors.red(`${this._totalFailed}`);
    const skipped = StdColors.gray(`${this._totalSkipped}`);

    const spacer = ApgUtsSpecable.SPACER;
    const resume = StdColors.magenta(
      `+${spacer}\n` +
      `| Resume \n` +
      `+${spacer}\n` +
      `| Total time > ${totalTime} \n` +
      `| Successful: ${successfull}, Failed: ${failed}, Skipped: ${skipped} \n` +
      `+${spacer}\n`);
    console.log(resume)
  }

  return(): boolean {
    return this._failed > 0;
  }

  areEqualNoDeep<T>(a: T, b: T): boolean {
    // TODO improve this checking for basic types
    return a === b;
  }

  areDeepEqual(a: any, b: any): boolean {
    return ApgUtsObj.DeepCompare(a, b);
  }

  isNotUndefOrNull(a: any) {
    if (a === undefined) return false;
    if (a === null) return false;
    return true;
  }

  isNotEmptyString(a: any) {
    if (a === "") return false;
    return true;
  }

}


