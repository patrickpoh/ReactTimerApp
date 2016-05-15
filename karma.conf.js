var webpackConfig = require('./webpack.config.js');
module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'] //any for the test files we want to run webpack to load in the components and use sourcemap to know which jsx files contains the error
    },
    reporters: ['mocha'], //which test fail which test pass
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
