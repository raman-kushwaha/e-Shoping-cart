import styles from "./AddProduct.module.css";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  addUpdatedProduct,
} from "../store/features/e-ShopingCartSlice";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const UpdateProduct = () => {
  const productTitle = useRef();
  const productDescription = useRef();
  const productCategory = useRef();
  const productPrice = useRef();
  const productImageURL = useRef();

  const { handleaddproduct } = useSelector((store) => store.cartReducer);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (!Cookies.get("token")) {
      navigation("/");
    }

    if (Object.keys(handleaddproduct).length === 0) {
    } else {
      productTitle.current.value = handleaddproduct.title;
      productDescription.current.value = handleaddproduct.description;
      productCategory.current.value = handleaddproduct.category;
      productPrice.current.value = handleaddproduct.price;
      productImageURL.current.value = handleaddproduct.image;
    }
  }, []);

  const handleUpdatedProduct = (event) => {
    event.preventDefault();
    const title = productTitle.current.value;
    const description = productDescription.current.value;
    const category = productCategory.current.value;
    const price = productPrice.current.value;
    const imgUrl = productImageURL.current.value;

    if (
      title === "" ||
      description === "" ||
      category === "" ||
      price === "" ||
      imgUrl === ""
    ) {
      alert("all fields must required");
    }
    dispatch(
      addUpdatedProduct({
        id: handleaddproduct._id,
        title,
        description,
        category,
        price,
        imgUrl,
      })
    );
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-md-5 d-flex justify-content-center">
            <form
              action="#"
              className={`shadow px-4 py-3  ${styles.form}`}
              onClick={handleUpdatedProduct}
            >
              <h1 className={`${styles.heading}`} id="heading">
                Update PRODUCT
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
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigation("/");
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
