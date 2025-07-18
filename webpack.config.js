/* eslint-env node */

const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ZipPlugin = require('zip-webpack-plugin')

const zipPluginConfig = {
	exclude: ['.DS_Store'],
	filename: 'tabclipper.zip',
	// yazl Options
	// OPTIONAL: see https://github.com/thejoshwolfe/yazl#addfilerealpath-metadatapath-options
	fileOptions: {
		mtime: new Date(),
		mode: 0o100664,
	}
}

module.exports = {
	/*
	mode: 'development',
	devtool: 'cheap-module-source-map',
	*/
	mode: 'production',
	entry: {
		background: './src/background.js',
		fonts: './src/fonts.js',
		popup: './src/popup.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'manifest*.json', context: 'src' },
                                { from: 'popup.htm', context: 'src' },
				{ from: 'img/*png', context: 'src' }
			]
		}),
		new ZipPlugin(zipPluginConfig)
	]
}
