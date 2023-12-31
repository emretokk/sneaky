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
      console.log("focus");
    },
    closeSearchField: (state) => {
      state.searchFieldOn = false;
      console.log("focus lost");
    },
  },
});

// Action creators are generated for each case reducer function
export const { openSearchField, closeSearchField } = searchFieldSlice.actions;

export default searchFieldSlice.reducer;
