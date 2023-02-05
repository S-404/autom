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
        this.capacity = this.defineDefaultCapacity(resourceType);
        this.reserves = 0;
        this.performance = 0;

    }

    private defineDefaultCapacity(type: ResourceTypes) {
        switch (type) {
            case ResourceTypes.HEAT:
                return 4
            case ResourceTypes.WORKERS:
                return 1
            default:
                return 10
        }
    }
}