const gulp = require("gulp")
const imagemin = require('gulp-imagemin');
const pump = require('pump');
const gulpif = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const flatten = require('gulp-flatten');

const config = require('./config');

module.exports = function (options) {
    pump([
        gulp.src(config.src.html),
        flatten(),
        gulpif(options.minify, htmlmin({collapseWhitespace: true})),
        gulp.dest(config.dist.path,{ base: '.'})
    ], function(err) {
        if (err) {
            console.log('Html', err);
        }
    });

    pump([
        gulp.src(config.src.img),
        gulpif(options.minify, imagemin()),
        gulp.dest(config.dist.assets)
    ], function(err) {
        if (err) {
            console.log('Image', err);
        }
    });

	pump([
        gulp.src(config.src.doc),
        gulp.dest(config.dist.assets)
    ], function(err) {
        if (err) {
            console.log('Document', err);
        }
    });

	pump([
        gulp.src(config.src.fonts),
        gulp.dest(config.dist.fonts)
    ], function(err) {
        if (err) {
            console.log('Fonts', err);
        }
    });

	pump([
        gulp.src(config.externalFonts),
        gulp.dest(config.dist.fonts)
    ], function(err) {
        if (err) {
            console.log('External Fonts', err);
        }
    });

    return;
}