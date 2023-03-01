import React, {FC} from 'react';
import {Manufacture} from "../../models/Manufacture";

interface ManufactureProps {
    manufacture: Manufacture
}

const ManufactureComponent: FC<ManufactureProps> = ({manufacture}) => {
    return (
        <div>
            <div>Capacity: {manufacture.capacity}</div>
            <div>Reserves: {manufacture.reserves.toFixed(2)}</div>
            <div>Performance: {manufacture.performance}</div>
        </div>
    );
};

export default ManufactureComponent;