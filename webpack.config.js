/*
 * @Author: hsl
 * @Descripttion: 打包基本配置
 * @Date: 2022-02-22 15:35:53
 * @LastEditTime: 2022-03-04 12:01:32
 */

const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:12].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    'postcss-preset-env',
                                ],
                            ],
                        },
                    }
                }, 'less-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    'postcss-preset-env',
                                ],
                            ],
                        },
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename:'assets/[name].[contenthash:10][ext]'
                }
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    plugins: [
        new HtmlPlugin({ template: './index.html' }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({ filename: 'dist.[contenthash:12].css' }),
        new ESLintPlugin({ fix: true, extensions: ['js', 'ts', 'tsx'] })
    ],
    performance: {
        //资源文件的最大体积
        maxAssetSize: 30000000,
        maxEntrypointSize: 50000000,
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js')
        }
    }
}