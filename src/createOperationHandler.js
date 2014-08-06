'use strict';

var getRequestHeaders = require('./getRequestHeaders'),
  getRequestUrl = require('./getRequestUrl'),
  getRequestBody = require('./getRequestBody'),
  errorTypes = require('./errorTypes'),
  swaggerValidate = require('../bower_components/swagger-validate/dist/swagger-validate');

var allErrorTypes = {};
Object.keys(swaggerValidate.errors).forEach(function(errorName){
  allErrorTypes[errorName] = swaggerValidate.errors[errorName];
});

Object.keys(errorTypes).forEach(function(errorName){
  allErrorTypes[errorName] = errorTypes[errorName];
});

function createOperationHandler(operation, requestHandler){
  var operationHandler = function(data, options){
    var error,
      url,
      headers,
      body;

    options = options || {};

    try{
      data = singleParamConvenienceProcessor(operation, data);

      error = swaggerValidate.operation(data, operation, operation.apiObject.apiDeclaration.models);
      
      if(!error){
        data = removeUnknownParams(operation, data);

        url = getRequestUrl(operation, data);
        headers = getRequestHeaders(operation, data, options);
        body = getRequestBody(operation, data, headers);
      }
    } catch(e){
      error = e;
    }
    
    return requestHandler(error, {
      operation: operation,
      data: data,
      options: options,
      errorTypes: allErrorTypes,

      method: operation.method,
      url: url,
      headers: headers,
      body: body
    });
  };

  operationHandler.operation = operation;
  operationHandler.validate = function(data){
    return swaggerValidate.operation(data, operation, operation.apiObject.apiDeclaration.models);
  };
  operationHandler.errorTypes = allErrorTypes;

  return operationHandler;
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
  if(!data) return data;

  // If there are more than one params, bail
  if(operation.parameters.length !== 1) return data;

  var param = operation.parameters[0];
  
  // If the param is already defined explicitly, bail
  if(typeof data === 'object' && (param.name in data)) return data;

  var models = operation.apiObject.apiDeclaration.models;

  // If the data passed is is not valid for the param data type, bail
  try {
    swaggerValidate.dataType(data, param, models); 
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