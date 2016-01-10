/**
 * paths configuration
 */
 var path = "/var/www/html/fauchery/";

module.exports = {
 
    sources: {
        public : ["./app/views/*.html"],
        partials: "./app/views/partials/",
        partialsWatch : "./app/views/partials/**/*.html",
        assets: [],
        api: ["./api/**/*.{php,xml,}", "./api/.htaccess"],
        fonts: ["./fonts/**/*.{ttf,woff,woff2,eof,svg}"],
        images: "./img/**/*",
        bower: "./bower_components/",
        scripts: "./app/**/*.js",
        stylesheets: ["./less/*.less", "./less/**/*.less"],
        app_data: "./App_Data/Languages/**/*.json"
    },

    dist: {
        public: path,
        assets: path + "assets/",
        api: path + "api/",
        stylesheets: path + "css/",
        libs: path + "libs/",
        fonts: path + "fonts/",
        images: path + "img/",
        app_data: path + "App_Data/Languages/"
    }
}