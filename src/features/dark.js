import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkModeOn: false,
};

export const darkModeSlice = createSlice({
  name: "darkModeSlice",
  initialState,
  reducers: {
    setDarkModeOn: (state) => {
      state.darkModeOn = true;
    },
    setDarkModeOff: (state) => {
      state.darkModeOn = false;
    },
    toggleDarkMode: (state) => {
      const element = document.querySelector("html");
      if (state.darkModeOn) {
        element.classList.remove("dark");
      } else {
        element.classList.add("dark");
      }

      state.darkModeOn = !state.darkModeOn;
      console.log("dark mode: ", state.darkModeOn);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDarkModeOn, setDarkModeOff, toggleDarkMode } =
  darkModeSlice.actions;

export default darkModeSlice.reducer;
