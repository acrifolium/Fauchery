﻿/**
 * paths configuration
 */
 var path = "/var/www/html/fauchery/";

module.exports = {
 
    sources: {
        public : ["./app/views/**/*.html"],
        assets: [],
        api: ["./api/**/*.{php,xml,}", "./api/.htaccess"],
        fonts: ["./fonts/**/*.{ttf,woff,woff2,eof,svg}",
        "./bower_components/components-font-awesome/fonts/**/*.{otf,eot,svg,ttf,woff,woff2}"],
        images: "./img/**/*",
        bower: "./bower_components/",
        scripts: "./app/**/*.js",
        stylesheets: ["./less/*.less", "./less/**/*.less"]
    },

    dist: {
        public: path,
        assets: path + "assets/",
        api: path + "api/",
        stylesheets: path + "css/",
        libs: path + "libs/",
        fonts: path + "fonts/",
        images: path + "img/"
    }
}