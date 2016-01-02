var gulp = require("gulp")
var opts = require("./options")
var util = require("gulp-util")
var plumber = require("gulp-plumber")
var inject = require("gulp-inject")
var paths = require("../paths")
var bundleConfig = require("../bundleConfig")
var pathService = require("../utils/pathService.js")

/**
 * task inject
 *
 * inject scripts to layout
 */
module.exports = function () {
    // Declare
    var cssInjection = [];
    var jsHeadInjection = [];
    var jsInjection = [];

    console.log("injection for ", opts.production ? 'production' : 'dev');

    // Settings
    if (opts.production) {
        cssInjection = paths.dist.stylesheets + bundleConfig.config.nameAllCombinedCss;
        jsHeadInjection = paths.dist.public + bundleConfig.config.nameAllCombinedHeadJs;
        jsInjection = paths.dist.public + bundleConfig.config.nameAllCombinedJs;

        console.log("css path > ", cssInjection);
        console.log("head scripts path > ", jsHeadInjection);
        console.log("scripts path > ", jsInjection);
    } else {
        var exclude = [];
        var fileToExclude = "!" + paths.dist.stylesheets + bundleConfig.config.nameAllCombinedCss;
        exclude.push(fileToExclude);
        console.log("exclude files > ", exclude);

        cssInjection = pathService.combineBasePathToPathFiles(paths.dist.lib, bundleConfig.cssExternal)
                            .concat(pathService.combineBasePathToPathFiles(paths.dist.stylesheets, bundleConfig.cssLocal))
                            .concat(exclude);

        jsHeadInjection = pathService.combineBasePathToPathFiles(paths.dist.lib, bundleConfig.jsExternalImportant);

        jsInjection = pathService.combineBasePathToPathFiles(paths.dist.lib, bundleConfig.jsExternal)
                            .concat(pathService.combineBasePathToPathFiles(paths.dist.scripts, bundleConfig.jsLocal));
    }

    // Inject to Layout
    return gulp.src(paths.config.layoutFolder + "_Layout.cshtml")
        .pipe(opts.plumber ? plumber() : util.noop())
        // TODO: Log error if file not exist
        .pipe(
            inject(
                gulp.src(jsHeadInjection, { read: false }), { starttag: '<!-- inject:headjs -->' }
            )
        )
        .pipe(
            inject(
                gulp.src(cssInjection, { read: false }), { starttag: '<!-- inject:css -->' }
            )
        )
        .pipe(
            inject(
                gulp.src(jsInjection, { read: false }), { starttag: '<!-- inject:js -->' }
            )
        )
        .pipe(gulp.dest(paths.config.layoutFolder));
}