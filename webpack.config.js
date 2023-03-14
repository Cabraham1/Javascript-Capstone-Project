const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Development",
    }),
  ],

  devServer: {
    static: "./dist",
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  optimization: {
    runtimeChunk: "single",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
