const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = [
   {
      mode: "development",
      entry: ["@babel/polyfill", "./server/server.js"],
      output: {
         path: path.join(__dirname, "./build/"),
         filename: "server.js",
         libraryTarget: "commonjs2",
         publicPath: "/"
      },
      target: "node",

      externals: nodeExternals(),
      module: {
         rules: [
            {
               test: /\.(js|jsx)$/,
               exclude: /node_modules/,
               use: [
                  {
                     loader: "babel-loader"
                  }
               ]
            }
         ]
      },
      resolve: {
         extensions: [".js", ".jsx"]
      }
   },
   {
      mode: "development",
      entry: ["@babel/polyfill", "./src/index.js"],
      output: {
         path: path.join(__dirname, "./build/"),
         publicPath: "/",
         filename: "bundle.js"
      },
      module: {
         rules: [
            {
               test: /\.(js|jsx)$/,
               exclude: /node_modules/,
               use: [
                  {
                     loader: "babel-loader"
                  }
               ]
            }
         ]
      },
      resolve: {
         extensions: [".js", ".jsx"]
      }
   }
];
