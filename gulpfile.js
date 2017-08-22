var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create(),
	autoprefixer = require("gulp-autoprefixer"),
	imagemin = require('gulp-imagemin'),
	cleanCss = require("gulp-clean-css"),
	uglify = require("gulp-uglify"),
	gulpCopy = require('gulp-copy');

gulp.task('styles', function() {
	gulp.src('./app/scss/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer(['last 2 versions', '> 5%', 'Firefox ESR']))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./app/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {
	
	browserSync.init({
		server: {
			baseDir: './app/'
		}
	});
	
	gulp.watch('./app/scss/*.scss', ['styles']);
	gulp.watch('./app/**/*.html').on('change', browserSync.reload);
	gulp.watch('./app/js/script.js').on('change', browserSync.reload);
});

// -- compilation and livereload --
gulp.task('default', ['styles', 'serve']);


// img minification
gulp.task('min-img', function() {
	gulp.src('app/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('docs/img'))
});

// css minification

gulp.task('min-css', function () {
    gulp.src('app/css/*.css') // path to your file
    .pipe(cleanCss())
    .pipe(gulp.dest('docs/css'));
});

// js minification

gulp.task('min-js', function () {
    gulp.src('app/js/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('docs/js'));
});

// transfer HTML

gulp.task('html', function() {
	gulp.src('app/index.html')
    .pipe(gulp.dest('docs/'));
})

// -- minification and img compression --

gulp.task('min', ['html', 'min-css', 'min-js', 'min-img']);