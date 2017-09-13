var gulp = require('gulp'),
	browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        startPath: './html/index.html'
    });
});

gulp.task('watch', function() {
  gulp.watch('html/*.html', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);