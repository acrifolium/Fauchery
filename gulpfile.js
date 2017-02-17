const gulp = require('gulp');
const browserSync = require('browser-sync');

const config = require("./tasks/config");

const clean = require('./tasks/clean');
const externalJs = require('./tasks/externalJs');
const javascript = require('./tasks/javascript');
const inject = require('./tasks/inject');
const externalCss = require('./tasks/externalCss');
const less = require('./tasks/less');
const assets = require('./tasks/assets');
const server = require('./tasks/server');
// const browserSync = require('./tasks/browser-sync');
// const api = require('./tasks/api');

gulp.task('clean', clean);
gulp.task('externalJs', externalJs);
gulp.task('javascript', javascript);
gulp.task('less', less);
gulp.task('assets', assets);
gulp.task('server', server);
// gulp.task('api', api);
// gulp.task('js-watch', ['javascript'], function (done) {
//     browserSync.reload();
//     done();
// });

gulp.task('serve', function(){  
    let options = {
        environment: 'dev',
        minify: false
    };
    server();
    clean();
    externalJs(options);
    javascript(options);
    externalCss(options);
    less(options);
    assets(options);
    inject(options);
    browserSync({
        server: {
            baseDir: config.dist.path,
            index: "index.html"
        }
    });
    gulp.watch(config.src.js, ['javascript']).on('change', browserSync.reload);
});

gulp.task('build', function(){
    let options = {
        environment: 'prod',
        minify: true
    };
    clean();
    externalJs(options);
    javascript(options);
    externalCss(options);
    less(options);
    assets(options);
    inject(options);       
});

gulp.task('default', ['serve']);
