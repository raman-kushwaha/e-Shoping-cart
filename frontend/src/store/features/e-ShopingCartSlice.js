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
    login: (state, action) => {
      // console.log(action.payload);

      fetch("http://localhost:8080/login", {
        method: "post",
        headers: { "content-type": "application/json" },
        // credentials: "include", //cors problem
        body: JSON.stringify(action.payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          try {
            if (data.err) {
              throw new Error("User not found");
            } else if (data) {
              console.log(data);
            }
          } catch (err) {
            alert(err);
          }
        });
    },
  },
});

export const { products, signup, login } = cartSlice.actions;
export default cartSlice.reducer;
