const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  devServer: {
    port: 8080,
    allowedHosts: "all",
  },
  transpileDependencies: true,
  filenameHashing: true,

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      }),
    ],
  },
});
