'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var babelify  = require('babelify');
var transform_jsx = require('babel-plugin-transform-react-jsx');
var babel = require('gulp-babel');


var b = function() {
    return browserify({
        cache: {},
        packageCache: {},
        entries: ['src/main/js/app.js', 'src/main/js/navbar.js', 'src/main/js/searchBox.js'],
        debug: true,
        transform: [babelify]
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
