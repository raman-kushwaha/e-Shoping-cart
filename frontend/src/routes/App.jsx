import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import { useState } from "react";
import AddProduct from "../Components/AddProduct";
import UpdateProduct from "../Components/UpdateProduct";
import Logout from "../Components/Logout";
import Profile from "../Components/Profile";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Products");
  return (
    <>
      <Header setSelectedTab={setSelectedTab} />
      {selectedTab === "Products" && <Products />}
      {selectedTab === "AddProduct" && <AddProduct />}
      {selectedTab === "UpdateProduct" && <UpdateProduct />}
      {selectedTab === "Logout" && <Logout />}
      {selectedTab === "Profile" && <Profile />}
      <Footer />
    </>
  );
};

export default App;
