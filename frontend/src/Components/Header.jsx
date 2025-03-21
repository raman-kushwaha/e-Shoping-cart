import styles from "./Header.module.css";
import { CgProfile } from "react-icons/cg";
import { IoReorderThreeOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import PrivateComponent_1 from "./PrivateComponent_1";
import PrivateComponent_2 from "./PrivateComponent_2";
import { useState } from "react";
import ProfileContainer from "./ProfileContainer";
import { useDispatch } from "react-redux";
import { searchProduct } from "../store/features/e-ShopingCartSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const config = {
  headers: {
    authorization: `Bearer ${Cookies.get("token")}`,
  },
};

const Header = () => {
  let token = Cookies.get("token");
  const [isProfileVisible, setProfileVisible] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSlideBar = () => {
    const ul = document.querySelector(".list");
    ul.classList.toggle(`${styles.openSlide}`);
  };

  function handleProfile(event) {
    setProfileVisible(!isProfileVisible);
  }

  function handleOnChange(event) {
    console.log(event);
  }

  function handleOnChange(event) {
    axios
      .get(`/api/products/search/${event.target.value}`, config)
      .then((res) => {
        if (event.target.value === "") {
          dispatch(
            searchProduct({
              search: [],
            })
          );
        } else {
          dispatch(
            searchProduct({
              search: res.data,
            })
          );
        }
      })
      .catch((err) => console.log(err));

    // console.log(event.target.value);
  }
  return (
    <>
      <header className={`container-fluid ${styles.fluid} shadow`} id="header">
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
                  <PrivateComponent_2 handleOnChange={handleOnChange} />
                ) : (
                  <PrivateComponent_1
                    CgProfile={CgProfile}
                    styles={styles}
                    handleProfile={handleProfile}
                    handleOnChange={handleOnChange}
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
      {isProfileVisible && <ProfileContainer />}
    </>
  );
};

export default Header;
