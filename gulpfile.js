var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var pump = require('pump');

// Task create
gulp.task('styles', function () {
    gulp.src('style.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css/'));
});

// Auto task
gulp.task('watch:styles', function () {
    gulp.watch('**/*.styl', ['styles']);
});

gulp.task('build',['concatJS','concatCSS','compressJS','compressCSS']);
gulp.task('compressJS', function (cb) {
    pump([
            gulp.src('build/all.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});
gulp.task('concatJS',function () {
    return gulp.src(['./js/jquery.js','./js/scrolloverflow.js','./js/vivus.min.js','./js/jquery.fullpage.js','./js/typed.min.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('concatCSS',function () {
    return gulp.src('./css/**/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('build'));
});
gulp.task('compressCSS', function () {
    gulp.src('./build/all.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": false
        }))
        .pipe(gulp.dest('dist'));
});