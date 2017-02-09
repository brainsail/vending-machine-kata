"use strict";

// Include gulp
var gulp = require('gulp');

// Include plugins
var jasmine = require('gulp-jasmine'),
  watch = require('gulp-watch');

// Test JS
gulp.task('test', function () {
  return gulp.src('spec/*.spec.js')
    .pipe(jasmine({verbose:true, includeStackTrace: true}));
});

// Automate Tests with Watch
gulp.task('tdd', function () {
  gulp.watch(['src/*.js', 'spec/*.spec.js'], ['test']);
});

// Default Task
gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('default', ['specs']);