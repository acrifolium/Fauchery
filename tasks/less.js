const gulp = require("gulp")
const concat = require('gulp-concat');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const pump = require('pump');
const gulpif = require('gulp-if');

const config = require('./config');

module.exports = function (options) {
    return pump([
        gulp.src(config.src.less),
        sourcemaps.init(),
        less(),   
        concat(config.naming.nameAllCombinedCss),
        gulpif(options.minify, cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        })),
        gulpif(options.minify, rename(config.naming.nameAllCombinedMinifyCss)),
        sourcemaps.write('.'),
        gulp.dest(config.dist.libs)
    ], function(err) {
        if (err) {
            console.log('Less', err);
        }        
    });
}
