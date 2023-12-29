import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchFieldOn: false,
};

export const searchFieldSlice = createSlice({
  name: "searchFieldSlice",
  initialState,
  reducers: {
    toggleSearchField: (state) => {
      state.searchFieldOn = !state.searchFieldOn;
      console.log(state.searchFieldOn);
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSearchField } = searchFieldSlice.actions;

export default searchFieldSlice.reducer;
