let gulp = require('gulp');

const clean = require('./tasks/clean');
const externalJs = require('./tasks/externalJs');
const javascript = require('./tasks/javascript');
const inject = require('./tasks/inject');
// const less = require('./tasks/less');
// const assets = require('./tasks/assets');
// const api = require('./tasks/api');

gulp.task('clean', clean);
gulp.task('externalJs', externalJs);
gulp.task('javascript', javascript);
// gulp.task('less', less);
// gulp.task('assets', assets);
// gulp.task('api', api);

gulp.task('serve', function(){    
    let options = {
        environment: 'dev',
        minify: false,
        watch: true
    };   
    clean();
    externalJs(options);
    javascript(options); 

    inject(options);
    // less(options);
    // assets(options);    
});

gulp.task('build', function(){
    let options = {
        environment: 'prod',
        minify: true,
        watch: false
    };
    clean();
    externalJs(options);
    javascript(options);

    inject(options);
    // less(options);
    // assets(options);
    // api(options);   
});

gulp.task('default', ['serve']);
