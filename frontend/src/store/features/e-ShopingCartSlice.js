import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
      axios.post("/form/signup", action.payload).then((res) => {
        console.log(res);
      });
    },
    login: (state, action) => {
      console.log(action.payload);
      axios.post("/form/login", action.payload).then((res) => {
        console.log(res);
      });
    },
  },
});

export const { products, signup, login } = cartSlice.actions;
export default cartSlice.reducer;
