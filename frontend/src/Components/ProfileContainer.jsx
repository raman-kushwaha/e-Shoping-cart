import styles from "./ProfileContainer.module.css";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const ProfileContainer = () => {
  const navigation = useNavigate();
  const token = Cookies.get("token");
  let decode;
  let user;

  if (token) {
    decode = jwtDecode(token);
    user = decode._doc;
  }

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.reload();
    navigation("/signup");
  };
  return (
    <div className={`${styles.profileContainer} px-5 py-3`}>
      <ul>
        {user && (
          <>
            <li>
              <CgProfile className={styles.icon} />{" "}
              <a href="mailto:someone@example.com">{user.email}</a>
            </li>
            <li>{user.username}</li>
          </>
        )}
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default ProfileContainer;
