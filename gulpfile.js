const gulp = require('gulp');
const gulpUglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');

function compSass() {
   return gulp.src('./src/styles/main.scss')
      .pipe(sourceMaps.init())
      .pipe(sass({
         outputStyle: 'compressed'
      }
      ))
      .pipe(sourceMaps.write('./maps'))
      .pipe(gulp.dest('./build/styles'))
}
function compJs() {
   return gulp.src('./src/js/main.js')
      .pipe(sourceMaps.init())
      .pipe(gulpUglify())
      .pipe(sourceMaps.write('./maps'))
      .pipe(gulp.dest('./build/js'))
}

exports.default = compSass;
exports.compSass = compSass;

exports.watch = function () {
   gulp.watch('./src/styles/*.scss', gulp.series(compSass));
   gulp.watch('./src/js/*.js', gulp.series(compJs));
}