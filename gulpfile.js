const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('web/dist/css'))
});

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['react']
    })).
    pipe(gulp.dest('web/dist/js'))
});

gulp.task('watch', function() {
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['scripts'])
})

gulp.task('default', ['sass', 'scripts']);
