// <binding ProjectOpened='Run - Development' />
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const config = {
  entry: {
    index: ["./src/index.js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    chunkFilename: "chunks/[id].js",
    publicPath: "",
    sourceMapFilename: "js/[name].js.map"
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  resolve: {
    extensions: [".js"],
    alias: {
      src: path.resolve(__dirname, "./src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: {
          and: [/node_modules/], // exclude libraries in node_modules ...
          not: [
            // except for ones that needs to be transpiled because they use modern syntax
            /@arcgis[\\/]core/
          ]
        },
        use: ["babel"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {}),
  ]
};

module.exports = config;
