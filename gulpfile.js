var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat'); //concat files from common directory
var sass = require('gulp-sass'); //sass->css
var minifyCss = require('gulp-minify-css'); //minify css
var rename = require('gulp-rename'); // allows to rename file (.min.css)
var plumber = require('gulp-plumber');
var liveReload = require('gulp-livereload');



var paths = {
  sass: ['./scss/**/*.scss',
         './scss/*.scss'],
};

gulp.task('sass', function(done) {
  gulp.src('./scss/splotch.scss')
    .pipe(plumber(function(error){
      gutil.log(error.message);
      this.emit('end');
    }))
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./'))
    .on('end', done);
});


gulp.task('watch', function() {
  liveReload.listen();
  gulp.watch(paths.sass, ['sass']);
});



gulp.task('default', ['sass','watch']);

