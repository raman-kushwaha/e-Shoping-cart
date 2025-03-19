import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import LoaderSpinner from "./LoaderSpinner";
import { useEffect, useState } from "react";
import axios from "axios";
import { deleteProduct, products } from "../store/features/e-ShopingCartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.cartReducer.productList);

  const [isFetch, setFetch] = useState(true);

  useEffect(() => {
    setFetch(true);

    //this api is fake it only show the product and do nothing

    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch(products(res.data));
      if (res.data.id) {
        _id = res.data.id;
      } else if (res.data._id) {
        _id = res.data._id;
      }
      setFetch(false);
    });

    //and this api is real which is capabe ot store the product details insted of show you can update ,
    // delete the product as well if you want to use this api then first comment the above api after that you
    // will be able to use this api

    // axios.get("/api/products").then((res) => {
    //   dispatch(products(res.data));
    //   setFetch(false);
    // });
  }, []);

  const handleOnDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  return (
    <div className={styles.productList}>
      {isFetch && <LoaderSpinner />}
      {!isFetch &&
        productList.map((item) => {
          return (
            //when you use real api insted of fake then kindly replace id to _id i key
            <Item key={item.id} item={item} handleOnDelete={handleOnDelete} />
          );
        })}
    </div>
  );
};

export default Products;
