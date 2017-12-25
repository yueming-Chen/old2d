var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");



gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      index: './demo/demo.html',
      baseDir: "./"
    }
  });
  gulp.watch("app/style/*.scss", ['sass']);
  // gulp.watch("app/*.js").on('change', browserSync.reload);
  gulp.watch("app/*.ts").on('change', () => {
    let a = gulp.hasTask('ts');
    console.log(a);
    browserSync.reload();
  });

});

gulp.task('sass', function () {
  return gulp.src("app/style/**.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

gulp.task('ts', () => {
  console.log('use ts');
  return tsProject.src()
  .pipe(tsProject())
  .js.pipe(gulp.dest("dist"));
})


gulp.task('default', ['browser-sync']);