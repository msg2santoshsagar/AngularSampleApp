'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var inject = require('./gulp/inject');

gulp.task('minify', function() {
	  gulp.src(['WebContent/app/**/*.js'])
	  	.pipe(concat('app.cc.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest('WebContent/app/'))
});

/*gulp.task('minify', function() {
	  gulp.src(['WebContent/app/app.cc.js'])
	    .pipe(uglify('app.cc.js'))
	    .pipe(gulp.dest('WebContent/app/'))
});*/

gulp.task('inject:dev', inject.app);





gulp.task('default', ['minify'],function(cb){
	
});