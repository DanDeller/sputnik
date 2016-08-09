const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const notify = require('gulp-notify');
const gulpUtil = require('gulp-util');
const ignore = require('gulp-ignore');
const webpack = require('gulp-webpack');

gulp.task('default', () => {
	return gulp.src([
		'public/app/components/**/*.js',
		'server/lib/**/*.js'
		])
	.pipe(webpack(require('./webpack.config.js')))
	.pipe(babel())
	.pipe(notify({message: 'Scripts task complete'}))
	.pipe(uglify())
	.pipe(gulp.dest('public/dist/'));
});
