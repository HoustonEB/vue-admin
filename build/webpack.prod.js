const { merge } = require('webpack-merge')
const webpack = require('webpack')
const config = require('./config/config');
const commonWebpackConfig = require('./webpack.common')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const isProd = process.env.NODE_ENV === 'production' ? true : false;
console.log(process.env.NODE_ENV, 'NODE_ENV')

module.exports = merge(commonWebpackConfig, {
    mode: 'production',
    output: {
        publicPath: '/',
        filename: 'js/[name].bundle.[chunkhash].js', // 同步加载模块文件名
        chunkFilename: 'js/[id].chunk.[chunkhash].js', // 异步加载模块,eg:import()
        path: config.path.dist,
        clean: true,
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            env: JSON.stringify('production'),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
    ]
})


