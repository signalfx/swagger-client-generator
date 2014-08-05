!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.swaggerClientGenerator=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.swaggerValidate=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

function DataTypeValidationError(message){
  this.name = 'DataTypeValidationError';
  this.message = message || 'Invalid data type';
}
DataTypeValidationError.prototype = Object.create(Error.prototype);
DataTypeValidationError.prototype.constructor = DataTypeValidationError;
exports.DataTypeValidationError = DataTypeValidationError;

function NotAnIntegerError(value){
  this.name = 'NotAnIntegerError';
  this.message = '"' + value + '" is not an integer';
  this.value = value;
}
NotAnIntegerError.prototype = Object.create(DataTypeValidationError.prototype);
NotAnIntegerError.prototype.constructor = NotAnIntegerError;
exports.NotAnIntegerError = NotAnIntegerError;

function NotANumberError(value, actualType){
  this.name = 'NotANumberError';
  this.message = '"' + value + '" is not a number';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotANumberError.prototype = Object.create(DataTypeValidationError.prototype);
NotANumberError.prototype.constructor = NotANumberError;
exports.NotANumberError = NotANumberError;

function NumberTooLargeError(value, max){
  this.name = 'NumberTooLargeError';
  this.message = '"' + value + '" is above the maximum of ' + max.toString();
  this.value = value;
}
NumberTooLargeError.prototype = Object.create(DataTypeValidationError.prototype);
NumberTooLargeError.prototype.constructor = NumberTooLargeError;
exports.NumberTooLargeError = NumberTooLargeError;

function NumberTooSmallError(value, max){
  this.name = 'NumberTooSmallError';
  this.message = '"' + value + '" is above the maximum of ' + max.toString();
  this.value = value;
}
NumberTooSmallError.prototype = Object.create(DataTypeValidationError.prototype);
NumberTooSmallError.prototype.constructor = NumberTooSmallError;
exports.NumberTooSmallError = NumberTooSmallError;

function NotABooleanError(value, actualType){
  this.name = 'NotABooleanError';
  this.message = '"' + value + '" is not a boolean';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotABooleanError.prototype = Object.create(DataTypeValidationError.prototype);
NotABooleanError.prototype.constructor = NotABooleanError;
exports.NotABooleanError = NotABooleanError;

function NotAnArrayError(value, actualType){
  this.name = 'NotAnArrayError';
  this.message = '"' + value + '" is not an array';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotAnArrayError.prototype = Object.create(DataTypeValidationError.prototype);
NotAnArrayError.prototype.constructor = NotAnArrayError;
exports.NotAnArrayError = NotAnArrayError;

function DuplicateInSetError(arr, dupes){
  this.name = 'DuplicateInSetError';
  this.message = 'Duplicates ("' + dupes.join('", "') + '") found in set: ["' + arr.join('", "') + '"';
  this.dupes = dupes;
  this.value = arr;
}
DuplicateInSetError.prototype = Object.create(DataTypeValidationError.prototype);
DuplicateInSetError.prototype.constructor = DuplicateInSetError;
exports.DuplicateInSetError = DuplicateInSetError;

function NotVoidError(value, actualType){
  this.name = 'NotVoidError';
  this.message = '"' + value + '" is not null or undefined';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotVoidError.prototype = Object.create(DataTypeValidationError.prototype);
NotVoidError.prototype.constructor = NotVoidError;
exports.NotVoidError = NotVoidError;

function NotAStringError(value, actualType){
  this.name = 'NotAStringError';
  this.message = '"' + value + '" is not a string';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotAStringError.prototype = Object.create(DataTypeValidationError.prototype);
NotAStringError.prototype.constructor = NotAStringError;
exports.NotAStringError = NotAStringError;

function StringNotInEnumError(value, acceptableValues){
  this.name = 'StringNotInEnumError';
  this.message = '"' + value + '" is not an acceptable value: "' + acceptableValues.join('", "') + '"';
 
  this.value = value;
}
StringNotInEnumError.prototype = Object.create(DataTypeValidationError.prototype);
StringNotInEnumError.prototype.constructor = StringNotInEnumError;
exports.StringNotInEnumError = StringNotInEnumError;


function ErrorsInArrayElementsError(errors){
  this.name = 'ErrorsInArrayElementsError';
  this.message = 'Errors in array elements:\n\t' + errors.join(',\n\t');
  this.errors = errors;
}
ErrorsInArrayElementsError.prototype = Object.create(DataTypeValidationError.prototype);
ErrorsInArrayElementsError.prototype.constructor = ErrorsInArrayElementsError;
exports.ErrorsInArrayElementsError = ErrorsInArrayElementsError;

function MissingValueError(){
  this.name = 'MissingValueError';
  
  this.message = 'This value is required but missing';
}
MissingValueError.prototype = Object.create(DataTypeValidationError.prototype);
MissingValueError.prototype.constructor = MissingValueError;
exports.MissingValueError = MissingValueError;

function ValidationError(specName, spec, error){
  this.name = 'ValidationError';
  this.specName = specName;
  this.spec = spec;
  this.error = error;

  this.message = specName + ' is invalid: ' + error.message;
}
ValidationError.prototype = Object.create(DataTypeValidationError.prototype);
ValidationError.prototype.constructor = ValidationError;
exports.ValidationError = ValidationError;

function ValidationErrors(value, specName, spec, errors){
  this.name = 'ValidationErrors';

  this.value = value;
  this.specName = specName;
  this.spec = spec;
  this.errors = errors || [];

  this.message = specName + ' is invalid';

  if(this.errors.length){
    this.message += ':\n\t' + this.errors.map(function(e){ return e.message; }).join('\n\t');
  }
}
ValidationErrors.prototype = Object.create(DataTypeValidationError.prototype);
ValidationErrors.prototype.constructor = ValidationErrors;
exports.ValidationErrors = ValidationErrors;

},{}],2:[function(_dereq_,module,exports){
exports.dataType = _dereq_('./validateDataType');
exports.model = _dereq_('./validateModel');
exports.operation = _dereq_('./validateOperation');
exports.array = _dereq_('./validateArray');
exports.errors = _dereq_('./errorTypes');

var primitives = _dereq_('./validatePrimitiveTypes');
exports.primitive = {
  integer: primitives.validateInteger,
  number: primitives.validateNumber,
  string: primitives.validateString,
  boolean: primitives.validateBoolean,
  void: primitives.validateVoid,
  file: primitives.validateFile
};

},{"./errorTypes":1,"./validateArray":3,"./validateDataType":4,"./validateModel":5,"./validateOperation":6,"./validatePrimitiveTypes":7}],3:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  validate = _dereq_('./index');

function validateArray(candidate, dataType, models){
  if(!Array.isArray(candidate)){
    return new errorTypes.NotAnArrayError(candidate, typeof candidate);
  }

  var items = dataType.items;

  if(dataType.uniqueItems){
    var dupeCheck = [];
    var dupes = candidate.filter(function(value){
      var signature;
      if(items.$ref){
        signature = JSON.stringify(value);
      } else {
        signature = value;
      }
      if(dupeCheck.indexOf(signature) !== -1){
        return true;
      } else {
        dupeCheck.push(signature);
        return false;
      }
    });

    if(dupes.length) {
      return new errorTypes.DuplicateInSetError(candidate, dupes);
    }
  }

  var errors;

  if(items.$ref){
    var model = models[items.$ref];
    errors = candidate.filter(function(value){
      return validate.model(value, model, models);
    });
  } else {
    errors = candidate.filter(function(value){
      return validate.dataType(value, items, models);
    });
  }

  if(errors.length){
    return new errorTypes.ErrorsInArrayElementsError(errors);
  }
}
module.exports = validateArray;
},{"./errorTypes":1,"./index":2}],4:[function(_dereq_,module,exports){
'use strict';

var validate = _dereq_('./index');
  
function validateDataType(candidate, dataType, models){
  models = models || {};
      
  var type = dataType.type || dataType.dataType || dataType.$ref;

  switch(type){
    case 'integer':
      return validate.primitive.integer(candidate, dataType);
    case 'number':
      return validate.primitive.number(candidate, dataType);
    case 'string':
      return validate.primitive.string(candidate, dataType);
    case 'boolean':
      return validate.primitive.boolean(candidate);
    case 'array':
      return validate.array(candidate, dataType, models);
    case 'void':
      return validate.primitive.void(candidate);
    case 'File':
      return validate.primitive.file();
    default:
      // Assumed to be complex model
      var model = models[type];
      return validate.model(candidate, model, models);
  }
}
module.exports = validateDataType;
},{"./index":2}],5:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  ValidationError = errorTypes.ValidationError,
  ValidationErrors = errorTypes.ValidationErrors,
  MissingValueError = errorTypes.MissingValueError,
  validate = _dereq_('./index');

// http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object
function clone(obj){
    if(obj === null || obj === undefined || typeof obj !== 'object') return obj;

    if(Array.isArray(obj)) return obj.slice();

    var temp = {};

    for(var key in obj)
        temp[key] = clone(obj[key]);
    return temp;
}

function addInhertiedProperties(model, modelId, models){
  var parent;

  Object.keys(models).some(function(modelName){
    var potentialParent = models[modelName];
    if (!potentialParent.subTypes) return;

    if(potentialParent.subTypes.indexOf(modelId) !== -1){
      parent = potentialParent;
      return true;
    }
  });

  if(!parent) return;

  for(var propertyName in parent.properties){
    model.properties[propertyName] = parent.properties[propertyName];
  }
  
  if(parent.required) model.required = model.required.concat(parent.required);

  addInhertiedProperties(model, parent.id, models);
}

function validateModel(candidate, model, models){
  if(candidate === null || typeof candidate !== 'object'){
    return new ValidationErrors(candidate, model);
  }

  models = models || {};

  model = clone(model);
  if(!model.required) model.required = [];
  addInhertiedProperties(model, model.id, models);

  var errors = [];

  model.required.forEach(function(propertyName){
    if (propertyName in candidate) return;

    var property = model.properties[propertyName];
    var error = new MissingValueError();
    errors.push(new ValidationError(propertyName, property, error));
  });

  Object.keys(candidate).forEach(function(propertyName){
    var property = model.properties[propertyName];

    var error = validate.dataType(candidate[propertyName], property, models);
    if(error){
      errors.push(new ValidationError(propertyName, property, error));
    }
  });
  
  if(errors.length){
    return new ValidationErrors(candidate, model.id, model, errors);
  }
}
module.exports = validateModel;
},{"./errorTypes":1,"./index":2}],6:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  ValidationError = errorTypes.ValidationError,
  ValidationErrors = errorTypes.ValidationErrors,
  MissingValueError = errorTypes.MissingValueError,
  validate = _dereq_('./index');

