import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterData: null,
  formdata: {},
  pager: {},
  results: [],
  data: {},
  img: null,
  times1: [],
  times2: [],
  dates3: [],
  dates4: []
};

const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    setFilterData: (state, action) => {
      state.filterData = action.payload;
    },
    setFormdata: (state, action) => {
      return { ...state, ...action.payload };
    },
    setPager: (state, action) => {
      state.pager = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload
    },
    setImg: (state, action) => {
      state.img = action.payload
    },
    setTimes1: (state, action) => {
      state.times1 = action.payload
    },
    setTimes2: (state, action) => {
      state.times2 = action.payload
    },
    setDates3: (state, action) => {
      state.dates3 = action.payload
    },
    setDates4: (state, action) => {
      state.dates4 = action.payload
    }
  },
});

export const { setFilterData, setFormdata, setPager, setResults, setData, setImg, setTimes1, setTimes2, setDates3, setDates4 } = activitiesSlice.actions;
export default activitiesSlice.reducer;