import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
