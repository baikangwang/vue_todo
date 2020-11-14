const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

const webpack = require('webpack')

const devConfig = {
    // 打包模式
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    // 开发server
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true
    },
    // 插件
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge.merge(baseConfig, devConfig);