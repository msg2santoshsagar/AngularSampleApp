'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

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





gulp.task('default', ['minify'],function(cb){
	
});