module.exports = {
  root: true,
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["src/pages/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
  ],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
