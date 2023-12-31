import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerVisible: true,
  previousScrollPosition: 0,
};

export const handleScrollSlice = createSlice({
  name: "handleScrollSlice",
  initialState,
  reducers: {
    handleScroll: (state) => {
      console.log("handlescroll invoked");
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > state.previousScrollPosition) {
        state.headerVisible = false;
      } else {
        state.headerVisible = true;
      }
      state.previousScrollPosition = currentScrollPosition;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleScroll } = handleScrollSlice.actions;

export default handleScrollSlice.reducer;
