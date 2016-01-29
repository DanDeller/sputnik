var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var concat     = require('gulp-concat');
var notify = require('gulp-notify');

gulp.task('scripts', function() {
  return gulp.src([
    	'../src/app.js'
    ])
	  .pipe(concat('main.js'))
	  .pipe(gulp.dest('dist'))
	  .pipe(babel())
    .pipe(gulp.dest('../dist'))
	  .pipe(notify({message: 'Scripts task complete'}));
});

gulp.task('watch', function() {
  gulp.watch([
    '../src/app.js'
    ],['scripts']);
});

gulp.task('default', ['scripts', 'watch'], function () {
  // return gulp.src('src/app.js')
  //   .pipe(babel())
  //   .pipe(gulp.dest('dist'));
});