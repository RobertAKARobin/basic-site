const {src, dest, parallel, series, watch} = require('gulp')
const sass = require('gulp-sass')
const jsImport = require('gulp-js-import')
const getGoogleFonts = require('get-google-fonts')

const {exec} = require('child_process')
const del = require('del')

exports.buildCSS = async function buildCSS(){
	const outputDir = './docs/css'
	await del(outputDir)
	return src([
		'./src/css/**/*',
		'!./src/css/**/_*'
	], {base: './src/css'})
	.pipe(sass({outputStyle: 'expanded'}))
	.on('error', function (err) {
		console.log(err.toString())
		this.emit('end')
	})
	.pipe(dest(outputDir))
}

exports.buildJS = async function buildJS(){
	const outputDir = './docs/js'
	await del(outputDir)
	return src([
		'./src/js/**/*',
		'!./src/js/**/_*'
	], {base: './src/js'})
	.pipe(jsImport())
	.pipe(dest(outputDir))
}

exports.buildStatic = async function buildStatic(){
	await del([
		'./docs/**/*',
		'!./docs/css',
		'!./docs/js',
		'!./docs/fonts'
	])
	return src([
		'./src/static/**/*'
	], {base: './src/static'})
	.pipe(dest('./docs'))
}

exports.buildFonts = async function buildFonts(){
	const outputDir = './docs/fonts'
	await del(outputDir)
	// const getFont = new getGoogleFonts({
	// 	outputDir,
	// 	verbose: true
	// })
	// return getFont.download([
	// 	{
	// 		'Germania One': [400]
	// 	}
	// ])
}

exports.build = function buildAll(){
	return series([
		exports.buildCSS,
		exports.buildJS,
		exports.buildFonts,
		exports.buildStatic
	])
}

exports.start = series([
	exports.buildFonts,
	()=>{
		watch(
			[
				'./src/**/*'
			],
			{ignoreInitial: false},
			series([
				exports.buildStatic,
				exports.buildCSS,
				exports.buildJS
			])
		)
	}
])