const merge = require("webpack-merge");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const config = {
	externals: [
		{
			'react-dom': {
				root: 'ReactDOM',
				commonjs2: 'react-dom',
				commonjs: 'react-dom',
				amd: 'react-dom',
				umd: 'react-dom'
			}
		},
		{
			'react': {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react'
			}
		}
	],
	entry: {
		"app.min" : path.resolve(__dirname, "../src/index.js")
	},
	plugins: [
		new ExtractTextPlugin("app.min.css"),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.min\.css$/,
			cssProcessorOptions: { discardComments: { removeAll: true } }
		}),
		new UglifyJSPlugin({
			include: /\.min\.js$/,
			beautify: false,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true,
				warnings: false
			},
			output: {
				screw_ie8: false
			},
			comments: false,
			sourceMap: true
		}),
	]
};

module.exports = common => merge(common, config);
