
var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;

gulp.task('test:e2e', ['webdriver:start'], function () {
  // This task's content must never run inside a VM environment.
  if (environment.isVM) return environment.logWrongEnvironmentExit(this)  ;

  return gulp.src('tests/e2e/specs/spec.js')
    .pipe(protractor({
      configFile: 'tests/e2e/protractor.conf.js',
      debug: false
    }));
});