function validateOperation(candidate, operation, models){
  var errors = [];
  
  operation.parameters.forEach(function(param){
    if (!param.required) return;
    if (param.name in candidate) return;

    var error = new MissingValueError();
    errors.push(new ValidationError(param.name, param, error));
  });


  Object.keys(candidate).forEach(function(paramName){
    var parameter = operation.parameters.filter(function(param){
      return param.name === paramName;
    })[0];

    var error = validate.dataType(candidate[paramName], parameter, models);
    if(error){
      errors.push(new ValidationError(paramName, parameter, error));
    }
  });
  
  if(errors.length){
    return new ValidationErrors(candidate, operation.nickname, operation, errors);
  }
}
module.exports = validateOperation;
},{"./errorTypes":1,"./index":2}],7:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes');

function validateInteger(candidate, dataType){
  var error = validateNumber(candidate, dataType);
  if(error) return error;

  if(candidate % 1){
    return new errorTypes.NotAnIntegerError(candidate);
  }
}
exports.validateInteger = validateInteger;

function validateNumber(candidate, dataType){
  if(!(typeof candidate === 'number' || candidate instanceof Number) || isNaN(candidate)){
    return new errorTypes.NotANumberError(candidate, typeof candidate);
  }
  
  if(('minimum' in dataType) && candidate < parseInt(dataType.minimum, 10)){
    return new errorTypes.NumberTooSmallError(candidate, dataType.minimum);
  }
  
  if(('maximum' in dataType) && candidate > parseInt(dataType.maximum, 10)){
    return new errorTypes.NumberTooLargeError(candidate, dataType.maximum);
  }
}
exports.validateNumber = validateNumber;

