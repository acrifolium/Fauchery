const rimraf = require('rimraf');
const config = require('./config');

module.exports = function(){
  rimraf.sync(config.dist.path)
};