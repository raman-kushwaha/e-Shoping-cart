import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
      console.log(state.productList);

      alert(`product deleted successfully`);
      //visit to the product component and change few things as follow

      /*
      let deletedProduct;

      axios.delete(`/api/products/:${action.payload.id}`).then((res) => {
        deletedProduct = res.data;
        window.location.reload();
      });

      state.productList = state.productList.filter(
        (item) => item._id !== deletedProduct
      );
*/
    },
    updateProduct: (state, action) => {
      // const requestForUpdate = state.productList.find(
      //   (item) => item._id === action.payload.id
      // );

      //abover is specify item._id(real api) and below is specify item.id(fakeStore)

      // /*
      const requestForUpdate = state.productList.find(
        (item) => item.id === action.payload.id
      );

      // */

      state.handleaddproduct = requestForUpdate;
    },
    addUpdatedProduct: (state, action) => {
      /*  
          axios //uncomment the below command if you want to use real api to updateProduct
          .patch(`/api/products/${action.payload.id}`, action.payload)
          .then((res) => console.log(res.data))
          .catch((err) => alert(err));
*/
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

      console.log(action.payload.search);
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