function validateBoolean(candidate){
  if(!(typeof candidate === 'boolean' || candidate instanceof Boolean)){
    return new errorTypes.NotABooleanError(candidate, typeof candidate);
  }
}
exports.validateBoolean = validateBoolean;


function validateVoid(candidate){
  if(candidate != null){
    return new errorTypes.NotVoidError(candidate, typeof candidate);
  }
}
exports.validateVoid = validateVoid;

function validateFile(){
  // Not sure how to check this, since anything could qualify as 'File'.
}
exports.validateFile = validateFile;

function validateString(candidate, dataType){
  if(typeof candidate !== 'string' && !(candidate instanceof String)){
    return new errorTypes.NotAStringError(candidate, typeof candidate);
  }

  if('enum' in dataType){
    if(dataType.enum.indexOf(candidate) === -1) {
      return new errorTypes.StringNotInEnumError(candidate, dataType.enum);
    }
  }
}
exports.validateString = validateString;
},{"./errorTypes":1}]},{},[2])

(2)
});

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';

function InvalidRequestError(message){
  this.name = 'InvalidRequestError';
  this.message = message || 'Invalid request';
}
InvalidRequestError.prototype = Object.create(Error.prototype);
InvalidRequestError.prototype.constructor = InvalidRequestError;

exports.InvalidRequestError = InvalidRequestError;


function MissingPathParamsError(pathParams){
  this.name = 'MissingPathParamsError';
  this.message = 'Missing the following required path parameters: ' + pathParams.join('');
}
MissingPathParamsError.prototype = Object.create(InvalidRequestError.prototype);
MissingPathParamsError.prototype.constructor = MissingPathParamsError;

exports.MissingPathParamsError = MissingPathParamsError;


function ContentTypeNotSupportedError(contentType, operation){
  var apiDeclaration = operation.apiObject.apiDeclaration;
  var consumes = operation.consumes || apiDeclaration.consumes || [];

  this.name = 'ContentTypeNotSupportedError';
  this.message = 'Operation [' + operation.nickname + '] does not accept ' + contentType + '. It supports: ' + 
    consumes.join(', ');
}
ContentTypeNotSupportedError.prototype = Object.create(InvalidRequestError.prototype);
ContentTypeNotSupportedError.prototype.constructor = ContentTypeNotSupportedError;

exports.ContentTypeNotSupportedError = ContentTypeNotSupportedError;


function AcceptsNotSupportedError(accepts, operation){
  var apiDeclaration = operation.apiObject.apiDeclaration;
  var produces = operation.produces || apiDeclaration.produces || [];

  this.name = 'AcceptsNotSupportedError';
  this.message = 'Operation [' + operation.nickname + '] does not produce ' + accepts + '. It supports: ' + 
    produces.join(', ');
}
AcceptsNotSupportedError.prototype = Object.create(InvalidRequestError.prototype);
AcceptsNotSupportedError.prototype.constructor = AcceptsNotSupportedError;

exports.AcceptsNotSupportedError = AcceptsNotSupportedError;


function OperationValidationError(operation, errors){
  this.name = 'OperationValidationError';
  this.message = operation.nickname + ' failed validation: \n\t' + errors.join('\n\t');
}
OperationValidationError.prototype = Object.create(InvalidRequestError.prototype);
OperationValidationError.prototype.constructor = OperationValidationError;

exports.OperationValidationError = OperationValidationError;


function ParameterValidationError(parameter, errors){
  this.name = 'ParameterValidationError';
  this.message = parameter.name + ' failed validation: \n\t' + errors.join('\n\t');
}
ParameterValidationError.prototype = Object.create(InvalidRequestError.prototype);
ParameterValidationError.prototype.constructor = ParameterValidationError;

exports.ParameterValidationError = ParameterValidationError;


function DataTypeValidationError(message){
  this.name = 'DataTypeValidationError';
  this.message = message || 'Invalid data type';
}
DataTypeValidationError.prototype = Object.create(Error.prototype);
DataTypeValidationError.prototype.constructor = DataTypeValidationError;

