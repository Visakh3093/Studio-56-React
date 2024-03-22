import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterdata: [],
    results: [],
    page: 0,
    pager: {},
    data: null,
    img: []
}

const mediacenterSlice = createSlice({
    name: "mediacenter",
    initialState,
    reducers: {
        setFilterdata: (state, action) => {
            state.filterdata = action.payload
        },
        setResults: (state, action) => {
            state.results = action.payload
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setPager: (state, action) => {
            state.pager = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        },
        setImg: (state, action) => {
            state.img = action.payload
        }
    }
})

export const { setFilterdata, setResults, setPager, setPage, setData, setImg } = mediacenterSlice.actions
export default mediacenterSlice.reducer