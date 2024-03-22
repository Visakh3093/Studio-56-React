
import { createSlice } from "@reduxjs/toolkit";

const localStorageKey = "selectedLanguage";

const initialState = {
  lang: localStorage.getItem(localStorageKey) || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
       localStorage.setItem(localStorageKey, action.payload);
    },
  },
});

export default languageSlice.reducer;
export const { setLanguage } = languageSlice.actions;
