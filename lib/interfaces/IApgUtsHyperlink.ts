/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/08]
 * @version 0.9.7 [APG 2023/05/20] Separation of concerns Lib/Srv
 * -----------------------------------------------------------------------
*/

/** 
 * Data structure to hold fields for menus and lists of links
 */

export interface IApgUtsHyperlink {

  /** The address where the link aims to */
  href: string;

  /** A text to show as placeholder for the link */
  caption: string;

  /** A string to hold an unstructured language specifier e.g. en-EN */
  language?: string;

  /** An additional desctiption  */
  description?: string;
}

