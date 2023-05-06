/** -----------------------------------------------------------------------
 * @module [Uts/Test]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/08] Github Beta
 * ------------------------------------------------------------------------
 */

import { ApgUtsObj } from "../../src/classes/ApgUtsObj.ts";
import { ApgUtsSpecable } from "../../src/classes/ApgUtsSpecable.ts";
import { eApgUtsSpecRun } from "../../src/enums/eApgUtsSpecRun.ts";

export class ApgUtsObjSpec extends ApgUtsSpecable {

    constructor() {
        super(import.meta.url)

        this.flags = {
            [this.S01_Indirect.name]: eApgUtsSpecRun.yes,
        }
    }

    S01_Indirect() { 

        const run = this.specInit(this.S01_Indirect.name);
        if (!run) return;

        const mockObj: any = {
            prop1: "prop1",
            node1: {
                prop2: "prop2",
                node2: {
                    prop3: "prop3",
                    node3: {
                        prop4: "prop4",
                        prop5: 5,
                        prop6: [1, 2, 3, 4, 5],
                        prop7: [
                            {
                                prop8: "81"
                            },
                            {
                                prop8: "82"
                            }
                        ] 
                    }
                }
            }
        } 

        this.specWhen("trying to access the [unkn] property");
        let value = ApgUtsObj.Indirect(mockObj, "unkn");
        let r = (value === mockObj.unkn);
        this.specWeExpect(`to get the value [${mockObj.unkn}]`)
        this.specWeGot(`${value}`, r);

        this.specWhen("trying to access the [prop1] property");
        value = ApgUtsObj.Indirect(mockObj, "prop1");
        r = (value === mockObj.prop1);
        this.specWeExpect(`to get the value [${mockObj.prop1}]`)
        this.specWeGot(`[${value}]`, r);

        this.specWhen("trying to access the [node1.prop2] property");
        value = ApgUtsObj.Indirect(mockObj, "node1.prop2");
        r = (value === mockObj.node1.prop2);
        this.specWeExpect(`to get the value [${mockObj.node1.prop2}]`)
        this.specWeGot(`[${value}]`, r);

        this.specWhen("trying to access the [node1.node2.node3.prop6] property");
        value = ApgUtsObj.Indirect(mockObj, "node1.node2.node3.prop6").toString();
        r = (value === mockObj.node1.node2.node3.prop6.toString());
        this.specWeExpect(`to get the value [${mockObj.node1.node2.node3.prop6.toString() }]`)
        this.specWeGot(`[${value}]`, r);

        this.specWhen("trying to access the [node1.node2.node3.prop6[2] property");
        value = ApgUtsObj.Indirect(mockObj, "node1.node2.node3.prop6[2]");
        r = (value === mockObj.node1.node2.node3.prop6[2]);
        this.specWeExpect(`to get the value [${mockObj.node1.node2.node3.prop6[2]}]`)
        this.specWeGot(`[${value}]`, r);

        this.specResume();
    }


    override specExecuteSync() {
        this.S01_Indirect();
    }
    
}