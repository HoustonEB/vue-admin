const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const config = require('./config/config');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: './src/main.js',
    output: {
        publicPath: '/',
        filename: 'js/[name].bundle.[contenthash].js',
        path: config.path.dist,
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            /**
             * This is because the version of vue without the template compiler (needed) is included by default.
             * To override this default, add this to your webpack.config.js:
             * **/
            vue: 'vue/dist/vue.js',
            '@': resolve('src'),
            '@static': config.path.static,
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        // options: {
                        //     importLoaders: 2
                        // }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // indentedSyntax: true,
                            // sassOptions: {
                            //     indentedSyntax: true
                            // },
                            // 全局sass变量
                            additionalData: `$color: red;`
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'imgs/[name].[hash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[hash][ext]'
                }
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
        }),
        new HtmlWebpackPlugin({
            title: 'vue admin',
            inject: 'body',
            filename: 'index.html',
            template: '/public/index.html',
            scriptLoading: 'blocking',
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            //   },
        }),
    ]
};
