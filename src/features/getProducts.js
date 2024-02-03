import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts", async () => {
  const { data } = await axios.get(`http://localhost:4000/products`);
  return data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: true,
    productsData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.productsData = action.payload;
    });
  },
});

export default productsSlice.reducer;
