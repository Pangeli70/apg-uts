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

export enum eApgUtsSpecClause {
  title = "title",
  init = "init",
  when = "when",
  expect = "expect",
  skip = "skip",
  success = "success",
  failure = "failure",
  resume = "resume",
  final = "final"
}

export interface IApgUtsSpecEvent {
  clause: eApgUtsSpecClause,
  message: string,
  hrt: number
}

export abstract class ApgUtsSpecable extends ApgUtsMeta {

  static readonly CONSOLE_WIDTH = 80;
  static readonly SPACER = "-".repeat(ApgUtsSpecable.CONSOLE_WIDTH - 1);

  protected static _totalSkipped = 0;
  protected static _totalSuccessful = 0;
  protected static _totalFailed = 0;

  protected _flags: { [name: string]: boolean } = {}
  protected _titleTime = 0;
  protected _skipped = 0;
  protected _successful = 0;
  protected _failed = 0;
  protected _events: IApgUtsSpecEvent[] = [];


  specTitle(atitle: string) {
    const spacer = ApgUtsSpecable.SPACER;
    console.log(StdColors.yellow(`\n+${spacer}\n| ${atitle}\n+${spacer}`));

    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.title,
      message: atitle,
      hrt: performance.now()
    }
    this._events.push(event);
  }


  specInit(aname: string) {
    console.log("|\n+-" + aname + "\n|");
    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.init,
      message: aname,
      hrt: performance.now()
    }
    this._events.push(event);
    let r = (this._flags[aname] === undefined) ? false : this._flags[aname];

    r = this.#specSkip(r);
    return r;
  }

  specWhen(acase: string) {
    const message = "When " + acase + "...";
    console.log("|   " + message);
    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.when,
      message: message,
      hrt: performance.now()
    }
    this._events.push(event);
  }

  specWeExpect(aexpect: string) {
    const message = "We expect " + aexpect;
    console.log("|   " + message);
    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.expect,
      message: message,
      hrt: performance.now()
    }
    this._events.push(event);
  }


  #specSkip(arun: boolean, amessage = "") {
    if (!arun) {
      let message = amessage;
      const res = StdColors.gray("       SKIPPED");
      if (amessage == "") {
        message = "This test was..."
      }

      this._skipped++;
      ApgUtsSpecable._totalSkipped++;
      console.log("|     " + message + "\n|" + res);

      const event: IApgUtsSpecEvent = {
        clause: eApgUtsSpecClause.skip,
        message: amessage,
        hrt: performance.now()
      }
      this._events.push(event);
    }
    return arun;
  }


  specWeGot(aresult: string, ar: boolean) {
    const message = "We got " + aresult
    let res = "";
    if (ar === true) {

      res = StdColors.green("       SUCCESS");
      this._successful++;
      ApgUtsSpecable._totalSuccessful++;

      const event: IApgUtsSpecEvent = {
        clause: eApgUtsSpecClause.success,
        message: message,
        hrt: performance.now()
      }
      this._events.push(event);

    }
    else {

      res = StdColors.red("       FAILURE");
      this._failed++;
      ApgUtsSpecable._totalFailed++;

      const event: IApgUtsSpecEvent = {
        clause: eApgUtsSpecClause.failure,
        message: message,
        hrt: performance.now()
      }
      this._events.push(event);

    }
    console.log("|     " + message + "\n|" + res);
  }


  specResume() {

    const successfull = StdColors.green(`${this._successful}`);
    const failed = StdColors.red(`${this._failed}`);
    const skipped = StdColors.gray(`${this._skipped}`);
    const message = `Successful: ${successfull}, Failed: ${failed}, Skipped: ${skipped}`;

    const spacer = ApgUtsSpecable.SPACER;
    const resume = StdColors.yellow(
      `+${spacer}\n` +
      `| ${message} \n` +
      `+${spacer}\n`);
    console.log(resume);

    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.resume,
      message: message,
      hrt: performance.now()
    }
    this._events.push(event);
  }


  specFinal() {

    const successfull = StdColors.green(`${ApgUtsSpecable._totalSuccessful}`);
    const failed = StdColors.red(`${ApgUtsSpecable._totalFailed}`);
    const skipped = StdColors.gray(`${ApgUtsSpecable._totalSkipped}`);
    const message = `Successful: ${successfull}, Failed: ${failed}, Skipped: ${skipped}`;

    const spacer = ApgUtsSpecable.SPACER;
    const resume = StdColors.magenta(
      `+${spacer}\n` +
      `| Final resume \n` +
      `+${spacer}\n` +
      `| ${message}\n` +
      `+${spacer}\n`);
    console.log(resume)

    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.resume,
      message: message,
      hrt: performance.now()
    }
    this._events.push(event);

    return ApgUtsSpecable._totalFailed == 0;
  }


  specs(): Promise<void> {
    return new Promise<void>(() => {
      throw new Error("If you want to call [Specs] method you must override the implementation.")
    })
  }

  specsSync(): void {
    throw new Error("If you want to call [SpecsSync] method you must override the implementation.")
  }


  async run(arun: boolean) {
    if (!arun) return false;
    this.specTitle(this.CLASS_NAME);
    await this.specs();
    return this.specFinal();
  }


  runSync(arun: boolean) {
    if (!arun) return false;
    this.specTitle(this.CLASS_NAME);
    this.specsSync();
    return this.specFinal();
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


