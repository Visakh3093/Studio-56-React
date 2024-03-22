import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
    name:"privacy",
    initialState:{
        show:false
    },
    reducers:{
        showOn : (state)=>{
            console.log("Show On is Called");
            state.show = true
        },
        showOff : (state)=>{
            console.log("Show off is called")
            state.show = false
        }
    }
})

export const {showOff,showOn} = privacySlice.actions
export default privacySlice.reducer