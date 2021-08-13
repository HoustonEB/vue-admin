const { merge } = require('webpack-merge')
const commonWebpackConfig = require('./webpack.common')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(commonWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        publicPath: '/',
        port: '9600',
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})


