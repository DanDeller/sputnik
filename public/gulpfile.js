var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var gulpUtil = require('gulp-util');
var ignore = require('gulp-ignore');
var webpack = require('gulp-webpack');

gulp.task('scripts', function() {
  return gulp.src([
      'app/components/**/*.js'
    ])
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(notify({message: 'Scripts task complete'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch([
    'app/components/**/*.js'
    ],['scripts']);
});

gulp.task('default', function() {
  return gulp.src('app/components/**/*.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});
