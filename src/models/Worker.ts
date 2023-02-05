import { BaseClass } from "./BaseClass";

export class Worker extends BaseClass {

    constructor(name: string, relatedObject: BaseClass | null) {
        super({name, relatedObject})
    }
}