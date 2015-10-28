
var gutil = require('gulp-util');
var color = require('chalk');
var environment = GLOBAL.environment = {};

environment.ip = require('./ip');
environment.isHost = environment.ip.match(/127\.0\.[01]\.1/);
environment.isVM = !environment.isHost;
environment.name = environment.isHost ? 'host' : 'VM';

/**
 * Helper method to log wrong environment exit from a task.
 */
environment.logWrongEnvironmentExit = function (context) {
  var message = ['Exited'];
  if (context && context.currentTask && context.currentTask.name) {
    message.push("  '" + color.cyan(context.currentTask.name) + "'");
  }
  message.push('due to wrong environment (' + environment.name + ')');
  gutil.log(color.yellow(message.join(' ')));
  return true;
};

module.exports = environment;
