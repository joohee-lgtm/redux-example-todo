const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
	context: `${__dirname}/`,
	entry: {
		"app": path.resolve(__dirname, "./src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "dist/"), // 파일이 저장될 경로
		filename: "[name].js",
		libraryTarget: "umd",
	},
	module: {
		rules: [{
			//enforce: "pre",
			//test: /\.js$/,
			//include: path.join(__dirname, "src"),
			//exclude: /node_modules/,
			//loader: "eslint-loader",
		}, {
			test: [/(\.js)$/, /(\.jsx)$/],
			exclude: /(node_modules)/,
			include: path.join(__dirname, "src"),
			loader: "babel-loader",
			query: {
				presets: ["react", "es2015", "stage-0"],
			},
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader",
			}),
		}],
	},
	resolve: {
		modules: ["node_modules"],
		extensions: [".js", ".jsx"],
	},
	devtool: "cheap-module-source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
		new ExtractTextPlugin("app.css"),
	],
};

module.exports = env => require(`./config/${env || "development"}.js`)(config);
