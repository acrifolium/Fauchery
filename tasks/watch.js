const gulp = require("gulp")
const watch = require('gulp-watch');

const config = require("./config")

module.exports = function (options) {

    watch(config.src.js, function() {
        javascript(options);
    });

    // watch(config.src.less, options, ["less"]);

    // watch(config.src.img, options, ["assets"]);

    // watch(config.src.doc, options, ["assets"]);
}