const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  mode: "production",
  devtool: "source-map",
});
