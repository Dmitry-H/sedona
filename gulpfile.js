var gulp = require('gulp');
var browserSync = require('browser-sync'),
	sass = require("gulp-sass"),
	cleanCSS = require("gulp-clean-css");

gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/css/*.css', browserSync.reload);
	gulp.watch('src/js/*.js', browserSync.reload);
});

gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: 'src'
		},
        browser: 'chrome'
	})
});

gulp.task("sass", function(){
	gulp.src("src/sass/style.scss")
		.pipe(sass().on('error', sass.logError))
		// .pipe(cleanCSS())
		.pipe(gulp.dest("src/css"))
		.pipe(browserSync.reload({stream: true}));
});