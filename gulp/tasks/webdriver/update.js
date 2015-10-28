
var gulp = require('gulp');
var gutil = require('gulp-util');
var color = require('chalk');
var spawn = require('child_process').spawn;
var webdriverPath = process.cwd() + '/node_modules/.bin/webdriver-manager';

gulp.task('webdriver:update', function (done) {
  // This task's content must never run inside a VM environment.
  if (environment.isVM) {
    gutil.log(color.yellow('Exited \'' + color.cyan('webdriver:update') + "' due to wrong environment (VM)"));
    return done();
  }

  spawn(webdriverPath, ['update'], {
    stdio: 'inherit'
  }).once('close', done);
});
