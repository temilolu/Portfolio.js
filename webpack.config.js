const path = require('path');
const webpack = require('webpack');

const config = {
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
		publicPath: 'http://localhost:8080/',
	},

	devtool: 'source-map',
	devServer: {
		contentBase: './public/',
		historyApiFallback: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
	},
	plugins: [],

	module: {
		rules: [
			// JSX
			{
				test: /\.jsx$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/,
			},

			// SASS
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							includePaths: ['absolute/path/a', 'absolute/path/b'],
						},
					},
				],
			},

			// Images
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
			},
		],
	},
};

module.exports = config;
