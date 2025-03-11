import styles from "./Header.module.css";
import { CgProfile } from "react-icons/cg";
import { IoReorderThreeOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  let token = Cookies.get("token");
  const navigation = useNavigate();

  const handleSlideBar = () => {
    const ul = document.querySelector(".list");
    ul.classList.toggle(`${styles.openSlide}`);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.reload();
    navigation("/login");
  };

  return (
    <header className={`container-fluid ${styles.fluid} shadow`}>
      <nav className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h2>
              <Link to="/" className={styles.logo}>
                LOGO
              </Link>
            </h2>
          </div>

          <div className="col-md-8 d-flex justify-content-end">
            <ul className={`${styles.firstList} list `}>
              {!token ? (
                <>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                  <li>
                    <Link to="/">Products</Link>
                  </li>
                  <li>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="search"
                    />
                  </li>
                </>
              ) : (
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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="search"
                    />
                  </li>
                  <li>
                    <Link to="/">
                      <CgProfile className={`${styles.profileIcon}`} />
                    </Link>
                  </li>
                </>
              )}
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
