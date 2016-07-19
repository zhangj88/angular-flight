var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean');
gulp.task('css', function() {
    gulp.src(['./app/css/*.css'])
        .pipe(concat('app.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./app/css/min'));
});
gulp.task('js', function() {
    gulp.src('./app/js/*.js')
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./app/js/min'));

});

gulp.task('default', ['css', 'js']);