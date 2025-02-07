import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/e-ShopingCartSlice";

const cartStore = configureStore({
  reducer: {
    cartReducer,
  },
});
export default cartStore;
