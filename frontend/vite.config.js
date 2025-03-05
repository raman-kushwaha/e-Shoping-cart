import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/form": "http://localhost:8080",
    },
  },
  plugins: [react()],
});
