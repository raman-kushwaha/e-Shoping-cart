import styles from "./Signup.module.css";

const Signup = () => {
  const handleOnSubmitForm = (event) => {
    event.preventDefault();
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
