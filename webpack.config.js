var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

const envFile = process.env.NODE_ENV === "production" ? "prod.env" : ".env";
var envVariables = require("dotenv").config({
  path: path.join(__dirname, envFile),
});

module.exports = function (env) {
  return {
    resolve: {
      extensions: [".js", ".jsx", ".scss"],
    },
    entry: ["@babel/polyfill", "./src/index.js"],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: false,
      historyApiFallback: { disableDotRule: true },
      port: process.env.PORT || 3030,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index_bundle.js",
      publicPath: "/",
    },
    module: {
      rules: [
        { test: /\.js$|jsx/, use: "babel-loader" },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        {
          test: /\.less$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            {
              loader: "less-loader",
              options: { lessOptions: { strictMath: true } },
            },
          ],
        },
        {test: /\.(png|svg|jpg|jpeg|gif|woff|ttf|eot|webp)$/i,
           use: [{ loader: "file-loader",options:'[name].[ext]' }] },
      ],
    },
    mode: "development",
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(envVariables.parsed),
      }),
    ],
  };
};
