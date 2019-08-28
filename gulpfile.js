const gulp = require('gulp');
const babel = require('gulp-babel');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const myFiles = [
    './app/js/vendors/*.js',
    './app/js/functions.js',
    './app/js/view.js'
]


gulp.task('sass', function () {
    return gulp.src('./app/style.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'))
})


gulp.task('js', function () {
    return gulp.src(myFiles)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
})

gulp.task('default', function(){
    gulp.watch('./app/*.scss', gulp.series('sass')),
    gulp.watch('./app/js/**/*.js', gulp.series('js'));
    return
});