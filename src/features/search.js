import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchFieldOn: false,
};

export const searchFieldSlice = createSlice({
  name: "searchFieldSlice",
  initialState,
  reducers: {
    openSearchField: (state) => {
      state.searchFieldOn = true;
    },
    closeSearchField: (state) => {
      state.searchFieldOn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openSearchField, closeSearchField } = searchFieldSlice.actions;

export default searchFieldSlice.reducer;
