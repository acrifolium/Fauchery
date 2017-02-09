let gulp = require('gulp');

const import serve from './tasks/serve';
const import build from './tasks/build';
const import api from './tasks/api';

gulp.task('serve', serve);
gulp.task('build', build);
gulp.task('api', api);
gulp.task('default', ['serve']);
