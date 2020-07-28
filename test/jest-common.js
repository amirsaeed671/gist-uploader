const path = require("path");

module.exports = {
  rootDir: path.join(__dirname, ".."),
  moduleDirectories: [
    "node_modules",
    "test",
    path.join(__dirname, "../src"),
    "custom-hooks",
    "common",
  ],
  moduleNameMapper: {
    "\\.css$": require.resolve("./style-mock.js"),
  },
  watchPlugins: ["jest-watch-select-projects"],
};
