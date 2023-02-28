import React, {FC, useEffect} from 'react';
import './App.css';
import {Engine} from "./models/Engine";
import EngineComponent from "./components/engine/EngineComponent";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import {initEngine} from "./store/productionSlice";


const defaultLocationProps = {name: 'startPosition', relatedObject: null}
const App: FC = () => {
    const dispatch = useDispatch()
    const engine = useSelector<RootState, Engine | null>(state => state.prod.engine)

    function restart() {
        const newEngine = new Engine(defaultLocationProps)
        newEngine.initFactories()
        dispatch(initEngine(newEngine))
    }

    useEffect(() => {
        restart()
    }, [])

    return (
        <div className="App">
            {engine !== null ?
                <EngineComponent engine={engine}/>
                :
                null
            }
        </div>
    );
}

export default App;
