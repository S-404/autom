import React, {FC, useContext} from 'react';
import {Factory} from "../../models/Factory";
import './factoryComponent.scss'
import ManufactureComponent from "../manufacture/ManufactureComponent";
import ProgressBar from "../UI/progressBar/ProgressBar";
import {Context} from "../../Context";

interface FactoryProps {
    factory: Factory
}

const FactoryComponent: FC<FactoryProps> = ({factory}) => {
    const {engine,updateEngine} = useContext(Context)
    // const [, updateState] = useState<object>();
    // const updateComponent = React.useCallback(() => updateState({}), []);

    const addWorker = () => {

    }
    const removeWorker = () => {

    }
    const produce = () => {
        engine.produce(factory.manufacture)
        engine.checkDevPhaseCondition()
        // // updateComponent()
        updateEngine()
    }


    if (engine === null || (factory.devPhaseConditionToActivate > engine.devPhase)) return null

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