import styles from "./Footer.module.css";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className={`container ${styles.container}`}>
        <p className="d-flex align-items-center justify-content-center">
          copyright <MdOutlineCopyright />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
