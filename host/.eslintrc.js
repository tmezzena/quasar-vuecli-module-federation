/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  overrides: [
    {
      files: ["src/layouts/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
    {
      files: ["src/pages/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
  ],
  globals: {
    process: false,
    require: false,
    module: false,
    __dirname: false,
  },
};
