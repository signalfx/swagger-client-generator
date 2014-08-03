var gulp = require('gulp'),
  boilerplate = require('boilerplate-gulp');

boilerplate(gulp, {
  pkg: require('./package.json'),
  jsMain: './src/client/generateApi.js',
  karmaConfig: require('./dev/karmaConfig')
});