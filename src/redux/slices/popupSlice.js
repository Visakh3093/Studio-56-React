import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        popup : false
}

const popupSlice = createSlice({
    name:'popup',
    initialState,
    reducers:{
        setPopupOn : (state)=>{
           state.popup = true
        },
        setPopupOff : (state)=>{
            state.popup =false
        }
    }
})

export const {setPopupOff,setPopupOn} = popupSlice.actions
export default popupSlice.reducer

