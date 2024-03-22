
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoader: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    loaderOn: (state) => {
      state.isLoader = true;
    },
    loaderOff: (state) => {
      state.isLoader = false;
    },
  },
});

export const { loaderOn, loaderOff } = loaderSlice.actions;
export default loaderSlice.reducer;
