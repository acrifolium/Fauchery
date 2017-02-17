const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const pump = require('pump');
const gulpif = require('gulp-if');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

const config = require('./config');

module.exports = function(options){
    return pump([
        gulp.src(config.externalCss.map(elt => options.environment === 'dev' ? elt.dev : elt .prod)),
        sourcemaps.init(),       
        concat(config.naming.nameAllCombinedHeadCss),
        gulpif(options.minify, cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        })),
        gulpif(options.minify, rename(config.naming.nameAllCombinedHeadMinifyCss)),
        sourcemaps.write('.'),
        gulp.dest(config.dist.libs),
    ], function(err) {
        if (err) {
            console.log('External Css', err);
        }        
    });
};
