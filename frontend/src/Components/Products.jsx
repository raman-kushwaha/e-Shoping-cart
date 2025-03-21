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

    //this api is fake it only show the product and do nothing

    axios.get("https://fakestoreapi.com/products").then((res) => {
      //visit to the item component to chatge item._id to item.id
      dispatch(products(res.data));
      setFetch(false);
    });

    //and this api is real which is capabe ot store the product details insted of show you can update ,
    // delete the product as well if you want to use this api then first comment the above api after that you
    // will be able to use this api

    // axios.get("/api/products").then((res) => {
    //   //visit to the item component to chatge item.id to item._id
    //   dispatch(products(res.data));
    //   setFetch(false);
    // });

    /////////////////////////////////////////////////////////////////////////////////////////
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
              key={item.id} //when you use real api insted of fake then kindly replace id to _id i key
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
