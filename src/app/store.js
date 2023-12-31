import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search";
import darkModeReducer from "../features/dark";
import scrollReducer from "../features/scroll";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    darkMode: darkModeReducer,
    scroll: scrollReducer,
  },
});
