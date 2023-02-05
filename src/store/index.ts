import {combineReducers, configureStore} from "@reduxjs/toolkit"
import engineSlice from "./engineSlice";



const rootReducer = combineReducers({
        engine: engineSlice
})

export  const store = configureStore({
    reducer: rootReducer
})