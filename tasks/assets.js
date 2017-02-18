const gulp = require("gulp")
const imagemin = require('gulp-imagemin');
const pump = require('pump');
const gulpif = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const flatten = require('gulp-flatten');
const jsonminify = require('gulp-jsonminify');

const config = require('./config');

module.exports = function (options) {
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

    pump([
        gulp.src(config.src.locales),
        flatten(),
        gulpif(options.minify, jsonminify()),
        gulp.dest(config.dist.locales)
    ], function(err) {
        if (err) {
            console.log('locales lng', err);
        }
    });
    return;
}