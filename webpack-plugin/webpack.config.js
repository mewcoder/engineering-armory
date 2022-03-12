const path = require("path");
const { FileListPlugin, ExecuteShellPlugin } = require('./plugins');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new FileListPlugin(),
    new ExecuteShellPlugin({
      postBuild: ["echo =============success=============="],
    })
  ]
};
