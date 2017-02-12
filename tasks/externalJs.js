const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const gulpif = require('gulp-if');
const rename = require('gulp-rename');

const config = require('./config');

module.exports = function(options){
    // External src js library
    pump([
        gulp.src(config.externalJs.map(elt => options.environment === 'dev' ? elt.dev : elt .prod)),
        sourcemaps.init(),       
        concat(config.naming.nameAllCombinedHeadJs),
        gulpif(options.minify, uglify()),
        gulpif(options.minify, rename(config.naming.nameAllCombinedHeadMinifyJs)),
        sourcemaps.write('.'),
        gulp.dest(config.dist.path),
    ], function(err) {
        if (err) {
            console.log('pipe finished', err);
        }        
    });
};
