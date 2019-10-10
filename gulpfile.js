const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();


// SASS
function compilaSass(){
    return gulp.src('./src/scss/style.scss')
    .pipe(sass({
          outputStyle: 'compressed'
      }))
    .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
      }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
};
gulp.task('sass', compilaSass);


// Watch
function wacthSass(){
    gulp.watch('./src/scss/*.scss', compilaSass);
};
gulp.task('watch', wacthSass);



//Browser-sync
function browser(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
};
gulp.task('browser-sync', browser);


gulp.task('default', gulp.parallel('watch', 'browser-sync'));
