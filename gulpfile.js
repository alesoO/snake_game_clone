const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compSass(){
   return gulp.src('./src/styles/main.scss')
   .pipe(sass())
   .pipe(gulp.dest('./build/styles')) 
}

exports.default = compSass;
exports.compSass = compSass;