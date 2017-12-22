var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("app/scss/*.scss", ['sass']);
  gulp.watch("app/*.js").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src("app/style/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});




gulp.task('default', function () {
  // place code for your default task here
});