import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const config = {
  headers: {
    authorization: `Bearer ${Cookies.get("token")}`,
  },
};

const initialState = {
  productList: [],
  handleaddproduct: {},
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

      axios
        .post("https://fakestoreapi.com/products", {
          config,
          ...action.payload,
          id: `${Date.now()}`,
        })
        .then((res) => {});

      console.log(state.productList);
    },
    deleteProduct: (state, action) => {
      let deletedProduct;

      axios
        .delete(`/api/products/:${action.payload.id}`, config)
        .then((res) => {
          deletedProduct = res.data;
          window.location.reload();
        });

      state.productList = state.productList.filter(
        (item) => item._id !== deletedProduct
      );
    },
    updateProduct: (state, action) => {
      const requestForUpdate = state.productList.find(
        (item) => item._id === action.payload.id
      );

      state.handleaddproduct = requestForUpdate;
    },
    addUpdatedProduct: (state, action) => {
      axios
        .patch(`/api/products/${action.payload.id}`, action.payload, config)
        .then((res) => console.log(res.data));
    },
    searchProduct: (state, action) => {
      if (
        action.payload.search === null ||
        action.payload.search === undefined
      ) {
        state.productList = [];
      } else {
        state.productList = action.payload.search;
      }
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

export const {
  products,
  addProduct,
  signup,
  login,
  deleteProduct,
  updateProduct,
  addUpdatedProduct,
  searchProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
