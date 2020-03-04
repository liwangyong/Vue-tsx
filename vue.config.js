const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	// ...
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/sass/index.scss";`,
			},
		},
	},
	lintOnSave: true,
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@assets', resolve('src/assets'))
			.set('@components', resolve('src/components'))
	},
}
