import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/form": "https://e-shoping-cart.onrender.com",
      "/api/products": "https://e-shoping-cart.onrender.com",
      "/api/products/:id": "https://e-shoping-cart.onrender.com",
      "/postDataByAnotherAPI": "https://e-shoping-cart.onrender.com",
    },
  },
  plugins: [react()],
});
