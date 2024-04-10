const { CssExtractRspackPlugin } = require("../../../../");

module.exports = {
	entry: "./index.js",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: CssExtractRspackPlugin.loader
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new CssExtractRspackPlugin({
			filename: "[name].css"
		})
	]
};
