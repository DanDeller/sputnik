var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var concat     = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var gulpUtil = require('gulp-util');
var ignore = require('gulp-ignore');

gulp.task('scripts', function() {
  return gulp.src([
    	'../src/app.js'
    ])
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(notify({message: 'Scripts task complete'}))
    .pipe(ignore.exclude([ "**/*.map" ]))
    .pipe(uglify())
    .pipe(gulp.dest('../dist'));
});

gulp.task('watch', function() {
  gulp.watch([
    '../src/app.js'
    ],['scripts']);
});

gulp.task('default', ['scripts', 'watch'], function () {
  // gulp do stuff...
});
