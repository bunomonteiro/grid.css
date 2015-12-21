var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var header = require('gulp-header');
var size = require('gulp-size');
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @author <%= pkg.author %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('compile', ['clean'], function() {
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

gulp.task('serve', ['compile'], function() {
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

  gulp.watch('src/styles/**/*.scss', ['compile']);
});

gulp.task('bundle', ['compile'], function(){
  return gulp.src(['dist/reset.css', 'dist/grid.css'])
    .pipe(concat('grid.bundle.css'))
    .pipe(gulp.dest('dist'));
})

gulp.task('minify', ['bundle'], function() {
  return gulp.src('dist/*.css')
    .pipe(minifyCss({ compatibility: '*' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('header', ['minify'], function() {
  return gulp.src(['./dist/*.css', '!./dist/reset.css','!./dist/reset.min.css'])
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['compile', 'bundle', 'minify', 'header'], function() {
  return gulp.src('./dist/grid.min.css').pipe(size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean', 'build']);
