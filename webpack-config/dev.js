const { merge } = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const getBaseConfig = require('./base')

module.exports = merge(getBaseConfig(false), {
    devtool: 'eval-source-map',
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('development') } }),
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
    devServer: {
        contentBase: 'dist',
        historyApiFallback: true,
        inline: true,
        open: false,
        overlay: true,
        disableHostCheck: true,
        port: 5000, // 端口
    },
})
