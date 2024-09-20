const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./handler.ts",
  target: "node",
  mode: "production",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: [[path.resolve(__dirname, ".webpack"), path.resolve(__dirname, "node_modules")]],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, ".webpack"),
    filename: "handler.js",
  },
};
