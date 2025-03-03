import { useRef } from "react";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { login } from "../store/features/e-ShopingCartSlice";

const Login = () => {
  const Email = useRef();
  const Password = useRef();

  const dispatch = useDispatch();

  const handleOnSubmitForm = (event) => {
    event.preventDefault();

    dispatch(
      login({
        email: Email.current.value,
        password: Password.current.value,
      })
    );
  };
  return (
    <div className="container fluid">
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto my-5">
            <form
              onSubmit={handleOnSubmitForm}
              action="/submit"
              method="post"
              className={`${styles.form} shadow-lg p-5 mx-auto`}
            >
              <h1 className="text-center mb-3">Login</h1>
              <div className="row">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
