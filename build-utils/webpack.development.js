const webpack = require('webpack')

module.exports = () => ({
    devtool: false,
    plugins: [
        new webpack.SourceMapDevToolPlugin({})
    ],
    devServer: {
        historyApiFallback: true,
        port: 3000,
    }
})