export interface NewBaseClassParams {
    name: string;
    relatedObject: BaseClass | null;
}

export class BaseClass {
    name: string;
    relatedObject: BaseClass | null;

    constructor(baseClassParams: NewBaseClassParams) {
        this.name = baseClassParams.name;
        this.relatedObject = baseClassParams.relatedObject;
    }
}