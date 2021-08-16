const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonWebpackConfig = require('./webpack.common')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(commonWebpackConfig, {
    mode: 'development',
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
        publicPath: '/',
        port: '9600',
        compress: true,
        hot: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            env: JSON.stringify('devlopment'),
        }),
        // new BundleAnalyzerPlugin()
        new webpack.HotModuleReplacementPlugin()
    ]
})


