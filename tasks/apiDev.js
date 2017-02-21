const gulp = require("gulp")
const config = require('./config');

module.exports = function(){
    return gulp.src(config.src.api)
			   .pipe(gulp.dest(config.dist.apiDev))
}