import {createContext} from "react";
import {Engine} from "./models/Engine";

interface IContextValue {
    engine: Engine
    updateEngine: () => void
}

export const Context = createContext<IContextValue>({
    engine: new Engine({name: 'init', relatedObject: null}), updateEngine: () => {}
})