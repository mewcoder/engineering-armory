import { defineConfig } from "vite";
import { md2html } from "./md2html/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [md2html()],
});
