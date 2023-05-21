/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/08]
 * @version 0.9.7 [APG 2023/05/20] Separation of concerns Lib/Srv
 * -----------------------------------------------------------------------
*/

import { IApgUtsHyperlink } from "./IApgUtsHyperlink.ts";

/** 
 * Data structure to group together hyperlinks with a title
 */

export interface IApgUtsHyperlinksGroup {

  /** Title of the group */
  title: string;

  /** The list of the hyperlinks */
  links: IApgUtsHyperlink[];

}
