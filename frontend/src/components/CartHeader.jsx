import { FaHome } from "react-icons/fa";

const CartHeader = () => {
  return (
    <header class="p-3 text-bg-dark">
      <div class="container-fluid">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-4"
          >
            <FaHome className="fs-1"></FaHome>
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-2 text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                Add Product
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                Update Product
              </a>
            </li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class="form-control form-control-light text-bg-light"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" class="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CartHeader;
