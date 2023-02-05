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

    public initFactories() {
        let result: Factory[] = []
        for (let type of Object.values(ResourceTypes)) {
            let newFactory = this.getNewFactory(type)
            if (type === ResourceTypes.HEAT) newFactory.setAvailable(true)
            result.push(newFactory)
        }
        this.factories = result
    }

    private getNewFactory(resourceType: ResourceTypes) {
        return new Factory({
            name: `${resourceType} factory`,
            manufacture: new Manufacture(resourceType),
            relatedObject: this
        })
    }

}