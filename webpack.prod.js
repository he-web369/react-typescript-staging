/*
 * @Author: hsl
 * @Descripttion: 生产环境打包配置
 * @Date: 2022-02-23 11:48:34
 * @LastEditTime: 2022-02-24 17:07:28
 */
const baseConfig = require('./webpack.config')
const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = merge(baseConfig, {
    mode: 'production',
    optimization: {
        usedExports: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                },
            },
        },
    },
    devtool: 'eval-nosources-cheap-module-source-map'
})