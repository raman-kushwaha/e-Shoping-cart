import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import LoaderSpinner from "./LoaderSpinner";
import { useEffect, useState } from "react";
import axios from "axios";
import { products } from "../store/features/e-ShopingCartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.cartReducer.productList);

  const [isFetch, setFetch] = useState(true);

  useEffect(() => {
    setFetch(true);
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch(products(res.data));
      if (res.data.id) {
        _id = res.data.id;
      } else if (res.data._id) {
        _id = res.data._id;
      }
      setFetch(false);
    });

    // axios.get("/api/products").then((res) => {
    //   dispatch(products(res.data));
    //   setFetch(false);
    // });
  }, []);

  return (
    <div className={styles.productList}>
      {isFetch && <LoaderSpinner />}
      {!isFetch &&
        productList.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
    </div>
  );
};

export default Products;
