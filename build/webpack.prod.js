const {merge} = require('webpack-merge')
const commonWebpackConfig = require('./webpack.common')


module.exports = merge(commonWebpackConfig, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            env: JSON.stringify('production'),
        }),
    ]
})


