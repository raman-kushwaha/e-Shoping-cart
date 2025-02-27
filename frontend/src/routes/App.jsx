import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import { useEffect, useState } from "react";
import AddProduct from "../Components/AddProduct";
import UpdateProduct from "../Components/UpdateProduct";
import Logout from "../Components/Logout";
import Profile from "../Components/Profile";
import { useDispatch } from "react-redux";
import { products } from "../store/features/e-ShopingCartSlice";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Products");
  const [isFetch, setFetch] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    setFetch(true);

    const { signal } = controller;

    fetch("https://fakestoreapi.com/products", { signal })
      .then((response) => response.json())
      .then((data) => {
        dispatch(products(data));
        setFetch(false);
      });

    return () => controller.abort;
  }, []);

  return (
    <>
      <Header setSelectedTab={setSelectedTab} />
      {selectedTab === "Products" && <Products isFetch={isFetch} />}
      {selectedTab === "AddProduct" && <AddProduct />}
      {selectedTab === "UpdateProduct" && <UpdateProduct />}
      {selectedTab === "Logout" && <Logout />}
      {selectedTab === "Profile" && <Profile />}
      {/* <Footer /> */}
    </>
  );
};

export default App;
