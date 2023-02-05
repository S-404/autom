import {createSlice} from "@reduxjs/toolkit";

const engineSlice = createSlice({
    name:'engine',
    initialState:{
        lastIdSequence: 0
    },
    reducers:{
        touchIdSequence:(state,action)=>{
            state.lastIdSequence++
        }

    }
})
export default engineSlice.reducer
export const {touchIdSequence} = engineSlice.actions