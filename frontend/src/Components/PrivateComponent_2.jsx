import { Link } from "react-router-dom";

function PrivateComponent_2({ handleOnChange }) {
  return (
    <>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li className={`d-flex gap-0`}>
        <input
          type="text"
          className={`form-control `}
          placeholder="search"
          onChange={handleOnChange}
        />
      </li>
    </>
  );
}

export default PrivateComponent_2;
