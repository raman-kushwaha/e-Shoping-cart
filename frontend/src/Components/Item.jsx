import styles from "./Item.module.css";
import { FaCartPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Item = ({ item, handleOnDelete, handleOnUpdate }) => {
  const navigation = useNavigate();

  const token = Cookies.get("token") ? Cookies.get("token") : null;

  return (
    <div className={`${styles.card}`}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {Cookies.get("token") && (
          <MdDelete onClick={() => handleOnDelete(item._id)} />
        )}
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
          rating : {item.rating.rate} <span> ⭐⭐⭐⭐⭐ </span>
        </p>

        <div className={styles.btnContainer}>
          <button
            className="btn btn-success"
            onClick={() => {
              if (token === null) {
                alert("Unauthorized User");
                navigation("/login");
              } else if (token) {
                alert("Order add to cart successfully");
              }
            }}
          >
            <FaCartPlus />
          </button>
          {Cookies.get("token") && (
            <button
              className="btn btn-danger"
              onClick={() => handleOnUpdate(item._id)}
            >
              {<GrUpdate className={styles.icon} />}
            </button>
          )}
          <button
            className="btn btn-success"
            onClick={() => {
              if (token === null) {
                alert("Unauthorized User");
                navigation("/login");
              } else if (token) {
                alert("Order Place successfully");
              }
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
