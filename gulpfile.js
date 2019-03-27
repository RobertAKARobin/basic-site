const {src, dest, parallel, series, watch} = require('gulp')
const sass = require('gulp-sass')
const jsImport = require('gulp-js-import')
const getGoogleFonts = require('get-google-fonts')

const {exec} = require('child_process')
const del = require('del')

exports.buildCSS = function buildCSS(){
	return src([
		'./gulp-src/css/**/*',
		'!./gulp-src/css/**/_*'
	], {base: './gulp-src/css'})
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(dest('./_assets/css'))
}

exports.buildJS = function buildJS(){
	return src([
		'./gulp-src/js/**/*',
		'!./gulp-src/js/**/_*'
	], {base: './gulp-src/js'})
	.pipe(jsImport())
	.pipe(dest('./_assets/js'))
}

exports.buildMedia = function buildMedia(){
	return src([
		'./gulp-src/media/**'
	], {base: './gulp-src/media'})
	.pipe(dest('./_assets/media'))
}

exports.buildFonts = function buildFonts(){
	const getFont = new getGoogleFonts({
		outputDir: './_assets/fonts/',
		verbose: true
	})
	return getFont.download([
		{
			'Germania One': [400]
		}
	])
}

exports.watchBuild = function watchBuild(){
	watch(
		[
			'_data',
			'_layouts',
			'_pages',
			'./gulp-src/css/**',
			'./gulp-src/js/**'
		],
		{ignoreInitial: false},
		series([
			()=>del([
				'./_assets/css',
				'./_assets/js'
			]),
			exports.buildCSS,
			exports.buildJS,
			exports.jekyll
		])
	)
}

exports.clean = async function clean(){
	await del(['./_assets'])
}

exports.jekyll = async function jekyll(){
	await exec('bundle exec jekyll build')
		.stdio.forEach(io=>io.on('data', console.log))
}

exports.serve = async function(){
	await exec('npx hs _site -p 8080')
}

exports.start = parallel([
	exports.serve,
	series([
		exports.clean,
		exports.buildMedia,
		exports.buildFonts,
		exports.watchBuild
	])
])