exports.DataTypeValidationError = DataTypeValidationError;
},{}],3:[function(_dereq_,module,exports){
'use strict';

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

},{}],4:[function(_dereq_,module,exports){
'use strict';

var createOperationHandler = _dereq_('./createOperationHandler');

function createClient(schema, requestHandler){
  var operations = processSchema(schema),
    api = {};

  function getApi(apiObject){
    var name = getApiName(apiObject);

    if(!(name in api)) api[name] = {};
    return api[name];
  }

  operations.forEach(function(operation){
    var api = getApi(operation.apiObject);

    api[operation.nickname] = createOperationHandler(operation, requestHandler);
  });

  return api;
}

module.exports = createClient;
createClient.createOperationHandler = createOperationHandler;

// Helpper method which assings back pointer to object parents and returns
// the api objects within the given schema.
function processSchema(schema){
  var operations = [];
  
  schema.apis.forEach(function(resourceObject){
    resourceObject.resourceListing = schema;

    resourceObject.apiDeclaration.apis.forEach(function(apiObject){
      apiObject.resourceObject = resourceObject;
      apiObject.apiDeclaration = resourceObject.apiDeclaration;

      apiObject.operations.forEach(function(operation){
        operation.apiObject = apiObject;

        operation.parameters.forEach(function(parameter){
          parameter.operation = operation;
        });

        operations.push(operation);
      });
    });
  });

  return operations;
}

// Takes a path and returns a JavaScript-friendly variable name
function getApiName(apiObject){
  var path = apiObject.apiDeclaration.resourcePath || apiObject.path;

  // String non-word characters
  path = path.replace(/\W/g, '');

  // Turn paths which look/like/this to lookLikeThis
  path = path.replace(/(\w)\/(\w)/g, function(match, p1, p2){
    return p1 + p2.toUpperCase();
  });

  return path;
}

},{"./createOperationHandler":5}],5:[function(_dereq_,module,exports){
'use strict';

var getRequestHeaders = _dereq_('./getRequestHeaders'),
  getRequestUrl = _dereq_('./getRequestUrl'),
  getRequestBody = _dereq_('./getRequestBody'),
  swaggerValidate = _dereq_('../bower_components/swagger-validate/dist/swagger-validate');

function createOperationHandler(operation, requestHandler){
  return function(data, options){
    options = options || {};

    data = singleParamConvenienceProcessor(operation, data);

    var error = swaggerValidate.operation(data, operation, operation.apiObject.apiDeclaration.models);
    if(error) throw error;

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
},{"../bower_components/swagger-validate/dist/swagger-validate":1,"./getRequestBody":6,"./getRequestHeaders":7,"./getRequestUrl":8}],6:[function(_dereq_,module,exports){
'use strict';

module.exports = function getRequestBody(operation, data, options){
  var body = data.body;

  if(!(options.headers &&  options.headers['Content-Type'])) return body;

  var contentType = options.headers['Content-Type'];
  var presentFormParams = operation.parameters.filter(function(param){
    return param.paramType === 'form' && data[param.name] !== undefined;
  });

  if(contentType.indexOf('application/x-www-form-urlencoded') !== -1){
    body = presentFormParams.map(function(param){
      var key = param.name,
        value = data[key];
      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }).join('&');
  } else if(contentType.indexOf('multipart/form-data') !== -1){
    var randomness = Math.random().toString(16).substr(2);
    var boundary = 'SwaggerBoundary' + randomness;
    
    body = presentFormParams.map(function(param){
      var key = param.name,
        value = data[key],
        result = '--' + boundary + '\n';

      result += 'Content-Disposition: form-data; name="' + key + '"';
      result += '\n\n';
      result += value + '\n';

      return result;
    }).join('');

    body += '--' + boundary + '--\n';
    
    options.headers['Content-Type'] = contentType.replace(
      'multipart/form-data', 
      'multipart/form-data; boundary=' + boundary
    );
  }

  return body;
};
},{}],7:[function(_dereq_,module,exports){
'use strict';

var OperationUtils = _dereq_('./OperationUtils'),
  ErrorTypes = _dereq_('./ErrorTypes'),
  ContentTypeNotSupportedError = ErrorTypes.ContentTypeNotSupportedError,
  AcceptsNotSupportedError = ErrorTypes.AcceptsNotSupportedError;

var DEFAULT_ACCEPT = 'application/json';
module.exports = function getRequestHeaders(operation, data, options){
  var headers = {};

  // Passed headers
  if(data.headers){
    Object.keys(data.headers).forEach(function(key){
      headers[key] = data.headers[key];
    });
  }

  // Content-Type
  var contentType = getContentType(operation, data, options);
  if(contentType) {
    if(OperationUtils.hasAccept(operation, contentType)){
      headers['Content-Type'] = contentType;  
    } else {
      throw new ContentTypeNotSupportedError(contentType, operation);
    }
  }

  // Accept
  var accept = options.accept || DEFAULT_ACCEPT;
  if(accept){
    if(OperationUtils.hasContentType(operation, accept)){
      headers.Accept = accept;  
    } else {
      throw new AcceptsNotSupportedError(accept, operation);
    }
  }
  
  return headers;
};

function getContentType(operation, data, options){
  if ('body' in data){
    return options.contentType || 'application/json';
  } else {
    var hasFormParams = operation.parameters.some(function(param){
      return param.paramType === 'form';
    });

    var hasFileParam = hasFormParams && 
      operation.parameters.some(function(param){
        return param.type === 'File';
      });

    if(hasFileParam) return 'multipart/form-data';
    else if(hasFormParams) return 'application/x-www-form-urlencoded';
  }
}
},{"./ErrorTypes":2,"./OperationUtils":3}],8:[function(_dereq_,module,exports){
'use strict';

var MissingPathParamsError = _dereq_('./ErrorTypes').MissingPathParamsErrorget;

module.exports = function getRequestUrl(operation, data){
  var url = getUrlTemplate(operation);
  url = applyPathParams(url, operation, data);

  var queryParams = operation.parameters.filter(function(param){
    return param.paramType === 'query' && data[param.name] !== undefined;
  }).map(function(param){
    var key = param.name;
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');

  if(queryParams) url += '?' + queryParams;

  return url;
};

function applyPathParams(url, operation, data){
  var pathParams = operation.parameters.filter(function(param){
    return param.paramType === 'path';
  });

  var missingParams = pathParams.filter(function(param){
    return data[param.name] === undefined;
  });

  if(missingParams.length){
    throw new MissingPathParamsError(missingParams.map(function(param){
      return param.name;
    }));
  }

  pathParams.forEach(function(param){
    var key = param.name;
    
    var exp = new RegExp('{' + key + '[^}]*}', 'gi');

    var value = data[key].toString();
    delete data[key];
    value = value.split('/').map(encodeURIComponent).join('/');

    url = url.replace(exp, value);
  });

  return url;
}


function getUrlTemplate(operation){
  var apiObject = operation.apiObject; 

  var basePath = apiObject.apiDeclaration.basePath;
  var path = apiObject.path.replace('{format}', 'json');
  
  return basePath + path;
}

},{"./ErrorTypes":2}]},{},[4])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9ib2lsZXJwbGF0ZS1ndWxwL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjOlxcVXNlcnNcXG96YW5cXGNvZGVcXHN3YWdnZXItdmFsaWRhdGVcXG5vZGVfbW9kdWxlc1xcYm9pbGVycGxhdGUtZ3VscFxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvRXJyb3JUeXBlcy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9PcGVyYXRpb25VdGlscy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9jcmVhdGVDbGllbnQuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvY3JlYXRlT3BlcmF0aW9uSGFuZGxlci5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0Qm9keS5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0SGVhZGVycy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0VXJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWhLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gSW52YWxpZFJlcXVlc3RFcnJvcihtZXNzYWdlKXtcbiAgdGhpcy5uYW1lID0gJ0ludmFsaWRSZXF1ZXN0RXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdJbnZhbGlkIHJlcXVlc3QnO1xufVxuSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5JbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEludmFsaWRSZXF1ZXN0RXJyb3I7XG5cbmV4cG9ydHMuSW52YWxpZFJlcXVlc3RFcnJvciA9IEludmFsaWRSZXF1ZXN0RXJyb3I7XG5cblxuZnVuY3Rpb24gTWlzc2luZ1BhdGhQYXJhbXNFcnJvcihwYXRoUGFyYW1zKXtcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdQYXRoUGFyYW1zRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnTWlzc2luZyB0aGUgZm9sbG93aW5nIHJlcXVpcmVkIHBhdGggcGFyYW1ldGVyczogJyArIHBhdGhQYXJhbXMuam9pbignJyk7XG59XG5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuTWlzc2luZ1BhdGhQYXJhbXNFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yO1xuXG5leHBvcnRzLk1pc3NpbmdQYXRoUGFyYW1zRXJyb3IgPSBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yO1xuXG5cbmZ1bmN0aW9uIENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IoY29udGVudFR5cGUsIG9wZXJhdGlvbil7XG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb247XG4gIHZhciBjb25zdW1lcyA9IG9wZXJhdGlvbi5jb25zdW1lcyB8fCBhcGlEZWNsYXJhdGlvbi5jb25zdW1lcyB8fCBbXTtcblxuICB0aGlzLm5hbWUgPSAnQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdPcGVyYXRpb24gWycgKyBvcGVyYXRpb24ubmlja25hbWUgKyAnXSBkb2VzIG5vdCBhY2NlcHQgJyArIGNvbnRlbnRUeXBlICsgJy4gSXQgc3VwcG9ydHM6ICcgKyBcbiAgICBjb25zdW1lcy5qb2luKCcsICcpO1xufVxuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcjtcblxuZXhwb3J0cy5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yID0gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcjtcblxuXG5mdW5jdGlvbiBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IoYWNjZXB0cywgb3BlcmF0aW9uKXtcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbjtcbiAgdmFyIHByb2R1Y2VzID0gb3BlcmF0aW9uLnByb2R1Y2VzIHx8IGFwaURlY2xhcmF0aW9uLnByb2R1Y2VzIHx8IFtdO1xuXG4gIHRoaXMubmFtZSA9ICdBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnT3BlcmF0aW9uIFsnICsgb3BlcmF0aW9uLm5pY2tuYW1lICsgJ10gZG9lcyBub3QgcHJvZHVjZSAnICsgYWNjZXB0cyArICcuIEl0IHN1cHBvcnRzOiAnICsgXG4gICAgcHJvZHVjZXMuam9pbignLCAnKTtcbn1cbkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3I7XG5cbmV4cG9ydHMuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yID0gQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yO1xuXG5cbmZ1bmN0aW9uIE9wZXJhdGlvblZhbGlkYXRpb25FcnJvcihvcGVyYXRpb24sIGVycm9ycyl7XG4gIHRoaXMubmFtZSA9ICdPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBvcGVyYXRpb24ubmlja25hbWUgKyAnIGZhaWxlZCB2YWxpZGF0aW9uOiBcXG5cXHQnICsgZXJyb3JzLmpvaW4oJ1xcblxcdCcpO1xufVxuT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE9wZXJhdGlvblZhbGlkYXRpb25FcnJvcjtcblxuZXhwb3J0cy5PcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IgPSBPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3I7XG5cblxuZnVuY3Rpb24gUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yKHBhcmFtZXRlciwgZXJyb3JzKXtcbiAgdGhpcy5uYW1lID0gJ1BhcmFtZXRlclZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IHBhcmFtZXRlci5uYW1lICsgJyBmYWlsZWQgdmFsaWRhdGlvbjogXFxuXFx0JyArIGVycm9ycy5qb2luKCdcXG5cXHQnKTtcbn1cblBhcmFtZXRlclZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcblBhcmFtZXRlclZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3I7XG5cbmV4cG9ydHMuUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yID0gUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yO1xuXG5cbmZ1bmN0aW9uIERhdGFUeXBlVmFsaWRhdGlvbkVycm9yKG1lc3NhZ2Upe1xuICB0aGlzLm5hbWUgPSAnRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdJbnZhbGlkIGRhdGEgdHlwZSc7XG59XG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjtcblxuZXhwb3J0cy5EYXRhVHlwZVZhbGlkYXRpb25FcnJvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gaGFzQWNjZXB0KG9wZXJhdGlvbiwgY29udGVudFR5cGUpe1xuICByZXR1cm4gZXhwb3J0cy5nZXRBY2NlcHRzKG9wZXJhdGlvbikuaW5kZXhPZihjb250ZW50VHlwZSkgIT09IC0xO1xufVxuZXhwb3J0cy5oYXNBY2NlcHQgPSBoYXNBY2NlcHQ7XG5cbmZ1bmN0aW9uIGhhc0NvbnRlbnRUeXBlKG9wZXJhdGlvbiwgY29udGVudFR5cGUpe1xuIHJldHVybiBleHBvcnRzLmdldENvbnRlbnRUeXBlcyhvcGVyYXRpb24pLmluZGV4T2YoY29udGVudFR5cGUpICE9PSAtMTsgXG59XG5leHBvcnRzLmhhc0NvbnRlbnRUeXBlID0gaGFzQ29udGVudFR5cGU7XG5cbmZ1bmN0aW9uIGdldENvbnRlbnRUeXBlcyhvcGVyYXRpb24pe1xuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuICByZXR1cm4gb3BlcmF0aW9uLnByb2R1Y2VzIHx8IGFwaURlY2xhcmF0aW9uLnByb2R1Y2VzIHx8IFtdO1xufVxuZXhwb3J0cy5nZXRDb250ZW50VHlwZXMgPSBnZXRDb250ZW50VHlwZXM7XG5cbmZ1bmN0aW9uIGdldEFjY2VwdHMob3BlcmF0aW9uKXtcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbjtcbiAgcmV0dXJuIG9wZXJhdGlvbi5jb25zdW1lcyB8fCBhcGlEZWNsYXJhdGlvbi5jb25zdW1lcyB8fCBbXTtcbn1cbmV4cG9ydHMuZ2V0QWNjZXB0cyA9IGdldEFjY2VwdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVPcGVyYXRpb25IYW5kbGVyID0gcmVxdWlyZSgnLi9jcmVhdGVPcGVyYXRpb25IYW5kbGVyJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudChzY2hlbWEsIHJlcXVlc3RIYW5kbGVyKXtcbiAgdmFyIG9wZXJhdGlvbnMgPSBwcm9jZXNzU2NoZW1hKHNjaGVtYSksXG4gICAgYXBpID0ge307XG5cbiAgZnVuY3Rpb24gZ2V0QXBpKGFwaU9iamVjdCl7XG4gICAgdmFyIG5hbWUgPSBnZXRBcGlOYW1lKGFwaU9iamVjdCk7XG5cbiAgICBpZighKG5hbWUgaW4gYXBpKSkgYXBpW25hbWVdID0ge307XG4gICAgcmV0dXJuIGFwaVtuYW1lXTtcbiAgfVxuXG4gIG9wZXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihvcGVyYXRpb24pe1xuICAgIHZhciBhcGkgPSBnZXRBcGkob3BlcmF0aW9uLmFwaU9iamVjdCk7XG5cbiAgICBhcGlbb3BlcmF0aW9uLm5pY2tuYW1lXSA9IGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIob3BlcmF0aW9uLCByZXF1ZXN0SGFuZGxlcik7XG4gIH0pO1xuXG4gIHJldHVybiBhcGk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2xpZW50O1xuY3JlYXRlQ2xpZW50LmNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIgPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyO1xuXG4vLyBIZWxwcGVyIG1ldGhvZCB3aGljaCBhc3NpbmdzIGJhY2sgcG9pbnRlciB0byBvYmplY3QgcGFyZW50cyBhbmQgcmV0dXJuc1xuLy8gdGhlIGFwaSBvYmplY3RzIHdpdGhpbiB0aGUgZ2l2ZW4gc2NoZW1hLlxuZnVuY3Rpb24gcHJvY2Vzc1NjaGVtYShzY2hlbWEpe1xuICB2YXIgb3BlcmF0aW9ucyA9IFtdO1xuICBcbiAgc2NoZW1hLmFwaXMuZm9yRWFjaChmdW5jdGlvbihyZXNvdXJjZU9iamVjdCl7XG4gICAgcmVzb3VyY2VPYmplY3QucmVzb3VyY2VMaXN0aW5nID0gc2NoZW1hO1xuXG4gICAgcmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb24uYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKGFwaU9iamVjdCl7XG4gICAgICBhcGlPYmplY3QucmVzb3VyY2VPYmplY3QgPSByZXNvdXJjZU9iamVjdDtcbiAgICAgIGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbiA9IHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuXG4gICAgICBhcGlPYmplY3Qub3BlcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdGlvbil7XG4gICAgICAgIG9wZXJhdGlvbi5hcGlPYmplY3QgPSBhcGlPYmplY3Q7XG5cbiAgICAgICAgb3BlcmF0aW9uLnBhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXJhbWV0ZXIpe1xuICAgICAgICAgIHBhcmFtZXRlci5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9wZXJhdGlvbnMucHVzaChvcGVyYXRpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBvcGVyYXRpb25zO1xufVxuXG4vLyBUYWtlcyBhIHBhdGggYW5kIHJldHVybnMgYSBKYXZhU2NyaXB0LWZyaWVuZGx5IHZhcmlhYmxlIG5hbWVcbmZ1bmN0aW9uIGdldEFwaU5hbWUoYXBpT2JqZWN0KXtcbiAgdmFyIHBhdGggPSBhcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ucmVzb3VyY2VQYXRoIHx8IGFwaU9iamVjdC5wYXRoO1xuXG4gIC8vIFN0cmluZyBub24td29yZCBjaGFyYWN0ZXJzXG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcVy9nLCAnJyk7XG5cbiAgLy8gVHVybiBwYXRocyB3aGljaCBsb29rL2xpa2UvdGhpcyB0byBsb29rTGlrZVRoaXNcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvKFxcdylcXC8oXFx3KS9nLCBmdW5jdGlvbihtYXRjaCwgcDEsIHAyKXtcbiAgICByZXR1cm4gcDEgKyBwMi50b1VwcGVyQ2FzZSgpO1xuICB9KTtcblxuICByZXR1cm4gcGF0aDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldFJlcXVlc3RIZWFkZXJzID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0SGVhZGVycycpLFxuICBnZXRSZXF1ZXN0VXJsID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0VXJsJyksXG4gIGdldFJlcXVlc3RCb2R5ID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0Qm9keScpLFxuICBzd2FnZ2VyVmFsaWRhdGUgPSByZXF1aXJlKCcuLi9ib3dlcl9jb21wb25lbnRzL3N3YWdnZXItdmFsaWRhdGUvZGlzdC9zd2FnZ2VyLXZhbGlkYXRlJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIob3BlcmF0aW9uLCByZXF1ZXN0SGFuZGxlcil7XG4gIHJldHVybiBmdW5jdGlvbihkYXRhLCBvcHRpb25zKXtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGRhdGEgPSBzaW5nbGVQYXJhbUNvbnZlbmllbmNlUHJvY2Vzc29yKG9wZXJhdGlvbiwgZGF0YSk7XG5cbiAgICB2YXIgZXJyb3IgPSBzd2FnZ2VyVmFsaWRhdGUub3BlcmF0aW9uKGRhdGEsIG9wZXJhdGlvbiwgb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5tb2RlbHMpO1xuICAgIGlmKGVycm9yKSB0aHJvdyBlcnJvcjtcblxuICAgIGRhdGEgPSByZW1vdmVVbmtub3duUGFyYW1zKG9wZXJhdGlvbiwgZGF0YSk7XG4gICAgXG4gICAgcmVxdWVzdEhhbmRsZXIoe1xuICAgICAgb3BlcmF0aW9uOiBvcGVyYXRpb24sXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcblxuICAgICAgbWV0aG9kOiBvcGVyYXRpb24ubWV0aG9kLFxuICAgICAgdXJsOiBnZXRSZXF1ZXN0VXJsKG9wZXJhdGlvbiwgZGF0YSksXG4gICAgICBoZWFkZXJzOiBnZXRSZXF1ZXN0SGVhZGVycyhvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpLFxuICAgICAgYm9keTogZ2V0UmVxdWVzdEJvZHkob3BlcmF0aW9uLCBkYXRhLCBvcHRpb25zKVxuICAgIH0pO1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyO1xuXG5mdW5jdGlvbiBub29wKCl7fVxuY3JlYXRlT3BlcmF0aW9uSGFuZGxlci5sb2dnZXIgPSB7XG4gIGRlYnVnOiBub29wLFxuICBpbmZvOiBub29wLFxuICB3YXJuOiBub29wLFxuICBlcnJvcjogbm9vcFxufTtcblxuLy8gRW5hYmxlcyBkYXRhIHRvIGJlIHBhc3NlZCBkaXJlY3RseSBmb3Igc2luZ2xlIHBhcmFtIG9wZXJhdGlvbnMuXG5mdW5jdGlvbiBzaW5nbGVQYXJhbUNvbnZlbmllbmNlUHJvY2Vzc29yKG9wZXJhdGlvbiwgZGF0YSl7XG4gIC8vIElmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIHBhcmFtcywgYmFpbFxuICBpZihvcGVyYXRpb24ucGFyYW1ldGVycy5sZW5ndGggIT09IDEpIHJldHVybiBkYXRhO1xuXG4gIHZhciBwYXJhbSA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzWzBdO1xuICBcbiAgLy8gSWYgdGhlIHBhcmFtIGlzIGFscmVhZHkgZGVmaW5lZCBleHBsaWNpdGx5LCBiYWlsXG4gIGlmKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJiAocGFyYW0ubmFtZSBpbiBkYXRhKSkgcmV0dXJuIGRhdGE7XG5cbiAgdmFyIG1vZGVscyA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ubW9kZWxzO1xuXG4gIC8vIElmIHRoZSBkYXRhIHBhc3NlZCBpcyBpcyBub3QgdmFsaWQgZm9yIHRoZSBwYXJhbSBkYXRhIHR5cGUsIGJhaWxcbiAgdHJ5IHtcbiAgICBzd2FnZ2VyVmFsaWRhdGUuZGF0YVR5cGUoZGF0YSwgcGFyYW0sIG1vZGVscyk7IFxuICAgIHZhciB3cmFwcGVyID0ge307XG4gICAgd3JhcHBlcltwYXJhbS5uYW1lXSA9IGRhdGE7XG4gICAgcmV0dXJuIHdyYXBwZXI7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVW5rbm93blBhcmFtcyhvcGVyYXRpb24sIGRhdGEpe1xuICB2YXIgcGFyYW1OYW1lcyA9IHt9O1xuICBvcGVyYXRpb24ucGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICBwYXJhbU5hbWVzW3BhcmFtLm5hbWVdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgdmFyIHVua25vd25LZXlzID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuICEoa2V5IGluIHBhcmFtTmFtZXMpO1xuICB9KTtcblxuICBjcmVhdGVPcGVyYXRpb25IYW5kbGVyLmxvZ2dlci53YXJuKCdVbmtub3duIHBhcmFtZXRlcnMgcmVtb3ZlZCBmcm9tIHJlcXVlc3Q6JywgXG4gICAgdW5rbm93bktleXMuam9pbignLCAnKSk7XG5cbiAgdW5rbm93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0Qm9keShvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpe1xuICB2YXIgYm9keSA9IGRhdGEuYm9keTtcblxuICBpZighKG9wdGlvbnMuaGVhZGVycyAmJiAgb3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHJldHVybiBib2R5O1xuXG4gIHZhciBjb250ZW50VHlwZSA9IG9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ107XG4gIHZhciBwcmVzZW50Rm9ybVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2Zvcm0nICYmIGRhdGFbcGFyYW0ubmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgfSk7XG5cbiAgaWYoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgIT09IC0xKXtcbiAgICBib2R5ID0gcHJlc2VudEZvcm1QYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lLFxuICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgfSkuam9pbignJicpO1xuICB9IGVsc2UgaWYoY29udGVudFR5cGUuaW5kZXhPZignbXVsdGlwYXJ0L2Zvcm0tZGF0YScpICE9PSAtMSl7XG4gICAgdmFyIHJhbmRvbW5lc3MgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMik7XG4gICAgdmFyIGJvdW5kYXJ5ID0gJ1N3YWdnZXJCb3VuZGFyeScgKyByYW5kb21uZXNzO1xuICAgIFxuICAgIGJvZHkgPSBwcmVzZW50Rm9ybVBhcmFtcy5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgdmFyIGtleSA9IHBhcmFtLm5hbWUsXG4gICAgICAgIHZhbHVlID0gZGF0YVtrZXldLFxuICAgICAgICByZXN1bHQgPSAnLS0nICsgYm91bmRhcnkgKyAnXFxuJztcblxuICAgICAgcmVzdWx0ICs9ICdDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCInICsga2V5ICsgJ1wiJztcbiAgICAgIHJlc3VsdCArPSAnXFxuXFxuJztcbiAgICAgIHJlc3VsdCArPSB2YWx1ZSArICdcXG4nO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pLmpvaW4oJycpO1xuXG4gICAgYm9keSArPSAnLS0nICsgYm91bmRhcnkgKyAnLS1cXG4nO1xuICAgIFxuICAgIG9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBjb250ZW50VHlwZS5yZXBsYWNlKFxuICAgICAgJ211bHRpcGFydC9mb3JtLWRhdGEnLCBcbiAgICAgICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0nICsgYm91bmRhcnlcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIGJvZHk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIE9wZXJhdGlvblV0aWxzID0gcmVxdWlyZSgnLi9PcGVyYXRpb25VdGlscycpLFxuICBFcnJvclR5cGVzID0gcmVxdWlyZSgnLi9FcnJvclR5cGVzJyksXG4gIENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IgPSBFcnJvclR5cGVzLkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IsXG4gIEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvciA9IEVycm9yVHlwZXMuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yO1xuXG52YXIgREVGQVVMVF9BQ0NFUFQgPSAnYXBwbGljYXRpb24vanNvbic7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFJlcXVlc3RIZWFkZXJzKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyl7XG4gIHZhciBoZWFkZXJzID0ge307XG5cbiAgLy8gUGFzc2VkIGhlYWRlcnNcbiAgaWYoZGF0YS5oZWFkZXJzKXtcbiAgICBPYmplY3Qua2V5cyhkYXRhLmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgIGhlYWRlcnNba2V5XSA9IGRhdGEuaGVhZGVyc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQ29udGVudC1UeXBlXG4gIHZhciBjb250ZW50VHlwZSA9IGdldENvbnRlbnRUeXBlKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gIGlmKGNvbnRlbnRUeXBlKSB7XG4gICAgaWYoT3BlcmF0aW9uVXRpbHMuaGFzQWNjZXB0KG9wZXJhdGlvbiwgY29udGVudFR5cGUpKXtcbiAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gY29udGVudFR5cGU7ICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IoY29udGVudFR5cGUsIG9wZXJhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLy8gQWNjZXB0XG4gIHZhciBhY2NlcHQgPSBvcHRpb25zLmFjY2VwdCB8fCBERUZBVUxUX0FDQ0VQVDtcbiAgaWYoYWNjZXB0KXtcbiAgICBpZihPcGVyYXRpb25VdGlscy5oYXNDb250ZW50VHlwZShvcGVyYXRpb24sIGFjY2VwdCkpe1xuICAgICAgaGVhZGVycy5BY2NlcHQgPSBhY2NlcHQ7ICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcihhY2NlcHQsIG9wZXJhdGlvbik7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gaGVhZGVycztcbn07XG5cbmZ1bmN0aW9uIGdldENvbnRlbnRUeXBlKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyl7XG4gIGlmICgnYm9keScgaW4gZGF0YSl7XG4gICAgcmV0dXJuIG9wdGlvbnMuY29udGVudFR5cGUgfHwgJ2FwcGxpY2F0aW9uL2pzb24nO1xuICB9IGVsc2Uge1xuICAgIHZhciBoYXNGb3JtUGFyYW1zID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuc29tZShmdW5jdGlvbihwYXJhbSl7XG4gICAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnZm9ybSc7XG4gICAgfSk7XG5cbiAgICB2YXIgaGFzRmlsZVBhcmFtID0gaGFzRm9ybVBhcmFtcyAmJiBcbiAgICAgIG9wZXJhdGlvbi5wYXJhbWV0ZXJzLnNvbWUoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gcGFyYW0udHlwZSA9PT0gJ0ZpbGUnO1xuICAgICAgfSk7XG5cbiAgICBpZihoYXNGaWxlUGFyYW0pIHJldHVybiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgZWxzZSBpZihoYXNGb3JtUGFyYW1zKSByZXR1cm4gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yID0gcmVxdWlyZSgnLi9FcnJvclR5cGVzJykuTWlzc2luZ1BhdGhQYXJhbXNFcnJvcmdldDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0VXJsKG9wZXJhdGlvbiwgZGF0YSl7XG4gIHZhciB1cmwgPSBnZXRVcmxUZW1wbGF0ZShvcGVyYXRpb24pO1xuICB1cmwgPSBhcHBseVBhdGhQYXJhbXModXJsLCBvcGVyYXRpb24sIGRhdGEpO1xuXG4gIHZhciBxdWVyeVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ3F1ZXJ5JyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9PSB1bmRlZmluZWQ7XG4gIH0pLm1hcChmdW5jdGlvbihwYXJhbSl7XG4gICAgdmFyIGtleSA9IHBhcmFtLm5hbWU7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XG4gIH0pLmpvaW4oJyYnKTtcblxuICBpZihxdWVyeVBhcmFtcykgdXJsICs9ICc/JyArIHF1ZXJ5UGFyYW1zO1xuXG4gIHJldHVybiB1cmw7XG59O1xuXG5mdW5jdGlvbiBhcHBseVBhdGhQYXJhbXModXJsLCBvcGVyYXRpb24sIGRhdGEpe1xuICB2YXIgcGF0aFBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ3BhdGgnO1xuICB9KTtcblxuICB2YXIgbWlzc2luZ1BhcmFtcyA9IHBhdGhQYXJhbXMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gZGF0YVtwYXJhbS5uYW1lXSA9PT0gdW5kZWZpbmVkO1xuICB9KTtcblxuICBpZihtaXNzaW5nUGFyYW1zLmxlbmd0aCl7XG4gICAgdGhyb3cgbmV3IE1pc3NpbmdQYXRoUGFyYW1zRXJyb3IobWlzc2luZ1BhcmFtcy5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgcmV0dXJuIHBhcmFtLm5hbWU7XG4gICAgfSkpO1xuICB9XG5cbiAgcGF0aFBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICB2YXIga2V5ID0gcGFyYW0ubmFtZTtcbiAgICBcbiAgICB2YXIgZXhwID0gbmV3IFJlZ0V4cCgneycgKyBrZXkgKyAnW159XSp9JywgJ2dpJyk7XG5cbiAgICB2YXIgdmFsdWUgPSBkYXRhW2tleV0udG9TdHJpbmcoKTtcbiAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJy8nKS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCcvJyk7XG5cbiAgICB1cmwgPSB1cmwucmVwbGFjZShleHAsIHZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuXG5mdW5jdGlvbiBnZXRVcmxUZW1wbGF0ZShvcGVyYXRpb24pe1xuICB2YXIgYXBpT2JqZWN0ID0gb3BlcmF0aW9uLmFwaU9iamVjdDsgXG5cbiAgdmFyIGJhc2VQYXRoID0gYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLmJhc2VQYXRoO1xuICB2YXIgcGF0aCA9IGFwaU9iamVjdC5wYXRoLnJlcGxhY2UoJ3tmb3JtYXR9JywgJ2pzb24nKTtcbiAgXG4gIHJldHVybiBiYXNlUGF0aCArIHBhdGg7XG59XG4iXX0=
(4)
});
