import styles from "./Item.module.css";
import { FaCartPlus } from "react-icons/fa6";

const Item = ({ item }) => {
  return (
    <div class={`${styles.card} px-2`} style={{ width: "20rem" }}>
      <img
        src={item.image}
        className={`${styles.imgSection} img-fluid`}
        alt=""
      />
      <div class={`${styles.card_body}`}>
        <h5 class={`${styles.card_title}`}>{item.title}</h5>
        <p class={`${styles.card_text}`}>{`${item.description}`.slice(0,100) + "..."}</p>
        <p className={`${styles.category}`}>Category : {item.category}</p>
        <div className={styles.cont}>
          <div className={`${styles.rating}`}>
            <p>rating : {item.rating.rate} ⭐⭐⭐⭐⭐</p>
          </div>
          <p className={`${styles.pricing}`}>
            <span>Price</span> : ${item.price}
          </p>
        </div>
      </div>
      <div className={styles.btnClass}>
        <button className="btn btn-success d-flex align-items-center gap-3">
          <FaCartPlus className="fs-3" /> Add To Cart
        </button>
        <button className="btn btn-success">Buy</button>
      </div>
    </div>
  );
};

export default Item;

// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg
