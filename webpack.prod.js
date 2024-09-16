const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  mode: "production",
  devtool: "source-map",
});
