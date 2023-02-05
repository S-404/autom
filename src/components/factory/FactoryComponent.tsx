import React, {FC, useEffect, useState} from 'react';
import {Factory} from "../../models/Factory";
import './factoryComponent.scss'
import ManufactureComponent from "../manufacture/ManufactureComponent";

interface FactoryProps{
    factory: Factory
}

const FactoryComponent:FC<FactoryProps> = ({factory}) => {
    const [producing, setProducing ] = useState<boolean>(false)
    const addWorker = () =>{

    }
    const removeWorker = () => {

    }
    const produce = () =>{
        setProducing(true)
        // factory.manufacture.produce()
    }

    useEffect(()=>{
        if(producing){

        }
    },[producing])

    useEffect(()=>console.log('factory.manufacture.reserves',factory.manufacture.reserves),[factory.manufacture.reserves])

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
            <progress max={factory.manufacture.capacity} value={factory.manufacture.reserves}></progress>
        </div>
    );
};

export default FactoryComponent;