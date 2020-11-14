const path = require('path')
// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 引入html-webpack-plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入clean-webpack-plugin插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 打包入口
    entry: './src/main.js',
    // 打包出口
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, '../dist')
    },
    // 打包规则
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.(jpg|jpeg|png|bmp|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 2048
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.styl(us)?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            }]
    },
    // 插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}