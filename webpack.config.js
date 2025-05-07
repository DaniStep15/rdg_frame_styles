const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { key, htmlfile } = require('./src/location_switcher')

const entrypoint = {
    registration: { main: { import: path.resolve(__dirname, './src/js-by-page/registration.js') } },
    upload: { main: { import: path.resolve(__dirname, './src/js-by-page/upload.js') } },
    login_mail: { main: { import: path.resolve(__dirname, './src/js-by-page/email.js') } },
    login_identity: { main: { import: path.resolve(__dirname, './src/js-by-page/identity.js') } },
    exist_service: { main: { import: path.resolve(__dirname, './src/js-by-page/exist-service.js') } },
    order_description: { main: { import: path.resolve(__dirname, './src/js-by-page/order-description.js') } }
}

module.exports = env => {
    return {
        mode: env.mode || 'development',
        entry: entrypoint[key],
        output: {
            path: path.resolve(__dirname, './build'),
            filename: '[name].js',
            assetModuleFilename: 'images/[hash][ext][query]',
            clean: true,
            publicPath: '/'
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    shared: {
                        chunks: 'all',
                        test: /[\\/]node_modules[\\/]/,
                        name: 'shared',
                        enforce: true
                    }
                }
            }
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [{ from: 'static3', to: 'static3' }]
            }),
            new HtmlWebpackPlugin(htmlfile),
            new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: 'css/[name].css'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/[name][hash:5][ext]'
                    }
                },
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                    options: {
                        sources: {
                            list: [
                                {
                                    tag: 'img',
                                    attribute: 'src',
                                    type: 'src'
                                }
                            ]
                        }
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devServer: {
            port: 5050,
            open: true,
            historyApiFallback: true,
            static: path.join(__dirname, 'build'),
            allowedHosts: 'all'
        }
    }
}
