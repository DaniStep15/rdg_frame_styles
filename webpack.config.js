const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = require('./htmlWebpackConfig')
const main_config = require('./htmlMainLocation')

module.exports = env => {
    return {
        mode: env.mode || 'development',
        entry: {
            main: { import: path.resolve(__dirname, './src/index.js') },
            iframe: { import: path.resolve(__dirname, './src/iframe.js') }
        },
        output: {
            path: path.resolve(__dirname, './build'),
            filename: '[name].bundle.js',
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
            new HtmlWebpackPlugin(main_config),
            new HtmlWebpackPlugin(config),
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
            extensions: ['', '.js', '.jsx']
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
