module.exports = {
  files: [
    'bower_components/swagger-validate/dist/swagger-validate.js',
    'src/**/*.js'
  ],

  preprocessors: {
    '**/{src,bower_components}/**/*.js': ['commonjs']
  },

  browsers: ['PhantomJS']
};