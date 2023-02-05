import React, {FC} from 'react';
import {Factory} from "../../models/Factory";
import './factoryComponent.scss'

interface FactoryProps{
    factory: Factory
}

const FactoryComponent:FC<FactoryProps> = ({factory}) => {
    const addWorker = () =>{

    }
    const removeWorker = () => {

    }
    if (!factory.isAvailable) return null
    return (
        <div className='factory'>
            <div>{factory.name}</div>
            <div>Capacity: {factory.manufacture.capacity}</div>
            <div>Reserves: {factory.manufacture.reserves}</div>
            <div>Performance: {factory.manufacture.performance}</div>
            <div>workers:
                <button onClick={removeWorker}>-</button>
                <span>{factory.workers.length}</span>
                <button onClick={addWorker}>+</button>
            </div>
        </div>
    );
};

export default FactoryComponent;