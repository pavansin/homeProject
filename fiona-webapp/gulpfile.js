'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var babel = require('babelify');

var b = function() {
    return browserify({
        cache: {},
        packageCache: {},
        entries: ['./src/main/js/app.js'],
        debug: true,
        transform: [babel]
    });
};

var w = watchify(b());

w.on('log', gutil.log);

var bundle = function(pkg) {
    return pkg.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('src/main/resources/static/built-js'));
};

gulp.task('watch', function() {
    bundle(w);
    w.on('update', bundle.bind(null, w));
});

gulp.task('build', bundle.bind(null, b()));

gulp.task('default', ['watch']);