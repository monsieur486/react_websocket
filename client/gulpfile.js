const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');


gulp.task('sass', function(done){
    gulp.src('assets/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('public/css'))
    done();
});


gulp.task('scripts', function(done){
    gulp.src('assets/javascript/**/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
    done();
});


gulp.task('images', function(done){
    gulp.src('assets/image/*.{png,jpg,jpeg,gif,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'))
    done();
});


gulp.task('watch', function(done){
    gulp.watch('assets/sass/**/*.scss', gulp.series('sass') )
    gulp.watch('assets/javascript/**/*.js', gulp.series('scripts') )
    gulp.watch('assets/image/*.{png,jpg,jpeg,gif,svg}', gulp.series('images') )
    done();
});