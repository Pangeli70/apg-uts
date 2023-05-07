// deno-lint-ignore-file no-explicit-any
/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.0 [APG 2018/11/25]
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.8.1 [APG 2022/05/01] Refactoring names
 * @version 0.9.0 [APG 2022/09/10] Split in several module + Escape Html
 * @version 0.9.1 [APG 2022/09/11] Github Beta
 * -----------------------------------------------------------------------
 */
export class ApgUtsEnum {
  static StringContains(aenum: any, avalue: string): boolean {
    return (Object.values(aenum).includes(avalue));
  }

  static StringValues(aenum: any) {
    return Object.values(aenum) as string[];
  }

  static NumericContains(aenum: any, avalue: number): boolean {
    return (Object.values(aenum).includes(avalue));
  }

  static NumericValues(aenum: any) {
    return Object.values(aenum) as number[];
  }

}
