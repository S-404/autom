export enum ResourceTypes {
    HEAT = "Heat",
    WORKERS = "Workers",
    STEEL = "Steel",
    ENERGY = 'Energy'
}

export interface IProduceCostType {
    type: ResourceTypes
    cost: number
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
                return 5
            default:
                return 10
        }
    }

    public defineDevPhaseConditionToActivate() {
        switch (this.resourceType) {
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

    public defineProduceCost():IProduceCostType {
        switch (this.resourceType) {
            case ResourceTypes.HEAT:
                return {type: ResourceTypes.HEAT, cost: 0}
            case ResourceTypes.WORKERS:
                return {type: ResourceTypes.HEAT, cost: 4}
            case ResourceTypes.STEEL:
                return {type: ResourceTypes.ENERGY, cost: 10}
            case ResourceTypes.ENERGY:
                return {type: ResourceTypes.HEAT, cost: 10}
            default:
                return {type: ResourceTypes.HEAT, cost: 0}
        }
    }
}