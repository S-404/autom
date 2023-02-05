import {Factory} from "./Factory";
import {Worker} from "./Worker";
import {BaseClass, NewBaseClassParams} from "./BaseClass";

export class Location extends BaseClass{
    factories: Factory[]
    unemployedWorkers: Worker[]
    constructor(baseParams:NewBaseClassParams) {
        super(baseParams)
        this.factories = []
        this.unemployedWorkers = []
    }
}