import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results : []
}


const equipmentSlice = createSlice({
    name:"equipment",
    initialState,
    reducers: {
        setResults : (state,action)=>{
            state.results = action.payload
        }
    }
})

export const {setResults} = equipmentSlice.actions
export default equipmentSlice.reducer