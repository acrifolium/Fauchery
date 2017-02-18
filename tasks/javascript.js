const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');

const config = require('./config');

module.exports = function(options){
    return pump([
        gulp.src(config.src.js),
        sourcemaps.init(),
        babel({presets: ['es2015']}),        
        concat(config.naming.nameAllCombinedJs),
        gulpif(options.minify, uglify()),
        gulpif(options.minify, rename(config.naming.nameAllCombinedMinifyJs)),
        sourcemaps.write('.'),
        gulp.dest(config.dist.libs)
    ], function(err) {
        if (err) {
            console.log('pipe finished', err);
        }        
    });
};
