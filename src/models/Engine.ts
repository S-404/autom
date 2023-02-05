import {Factory} from "./Factory";
import {Worker} from "./Worker";
import {BaseClass, NewBaseClassParams} from "./BaseClass";
import {Manufacture, ResourceTypes} from "./Manufacture";

export class Engine extends BaseClass {
    factories: Factory[]
    unemployedWorkers: Worker[]

    constructor(baseParams: NewBaseClassParams) {
        super(baseParams)
        this.factories = []
        this.unemployedWorkers = []
    }

    initFactories() {
        const resTypes = Object.keys(ResourceTypes)
        const result: Factory[] = []
        for (let type of resTypes) {
            let newManufacture = new Manufacture(type)
            let newFactory = new Factory({
                name: `${type}_factory`,
                manufacture: newManufacture,
                relatedObject: this
            })
            result.push(newFactory)
        }
        this.factories = result
    }

}