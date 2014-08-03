'use strict';

var https = require('https'),
  http = require('http'),
  url = require('url');

module.exports = function getSchema(listingUrl, callback){
  getJson(listingUrl, function getListing(error, resourceListing){
    if (error) return callback(error, response);

    var apis = resourceListing.apis,
      waitCounter = apis.length;

    apis.map(function(resourceObject){
      function apiDeclarationHandler(error, apiDeclaration){
        if (error) return callback(error);
        resourceObject.apiDeclaration = apiDeclaration;
        waitCounter--;

        if(waitCounter === 0) callback(null, resourceListing)
      }

      var declarationUrl = resourceObject.path;
      
      getApiDeclarations(listingUrl, declarationUrl, apiDeclarationHandler);
    });
  });
};

function getJson(resource, callback){
  var protocolHandler;
  if(url.parse(resource).protocol === 'https:'){
    protocolHandler = https;
  } else {
    protocolHandler = http;
  }

  var req = protocolHandler.get(resource, function(res) {
    var data = '';

    res.setEncoding('utf8');
    res.on('data', function(chunk){
      data += chunk;
    });

    res.on('end', function(){
      try {
        var json = JSON.parse(data);
        callback(null, json);
      } catch(e){
        callback(e, data);
      }
    });
  }).on('error', function(e){
    callback(e);
  });
}

function getApiDeclarations(listingUrl, declarationUrl, callback){
  var apiDeclarationUrl = getApiDeclarationUrl(listingUrl, declarationUrl);

  getJson(apiDeclarationUrl, function getApi(error, apiDeclaration){
    if(error) callback(error, response);
    else callback(null, apiDeclaration);
  });
}

// https://github.com/wordnik/swagger-spec/blob/master/versions/1.2.md#aePath
function getApiDeclarationUrl(listingUrl, declarationUrl) {
  listingUrl = url.parse(listingUrl);
  
  // declaration path should be relative, but may be absolute
  declarationUrl = url.parse(declarationUrl);
  if(declarationUrl.hostname) return url.format(declarationUrl);

  listingUrl.pathname += declarationUrl.path;
  return url.format(listingUrl);
}
