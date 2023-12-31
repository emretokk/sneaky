import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search";
import darkModeReducer from "../features/dark";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    darkMode: darkModeReducer,
  },
});
