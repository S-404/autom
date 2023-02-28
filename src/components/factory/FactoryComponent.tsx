import React, {FC, useState} from 'react';
import {Factory} from "../../models/Factory";
import './factoryComponent.scss'
import ManufactureComponent from "../manufacture/ManufactureComponent";
import ProgressBar from "../UI/progressBar/ProgressBar";

interface FactoryProps {
    factory: Factory
}

const FactoryComponent: FC<FactoryProps> = ({factory}) => {
    const [, updateState] = useState<object>();
    const updateComponent = React.useCallback(() => updateState({}), []);

    const addWorker = () => {

    }
    const removeWorker = () => {

    }
    const produce = () => {
        factory.manufacture.produce()
        updateComponent()
    }

    if (!factory.isAvailable) return null
    return (
        <div className='factory'>
            <div>{factory.name}</div>
            <ManufactureComponent manufacture={factory.manufacture}/>

            {factory.isAutomated ?
                <div>workers:
                    <button onClick={removeWorker}>-</button>
                    <span>{factory.workers.length}</span>
                    <button onClick={addWorker}>+</button>
                </div>
                :
                <button onClick={produce}>produce</button>
            }
            <ProgressBar value={factory.manufacture.reserves} max={factory.manufacture.capacity}/>
        </div>
    );
};

export default FactoryComponent;