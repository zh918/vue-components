var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfigProd = require('./webpack.prod.conf')
var webpackConfigLibrary = require('./webpack.library.conf')
var moment = require('moment')
var configArray = [webpackConfigLibrary,webpackConfigProd]

var compiler = webpack(configArray);
 
console.log('易秒通组件库已开始处理打包，请稍等...\n')
var startTime = moment(Date.now())
 
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
   compiler.run((err,stats)=>{
   		if (err) {
		    console.error(err.stack || err);
		    if (err.details) {
		      console.error(err.details);
		    }
		    return;
		}

		var endTime =moment(Date.now())
		const info = stats.toJson();
		console.log('耗时:',(moment(endTime) - moment(startTime))/1000, '秒');
		console.log('错误信息:',info.errors.length);
		console.log('警告信息:',info.warnings.length);

	  	if (stats.hasErrors()) {
		    console.info('=============错误信息=============\n');
		    process.stdout.write(info.errors.toString({
		      colors: true,
		      modules: false,
		      children: false,
		      chunks: false,
		      chunkModules: false
		    }) + '\n\n')
		}

		if (stats.hasWarnings()) {
		    console.info('=============警告信息=============\n')
		    process.stdout.write(info.errors.toString({
		      colors: true,
		      modules: false,
		      children: false,
		      chunks: false,
		      chunkModules: false
		    }) + '\n\n')
		} 

		console.log('易秒通组件库打包结束')
   }); 
})	






 
