var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");


function compilaSass(){
    return gulp.src('./src/scss/style.scss')
    .pipe(sass({
          outputStyle: 'compressed'
      }))
    .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
      }))
    .pipe(gulp.dest('./dist/css/'));
};

gulp.task('sass', compilaSass);

function wacthSass(){
    gulp.watch('./src/scss/*.scss', compilaSass);
};

gulp.task('watch', wacthSass);
   

