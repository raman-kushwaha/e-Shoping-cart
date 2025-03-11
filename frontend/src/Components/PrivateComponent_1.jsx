import { Link } from "react-router-dom";

function PrivateComponent_1({ handleLogout, CgProfile, styles }) {
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
      <li onClick={handleLogout}>Logout</li>
      <li>
        <input type="text" className="form-control" placeholder="search" />
      </li>
      <li>
        <Link to="/">
          <CgProfile className={`${styles.profileIcon}`} />
        </Link>
      </li>
    </>
  );
}

export default PrivateComponent_1;
