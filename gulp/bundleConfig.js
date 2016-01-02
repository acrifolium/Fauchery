﻿/**
 * bundle configuration
 */
module.exports = {

    config: {
        nameAllCombinedCss: "all.min.css",
        nameAllCombinedHeadJs: "all.head.min.js",
        nameAllCombinedJs: "all.min.js"
    },

    externalFonts: [
        "bootstrap/dist/fonts/*.*"
    ],

    cssExternal: [],

    jsExternal: [
        //JQUERY
        "jquery/dist/jquery.js",

        //BOOTSTRAP
        "bootstrap/dist/js/bootstrap.js",

        //ANGULAR
        "angular/angular.js",
        "angular-route/angular-route.js",
        "angular-resource/angular-resource.js"
    ]
}