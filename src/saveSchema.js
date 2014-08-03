'use strict';

var fs = require('fs'),
  fetchSchema = require('./fetchSchema');

module.exports = function(resourceListingUrl, destination, callback){
  fetchSchema(resourceListingUrl, function(err, schema){
    if(err) return callback(err, schema);

    fs.writeFile(destination, JSON.stringify(schema), callback);
  });
};
