var gulp = require('gulp');
var DEST = 'public_html';
//task 1
var uglify = require('gulp-uglify')
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var optimizeImg = require('gulp-image')

gulp.task('minifyjs', function(){
    return gulp.src('src/js/*')
        .pipe(uglify())
        .pipe(gulp.dest(DEST+'/js'));
})

gulp.task('minifycss', function(){
    return gulp.src('src/css/*')
        .pipe(minifyCSS())
        .pipe(gulp.dest(DEST+'/css'))
})

gulp.task('minifyhtml', function(){
    return gulp.src('src/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest(DEST))
})

gulp.task('optimage', function(){
    return gulp.src('src/images/*')
        .pipe(optimizeImg())
        .pipe(gulp.dest(DEST+'/images'))
})
