module.exports = {
  files: [
    'bower_components/swagger-validate/dist/swagger-validate.js',
    'src/client/**/*.js'
  ],

  preprocessors: {
    '**/{src/client,bower_components}/**/*.js': ['commonjs']
  },

  browsers: ['PhantomJS']
};