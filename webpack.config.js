var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        // hmr: [
        //     'webpack-hot-middleware/client?reload=true'
        // ],
        index: [
            './js/8-functions/length.js'
        ]
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    "babel-loader"
                ]
            },{
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },{
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    'url-loader?limit=10000&name=img/[hash:8].[name].[ext]'
                ]
            },{
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            } 
        ]           
    },
    resolve: {
                extensions: ['.js', '.jsx', '.json', '.css']
            },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'ES6',
            filename: 'build/es6.html',
            template: './index.html',
            inject: 'body',
            hash: true,
            chunks: ['index']
            })
        ]
}