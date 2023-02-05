import React, {FC} from 'react';
import FactoryComponent from "../factory/FactoryComponent";
import {Engine} from "../../models/Engine";

interface EngineProps {
    engine: Engine
}

const EngineComponent: FC<EngineProps> = ({engine}) => {
    return (
        <div>
            {engine.factories.map((factory) => (
                <FactoryComponent
                    key={`factory_${factory.manufacture.resourceType}`}
                    factory={factory}
                />
            ))}
            <div>{engine.factories.length}</div>
            <div>{engine.unemployedWorkers.length}</div>
        </div>
    );
};

export default EngineComponent;