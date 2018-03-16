const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

const bootstrapSass = {
  in: './node_modules/bootstrap-sass/'
};

const fonts = {
  in: ['src/fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
  out: 'web/dist/fonts/'
};

const scss = {
  in: 'src/scss/*.scss',
  out: 'web/dist/css/',
  sassOpts: {
    outputStyle: 'nested',
    precision: 3,
    errLogToConsole: true,
    includePaths: [bootstrapSass.in + 'assets/stylesheets']
  }
};

gulp.task('fonts', function() {
  return gulp.src(fonts.in)
    .pipe(gulp.dest(fonts.out));
});

gulp.task('sass', ['fonts'], function() {
  return gulp.src(scss.in)
    .pipe(sass(scss.sassOpts))
    .pipe(gulp.dest(scss.out));
});

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['react']
    })).
    pipe(gulp.dest('web/dist/js'))
});

gulp.task('watch', function() {
  gulp.watch('src/fonts/*.*', ['fonts']);
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'scripts'], function() {
  gulp.watch('src/fonts/*.*', ['fonts']);
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['scripts']);
});
