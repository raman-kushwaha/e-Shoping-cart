import styles from "./Signup.module.css";
import { useRef } from "react";
import { signup } from "../store/features/e-ShopingCartSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const userName = useRef();
  const Email = useRef();
  const Password = useRef();
  const confirmPassword = useRef();
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const handleOnSubmitForm = (event) => {
    event.preventDefault();

    dispatch(
      signup({
        username: userName.current.value,
        email: Email.current.value,
        password: Password.current.value,
        confirmpassword: confirmPassword.current.value,
      })
    );
    navigation("/login");
  };
  return (
    <div className="container fluid">
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto my-3">
            <form
              onSubmit={handleOnSubmitForm}
              action="/submit"
              method="post"
              className={`${styles.form} shadow-lg p-5 mx-auto`}
            >
              <h1 className="text-center mb-3">Signup</h1>
              <div className="row">
                <div className="col-12 mb-3">
                  <label htmlFor="username" className="form-control mb-1">
                    username
                  </label>
                  <input
                    ref={userName}
                    id="username"
                    type="text"
                    className="form-control rounded"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="email" className="form-control mb-1">
                    email
                  </label>
                  <input
                    ref={Email}
                    id="email"
                    type="email"
                    className="form-control rounded"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="password" className="form-control mb-1">
                    Password
                  </label>
                  <input
                    ref={Password}
                    id="password"
                    type="password"
                    className="form-control rounded"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="cp" className="form-control mb-1">
                    Confirm Password
                  </label>
                  <input
                    ref={confirmPassword}
                    id="cp"
                    type="password"
                    className="form-control rounded"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div
                  className={`col-12 mb-3 gap-3 justify-content-end ${styles.formBtn}`}
                >
                  <div className={`${styles.formBtn}`}>
                    <button type="reset" className="btn btn-outline-danger">
                      Cancel
                    </button>
                    <button className="btn btn-outline-success">Submit</button>
                  </div>
                </div>
                <div className={`container ${styles.accountPara}`}>
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className={styles.link}>
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
