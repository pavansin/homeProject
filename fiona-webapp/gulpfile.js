// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/main/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
/*
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});
*/

// Concatenate & Minify JS
// Minify doesn't work with ES6
/*
gulp.task('scripts', function() {
    return gulp.src('src/main/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('web-build'))
        .pipe(uglify())
        .pipe(gulp.dest('web-build/js'));
});
*/
// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/main/js/*.js', ['lint', 'scripts']);
    //gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint']);