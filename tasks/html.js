const gulp = require("gulp")
const pump = require('pump');
const gulpif = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const flatten = require('gulp-flatten');


const config = require('./config');

module.exports = function (options) {
    return pump([
        gulp.src(config.src.html),
        flatten(),
        gulpif(options.minify, htmlmin({collapseWhitespace: true})),
        gulp.dest(config.dist.path,{ base: '.'})
    ], function(err) {
        if (err) {
            console.log('Html', err);
        }
    });
}