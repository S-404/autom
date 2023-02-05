import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Engine} from "./models/Engine";
import EngineComponent from "./components/engine/EngineComponent";


const defaultLocationProps = {name: 'startPosition', relatedObject: null}
const App: FC = () => {

    const [engine, setEngine] = useState(new Engine(defaultLocationProps))

    function restart() {
        const newLocation = new Engine(defaultLocationProps)
        newLocation.initFactories()
        setEngine(newLocation)
    }

    useEffect(() => {
        restart()
    }, [])

    return (
        <div className="App">
        <EngineComponent {...engine}/>
        </div>
    );
}

export default App;
