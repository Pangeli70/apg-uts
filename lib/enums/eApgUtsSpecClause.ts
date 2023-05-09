/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/02] Github Beta
 * -----------------------------------------------------------------------
*/

/**
 * List of clauses for spec events
 */
export enum eApgUtsSpecClause {
    title = "title",
    init = "init",
    when = "when",
    expect = "expect",
    skip = "skip",
    success = "success",
    failure = "failure",
    resume = "resume",
    final = "final",
    mockInit = "mockInit",
    mockEnd = "mockEnd"
}