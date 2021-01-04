var gulp = require('gulp');
var sass = require('gulp-sass');

//task para o sass
gulp.task('sass', function () {
    return gulp.src('sass/**/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css'));
  });

//task default gulp
gulp.task('default', done=> {
  console.log("teste");
  done();
});
