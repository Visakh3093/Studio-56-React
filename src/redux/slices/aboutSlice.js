import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    body : null
}

const aboutSlice = createSlice({
    name:"about",
    initialState,
    reducers: {
        setBody : (state,action)=>{
            state.body = action.payload
        }
    }
})

export const {setBody} = aboutSlice.actions
export default aboutSlice.reducer