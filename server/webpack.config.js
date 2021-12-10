const path = require("path");
const { NODE_ENV = "production" } = process.env;
const nodeExternals = require("webpack-node-externals");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");

module.exports = {
  entry: "./src/index.ts",
  mode: NODE_ENV,
  target: "node",
  externals: [nodeExternals()],
  watch: NODE_ENV === "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      fs: false,
      net: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve("./tsconfig.json"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd: ["yarn start:dev"],
    }),
  ],
};
