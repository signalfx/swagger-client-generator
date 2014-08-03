module.exports = {
  files: [
    'src/client/**/*.js'
  ],

  preprocessors: {
    '**/src/client/**/*.js': ['commonjs']
  },

  browsers: ['PhantomJS']
};