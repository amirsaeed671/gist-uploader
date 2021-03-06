const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");
const { merge } = require("webpack-merge");

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetsConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return merge(
    {
      mode,
      resolve: {
        modules: [
          "node_modules",
          "test",
          path.join(__dirname, "src"),
          "custom-hooks",
          "observables",
          "common",
          "utils",
          "context-reducers",
        ],
      },
      entry: {
        app: path.join(__dirname, "src/index.js"),
      },
      output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist"),
      },
      module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: {
              loader: "url-loader",
              options: {
                limit: 5000,
              },
            },
          },
          {
            test: /\.js$/,
            use: {
              loader: "babel-loader",
            },
          },
          {
            test: /\.html$/,
            use: {
              loader: "html-loader",
            },
          },
          {
            test: /\.css$/,
            use: [
              "style-loader",
              { loader: "css-loader", options: { importLoaders: 1 } },
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  plugins: [require("tailwindcss"), require("autoprefixer")],
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          favicon: "./public/favicon.ico",
          template: path.resolve(__dirname, "public/index.html"),
          filename: "index.html",
        }),
        new DotenvWebpackPlugin(),
      ],
    },
    modeConfig(mode),
    presetsConfig({ mode, presets })
  );
};
