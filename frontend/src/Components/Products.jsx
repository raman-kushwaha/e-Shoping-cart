import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import LoaderSpinner from "./LoaderSpinner";
import { useEffect, useState } from "react";
import axios from "axios";
import MessageComponent from "./MessageComponent";
import { useNavigate } from "react-router-dom";
import {
  deleteProduct,
  products,
  updateProduct,
} from "../store/features/e-ShopingCartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.cartReducer.productList);
  const navigation = useNavigate();

  const [isFetch, setFetch] = useState(true);

  useEffect(() => {
    setFetch(true);

    axios.get("https://e-shoping-cart-backend.onrender.com/api/products").then((res) => {
      dispatch(products(res.data));
      setFetch(false);
    });
  }, []);

  const handleOnDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  const handleOnUpdate = (id) => {
    dispatch(updateProduct({ id }));
    navigation("/update-product");
  };

  return (
    <div className={styles.productList}>
      {isFetch && <LoaderSpinner />}
      {!isFetch && productList.length === 0 ? (
        <MessageComponent />
      ) : (
        productList.map((item) => {
          return (
            <Item
              key={item._id}
              item={item}
              handleOnDelete={handleOnDelete}
              handleOnUpdate={handleOnUpdate}
            />
          );
        })
      )}
    </div>
  );
};

export default Products;
