import { Link } from "react-router-dom";

function PrivateComponent_1({
  CgProfile,
  styles,
  handleProfile,
  handleOnChange,
}) {
  return (
    <>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/add-product">Add Product</Link>
      </li>
      <li onClick={() => window.location.reload()}>
        {/* window.location.reload() remove this  */}
        <Link to="/update-product">Update Product</Link>
      </li>
      <li>
        <input
          type="text"
          className="form-control"
          placeholder="search"
          onChange={handleOnChange}
        />
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
