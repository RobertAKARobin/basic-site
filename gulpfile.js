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
	.pipe(dest('./_assets/css'))
}

function buildJS(){
	return src([
		'./gulp-src/js/**/*',
		'!./gulp-src/js/**/_*'
	], {base: './gulp-src/js'})
	.pipe(jsImport())
	.pipe(dest('./_assets/js'))
}

function buildMedia(){
	return src([
		'./gulp-src/media/**'
	], {base: './gulp-src/media'})
	.pipe(dest('./_assets/media'))
}

function buildFonts(){
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

exports.start = parallel([
	()=>exec('npx hs docs'),
	series([
		()=>del(['./_assets']),
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
					'./_assets/css',
					'./_assets/js'
				]),
				buildCSS,
				buildJS,
				()=>exec('bundle exec jekyll build')
			])
		)
	])
])