const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require("workbox-webpack-plugin");


module.exports = {
    devServer: {
        host: "localhost",
        port: "8080",
        proxy: [
          {
            context: ["/checkStatement"],
            target: "http://localhost:8000"
          }
        ],
        hot: true,
        overlay: true,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        historyApiFallback: true
      },
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle-[hash].min.js",
        libraryTarget: "var",
        library: "Client"
      },
    plugins: [
      new CleanWebpackPlugin({
        // Simulate the removal of files
        dry: true,
        // Write Logs to Console
        verbose: true,
        // Automatically remove all unused webpack assets on rebuild
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: false
      }),
      new HtmlWebPackPlugin({
              template: "./src/client/views/index.html",
              filename: "./index.html",
          }),
          new WorkboxPlugin.GenerateSW()
      ]
}
