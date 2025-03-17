import styles from "./Item.module.css";
import { FaCartPlus } from "react-icons/fa6";

const Item = ({ item }) => {
  return (
    <div className={`${styles.card}`}>
      <img
        style={{ height: "14rem" }}
        src={item.image}
        className={`card-img-top ${styles.card_img}`}
        alt="image"
      />
      <div className="card-body">
        <h5 className={`card-title ${styles.title}`}>{item.title}</h5>
        <p
          className={`card-text ${styles.description}`}
          style={{ overflow: "hidden" }}
        >
          {`${item.description}`.slice(0, 80)}
        </p>

        <p className={styles.category}>category : {item.category}</p>
        <p className={styles.pricing}>price : ${item.price}</p>
        <p className={styles.rating}>
          rating : {item.rating.rate} <span> ⭐⭐⭐⭐⭐</span>
        </p>

        <div className={styles.btnContainer}>
          <button className="btn btn-success">
            <FaCartPlus />
          </button>
          <button className="btn btn-success">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
