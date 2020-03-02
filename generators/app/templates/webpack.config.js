const path = require("path");
const webpack = require("webpack");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./app.js",
    other: "./other.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.sass|\.scss/,
        use: [
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: "images/" // 图片打包后存放的目录
            }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true, // 热替换
    contentBase: path.join(__dirname, "build"), // server文件的根目录
    compress: true,
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMR允许在运行时更新各种模块，而无需进行完全刷新
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: path.resolve(__dirname, "build/index.html"),
      chunks: ["app"]
    }),
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: path.resolve(__dirname, "build/other.html"),
      chunks: ["other"]
    }),
    new UglifyJSPlugin(),
    // new ExtractTextWebpackPlugin("css/style.css")
  ]
};
