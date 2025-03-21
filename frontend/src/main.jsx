import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./routes/App.jsx";
import "./index.css";
import cartStore from "./store/cartStore.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Components/Products.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import AddProduct from "./Components/AddProduct.jsx";
import UpdateProduct from "./Components/UpdateProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/update-product",
        element: <UpdateProduct />,
      },
      {
        path: "/update-product",
        element: <UpdateProduct />,
        children: [
          {
            path: "/update-product/:id",
            element: <UpdateProduct />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={cartStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
