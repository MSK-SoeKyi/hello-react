import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      "/tasks": {
        target: "http://localhost:5173",
        changeOrigin: true,
      },
    },
  },
});
