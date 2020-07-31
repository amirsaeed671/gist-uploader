const path = require("path");

module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  rules: {
    "import/named": "off",
    "import/no-cycle": "off",
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": "off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "no-debugger": "off",
    "no-console": "off",
    "no-param-reassign": "off",
    "no-return-assign": "off",
    camelcase: "off",
  },
  plugins: ["prettier"],
  settings: {
    "import/resolver": "node",
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  overrides: [
    {
      files: ["**/__test__/**"],
      settings: {
        "import/resolver": {
          jest: {
            jestConfigFile: path.join(__dirname, "./jest.config"),
          },
        },
      },
    },
    {
      files: ["**/src/**"],
      settings: { "import/resolver": "webpack" },
    },
  ],
};
