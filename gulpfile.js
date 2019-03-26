const {src, dest, parallel, series, watch} = require('gulp')
const sass = require('gulp-sass')
const jsImport = require('gulp-js-import')
const getGoogleFonts = require('get-google-fonts')

const {exec} = require('child_process')
const del = require('del')

function buildCSS(){
	return src([
		'./gulp-src/css/**/*',
		'!./gulp-src/css/**/_*'
	], {base: './gulp-src/css'})
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(dest('./jekyll-src/assets/css'))
}

function buildJS(){
	return src([
		'./gulp-src/js/**/*',
		'!./gulp-src/js/**/_*'
	], {base: './gulp-src/js'})
	.pipe(jsImport())
	.pipe(dest('./jekyll-src/assets/js'))
}

function buildMedia(){
	return src([
		'./gulp-src/media/**'
	], {base: './gulp-src/media'})
	.pipe(dest('./jekyll-src/assets/media'))
}

function buildFonts(){
	const getFont = new getGoogleFonts({
		outputDir: './jekyll-src/assets/fonts/',
		verbose: true
	})
	return getFont.download([
		{
			'Germania One': [400]
		}
	])
}

exports.start = series([
	()=>del(['./jekyll-src/assets']),
	buildMedia,
	buildFonts,
	()=>watch(
		[
			'./gulp-src/css/**',
			'./gulp-src/js/**'
		],
		{ignoreInitial: false},
		series([
			()=>del([
				'./jekyll-src/assets/css',
				'./jekyll-src/assets/js'
			]),
			buildCSS,
			buildJS
		])
	)
])