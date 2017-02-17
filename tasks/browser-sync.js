const gulp = require('gulp');
const browserSync = require('browser-sync');

const config = require("./config");

module.exports = function() {

    var files = [
        config.src.js,
        config.src.less
    ];

    browserSync.init(files, {
        server: {
            baseDir: "./dist",
            index: "index.html"
        }
    });
}