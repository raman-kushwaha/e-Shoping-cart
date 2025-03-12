import styles from "./ProfileContainer.module.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProfileContainer = () => {
  const navigation = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.reload();
    navigation("/signup");
  };
  return (
    <div className={`${styles.profileContainer} px-5 py-3`}>
      <ul>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default ProfileContainer;
