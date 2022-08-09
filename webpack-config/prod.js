const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const getBaseConfig = require('./base')

module.exports = merge(getBaseConfig(false), {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
        new HtmlWebpackPlugin({
            // 根据模板插入css/js等生成最终HTML
            filename: './index.html', // 生成的html存放路径，相对于 path
            template: './public/index.html', // html模板路径
            favicon: './public/favicon.ico', // favicon路径
            hash: true, // 为静态资源生成hash值
            minify: {
                // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
            },
        }),
    ],
    optimization: {
        runtimeChunk: 'single', // 为所有 entry 创建一个共享的 runtime
        minimizer: [
            new TerserWebpackPlugin({
                parallel: true,
                exclude: /\/node_modules/,
                extractComments: false,
                terserOptions: {
                    warnings: false,
                    compress: {
                        unused: true,
                        drop_debugger: true,
                    },
                },
            }),
        ],
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm/${packageName.replace('@', '')}`
                    },
                },
                common: {
                    test: /[\\/]src[\\/](utils|components)/,
                    name: 'common', // todo: 区分 component / utils
                },
            },
        },
    },
})
