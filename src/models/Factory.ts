import {BaseClass, NewBaseClassParams} from "./BaseClass";
import {Manufacture, ResourceTypes} from "./Manufacture";


export interface NewFactoryParams extends NewBaseClassParams {
    manufacture: Manufacture;
}

export class Factory extends BaseClass {
    isAvailable: boolean;
    devPhaseConditionToActivate: number;
    isAutomated: boolean
    manufacture: Manufacture;
    workers: Worker[];

    constructor(factoryParams: NewFactoryParams) {
        super(factoryParams)
        this.isAvailable = false
        this.isAutomated = false
        this.manufacture = factoryParams.manufacture
        this.workers = []
        this.devPhaseConditionToActivate = this.defineDevPhaseConditionToActivate(factoryParams.manufacture.resourceType)
    }

    addWorker(worker: Worker) {
        this.workers.push(worker)
        return worker
    }

    removeWorker() {
        return this.workers.pop()
    }

    setAvailable(value: boolean) {
        this.isAvailable = value
    }


    private defineDevPhaseConditionToActivate(manufactureType: ResourceTypes) {
        switch (manufactureType) {
            case ResourceTypes.HEAT:
                return 0
            case ResourceTypes.WORKERS:
                return 1
            case ResourceTypes.ENERGY:
                return 2
            case ResourceTypes.STEEL:
                return 3
            default:
                return 100
        }

    }
}