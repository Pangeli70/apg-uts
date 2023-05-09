/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/06/26] Removing Rhum
 * @version 0.9.2 [APG 2022/10/02] Github Beta
 * -----------------------------------------------------------------------
 */
import { StdColors } from "../deps.ts"
import { IApgUtsSpecEvent } from "../interfaces/IApgUtsSpecEvent.ts"
import { eApgUtsSpecClause } from "../enums/eApgUtsSpecClause.ts"
import { eApgUtsSpecRun } from "../enums/eApgUtsSpecRun.ts";
import { eApgUtsLogMode } from "../enums/eApgUtsLogMode.ts";
import { ApgUtsMeta } from "./ApgUtsMeta.ts";
import { ApgUtsObj } from "./ApgUtsObj.ts";


export abstract class ApgUtsSpecable extends ApgUtsMeta {

  static readonly CONSOLE_WIDTH = 80;
  static readonly SPACER = "-".repeat(ApgUtsSpecable.CONSOLE_WIDTH - 1);

  private static _totalSkipped = 0;
  private static _totalSuccessful = 0;
  private static _totalFailed = 0;

  private _run = eApgUtsSpecRun.no;
  protected flags: { [name: string]: eApgUtsSpecRun } = {}

  private _skipped = 0;
  private _successful = 0;
  private _failed = 0;

  private _events: IApgUtsSpecEvent[] = [];

  protected _logMode: eApgUtsLogMode = eApgUtsLogMode.verbose;

  get Mode() {
    return this._logMode;
  }
  set Mode(amode: eApgUtsLogMode) {
    this._logMode = amode;
  }

