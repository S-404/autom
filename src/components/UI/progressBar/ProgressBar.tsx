import {FC} from "react";

interface IProgressBar {
    value: number;
    max: number;
}

const ProgressBar: FC<IProgressBar> = ({value, max}) => {
    return (
        <div>
            <progress value={value} max={max}/>
        </div>
    )
}
export default ProgressBar