const gulp = require('gulp');
const inject = require('gulp-inject-string');
const gulpif = require('gulp-if');
const htmlmin = require('gulp-htmlmin');

const config = require('./config');

module.exports = function(options){

    let tagJs = '\n<script src=\"libs/';
    tagJs += options.minify ? config.naming.nameAllCombinedMinifyJs : config.naming.nameAllCombinedJs; 
    tagJs += '\"></script>\n';

    let tagExternalJs = '\n<script src=\"libs/';
    tagExternalJs += options.minify ? config.naming.nameAllCombinedHeadMinifyJs : config.naming.nameAllCombinedHeadJs; 
    tagExternalJs += '\"></script>\n';

    let tagCss = '\n<link href=\"libs/';
    tagCss += options.minify ? config.naming.nameAllCombinedMinifyCss : config.naming.nameAllCombinedCss; 
    tagCss += '" rel=\"stylesheet\" media=\"screen\">\n';

    let tagExternalCss = '\n<link href=\"libs/';
    tagExternalCss += options.minify ? config.naming.nameAllCombinedHeadMinifyCss : config.naming.nameAllCombinedHeadCss; 
    tagExternalCss += '" rel=\"stylesheet\" media=\"screen\">\n';

    return gulp.src(config.src.root)
        .pipe(inject.before('</head>', tagExternalCss))
        .pipe(inject.before('</head>', tagCss))
        .pipe(inject.before('</head>', tagExternalJs))
        .pipe(inject.before('</head>', tagJs))
        .pipe(gulpif(options.minify, htmlmin({collapseWhitespace: true})))       
        .pipe(gulp.dest(config.dist.path));
};
