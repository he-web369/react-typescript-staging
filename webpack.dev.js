/*
 * @Author: hsl
 * @Descripttion: 开发环境打包配置
 * @Date: 2022-02-23 11:48:16
 * @LastEditTime: 2022-03-04 14:16:20
 */
const baseConfig = require('./webpack.config')
const { merge } = require('webpack-merge')

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 9000,
        hot: true,
        proxy: {
            '/': 'http://www.baidu.com/'
        }
    }
})