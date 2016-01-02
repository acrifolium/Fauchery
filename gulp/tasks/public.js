var gulp = require("gulp")
var inject = require("gulp-inject")
var paths = require("../paths")
var bundleConfig = require("../bundleConfig")

/**
 * task inject
 *
 * inject scripts to layout
 */

module.exports = function () {

    return gulp.src(paths.sources.public)
            .pipe(inject(gulp.src([paths.sources.partials + '/partial-address.html']), {
                starttag: '<!-- inject:address -->',
                transform: function (filePath, file) {
                    // return file contents as string 
                    return file.contents.toString('utf8')
                }
            }))
            .pipe(inject(gulp.src([paths.sources.partials + '/partial-time.html']), {
                starttag: '<!-- inject:time -->',
                transform: function (filePath, file) {
                    // return file contents as string 
                    return file.contents.toString('utf8')
                }
            }))
            .pipe(inject(gulp.src([paths.sources.partials + '/partial-header.html']), {
                starttag: '<!-- inject:header -->',
                transform: function (filePath, file) {
                    // return file contents as string 
                    return file.contents.toString('utf8')
                }
            }))
            .pipe(inject(gulp.src([paths.sources.partials + '/partial-carousel.html']), {
                starttag: '<!-- inject:carousel -->',
                transform: function (filePath, file) {
                    // return file contents as string 
                    return file.contents.toString('utf8')
                }
            }))
            .pipe(inject(gulp.src([paths.sources.partials + '/partial-navbar.html']), {
                starttag: '<!-- inject:navbar -->',
                transform: function (filePath, file) {
                    // return file contents as string 
                    return file.contents.toString('utf8')
                }
            }))
            .pipe(inject(gulp.src([paths.sources.partials + '/partial-footer.html']), {
                starttag: '<!-- inject:footer -->',
                transform: function (filePath, file) {
                    // return file contents as string 
                    return file.contents.toString('utf8')
                }
            }))
            .pipe(inject(gulp.src([paths.sources.partials + '/partial-carousel-fauchery.html']), {
                starttag: '<!-- inject:carouselFauchery -->',
                transform: function (filePath, file) {
                    // return file contents as string 
                    return file.contents.toString('utf8')
                }
            }))
            .pipe(inject(gulp.src([paths.sources.partials + '/partial-carousel-enseignes.html']), {
                starttag: '<!-- inject:carouselEnseignes -->',
                transform: function (filePath, file) {
                    // return file contents as string 
                    return file.contents.toString('utf8')
                }
            }))
            .pipe(gulp.dest(paths.dist.public));
}