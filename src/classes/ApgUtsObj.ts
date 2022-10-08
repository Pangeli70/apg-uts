// deno-lint-ignore-file no-explicit-any
/** -----------------------------------------------------------------------
 * @module [Uts]
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
import { ApgUtsMath } from "./ApgUtsMath.ts";


export class ApgUtsObj {
  
  static TypeOf(aunknown: unknown): string {
    if (aunknown === undefined) {
      return 'undefined';
    }
    if (aunknown === null) {
      return 'null';
    }
    if (Array.isArray(aunknown)) {
      return 'array';
    }
    return typeof aunknown;
  }

  static DeepCopy(aobj: any): any {
    return JSON.parse(JSON.stringify(aobj));
  }

  static DeepFreeze(aobject: any, alevel = 0): any {

    const deepCopy = (alevel == 0) ? this.DeepCopy(aobject) : aobject;
    alevel++;

    if (Array.isArray(deepCopy)) {
      for (let i = 0; i < deepCopy.length; i++) {
        if (deepCopy[i] && typeof deepCopy[i] === "object") {
          deepCopy[i] = this.DeepFreeze(deepCopy[i], alevel);
        }
      }
    }
    else if (typeof deepCopy === "object") {
      // Retrieve the property names defined on object
      const propNames = Object.keys(deepCopy);

      // Freeze properties before freezing self
      for (const name of propNames) {
        const value = deepCopy[name];

        if (value && typeof value === "object") {
          deepCopy[name] = this.DeepFreeze(value, alevel);
        }
      }
    }

    return Object.freeze(deepCopy);
  }

  static DeepCopyTo(asrc: any, adest: any): void {
    const temp = JSON.parse(JSON.stringify(asrc));
    Object.keys(temp).forEach(k => {
      adest[k] = temp[k];
    });
  }

  static DeepCompare(a: any, b: any): boolean {
    let r = true;
    const aa = Array.isArray(a);
    // if first is array
    if (aa) {
      // if both are arrays
      if (aa !== Array.isArray(b)) {
        return false;
      }
      else {
        r = (a.length !== b.length);
        // if have the same number of keys
        if (r) {
          for (let i = 0; i < a.length; i++) {
            const typeOfA = this.TypeOf(a[i]);
            const typeOfB = this.TypeOf(b[i]);
            // if type of each item match
            if (typeOfA !== typeOfB) {
              r = false;
              break;
            }
            else {
              // recurse
              if (typeOfA === 'object' || typeOfA === 'array') {
                r = this.DeepCompare(a[i], b[i]);
              }
              else {
                r = a[i] === b[i];
                // if content of each item match
                if (!r) {
                  break;
                }
              }
            }
          }
        }
      }
    }
    else {
      const typeOfA = this.TypeOf(a);
      r = typeOfA === 'object';
      // if first is object
      if (r) {
        r = typeOfA === this.TypeOf(b);
        // if both are object
        if (r) {
          const keysOfA = Object.keys(a);
          const keysOfB = Object.keys(b);
          r = (keysOfA.length === keysOfB.length);
          // if have the same number of keys
          if (r) {
            // if all the keys match
            for (let i = 0; i < keysOfA.length; i++) {
              if (keysOfA[i] != keysOfB[i]) {
                r = false;
                break;
              }
            }
          }
          if (r) {
            // if type of each item match
            for (let i = 0; i < keysOfA.length; i++) {
              const typeOfA = this.TypeOf(a[keysOfA[i]]);
              const typeOfB = this.TypeOf(b[keysOfB[i]]);
              if (typeOfA !== typeOfB) {
                r = false;
                break;
              }
              else {
                // recurse
                if (typeOfA === 'object' || typeOfA === 'array') {
                  r = this.DeepCompare(a[keysOfA[i]], b[keysOfB[i]]);
                }

                // for this couple we reached the primary types level
                else {
                  const valA = a[keysOfA[i]];
                  const valB = b[keysOfB[i]];
                  // numbers need further comparison due to floating point artifacts
                  if (typeOfA == 'number') {
                    const delta = valA - valB;
                    r = Math.abs(delta) < ApgUtsMath.EPSILON;
                  }
                  else {
                    r = valA === valB;
                  }
                  // if content of each item match
                  if (!r) {
                    break;
                  }
                }
              }
            }
          }
        }
      }
    }

    return r;
  }

  /**
   * Access to the inner properties of an object using an indirect string notation
   * @param aobj Object to scan
   * @param apath Chain of properties to follow to get indirectly to the nested property
   * @returns The value of the nested propertry
   */
  static Indirect(aobj: any, apath: string) {

    const nodes = apath.split(".");

    let obj = aobj;
    let nodeObj: any;
    const arrayLikeRegex = /\w+\[\d+\]/;

    for (let i = 0; i < nodes.length; i++) {

      if (typeof obj !== 'object') {
        return undefined;
      }

      const propName = nodes[i];
      const matched = propName.match(arrayLikeRegex)
      if (matched) {
        const chunks = propName.split("[");
        const prop = chunks[0];
        if (Array.isArray(obj[prop])) {
          const num = chunks[1].substring(0, chunks[1].length - 1);
          const index = parseInt(num);
          nodeObj = obj[prop][index]
        }
        else {
          return undefined;
        }
      }
      else {
        nodeObj = obj[propName];
      }

      if (nodeObj === undefined) {
        return undefined;
      }

      obj = nodeObj;
    }

    return obj;
  }

}
