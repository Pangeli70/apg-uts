/** -----------------------------------------------------------------------
 * @module [Uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.5 [APG 2023/03/04]
 * @version 0.9.6 [APG 2023/04/08] Comments
 * -----------------------------------------------------------------------
*/


/** Development Log Todo item: groups activities with a milestone title */
export interface IApgUtsDevlogTodo {

  /** Title or name of the group of the things to do */
  milestone: string;

  /** Description or purpose of the milestone / group of things to do */
  description: string;

  /** List of the things to do */
  activities: string[];
}



/** Development Log Done item: it is a mini-release per milestone resume */
export interface IApgUtsDevlogDone {

  /** Date of the accomplishment */
  date: string;

  /** Current Semver value of the module */
  version: string;

  /** Time spent for implementation of the features */
  hours?: number;

  /** Reference to the milestone title */
  milestone: string;

  /** List of activities that have been accomplished in this mini release */
  activities: string[];
}



/** Development Log: Full data structure ready for data persistency*/
export interface IApgUtsDevlog {

  /** Activities to do grouped per milestone */
  todo: IApgUtsDevlogTodo[];

  /** Activities done grouper per milestone mini-relaease */
  done: IApgUtsDevlogDone[];
}