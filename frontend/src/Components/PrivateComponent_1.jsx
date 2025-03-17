import { Link } from "react-router-dom";

function PrivateComponent_1({ CgProfile, styles, handleProfile }) {
  return (
    <>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/add-product">Add Product</Link>
      </li>
      <li>
        <Link to="/update-product">Update Product</Link>
      </li>
      <li>
        <input type="text" className="form-control" placeholder="search" />
      </li>
      <li>
        <Link to="#" className={styles.profile} onClick={handleProfile}>
          <CgProfile className={`${styles.profileIcon}`} />
          Profile
        </Link>
      </li>
    </>
  );
}

export default PrivateComponent_1;
