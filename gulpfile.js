var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');
gulp.task('css', function() {
    gulp.src(['./app/css/*.css'])
        .pipe(concat('app.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./app/css'));
});

gulp.task('default', ['css']);