import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Engine} from "./models/Engine";
import EngineComponent from "./components/engine/EngineComponent";
import {Context} from "./Context";

const defaultLocationProps = {name: 'startPosition', relatedObject: null}
const App: FC = () => {

    const [engine, setEngine] = useState<Engine>(new Engine({name: 'init', relatedObject: null}))

    function restart() {
        const newEngine = new Engine(defaultLocationProps)
        newEngine.initFactories()
        setEngine(newEngine)
    }

    function updateEngine() {
        const newEngine = engine?.getCloneEngine()
        setEngine(newEngine)
    }

    useEffect(() => {
        restart()
    }, [])

    useEffect(() => {
        console.log('engine?.devPhase', engine?.devPhase)
    }, [engine?.devPhase])

    return (
        <Context.Provider value={
            {
                engine,
                updateEngine
            }
        }>
            <div className="App">
                {engine !== undefined ?
                    <EngineComponent engine={engine}/>
                    :
                    null
                }
            </div>
        </Context.Provider>
    );
}

export default App;
