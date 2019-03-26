const {src, dest, parallel, series, watch} = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')

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
		'./gulp-src/js/**'
	], {base: './gulp-src/js'})
	.pipe(concat('main.js'))
	.pipe(dest('./jekyll-src/assets/js'))
}

function buildVendorJS(){
	return src([
		'./node_modules/jquery/dist/jquery.min.js'
	])
	.pipe(concat('vendor.js'))
	.pipe(dest('./jekyll-src/assets/vendor'))
}

function buildMedia(){
	return src([
		'./gulp-src/media/**'
	], {base: './gulp-src/media'})
	.pipe(dest('./jekyll-src/assets/media'))
}

exports.build = series([
	()=>del(['./jekyll-src/assets']),
	buildCSS,
	buildJS,
	buildVendorJS,
	buildMedia,
	()=>exec('bundle exec jekyll build -s jekyll-src -d ./_site')
])