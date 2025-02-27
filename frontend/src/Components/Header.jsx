import styles from "./Header.module.css";
import { CgProfile } from "react-icons/cg";
import { IoReorderThreeOutline } from "react-icons/io5";

const Header = ({ setSelectedTab }) => {
  const handleSlideBar = () => {
    const ul = document.querySelector(".list");

    ul.classList.toggle(`${styles.openSlide}`);
    console.log(ul);
  };
  return (
    <header className={`container-fluid ${styles.fluid}`}>
      <nav className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h2>LOGO</h2>
          </div>

          <div className="col-md-8 d-flex justify-content-end">
            <ul className={`${styles.firstList} list`}>
              <li onClick={() => setSelectedTab("Login")}>
                <a href="#">Login</a>
              </li>
              <li onClick={() => setSelectedTab("Signup")}>
                <a href="#">Signup</a>
              </li>
              <li onClick={() => setSelectedTab("Products")}>
                <a href="#">Products</a>
              </li>
              <li onClick={() => setSelectedTab("AddProduct")}>
                <a href="#">Add Product</a>
              </li>
              <li onClick={() => setSelectedTab("UpdateProduct")}>
                <a href="#">Update Product</a>
              </li>
              <li onClick={() => setSelectedTab("Logout")}>
                <a href="#">Logout</a>
              </li>
              <li>
                <input
                  type="text"
                  className="form-control"
                  placeholder="search"
                />
              </li>
              <li onClick={() => setSelectedTab("Profile")}>
                <a href="#">
                  <CgProfile className={`${styles.profileIcon}`} />
                </a>
              </li>
            </ul>
            <IoReorderThreeOutline
              className={`${styles.sideIcon}`}
              onClick={handleSlideBar}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
