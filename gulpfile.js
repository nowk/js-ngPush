/* jshint laxcomma: true */
var gulp  = require("gulp")
  , karma = require("karma").server
  ;

gulp.task("test", function(done) {
  karma.start({
    configFile: __dirname + "/karma.js",
    singleRun:  false
  }, done);
});
