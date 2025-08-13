import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/my-shop-test/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
