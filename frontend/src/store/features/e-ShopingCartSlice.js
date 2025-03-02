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
    signup: (state, action) => {
      fetch("http://localhost:8080/signup", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...action.payload }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    },
  },
});

export const { products, signup } = cartSlice.actions;
export default cartSlice.reducer;
