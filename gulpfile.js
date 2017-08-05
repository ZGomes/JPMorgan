var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('styles',function () {
    gulp.src('style.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./style/'));
});