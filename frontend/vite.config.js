import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/form": "http://localhost:8004",
      "/api/products": "http://localhost:8004",
      "/api/products/:id": "http://localhost:8004",
      "/postDataByAnotherAPI": "http://localhost:8004",
    },
  },
  plugins: [react()],
});
