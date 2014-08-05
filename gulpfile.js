var gulp = require('gulp'),
  boilerplate = require('boilerplate-gulp');

boilerplate(gulp, {
  pkg: require('./package.json'),
  jsMain: './src/createClient.js',
  karmaConfig: require('./dev/karmaConfig'),
  jsHintConfig: require('./dev/jsHintConfig'),
  disableCss: true
});