import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const cartSlice = createSlice({
  name: "e-ShopingCart",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export default cartReducer;
