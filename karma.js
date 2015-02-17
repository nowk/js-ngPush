module.exports = function(config) {
  config.set({
    basePath:    "",
    frameworks:  ["mocha", "browserify"],
    reporters:   ["progress"],
    browsers:    ["Chrome"],
    autoWatch:   true,
    singleRun:   false,
    colors:      true,

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
  });
};
