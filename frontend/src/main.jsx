import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./routes/App.jsx";
import "./index.css";
import cartStore from "./store/cartStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={cartStore}>
      <App />
    </Provider>
  </StrictMode>
);
