const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;

const path = require("path");

module.exports = defineConfig({
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  transpileDependencies: ["quasar"],

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },

  publicPath: "http://localhost:3000/",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "host",
        filename: "remoteEntry.js",
        remotes: {
          app1: "app1@http://localhost:3001/remoteEntry.js",
        },
        exposes: {
          "./layouts/main/index.vue": "./src/layouts/main/index.vue",
          "./layouts/main/store.js": "./src/layouts/main/store.js",
          "./boot/index.js": "./src/boot/index.js",
        },
        shared: {
          "core-js": {
            singleton: true,
          },
          vue: {
            singleton: true,
          },
          "vue-router": {
            singleton: true,
          },
          "vue-i18n": {
            singleton: true,
          },
          pinia: {
            singleton: true,
          },
          quasar: {
            singleton: true,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        src: path.resolve(__dirname, "./src"),
        components: path.resolve(__dirname, "./src/components"),
        layouts: path.resolve(__dirname, "./src/layouts"),
        pages: path.resolve(__dirname, "./src/pages"),
        boot: path.resolve(__dirname, "./src/boot"),
      },
    },
  },
});
