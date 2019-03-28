const {src, dest, parallel, series, watch} = require('gulp')
const sass = require('gulp-sass')
const jsImport = require('gulp-js-import')
const getGoogleFonts = require('get-google-fonts')

const {exec} = require('child_process')
const del = require('del')

exports.buildCSS = async function buildCSS(){
	const outputDir = './_assets/css'
	await del(outputDir)
	return src([
		'./gulp-src/css/**/*',
		'!./gulp-src/css/**/_*'
	], {base: './gulp-src/css'})
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(dest(outputDir))
}

exports.buildJS = async function buildJS(){
	const outputDir = './_assets/js'
	await del(outputDir)
	return src([
		'./gulp-src/js/**/*',
		'!./gulp-src/js/**/_*'
	], {base: './gulp-src/js'})
	.pipe(jsImport())
	.pipe(dest(outputDir))
}

exports.buildFonts = async function buildFonts(){
	const outputDir = './_assets/fonts'
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

exports.watch = function watchBuild(){
	watch(
		[
			'_data',
			'_layouts',
			'_pages',
			'_posts',
			'./gulp-src/css/**',
			'./gulp-src/js/**'
		],
		{ignoreInitial: false},
		exports.build()
	)
}

exports.build = function buildAll(){
	return series([
		exports.buildCSS,
		exports.buildJS,
		exports.jekyll
	])
}

exports.jekyll = async function jekyll(){
	await exec('bundle exec jekyll build')
		.stdio.forEach(io=>io.on('data', console.log))
}

exports.start = series([
	exports.buildFonts,
	exports.watch
])