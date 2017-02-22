let dist = './dist/';

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
        html : ['./src/**/*.html', '!./src/index.html'],
        js: "./src/**/*.js",
        less : "./src/**/*.less",
        img: "./src/assets/**/*.{jpeg,JPEG,jpg,JPG,pdf,PDF,png,PNG,ico}",
        doc: "./src/assets/**/*.{pdf,PDF}",
        locales: "./src/**/locales/*.json",
        fonts: "./src/fonts/**/*.{ttf,woff,woff2,eof,svg}",
        api: ["./api/**/*.{php,xml,}", "./api/.htaccess"]
    },
    externalFonts: [
        "./node_modules/font-awesome/fonts/**/*.{otf,eot,svg,ttf,woff,woff2}",
        "./node_modules/bootstrap/dist/fonts/**/*.{otf,eot,svg,ttf,woff,woff2}"
        ],
    externalCss: [
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
            dev: "./node_modules/angular-sanitize/angular-sanitize.js",
            prod: "./node_modules/angular-sanitize/angular-sanitize.min.js"
        },
        {
            dev: "./node_modules/angular-ui-router/release/angular-ui-router.js",
            prod: "./node_modules/angular-ui-router/release/angular-ui-router.min.js"
        },
        {
            dev: "./node_modules/angular-animate/angular-animate.js",
            prod: "./node_modules/angular-animate/angular-animate.min.js"
        },
        {
            dev: "./node_modules/angular-resource/angular-resource.js",
            prod: "./node_modules/angular-resource/angular-resource.min.js"
        },
        {
            dev: "./node_modules/i18next/dist/umd/i18next.js",
            prod: "./node_modules/i18next/dist/umd/i18next.min.js"
        },
        {
            dev: "./node_modules/i18next-xhr-backend/i18nextXHRBackend.js",
            prod: "./node_modules/i18next-xhr-backend/i18nextXHRBackend.min.js"
        },
        {
            dev: "./node_modules/ng-i18next/dist/ng-i18next.js",
            prod: "./node_modules/ng-i18next/dist/ng-i18next.min.js"
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
        path: dist,
        libs: dist + "libs",
        assets: dist + "assets/",
        locales: dist + "locales/",
        api: dist + "api/",
        apiDev: dist + "api/",
        fonts: dist + "fonts/",
    }
}