const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack.loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dir_client = path.resolve(__dirname, '../static/scripts');

module.exports = {
    entry: path.resolve(dir_client, 'app.js'),
    output: {
        path: path.join(__dirname, '../static/__build__'),
        filename: '[hash].bundle.js',
        chunkFilename: '[id].[hash].bundle.js',
        publicPath: '/__build__/'
    },
    module: {
        loaders: loaders
    },
    plugins: [
        new ExtractTextPlugin('[hash].bundle.css'),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            version: new Date().getTime(),
            template: './static/index.ejs',
            filename: '../../static/index.html'
        })
    ]
};
