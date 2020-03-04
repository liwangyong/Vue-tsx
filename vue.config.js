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
	configureWebpack: {
		resolve: {
			extensions: [".js", ".vue", ".json", ".ts", ".tsx"] // 加入ts 和 tsx
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
