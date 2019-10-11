const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");


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
    gulp.watch('./src/js/*.js', gulpJS);
    gulp.watch('*.html').on('change', browserSync.reload);
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


//Javascript
function gulpJS(){
    return gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.stream());
};
gulp.task('allJS', gulpJS);


gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'allJS'));
