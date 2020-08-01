const path = require("path")

// https://nextjs.org/docs/api-reference/next.config.js/introduction
module.exports = {
	/* config options here
	distDir: "docs", */
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
}
