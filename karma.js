module.exports = function(config) {
  var cfg = {
    basePath:    "",
    frameworks:  ["mocha", "browserify"],
    reporters:   ["progress"],
    browsers:    ["Chrome"],
    autoWatch:   true,
    singleRun:   false,
    colors:      true,

    customLaunchers: {
      ChromeTravisCI: {
        base:   "Chrome",
        flags:  ["--no-sandbox"]
      }
    },

    files: [
      "./test/**/*.js"
    ],
    preprocessors: {
      "./test/**/*.js":  ["browserify"]
    },
    exclude: [
      // "test/e2e/**/*"
    ],

    browserify: {
      watch:  true,
      debug:  true,
    }
  };

  if (process.env.TRAVIS) {
    cfg.browser = ["ChromeTravisCI"];

    cfg.autoWatch = false;
    cfg.singleRun = true;
    cfg.browserify = {};
  }

  config.set(cfg);
};
