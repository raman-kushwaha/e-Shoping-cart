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
    addProduct: (state, action) => {
      state.productList = [action.payload];

      //fakeStore Server, which is not actually store in the database
      axios
        .post("https://fakestoreapi.com/products", {
          ...action.payload,
          id: `${Date.now()}`,
        })
        .then((res) => {});

      console.log(state.productList);
    },
    deleteProduct: (state, action) => {
      let deletedProduct;

      axios.delete(`/api/products/:${action.payload.id}`).then((res) => {
        deletedProduct = res.data;
        window.location.reload();
      });

      state.productList = state.productList.filter(
        (item) => item._id !== deletedProduct
      );
    },
    signup: (state, action) => {
      axios.post("/form/signup", action.payload);
    },
    login: (state, action) => {
      axios
        .post("/form/login", action.payload)
        .then((res) => console.log(res.data));
    },
  },
});

export const { products, addProduct, signup, login, deleteProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
