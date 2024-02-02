import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search";
import darkModeReducer from "../features/dark";
import scrollReducer from "../features/scroll";
import productsSlice from "../features/getProducts";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    darkMode: darkModeReducer,
    scroll: scrollReducer,
    products: productsSlice,
  },
});
