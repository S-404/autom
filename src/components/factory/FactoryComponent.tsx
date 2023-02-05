import React, {FC} from 'react';
import {Factory} from "../../models/Factory";
import './factoryComponent.scss'

interface FactoryProps{
    factory: Factory
}

const FactoryComponent:FC<FactoryProps> = ({factory}) => {
    return (
        <div className='factory'>
            <div>{factory.name}</div>
            <div>{factory.isAvailable.toString()}</div>
        </div>
    );
};

export default FactoryComponent;