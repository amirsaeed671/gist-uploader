const path = require("path");

module.exports = {
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  rules: {
    "import/named": "off",
    "import/no-cycle": "off",
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": "off",
  },
  plugins: ["prettier"],
  settings: {
    "import/resolver": "node",
  },
  env: {
    node: true,
    browser: true,
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
