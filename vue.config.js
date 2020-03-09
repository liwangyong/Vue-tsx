const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	publicPath: '/',
	lintOnSave: false,
	productionSourceMap: false,
	chainWebpack: config => {
		config.module
			.rule('tsx')
			.test(/\.tsx$/)
			.use('vue-jsx-hot-loader')
			.before('babel-loader')
			.loader('vue-jsx-hot-loader')
		// 忽略提示
		// ignoreCssWarnings(config);
		// css to typings-for-css-modules-loader
		// ["css", "less", "scss", "sass", "stylus", "postcss"].forEach(rule => {
		// 	// rules for *.module.* files
		// 	config.module
		// 		.rule(rule)
		// 		.oneOf("normal-modules")
		// 		.uses.get("css-loader")
		// 		.set("loader", "typings-for-css-modules-loader");
		// });
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@assets', resolve('src/assets'))
			.set('@components', resolve('src/components'))
			.set('@until', resolve('src/until'))
	},
	// ...
	css: {
		// extract: true,
		// 驼峰
		// camelCase: true,
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/sass/index.scss";`,
			},
			css: {
				// name 导出
				// namedExport: true,
				// 是否使用驼峰
				// camelCase: true,
				// html 中 实际的 css 类名
				// localIdentName: process.env.NODE_ENV !== "production" ? "[local]-[hash:base64:5]" : "[hash:base64:5]"
			},
		},
	},
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue', '.json', '.ts', '.tsx'], // 加入ts 和 tsx
		},
		//或者
		//警告 webpack 的性能提示
		performance: {
			hints: 'warning',
			//入口起点的最大体积
			maxEntrypointSize: 50000000,
			//生成文件的最大体积
			maxAssetSize: 30000000,
			//只给出 js 文件的性能提示
			assetFilter: function(assetFilename) {
				return assetFilename.endsWith('.js')
			},
		},
	},
	devServer: {
		port: 8800, // webpack-dev-server port
	},
}
