const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;

const path = require("path");

module.exports = defineConfig({
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  transpileDependencies: ["quasar"],

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },

  publicPath: "http://localhost:3001/",

  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "app1",
        filename: "remoteEntry.js",
        remotes: {
          host: "host@http://localhost:3000/remoteEntry.js",
        },
        exposes: {
          "./TestComp1.vue": "./src/components/TestComp1.vue",
          "./federation/inject.js": "./src/federation/inject.js",
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
        pages: path.resolve(__dirname, "./src/pages"),
      },
    },
  },
});
