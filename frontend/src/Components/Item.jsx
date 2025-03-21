import styles from "./Item.module.css";
import { FaCartPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

const Item = ({ item, handleOnDelete, handleOnUpdate }) => {
  return (
    <div className={`${styles.card}`}>
      {/* change item.id if you want to run fakeStore api or // if change
        item._id if you want to run real database api */}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <MdDelete onClick={() => handleOnDelete(item.id)} />
      </span>
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
          <button
            // change item.id if you want to run fakeStore api or  change  item._id if you want to run real database api
            className="btn btn-danger"
            onClick={() => handleOnUpdate(item.id)}
          >
            {<GrUpdate className={styles.icon} />}
          </button>
          <button className="btn btn-success">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
