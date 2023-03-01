import {BaseClass, NewBaseClassParams} from "./BaseClass";
import {Manufacture} from "./Manufacture";


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
        this.devPhaseConditionToActivate = this.manufacture.defineDevPhaseConditionToActivate()
    }

    addWorker(worker: Worker) {
        this.workers.push(worker)
        return worker
    }

    removeWorker() {
        return this.workers.pop()
    }

    public setAvailable(value: boolean) {
        this.isAvailable = value
    }

    public setAutomate(value:boolean){
        this.isAutomated = value
    }

}