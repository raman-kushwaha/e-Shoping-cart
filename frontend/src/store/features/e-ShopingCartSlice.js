import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

const cartSlice = createSlice({
  name: "e-ShopingCart",
  initialState,
  reducers: {
    products: (state, action) => {
      state.productList = [...action.payload];
    },
    addProducts: (state, action) => {
      console.log("Add Product");
    },
  },
});

export const { products } = cartSlice.actions;
export default cartSlice.reducer;
