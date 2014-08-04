'use strict';

var SwaggerUtils = require('./SwaggerUtils'),
  OperationUtils = require('./OperationUtils'),
  getRequestHeaders = require('./getRequestHeaders'),
  getRequestUrl = require('./getRequestUrl'),
  getRequestBody = require('./getRequestBody');

function createOperationHandler(operation, requestHandler){
  return function(data, options){
    options = options || {};

    data = singleParamConvenienceProcessor(operation, data);

    OperationUtils.validate(operation, data, options);

    data = removeUnknownParams(operation, data);
    
    requestHandler({
      operation: operation,
      data: data,
      options: options,

      method: operation.method,
      url: getRequestUrl(operation, data),
      headers: getRequestHeaders(operation, data, options),
      body: getRequestBody(operation, data, options)
    });
  };
}
module.exports = createOperationHandler;

function noop(){}
createOperationHandler.logger = {
  debug: noop,
  info: noop,
  warn: noop,
  error: noop
};

// Enables data to be passed directly for single param operations.
function singleParamConvenienceProcessor(operation, data){
  // If there are more than one params, bail
  if(operation.parameters.length !== 1) return data;

  var param = operation.parameters[0];
  
  // If the param is already defined explicitly, bail
  if(typeof data === 'object' && (param.name in data)) return data;

  var models = operation.apiObject.apiDeclaration.models;

  // If the data passed is is not valid for the param data type, bail
  try {
    SwaggerUtils.validateDataType(data, param, models); 
    var wrapper = {};
    wrapper[param.name] = data;
    return wrapper;
  } catch(e){
    return data;
  }
}

function removeUnknownParams(operation, data){
  var paramNames = {};
  operation.parameters.forEach(function(param){
    paramNames[param.name] = true;
  });

  var unknownKeys = Object.keys(data).filter(function(key){
    return !(key in paramNames);
  });

  createOperationHandler.logger.warn('Unknown parameters removed from request:', 
    unknownKeys.join(', '));

  unknownKeys.forEach(function(key){
    delete data[key];
  });

  return data;
}