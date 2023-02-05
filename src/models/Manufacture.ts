const MIN_CAPACITY = 20

export enum ResourceTypes {
    HEAT = "Heat",
    WORKERS = "Workers",
    STEEL = "Steel",
    ENERGY = 'Energy'
}

export class Manufacture {
    resourceType: ResourceTypes;
    capacity: number;
    reserves: number;
    performance: number

    constructor(resourceType: ResourceTypes) {
        this.resourceType = resourceType;
        this.capacity = MIN_CAPACITY;
        this.reserves = 0;
        this.performance = 0;

    }
}