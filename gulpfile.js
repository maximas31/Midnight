const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
// const rename      = require('gulp-rename');
// const concat      = require('gulp-concat');
const webpack     = require('webpack-stream');
// const babel       = require('gulp-babel');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    //     return gulp.src("src/components/**/*.+(scss|sass)")
    return gulp.src("src/assets/sass/style.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("src/assets/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("src/assets/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("src/assets/img/**/*").on('all', gulp.parallel('images'));
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function () {
    // return gulp.src("src/**/*.js")
    return gulp.src("src/index.js")
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(webpack(require('./webpack.config.js')))
        // .pipe(concat('script.js'))
        // .pipe(rename({dirname: ''}))
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src("src/assets/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function () {
    return gulp.src("src/assets/icons/**/*")
        .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src("src/assets/img/**/*")
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'html', 'images'));