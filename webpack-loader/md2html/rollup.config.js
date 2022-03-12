import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
export default {
  input: "./main.js",
  output: {
    file: "index.js",
    format: "cjs",
  },
  // commonjs 需要放到 transform 插件之前，
  // 但是又个例外， 是需要放到 babel 之后的
  plugins: [resolve(), commonjs()],
};
