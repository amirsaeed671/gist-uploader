const webpack = require('webpack')

module.exports = () => ({
    devtool: false,
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({})
    ],
    devServer: {
        historyApiFallback: true,
        port: 3000,
    }
})