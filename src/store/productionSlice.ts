import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Engine} from "../models/Engine";

interface IProductionState {
    engine: Engine | null
}

const productionSlice = createSlice({
    name: 'production',
    initialState: {
        engine: null
    } as IProductionState,
    reducers: {
        initEngine: (state, action:PayloadAction<Engine>) => {
            state.engine = action.payload
        }
    }
})

export default productionSlice.reducer
export const {initEngine} = productionSlice.actions