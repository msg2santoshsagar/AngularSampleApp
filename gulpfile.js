'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var inject = require('./gulp/inject');
var rename = require('gulp-rename');
var print = require('gulp-print');
var rev   = require('gulp-rev');

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

gulp.task('inject:dev', inject.dev);
gulp.task('inject:js', inject.js);

gulp.task('deleteMinFiles',function(){
	return gulp.src(['WebContent/app/**/*min.js'])
	.pipe(clean({force:true}))
});

gulp.task('addTimeStamp',function(){
	return gulp.src(['WebContent/app/**/*.js','!WebContent/app/**/*min.js'])
		.pipe(print())
		.pipe(rev())
		.pipe(rename(function (path) {
  			path.basename += ".min";
	}))
.pipe(gulp.dest("WebContent/app/"));
});


gulp.task('rename',function(){
	runSequence('deleteMinFiles','addTimeStamp');
});

gulp.task('default', ['minify'],function(cb){
	
});