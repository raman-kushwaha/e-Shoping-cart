import styles from "./Products.module.css";
import { useSelector } from "react-redux";
import Item from "./Item";
import LoaderSpinner from "./LoaderSpinner";

const Products = ({ isFetch }) => {
  const productList = useSelector((state) => state.cartReducer.productList);

  return (
    <div className={styles.productList}>
      {isFetch && <LoaderSpinner />}
      {!isFetch &&
        productList.map((item) => <Item key={item.id} item={item} />)}
    </div>
  );
};

export default Products;
