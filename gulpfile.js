const GULP = require('gulp');
const BABEL = require('gulp-babel');
const CSS_NANO = require('gulp-cssnano');
const SASS = require('gulp-sass');
const CONCAT = require('gulp-concat');
const UGLIFY = require('gulp-uglify');
const CONNECT = require('gulp-connect');
const HTML_MIN = require('gulp-htmlmin');

const myFiles = [
    './app/js/vendors/*.js',
    './app/js/functions.js',
    './app/js/view.js'
]

// Webserver
GULP.task("connect", function () {
    CONNECT.server({
        root: 'app',
        livereload: true
    })
})

// Compilers
GULP.task("sass", function () {
    return GULP.src('./app/style/global.scss')
        .pipe(SASS())
        .pipe(CSS_NANO())
        .pipe(GULP.dest('./dist/css'))
})
GULP.task("js", function () {
    return GULP.src(myFiles)
        .pipe(BABEL({
            presets: ['@babel/env']
        }))
        .pipe(CONCAT('all.js'))
        .pipe(UGLIFY())
        .pipe(GULP.dest('dist'));
})
GULP.task("html", function () {
    return GULP.src("./app/index.html")
        .pipe(HTML_MIN({ collapseWhitespace: true }))
        .pipe(GULP.dest("dist"))
})

// Watchers
GULP.task('watch', function () {
    GULP.watch("./app/style/*.scss", GULP.series("sass"));
    GULP.watch("./app/js/**/*.js", GULP.series("js"));
    GULP.watch("./app/*.html", GULP.series("html"))
    return
});

// Run
GULP.task('default', GULP.series(
    GULP.parallel("connect", "watch")
));