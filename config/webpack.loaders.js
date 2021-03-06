// module.exports = [
// 	{
// 		test: /\.jsx?$/,
// 		exclude: /(node_modules|bower_components)/,
// 		loader: 'babel',
// 		query: {
// 			presets: ['react', 'es2015']
// 		}
// 	},
// 	{
// 		test: /\.css$/,
// 		loader: 'style-loader!css-loader'
// 	},
// 	{
// 		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
// 		loader: "file"
// 	},
// 	{
// 		test: /\.(woff|woff2)$/,
// 		loader: "url?prefix=font/&limit=5000"
// 	},
// 	{
// 		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
// 		loader: "url?limit=10000&mimetype=application/octet-stream"
// 	},
// 	{
// 		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
// 		loader: "url?limit=10000&mimetype=image/svg+xml"
// 	},
// 	{
// 		test: /\.gif/,
// 		loader: "url-loader?limit=10000&mimetype=image/gif"
// 	},
// 	{
// 		test: /\.jpg/,
// 		loader: "url-loader?limit=10000&mimetype=image/jpg"
// 	},
// 	{
// 		test: /\.png/,
// 		loader: "url-loader?limit=10000&mimetype=image/png"
// 	}
// ];

const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = [
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader', {
                publicPath: './'
            })
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?v=[\d.]+)?(\?[a-z0-9#-]+)?$/,
            loader: 'file-loader'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }];
