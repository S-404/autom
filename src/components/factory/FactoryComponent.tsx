import React, {FC, useContext, useState} from 'react';
import {Factory} from "../../models/Factory";
import './factoryComponent.scss'
import ManufactureComponent from "../manufacture/ManufactureComponent";
import ProgressBar from "../UI/progressBar/ProgressBar";
import {Context} from "../../Context";
import {useInterval} from "../../hooks/useInterval";

interface FactoryProps {
    factory: Factory
}

const FactoryComponent: FC<FactoryProps> = ({factory}) => {
    const {engine, updateEngine} = useContext(Context)
    const [producing, setProducing] = useState<boolean>(false)

    const setAutomate = (value:boolean) => {
        factory.setAutomate(value)
        updateEngine()
    }

    const addWorker = () => {

    }
    const removeWorker = () => {

    }
    const produce = () => {
        let started = engine.startProduction(factory.manufacture)
        if(started){
            engine.finishProduction(factory.manufacture)
            engine.checkDevPhaseCondition()
            updateEngine()
        }
    }

    useInterval(() => {
        if (factory.isAutomated) {
            if (producing) {
                engine.finishProduction(factory.manufacture)
                engine.checkDevPhaseCondition()
                setProducing(false)
                updateEngine()
            }

            let started = engine.startProduction(factory.manufacture)
            if (started) {
                setProducing(true)
                updateEngine()
            }
        }
    }, 200)

    if (engine === null || (factory.devPhaseConditionToActivate > engine.devPhase)) return null

    return (
        <div className='factory'>
            <div>{factory.name}</div>
            <input type={'checkbox'} checked={factory.isAutomated} onChange={()=>setAutomate(!factory.isAutomated)}/>
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
            <ProgressBar value={factory.manufacture.reserves} max={factory.manufacture.capacity}/>
        </div>
    );
};

export default FactoryComponent;