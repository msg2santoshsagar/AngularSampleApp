'use strict';

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    inject = require('gulp-inject'),
    es = require('event-stream'),
    naturalSort = require('gulp-natural-sort'),
    angularFilesort = require('gulp-angular-filesort'),
    bowerFiles = require('main-bower-files');

 var print = require('gulp-print');   


var config = require('./config');
var handleErrors = require('./handle-errors');


module.exports = {
    app: app
}

function app() {
    return gulp.src(config.app + 'index.html')
        .pipe(inject(gulp.src(config.app + 'app/**/*.js')
        	.pipe(print())
            .pipe(plumber({errorHandler: handleErrors}))
            .pipe(naturalSort())
            .pipe(angularFilesort()), {relative: true}))
        	.pipe(print(function(filePath){
        		return "File Path : "+filePath;
        	}))	
        .pipe(gulp.dest(config.app));
}