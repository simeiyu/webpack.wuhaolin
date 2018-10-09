const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // JavaScript 执行入口文件
    entry: './main.js',
    output: {
        // 把所有依赖的模块合并输出到一个bundle.js文件
        filename: 'bundle.js',
        // 输出文件都放到dist目录下
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                // 用正则去匹配要用该 loader 转换的css文件
                test: /\.(less|css)$/,
                // use: ['style-loader', 'css-loader?minimize', 'less-loader']
                // 等同于：
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'less-loader'
                ]
                // use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: `[name].css`
        })
        // new MiniCssExtractPlugin('style.css')
    ]
}