import { Link } from "react-router-dom";

function PrivateComponent_2({ styles }) {
  return (
    <>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <input type="text" className="form-control" placeholder="search" />
      </li>
    </>
  );
}

export default PrivateComponent_2;
