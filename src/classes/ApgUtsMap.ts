// deno-lint-ignore-file no-explicit-any
/** -----------------------------------------------------------------------
 * @module [Uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.0 [APG 2018/11/25]
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.8.0 [APG 2022/05/01] Refactoring names
 * @version 0.9.0 [APG 2022/09/10] Split in several module + Escape Html
 * @version 0.9.1 [APG 2022/09/11] Github Beta
 * -----------------------------------------------------------------------
 */
export class ApgUtsMap {

  static Stringify(_key: string, apotentialMap: unknown) {
    if(apotentialMap instanceof Map) {

      let newValue: any;
      const mapEntries = apotentialMap.entries();
      const arrayOfEntries = Array.from(mapEntries);
      const res = arrayOfEntries.map((keyValuePairAsArray) => {

        const res: any = {
          [keyValuePairAsArray[0]]: keyValuePairAsArray[1],
        };
        newValue = {
          ...newValue,
          ...res,
        };
        return newValue;
      });
      return res[res.length - 1];
      /* return {
              dataType: 'Map',
              apotentialMap: Array.from(apotentialMap.entries()), // or with spread: apotentialMap: [...apotentialMap]
            }; */
    } else {
      return apotentialMap;
    }
  }

  static ToArray(amap: Map<string, any>) {
    const r: any[] = [];
    amap.forEach((v, key) => {
      const item = { ...v };
      item.$key = key;
      r.push(item);
    });
    return r;
  }

  static ToObject(amap: Map<string, any>) {
    const r: any = {};
    amap.forEach((v, key) => {
      r[key] = v;
    });
    return r;
  }

}
