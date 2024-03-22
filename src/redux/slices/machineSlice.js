import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: '',
    Moreresults: ""

}

const machineSlice = createSlice({
    name: "machines",
    initialState,
    reducers: {
        setResults: (state, action) => {
            state.results = action.payload
        },
        setMoreResults: (state, action) => {
            state.Moreresults = action.payload
        }
    }

})

export const { setResults, setMoreResults } = machineSlice.actions
export default machineSlice.reducer