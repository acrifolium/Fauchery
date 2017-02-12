const gulp = require('gulp');
const inject = require('gulp-inject-string');

const config = require('./config');

module.exports = function(options){

    let tagJs = '\n<script src=\"';
    tagJs += options.minify ? config.naming.nameAllCombinedMinifyJs : config.naming.nameAllCombinedJs; 
    tagJs += '\"></script>';

    let tagExternalJs = '\n<script src=\"';
    tagExternalJs += options.minify ? config.naming.nameAllCombinedHeadMinifyJs : config.naming.nameAllCombinedHeadJs; 
    tagExternalJs += '\"></script>';

    return gulp.src(config.src.root)
        .pipe(inject.replace('<!-- inject:js -->', tagJs))
        .pipe(inject.replace('<!-- inject:externalJs -->', tagExternalJs))
        .pipe(gulp.dest(config.dist.path));
};
