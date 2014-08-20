'use strict';

var errorTypes = require('./errorTypes'),
  ContentTypeNotSupportedError = errorTypes.ContentTypeNotSupportedError,
  AcceptsNotSupportedError = errorTypes.AcceptsNotSupportedError;

var DEFAULT_ACCEPT = 'application/json';
module.exports = function getRequestHeaders(operation, data, options){
  data = data || {};
  options = options || {};

  var headers = {};

  operation.parameters.forEach(function(param){
    if(param.paramType === 'header' && data[param.name] != null){
      headers[param.name] = data[param.name];
    }
  });

  // Passed headers
  if(options.headers){
    Object.keys(options.headers).forEach(function(key){
      headers[key] = options.headers[key];
    });
  }

  // Content-Type
  var contentType = options.contentType || getContentType(operation, data, options);
  if(contentType) {
    if(hasAccept(operation, contentType)){
      headers['Content-Type'] = contentType;  
    } else {
      throw new ContentTypeNotSupportedError(contentType, operation);
    }
  }

  // Accept
  var accept = options.accept || DEFAULT_ACCEPT;
  if(accept){
    if(hasContentType(operation, accept)){
      headers.Accept = accept;  
    } else {
      throw new AcceptsNotSupportedError(accept, operation);
    }
  }
  
  return headers;
};

function getContentType(operation, data){
  var hasBody = operation.parameters.some(function(param){
    return param.paramType === 'body' && data[param.name] !== undefined;
  });

  if (hasBody){
    return 'application/json';
  } else {
    var hasFormParams = operation.parameters.some(function(param){
      return param.paramType === 'form' && data[param.name] !== undefined;
    });

    var hasFileParam = hasFormParams && 
      operation.parameters.some(function(param){
        return param.type === 'File' && data[param.name] !== undefined;
      });

    if(hasFileParam) return 'multipart/form-data';
    else if(hasFormParams) return 'application/x-www-form-urlencoded';
  }
}

// Accepts is an optional field in the spec, but must be enforced when present
function hasAccept(operation, contentType){
  var apiDeclaration = operation.apiObject.apiDeclaration;
  var accepts = operation.consumes || apiDeclaration.consumes;

  if(accepts && accepts.length){
    return accepts.indexOf(contentType) !== -1;
  } else {
    return true;
  }
}
exports.hasAccept = hasAccept;

// Content-Type (produces) is an optional field in the spec, but must be enforced when present
function hasContentType(operation, contentType){
  var apiDeclaration = operation.apiObject.apiDeclaration,
    contentTypes = operation.produces || apiDeclaration.produces;

  if(contentTypes && contentTypes.length){
    return contentTypes.indexOf(contentType) !== -1;
  } else {
    return true;
  }
}
exports.hasContentType = hasContentType;