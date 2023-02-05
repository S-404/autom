import React, {FC} from 'react';
import {Factory} from "../../models/Factory";
import {Worker} from "../../models/Worker";
import FactoryComponent from "../factory/FactoryComponent";

interface EngineProps{
    factories: Factory[]
    unemployedWorkers: Worker[]

}

const EngineComponent:FC<EngineProps>= ({factories,unemployedWorkers}) => {
    return (
        <div>
            {factories.map((factory)=>(
                <FactoryComponent factory={factory}/>
            ))}
            <div>{factories.length}</div>
            <div>{unemployedWorkers.length}</div>
        </div>
    );
};

export default EngineComponent;