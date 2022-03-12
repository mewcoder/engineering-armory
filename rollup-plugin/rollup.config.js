
import { md2html } from "./md2html/plugin";

export default {
  input: "./src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "esm",
  },
  plugins: [md2html()],
};
