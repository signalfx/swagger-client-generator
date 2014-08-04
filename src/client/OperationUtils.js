'use strict';

var SwaggerUtils = require('./SwaggerUtils'),
  ErrorTypes = require('./ErrorTypes'),
  ParameterValidationError = ErrorTypes.ParameterValidationError,
  OperationValidationError = ErrorTypes.OperationValidationError;

function hasAccept(operation, contentType){
  return exports.getAccepts(operation).indexOf(contentType) !== -1;
}
exports.hasAccept = hasAccept;

function hasContentType(operation, contentType){
 return exports.getContentTypes(operation).indexOf(contentType) !== -1; 
}
exports.hasContentType = hasContentType;

function getContentTypes(operation){
  var apiDeclaration = operation.apiObject.apiDeclaration;
  return operation.produces || apiDeclaration.produces || [];
}
exports.getContentTypes = getContentTypes;

function getAccepts(operation){
  var apiDeclaration = operation.apiObject.apiDeclaration;
  return operation.consumes || apiDeclaration.consumes || [];
}
exports.getAccepts = getAccepts;


function validate(operation, data){
  var models = operation.apiObject.apiDeclaration.models;

  var requiredParams = operation.parameters.filter(function(param){
    return param.required;
  });

  var errors = [];
  requiredParams.forEach(function(param){
    try {
      SwaggerUtils.validateDataType(data[param.name], param, models);
    } catch(e){
      errors.push(new ParameterValidationError(param, [e]));
    }
  });

  if(errors.length){
    throw new OperationValidationError(operation, errors);
  }
}
exports.validate = validate;