const webpack = require("webpack");
const merge = require("webpack-merge");
const portscanner = require("portscanner");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;
const config = {
	devServer: {
		publicPath: "/dist/",
		hot: true,
		inline: true,
		open: true,
		openPage: "dist",
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
};

module.exports = common => {
	return new Promise(resolve => {
		portscanner.findAPortNotInUse(port, port + 10, host, (error, port) => {
			// Status is 'open' if currently in use or 'closed' if available
			config.devServer.port = port;
			config.devServer.host = host;
			resolve(merge(common, config));
		});
	});
};
