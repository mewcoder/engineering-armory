import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser"; // 压缩代码
import nodeResolve from "@rollup/plugin-node-resolve"; // 解析node_modules
import commonjs from "@rollup/plugin-commonjs"; // 解析commonjs
export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/main.js",
      format: "esm",
    },
    {
      file: "dist/main.min.js",
      format: "esm",
      plugins: [terser()],
    },
    {
      file: "dist/main.common.js",
      format: "cjs",
    }
  ],
  plugins: [json(), nodeResolve(), commonjs()], // 默认不支持json
  external: ["vue"], // 不打包vue
};


/**
 * rollup 基本 ESM 静态分析 可以 tree-shaking 优化
 * 
 * 默认不支持cjs包 
 */