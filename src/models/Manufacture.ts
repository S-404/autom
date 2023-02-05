const MIN_CAPACITY = 20

export enum ResourceTypes {
    HEAT = "Heat",
    STEEL = "Steel",
    ENERGY = 'Energy'
}

export class Manufacture {
    resourceType: string;
    capacity: number;
    reserves: number;
    performance: number

    constructor(resourceType: string) {
        this.resourceType = resourceType;
        this.capacity = MIN_CAPACITY;
        this.reserves = 0;
        this.performance = 0;

    }
}