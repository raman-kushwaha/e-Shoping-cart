import styles from "./Header.module.css";
import { CgProfile } from "react-icons/cg";
import { IoReorderThreeOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import PrivateComponent_1 from "./PrivateComponent_1";
import PrivateComponent_2 from "./PrivateComponent_2";

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
    navigation("/signup");
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
                <PrivateComponent_2 />
              ) : (
                <PrivateComponent_1
                  handleLogout={handleLogout}
                  CgProfile={CgProfile}
                  styles={styles}
                />
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
