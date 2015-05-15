var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

/**
 * Globals
 */
var dest = './dist';
var src = './src';

/**
 * Configs
 */
var configs = {
  server: {
    root: dest,
    host: 'localhost',
    port: 8080,
    livereload: {
      port: 35929
    }
  },
  sass: {
    src: src + '/styles/**/*.scss',
    dest: dest + '/styles'
  },
  browserify: {
    settings: {
      transform: ['reactify', 'babelify']
    },
    src: src + '/js/app.js',
    dest: dest + '/js',
    outputName: 'build.js',
    debug: gutil.env.type === 'devlopment'
  },
  html: {
    src: src + '/index.html',
    dest: dest
  },
  watch: {
    src: 'src/**/*.*',
    tasks: ['build']
  }
};

/**
 * Gulp Production Task
 */
 // TODO: version parameter, minify css and js, compress images vb.

/**
 * Gulp Default Task
 */
// TODO: copy images, fonts vb.
gulp.task('default', ['build', 'watch', 'server']);

/**
 * Gulp Build Task
 */
gulp.task('build', ['browserify', 'styles', 'html'], function() {
  gulp.src(configs.watch.src)
      .pipe(connect.reload());
});

/**
 * Gulp Watch Task
 */
gulp.task('watch', ['build'], function() {
  gulp.watch(configs.watch.src, configs.watch.tasks);
});

/**
 * Gulp HTML Task
 */
gulp.task('html', function() {
  return gulp.src(configs.html.src)
    .pipe(gulp.dest(configs.html.dest));
});

/**
 * Gulp Styles Task
 */
gulp.task('styles', function() {
  gulp.src(configs.sass.src)
    .pipe(sass(configs.sass.settings))
    .pipe(gulp.dest(configs.sass.dest))
    .pipe(connect.reload());
});

/**
 * Gulp Server Task
 */
gulp.task('server', function() {
  connect.server(configs.server);
});

/**
 * Browserify
 */

// Development mode
watchify.args.debug = watchify.args.fullPaths = configs.browserify.debug;

var bundler = watchify(browserify(configs.browserify.src, watchify.args), {
  poll: 200
});

configs.browserify.settings.transform.forEach(function(t) {
  bundler.transform(t);
});

// Browserify Task
gulp.task('browserify', bundle);

// On Watchify Task
bundler.on('update', bundle);

function bundle() {
  return bundler.bundle()
    .on('error', function(err) {
        gutil.log(gutil.colors.red('Error (Browserify): ',
                  gutil.colors.magenta(err.message)));
        gutil.beep();
        this.emit('end');
    })
    .pipe(source(configs.browserify.outputName))
    .pipe(gulp.dest(configs.browserify.dest))
    .pipe(connect.reload());
}
