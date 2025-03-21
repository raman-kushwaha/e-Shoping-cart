import styles from "./AddProduct.module.css";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/features/e-ShopingCartSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AddProduct = () => {
  const productTitle = useRef();
  const productDescription = useRef();
  const productCategory = useRef();
  const productPrice = useRef();
  const productImageURL = useRef();

  const navigation = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!Cookies.get("token")) {
      navigation("/");
    }
  }, []);

  const handleAddProduct = (event) => {
    event.preventDefault();

    const title = productTitle.current.value;
    const description = productDescription.current.value;
    const category = productCategory.current.value;
    const price = Number(productPrice.current.value);
    const imgUrl = productImageURL.current.value;

    axios
      .post("/api/products/add-product", {
        title,
        description,
        category,
        price,
        imgUrl,
        rating: {
          rate: Math.round(Math.random() * 4),
          count: Math.round(Math.random() * 500),
        },
      })
      .then((res) => {
        dispatch(addProduct(res.data));
        navigation("/");
      })
      .catch((err) => {
        alert(err.response.data.err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-md-5 d-flex justify-content-center">
            <form
              action="#"
              className={`shadow px-4 py-3  ${styles.form}`}
              onSubmit={handleAddProduct}
            >
              <h1 className={`${styles.heading}`} id="heading">
                ADD PRODUCT
              </h1>
              <div className="form-floating mb-3">
                <input
                  ref={productTitle}
                  type="text"
                  id="title"
                  className="form-control"
                  placeholder="Mens Casual Premium Slim Fit T-Shirts"
                />
                <label htmlFor="title">title</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  ref={productDescription}
                  type="text"
                  id="description"
                  className="form-control"
                  placeholder="Mens Casual Premium Slim Fit T-Shirts"
                />
                <label htmlFor="description">content</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  ref={productCategory}
                  type="text"
                  id="category"
                  className="form-control"
                  placeholder="men's clothing , jewelery..."
                />
                <label htmlFor="category">category</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  ref={productPrice}
                  type="text"
                  id="price"
                  className="form-control"
                  placeholder="men's clothing , jewelery..."
                />
                <label htmlFor="price">price</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  ref={productImageURL}
                  type="text"
                  id="image"
                  className="form-control"
                  placeholder="men's clothing , jewelery..."
                />
                <label htmlFor="image">image url</label>
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button type="reset" className="btn btn-danger">
                  Cancel
                </button>
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
