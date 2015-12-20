var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('serve', ['build'], function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['src', 'dist'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'src/*.html',
    'src/scripts/**/*.js',
    'src/images/**/*',
    'src/styles/*.css'
  ]).on('change', reload);

  gulp.watch('src/styles/**/*.scss', ['build']);
});

gulp.task('minify', function() {
  gulp.src('dist/*.css')
    .pipe(minifyCss({
      compatibility: '*'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'));

  gulp.src(['dist/reset.css', 'dist/grid.css'])
    .pipe(concat('grid.bundle.css'))
    .pipe(gulp.dest('dist'))
    .pipe(minifyCss({
      compatibility: '*'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean'], function() {
  return gulp.src(['src/styles/*.scss', '!src/styles/index.scss'])
    .pipe(plumber())
    .pipe(sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', sass.logError))
    .pipe(gulp.dest('dist/'))
    .pipe(reload({
      stream: true
    }));
});
gulp.task('default', ['build'], function() {
  gulp.start('minify');
});
