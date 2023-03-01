import {Factory} from "./Factory";
import {Worker} from "./Worker";
import {BaseClass, NewBaseClassParams} from "./BaseClass";
import {Manufacture, ResourceTypes} from "./Manufacture";

export class Engine extends BaseClass {
    factories: Factory[]
    unemployedWorkers: Worker[]
    devPhase: number

    constructor(baseParams: NewBaseClassParams) {
        super(baseParams)
        this.factories = []
        this.unemployedWorkers = []
        this.devPhase = 0
    }

    public initFactories() {
        let result: Factory[] = []
        for (let type of Object.values(ResourceTypes)) {
            let newFactory = this.getNewFactory(type)
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

    private increaseDevPhase() {
        this.devPhase++
    }

    public checkDevPhaseCondition() {
        let shouldIncrease = false
        switch (this.devPhase) {
            case 0:
                const heatFactoryIndex = this.factories.findIndex(item => item.manufacture.resourceType === ResourceTypes.HEAT)
                shouldIncrease = this.factories[heatFactoryIndex].manufacture.reserves === this.factories[heatFactoryIndex].manufacture.capacity
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
        }
        if (shouldIncrease) {
            this.increaseDevPhase()
        }
    }

    public getCloneEngine() {
        const newEngine = new Engine({
            name: this.name,
            relatedObject: this.relatedObject
        })
        newEngine.devPhase = this.devPhase
        newEngine.factories = this.factories
        newEngine.unemployedWorkers = this.unemployedWorkers
        return newEngine
    }

    public startProduction(manufacture: Manufacture) {
        const manufactureCost = manufacture.defineProduceCost()
        const needResourcesFactoryIndex = this.factories.findIndex(item => item.manufacture.resourceType === manufactureCost.type)
        const needResourcesManufacture = this.factories[needResourcesFactoryIndex].manufacture

        const isEnoughResources = needResourcesManufacture.reserves >= manufactureCost.cost
        const isEnoughCapacity = manufacture.reserves < manufacture.capacity
        if (isEnoughResources && isEnoughCapacity) {
            needResourcesManufacture.reserves -= manufactureCost.cost
            return true
        }
        return false
    }

    public finishProduction(manufacture: Manufacture) {
        manufacture.reserves = Math.min(manufacture.reserves + manufacture.performance, manufacture.capacity)
    }

    private async delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}