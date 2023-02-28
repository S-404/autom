import {combineReducers, configureStore} from "@reduxjs/toolkit"
import engineSlice from "./engineSlice";
import productionSlice from "./productionSlice"


const rootReducer = combineReducers({
        engine: engineSlice,
        prod: productionSlice,
})

export  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export type RootState = ReturnType<typeof rootReducer>