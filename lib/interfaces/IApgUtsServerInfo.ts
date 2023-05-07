/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.1 [APG 2022/09/11] Github Beta
 * @version 0.9.6 [APG 2023/04/24] Removed subtitle to match Apg-Dir entry
 * -----------------------------------------------------------------------
*/

/** Brief set of data for Drash server startup and resume*/
export interface IApgUtsServerInfo {
  /** Name of the server */
  caption: string;
  /** Brief description */
  title: string;
  /** Current version */
  version: string;
  /** Local development port */
  localPort: number;
}
