const webpack = require('webpack')
const path = require('path');
const config = require('./config/config');
const { merge } = require('webpack-merge')
const commonWebpackConfig = require('./webpack.common')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProd = process.env.NODE_ENV === 'production' ? true : false;
console.log(process.env.NODE_ENV, 'NODE_ENV')

module.exports = merge(commonWebpackConfig, {
    mode: 'development',
    output: {
        publicPath: '/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].chunk.js',
        path: config.path.dist,
        clean: true,
    },
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        publicPath: '/',
        port: '9000',
        compress: true,
        hot: true,
    },
    module: {

    },
    plugins: [
        new webpack.DefinePlugin({
            env: JSON.stringify('devlopment'),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new BundleAnalyzerPlugin()
        // new webpack.HotModuleReplacementPlugin()
    ]
})