  #log(amessage: string) {
    if (this._logMode == eApgUtsLogMode.verbose) {
      console.log(amessage);
    }
  }

  get Events() {
    return this._events;
  }

  /**
   * Initialize the base object
   * @param aimportMetaUrl A string coming from the statment import.meta.url
   */
  constructor(aimportMetaUrl: string) {
    super(aimportMetaUrl);
  }

  /**
   * Declares the beginning of a set of specs for the current object 
   */
  protected specTitle(atitle: string) {
    const spacer = ApgUtsSpecable.SPACER;

    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.title,
      message: atitle,
      hrt: performance.now()
    }
    this._events.push(event);
    const message = (StdColors.yellow(`\n+${spacer}\n| ${atitle}\n+${spacer}`));
    console.log(message)
  }


  /**
   * Initializes the spec
   */
  protected specInit(aname: string) {
    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.init,
      message: aname,
      hrt: performance.now()
    }
    this._events.push(event);
    const message = ("|\n+-" + aname + "\n|");
    console.log(message);

    let r = (this.flags[aname]);
    if (r === undefined) {
      throw new Error(`Trying to initialize a spec [${aname}] not registered in the flags object`);
    }
    if (r == eApgUtsSpecRun.yes && this._run == eApgUtsSpecRun.no) {
      r = eApgUtsSpecRun.no;
    }
    r = this.specSkip(r);
    return r == eApgUtsSpecRun.yes;
  }


  /**
   * Spec definition: use this method to declare the current conditions
   */
  protected specWhen(aconditions: string) {
    const message = "When " + aconditions + "...";
    this.#log("|   " + message);
    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.when,
      message: message,
      hrt: performance.now()
    }
    this._events.push(event);
  }


  /**
   * Spec expectation: use this method to declare the expected result
   */
  protected specWeExpect(aexpect: string) {
    const message = "We expect " + aexpect;
    this.#log("|   " + message);
    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.expect,
      message: message,
      hrt: performance.now()
    }
    this._events.push(event);
  }

  
  /**
   * Placeholder to trace specs skipping
   * @param arun Flag that indicates that the spec will be skipped or not
   * @param amessage Eventual message to justify why it was skipped
   * @remarks This method should be private
   */
  protected specSkip(arun: eApgUtsSpecRun, amessage = "") {
    if (arun == eApgUtsSpecRun.no) {
      let message = amessage;
      const res = StdColors.gray("       SKIPPED");
      if (amessage == "") {
        message = "This test was..."
      }

      this._skipped++;
      ApgUtsSpecable._totalSkipped++;
      this.#log("|     " + message + "\n|" + res);

      const event: IApgUtsSpecEvent = {
        clause: eApgUtsSpecClause.skip,
        message: amessage,
        hrt: performance.now()
      }
      this._events.push(event);
    }
    return arun;
  }

  /**
   * Spec result: use this method to record the test results
   * @param aresult The value obtained testing the spec
   * @param asuccess The flag that indicats if the test was successful
   */
  protected specWeGot(aresult: string, asuccess: boolean) {
    const message = "We got " + aresult
    let res = "";
    if (asuccess === true) {

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
    this.#log("|     " + message + "\n|" + res);
  }

  /**
   * Resume of the current results. 
   * It is used to close a group of related spects started with the call to the specInit() method.
   * It reports in a row the number of specs succesful, failed and skipped.
   * The partial counters are reset.
   */
  protected specResume() {

    const eventMessage = `Successful: ${this._successful}, Failed: ${this._failed}, Skipped: ${this._skipped}`;
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

    this._successful = 0;
    this._failed = 0;
    this._skipped = 0;

    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.resume,
      message: eventMessage,
      hrt: performance.now()
    }
    this._events.push(event);
  }

  /**
   * Resumes the results of all the specs till the call to the specTitle() method.
   * It reports in a row the number of specs succesful, failed and skipped.
   * It should be called after the last specResume() call
   * The total counters are reset.
   */
  protected specFinal() {

    const eventMessage = `Successful: ${ApgUtsSpecable._totalSuccessful}, Failed: ${ApgUtsSpecable._totalFailed}, Skipped: ${ApgUtsSpecable._totalSkipped}`;

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
    console.log(resume);

    ApgUtsSpecable._totalSuccessful = 0;
    ApgUtsSpecable._totalSkipped = 0;
    ApgUtsSpecable._totalFailed = 0;

    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.final,
      message: eventMessage,
      hrt: performance.now()
    }
    this._events.push(event);

    return ApgUtsSpecable._totalFailed == 0;
  }


  /**
   * Method that will be overriden by the child classes to be called asyncronously.
   */
  protected specExecute(): Promise<void> {
    return new Promise<void>(() => {
      throw new Error(`If you want to call method [${this.specExecute.name}] you must override the implementation.`)
    })
  }


  /**
   * Method that will be overriden by the child classes to be called syncronously.
   */
  protected specExecuteSync(): void {
    throw new Error(`If you want to call method [${this.specExecuteSync.name}] method you must override the implementation.`)
  }


  /**
   * 
   * @returns 
   */
  protected specMockInit() {
    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.mockInit,
      message: "",
      hrt: performance.now()
    }
    this._events.push(event);

    const spacer = ApgUtsSpecable.SPACER;
    const resume = StdColors.cyan(
      `+${spacer}\n` +
      `| Mock init \n` +
      `+${spacer}\n`);
    this.#log(resume);

    return Promise.resolve(event);
  }

  protected specMockInitSync(amessage = "") {
    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.mockInit,
      message: amessage,
      hrt: performance.now()
    }
    this._events.push(event);

    const spacer = ApgUtsSpecable.SPACER;
    const resume = StdColors.cyan(
      `+${spacer}\n` +
      `| Mock init \n` +
      `+${spacer}\n`);
    this.#log(resume);

    return event;
  }



  async specRun(arun: eApgUtsSpecRun) {
    this._run = arun;
    if (this._run == eApgUtsSpecRun.no) return false;
    this.specTitle(this.CLASS_NAME);
    let r = await this.specMockInit();
    if (r.message == "") {
      await this.specExecute();
      r = await this.specMockEnd();
    }
    return this.specFinal();
  }

  specRunSync(arun: eApgUtsSpecRun) {
    this._run = arun;
    if (this._run == eApgUtsSpecRun.no) return false;
    this.specTitle(this.CLASS_NAME);
    let r = this.specMockInitSync()
    if (r.message == "") {
      this.specExecuteSync();
      r = this.specMockEndSync();
    }
    return this.specFinal();
  }

  protected specMockEnd(amessage = "") {
    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.mockEnd,
      message: amessage,
      hrt: performance.now()
    }
    this._events.push(event);

    const spacer = ApgUtsSpecable.SPACER;
    const resume = StdColors.cyan(
      `+${spacer}\n` +
      `| Mock End \n` +
      `+${spacer}\n`);
    this.#log(resume);

    return Promise.resolve(event);
  }

  protected specMockEndSync(amessage = "") {
    const event: IApgUtsSpecEvent = {
      clause: eApgUtsSpecClause.mockEnd,
      message: amessage,
      hrt: performance.now()
    }
    this._events.push(event);

    const spacer = ApgUtsSpecable.SPACER;
    const resume = StdColors.cyan(
      `+${spacer}\n` +
      `| Mock End \n` +
      `+${spacer}\n`);
    this.#log(resume);

    return event;
  }


  async sendToTestService(
    auri: string,
    aframework: string,
    aspecs: string,
  ) {

    const headers = {
      'Content-Type': 'application/json'
    };

    const body = JSON.stringify({
      framework: aframework,
      specs: aspecs,
      events: this.Events
    });

    const postParams: RequestInit = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers,
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body,
    }
    const r = await fetch(auri, postParams);

    const spacer = ApgUtsSpecable.SPACER;
    const resume = StdColors.brightGreen(
      `+${spacer}\n` +
      `| Remote storage (${auri}) result\n` +
      `+${spacer}\n` +
      `| ${JSON.stringify(await r.json())}\n` +
      `+${spacer}\n`);
    this.#log(resume);

    return r;
  }


  static async RunTestAndGetHtmlResultFromTestService(
    aspecable: ApgUtsSpecable,
    aasync: boolean,
    atestServerUriStoreRoute: string,
    atestServerUriEventsRoute: string,
    aframeworkName: string,
    aspecName: string,
    afile: string
  ) {
    const r = {
      testResult: false,
      totalTestTime: 0,
      storeToServiceTime: 0,
      fetchHtmlFromServiceTime: 0,
      convertToHtmlTime: 0,
      saveToLocalFileTime: 0
    };


    let current = 0;
    let last = 0;

    last = current = performance.now();
    r.testResult = (aasync) ? await aspecable.specRun(eApgUtsSpecRun.yes) : aspecable.specRunSync(eApgUtsSpecRun.yes);
    current = performance.now();
    r.totalTestTime = current - last;
    last = current;

    const firstFetchResponse = await aspecable.sendToTestService(atestServerUriStoreRoute, aframeworkName, aspecName);
    current = performance.now();
    r.storeToServiceTime = current - last;
    last = current;

    if (firstFetchResponse.ok) {
      const url = atestServerUriEventsRoute + "/" + aframeworkName + "/" + aspecName + "/last";
      console.log(url);
      const secondFetchResponse = await fetch(url);
      current = performance.now();
      r.fetchHtmlFromServiceTime = current - last;
      last = current;

      const html = await secondFetchResponse.text();
      current = performance.now();
      r.convertToHtmlTime = current - last;
      last = current;

      if (secondFetchResponse.ok) {
        await Deno.writeTextFile(afile, html);
        current = performance.now();
        r.saveToLocalFileTime = current - last;
        current = last = 0;
      }
    }
    return r;
  }


  protected areEqualNoDeep<T>(a: T, b: T): boolean {
    // TODO @9 improve this checking for basic types -- APG 20221002
    return a === b;
  }

  
  protected areDeepEqual(a: any, b: any): boolean {
    return ApgUtsObj.DeepCompare(a, b);
  }

  protected isNotUndefOrNull(a: any) {
    if (a === undefined) return false;
    if (a === null) return false;
    return true;
  }

  protected isNotEmptyString(a: any) {
    if (a === "") return false;
    return true;
  }

}


