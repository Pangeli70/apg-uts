/** -----------------------------------------------------------------------
 * @module [Uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.5 [APG 2023/03/04]
 * -----------------------------------------------------------------------
*/


/** Development Log Todo item */
export interface IApgUtsDevlogTodo {
  milestone: string;
  description: string;
  activities: string[];
}


/** Development Log Done item */
export interface IApgUtsDevlogDone {
  date: string;
  version: string;
  hours?: number;
  milestone: string;
  activities: string[];
}


/** Development Log */
export interface IApgUtsDevlog {
  todo: IApgUtsDevlogTodo[];
  done: IApgUtsDevlogDone[];
}