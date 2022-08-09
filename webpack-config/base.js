const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const AutoPrefixer = require('autoprefixer')

const resolve = dir => {
    return path.resolve(__dirname, '..', dir)
}

const PostcssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            ident: 'postcss',
            plugins: [AutoPrefixer],
        },
    },
}

module.exports = (isProductionMode, isBuildingLib) => ({
    entry: resolve('./src/index.tsx'),
    output: {
        path: resolve('./dist'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        publicPath: '/',
    },
    module: {
        rules: [
            (!isProductionMode || !isBuildingLib) && {
                test: /\.jsx?$/,
                enforce: 'pre',
                use: [
                    {
                        loader: require.resolve('eslint-loader'),
                        options: {
                            eslintPath: require.resolve('eslint'),
                        },
                    },
                ],
                exclude: /node_modules/,
                include: /src/,
            },
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            // 禁用类型检查器 -- 每次重建时，检查所有ts文件，提高编译效率
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
                include: /src/,
            },
            {
                test: /\.css$/i,
                use: [isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', PostcssLoader],
            },
            {
                test: /\.less$/i,
                use: [
                    isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    PostcssLoader,
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/i,
                type: 'asset/inline',
                include: [resolve('./src/assets/images')],
            },
            {
                test: /\.(png|jpe?g|gif|ico|woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                include: /src/,
                exclude: /node_modules/,
            },
        ].filter(Boolean),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.less'],
        alias: {
            '@': resolve('./src'),
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].min.css',
            chunkFilename: 'css/[name].[contenthash:8].min.css',
        }),
        // 优化 moment 包大小，去除本地化内容
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

        // lodash 按需打包
        new LodashModuleReplacementPlugin({
            paths: true,
            shorthands: true,
        }),
        new CaseSensitivePathsPlugin(),
    ],
})
