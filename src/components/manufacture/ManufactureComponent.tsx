import React, {FC, useEffect} from 'react';
import {Manufacture} from "../../models/Manufacture";

interface ManufactureProps {
    manufacture: Manufacture
}

const ManufactureComponent: FC<ManufactureProps> = ({manufacture}) => {

    useEffect(() => console.log('ManufactureComponent useEffect factory.manufacture.reserves', manufacture.reserves), [manufacture.reserves])
    return (
        <div>
            <div>Capacity: {manufacture.capacity}</div>
            <div>Reserves: {manufacture.reserves}</div>
            <div>Performance: {manufacture.performance}</div>
        </div>
    );
};

export default ManufactureComponent;