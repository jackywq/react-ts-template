const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')

const nodeExternals = require('webpack-node-externals')

const pkg = require('../package.json')
const getBaseConfig = require('./base')

module.exports = merge(getBaseConfig(false, true), {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/components'),
    output: {
        filename: chunkData => (chunkData.chunk.name === pkg.name ? 'index.js' : '[name].js'),
        path: path.join(__dirname, '../lib'),
        libraryTarget: 'umd',
        publicPath: '/',
    },
    externals: [
        nodeExternals(),
    ],
    plugins: [
        new CleanWebpackPlugin()
    ],
})
