
module.exports = {
    language: "fr",
    environment: {
        dev: "http://localhost/",
        prod: "http://www.fauchery.fr/"        
    },
    naming: {
        nameAllCombinedHeadCss: "all.head.css",
        nameAllCombinedHeadMinifyCss: "all.head.min.css",
        nameAllCombinedCss: "all.css",
        nameAllCombinedMinifyCss: "all.min.css",
        nameAllCombinedHeadJs: "all.head.js",
        nameAllCombinedHeadMinifyJs: "all.head.min.js",
        nameAllCombinedJs: "all.js",
        nameAllCombinedMinifyJs: "all.min.js"
    },
    src: {
        root: "./src/index.html",
        html : "./src/page/**/*.html",
        js: "./src/**/*.js",
        less : "./src/**/*.less",
        img: "./src/assets/**/*.{jpeg,JPEG,jpg,JPG,pdf,PDF,png,PNG,ico}",
        doc: "./src/assets/**/*.{pdf,PDF}",
        fonts: "./src/fonts/**/*.{ttf,woff,woff2,eof,svg}",
        api: ["./api/**/*.{php,xml,}", "./api/.htaccess"]
    },
    externalFonts: [
        "./node_modules/font-awesome/fonts/**/*.{otf,eot,svg,ttf,woff,woff2}",
        "./node_modules/bootstrap/dist/fonts/**/*.{otf,eot,svg,ttf,woff,woff2}"
        ],
    externalCss: [
        {
            dev: "./node_module/angular-block-ui/dist/angular-block-ui.css",
            prod: "./node_module/angular-block-ui/dist/angular-block-ui.min.css"
        },
        {
            dev: "./node_module/ng-notify/src/styles/ng-notify.css",
            prod: "./node_module/ng-notify/dist/ng-notify.min.css"
        },
        {
            dev: "./node_modules/bootstrap/dist/css/bootstrap.css",
            prod: "./node_modules/bootstrap/dist/css/bootstrap.min.css"
        },
        {
            dev: "./node_modules/font-awesome/css/font-awesome.css",
            prod: "./node_modules/font-awesome/css/font-awesome.min.css"
        } 
    ],
    externalJs: [
        {
            dev: "./node_modules/angular/angular.js",
            prod: "./node_modules/angular/angular.min.js"
        },
        {
            dev: "./node_modules/angular-route/angular-route.js",
            prod: "./node_modules/angular-route/angular-route.min.js"
        },
        {
            dev: "./node_modules/angular-resource/angular-resource.js",
            prod: "./node_modules/angular-resource/angular-resource.min.js"
        },
        {
            dev: "./node_modules/angular-block-ui/dist/angular-block-ui.js",
            prod: "./node_modules/angular-block-ui/dist/angular-block-ui.min.js"
        },
        {
            dev: "./node_modules/ng-notify/src/scripts/ng-notify.js",
            prod: "./node_modules/ng-notify/dist/ng-notify.min.js"
        },
        {
            dev: "./node_modules/jquery/dist/jquery.js",
            prod: "./node_modules/jquery/dist/jquery.min.js"
        },
        {
            dev: "./node_modules/bootstrap/dist/js/bootstrap.js",
            prod: "./node_modules/bootstrap/dist/js/bootstrap.min.js"
        }
    ],
    dist: {
        path: "./dist/",
        libs: "./dist/libs",
        assets: "./dist/assets/",
        api: "./dist/api/",
        fonts: "./dist/fonts/",
    }
}