import path from "path";

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.(ts|js)x$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        options: {
          import: true
        }
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx", ".css"],
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
};

const playerControls = require("./src/playerControls.module.css");

module.exports = playerControls;