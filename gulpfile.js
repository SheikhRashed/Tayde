// const gulp = require('gulp');
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import uglify from 'gulp-uglify';
import browser from 'browser-sync';
import imagemin from 'gulp-imagemin';

const browserSync = browser.create();
const sass = gulpSass(dartSass)

// Html Files
gulp.task('copyHtml', async function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))

})

// Sass Files

gulp.task('sass', async function () {
  return gulp.src('src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
})


// Minify JS Files
gulp.task('minifyJS', async function () {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))

})


// Image Files 
gulp.task('imageMin', async function () {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))

})


// Running Local Server
gulp.task('serve', async function () {
  browserSync.init({
    server: 'dist/'
  })

  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/main.scss', ['sass']);
  gulp.watch('src/js/*.js', ['minifyJS']).on('change', browserSync.reload);
  gulp.watch('src/*.html', ['copyHtml']).on('change', browserSync.reload);

})



gulp.task('message', async function () {
  return console.log('Gulp is running...');
})

gulp.task('default', ['serve']);
