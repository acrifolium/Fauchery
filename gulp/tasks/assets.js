var gulp = require("gulp")
var merge = require('merge-stream');
var imagemin = require('gulp-imagemin');
var paths = require("../paths")
var bundleConfig = require("../bundleConfig")

/**
 * task assets
 *
 * copies assets contents in `dist/`
 */
module.exports = function () {
    var assets = gulp.src(paths.sources.assets)
                     .pipe(gulp.dest(paths.dist.assets))

    var api = gulp.src(paths.sources.api)
                  .pipe(gulp.dest(paths.dist.api))

    var images = gulp.src(paths.sources.images)
			         .pipe(imagemin())
			         .pipe(gulp.dest(paths.dist.images))

    var fonts = gulp.src(paths.sources.fonts)
                    .pipe(gulp.dest(paths.dist.fonts))

    var externalFonts = gulp.src(bundleConfig.externalFonts, { cwd: paths.sources.bower, base: paths.sources.bower })
                    .pipe(gulp.dest(paths.dist.fonts))

    return merge(assets, api,images, fonts, externalFonts);
}