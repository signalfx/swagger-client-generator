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
  path = path.replace(/\W/g, '/');

  // Turn paths which look/like/this to lookLikeThis
  path = path.replace(/(\w)\/(\w)/g, function(match, p1, p2){
    return p1 + p2.toUpperCase();
  });

  path = path.replace(/\//g, '');

  return path;
}

},{"./createOperationHandler":3}],3:[function(_dereq_,module,exports){
'use strict';

var getRequestHeaders = _dereq_('./getRequestHeaders'),
  getRequestUrl = _dereq_('./getRequestUrl'),
  getRequestBody = _dereq_('./getRequestBody'),
  errorTypes = _dereq_('./errorTypes'),
  swaggerValidate = _dereq_('../bower_components/swagger-validate/dist/swagger-validate');

var allErrorTypes = {};
Object.keys(swaggerValidate.errors).forEach(function(errorName){
  allErrorTypes[errorName] = swaggerValidate.errors[errorName];
});

Object.keys(errorTypes).forEach(function(errorName){
  allErrorTypes[errorName] = errorTypes[errorName];
});

function createOperationHandler(operation, requestHandler){
  function Request(data, options){
    this.method = operation.method;
    this.operation = operation;
    this.errorTypes = allErrorTypes;
    this.data = data;
    this.options = options;
  }

  var operationHandler = function(data, options){
    var error,
      request;
    
    options = options || {};

    try{
      data = singleParamConvenienceProcessor(operation, data);
      data = removeUnknownParams(operation, data);

      error = swaggerValidate.operation(data, operation, operation.apiObject.apiDeclaration.models);
      
      request = new Request(data, options);
      
      // If we know there is an error, don't attempt to craft the request params.
      // The request param generators assume valid data to work properly.
      if(!error){
        request.url = getRequestUrl(operation, data);
        request.headers = getRequestHeaders(operation, data, options);
        request.body = getRequestBody(operation, data, request.headers);
      }
    } catch(e){
      error = e;
    }
    
    return requestHandler(error, request);
  };

  // Useful for instanceof checks
  operationHandler.Request = Request;
  operationHandler.errorTypes = allErrorTypes;

  // Useful for reflection
  operationHandler.operation = operation;
  
  // Can be used to preemptively validate without action
  operationHandler.validate = function(data){
    return swaggerValidate.operation(data, operation, operation.apiObject.apiDeclaration.models);
  };

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
  if(!data || typeof data !== 'object') return data;

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
},{"../bower_components/swagger-validate/dist/swagger-validate":1,"./errorTypes":4,"./getRequestBody":5,"./getRequestHeaders":6,"./getRequestUrl":7}],4:[function(_dereq_,module,exports){
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
},{}],5:[function(_dereq_,module,exports){
'use strict';

module.exports = function getRequestBody(operation, data, headers){
  var body = data.body;

  if(!(headers &&  headers['Content-Type'])) return body;

  var contentType = headers['Content-Type'];
  var presentFormParams = operation.parameters.filter(function(param){
    return param.paramType === 'form' && data[param.name] != null;
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
        result = '--' + boundary;

      result += '\nContent-Disposition: form-data; name="' + key + '"';
      
      if(value.contentType){
        if(value.name){
          result += '; filename="' + value.name + '"';
        }

        result += '\nContent-Type: ' + value.contentType;
      }

      if(value.contentTransferEncoding){
        result += '\nContent-Transfer-Encoding: ' + value.contentTransferEncoding;
      }

      if(value.body){
        result += '\n\n' + value.body;
      } else {
        result += '\n\n' + value;
      }

      return result;
    }).join('\n');

    body += '\n--' + boundary + '--\n';
    
    headers['Content-Type'] = contentType.replace(
      'multipart/form-data', 
      'multipart/form-data; boundary=' + boundary
    );
  } else if(contentType.indexOf('application/json') !== -1){
    if(typeof body !== 'string'){
      body = JSON.stringify(body);
    }
  }

  return body;
};
},{}],6:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  ContentTypeNotSupportedError = errorTypes.ContentTypeNotSupportedError,
  AcceptsNotSupportedError = errorTypes.AcceptsNotSupportedError;

var DEFAULT_ACCEPT = 'application/json';
module.exports = function getRequestHeaders(operation, data, options){
  data = data || {};
  options = options || {};

  var headers = {};

  // Passed headers
  if(data.headers){
    Object.keys(data.headers).forEach(function(key){
      headers[key] = data.headers[key];
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
    return param.paramType === 'body' && (param.name in data);
  });

  if (hasBody){
    return 'application/json';
  } else {
    var hasFormParams = operation.parameters.some(function(param){
      return param.paramType === 'form' && (param.name in data);
    });

    var hasFileParam = hasFormParams && 
      operation.parameters.some(function(param){
        return param.type === 'File' && (param.name in data);
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
},{"./errorTypes":4}],7:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  MissingPathParamsError = errorTypes.MissingPathParamsError;

module.exports = function getRequestUrl(operation, data){
  var url = getUrlTemplate(operation);

  url = applyPathParams(url, operation, data);

  if(!data) return url;

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

},{"./errorTypes":4}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9ib2lsZXJwbGF0ZS1ndWxwL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjOlxcVXNlcnNcXG96YW5cXGNvZGVcXHN3YWdnZXItdmFsaWRhdGVcXG5vZGVfbW9kdWxlc1xcYm9pbGVycGxhdGUtZ3VscFxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvY3JlYXRlQ2xpZW50LmpzIiwiL1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2NyZWF0ZU9wZXJhdGlvbkhhbmRsZXIuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvZXJyb3JUeXBlcy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0Qm9keS5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0SGVhZGVycy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0VXJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWhLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVPcGVyYXRpb25IYW5kbGVyID0gcmVxdWlyZSgnLi9jcmVhdGVPcGVyYXRpb25IYW5kbGVyJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudChzY2hlbWEsIHJlcXVlc3RIYW5kbGVyKXtcbiAgdmFyIG9wZXJhdGlvbnMgPSBwcm9jZXNzU2NoZW1hKHNjaGVtYSksXG4gICAgYXBpID0ge307XG5cbiAgZnVuY3Rpb24gZ2V0QXBpKGFwaU9iamVjdCl7XG4gICAgdmFyIG5hbWUgPSBnZXRBcGlOYW1lKGFwaU9iamVjdCk7XG5cbiAgICBpZighKG5hbWUgaW4gYXBpKSkgYXBpW25hbWVdID0ge307XG4gICAgcmV0dXJuIGFwaVtuYW1lXTtcbiAgfVxuXG4gIG9wZXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihvcGVyYXRpb24pe1xuICAgIHZhciBhcGkgPSBnZXRBcGkob3BlcmF0aW9uLmFwaU9iamVjdCk7XG5cbiAgICBhcGlbb3BlcmF0aW9uLm5pY2tuYW1lXSA9IGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIob3BlcmF0aW9uLCByZXF1ZXN0SGFuZGxlcik7XG4gIH0pO1xuXG4gIHJldHVybiBhcGk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2xpZW50O1xuY3JlYXRlQ2xpZW50LmNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIgPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyO1xuXG4vLyBIZWxwcGVyIG1ldGhvZCB3aGljaCBhc3NpbmdzIGJhY2sgcG9pbnRlciB0byBvYmplY3QgcGFyZW50cyBhbmQgcmV0dXJuc1xuLy8gdGhlIGFwaSBvYmplY3RzIHdpdGhpbiB0aGUgZ2l2ZW4gc2NoZW1hLlxuZnVuY3Rpb24gcHJvY2Vzc1NjaGVtYShzY2hlbWEpe1xuICB2YXIgb3BlcmF0aW9ucyA9IFtdO1xuICBcbiAgc2NoZW1hLmFwaXMuZm9yRWFjaChmdW5jdGlvbihyZXNvdXJjZU9iamVjdCl7XG4gICAgcmVzb3VyY2VPYmplY3QucmVzb3VyY2VMaXN0aW5nID0gc2NoZW1hO1xuXG4gICAgcmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb24uYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKGFwaU9iamVjdCl7XG4gICAgICBhcGlPYmplY3QucmVzb3VyY2VPYmplY3QgPSByZXNvdXJjZU9iamVjdDtcbiAgICAgIGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbiA9IHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuXG4gICAgICBhcGlPYmplY3Qub3BlcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdGlvbil7XG4gICAgICAgIG9wZXJhdGlvbi5hcGlPYmplY3QgPSBhcGlPYmplY3Q7XG5cbiAgICAgICAgb3BlcmF0aW9uLnBhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXJhbWV0ZXIpe1xuICAgICAgICAgIHBhcmFtZXRlci5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9wZXJhdGlvbnMucHVzaChvcGVyYXRpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBvcGVyYXRpb25zO1xufVxuXG4vLyBUYWtlcyBhIHBhdGggYW5kIHJldHVybnMgYSBKYXZhU2NyaXB0LWZyaWVuZGx5IHZhcmlhYmxlIG5hbWVcbmZ1bmN0aW9uIGdldEFwaU5hbWUoYXBpT2JqZWN0KXtcbiAgdmFyIHBhdGggPSBhcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ucmVzb3VyY2VQYXRoIHx8IGFwaU9iamVjdC5wYXRoO1xuXG4gIC8vIFN0cmluZyBub24td29yZCBjaGFyYWN0ZXJzXG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcVy9nLCAnLycpO1xuXG4gIC8vIFR1cm4gcGF0aHMgd2hpY2ggbG9vay9saWtlL3RoaXMgdG8gbG9va0xpa2VUaGlzXG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoLyhcXHcpXFwvKFxcdykvZywgZnVuY3Rpb24obWF0Y2gsIHAxLCBwMil7XG4gICAgcmV0dXJuIHAxICsgcDIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG5cbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvL2csICcnKTtcblxuICByZXR1cm4gcGF0aDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldFJlcXVlc3RIZWFkZXJzID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0SGVhZGVycycpLFxuICBnZXRSZXF1ZXN0VXJsID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0VXJsJyksXG4gIGdldFJlcXVlc3RCb2R5ID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0Qm9keScpLFxuICBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIHN3YWdnZXJWYWxpZGF0ZSA9IHJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvc3dhZ2dlci12YWxpZGF0ZS9kaXN0L3N3YWdnZXItdmFsaWRhdGUnKTtcblxudmFyIGFsbEVycm9yVHlwZXMgPSB7fTtcbk9iamVjdC5rZXlzKHN3YWdnZXJWYWxpZGF0ZS5lcnJvcnMpLmZvckVhY2goZnVuY3Rpb24oZXJyb3JOYW1lKXtcbiAgYWxsRXJyb3JUeXBlc1tlcnJvck5hbWVdID0gc3dhZ2dlclZhbGlkYXRlLmVycm9yc1tlcnJvck5hbWVdO1xufSk7XG5cbk9iamVjdC5rZXlzKGVycm9yVHlwZXMpLmZvckVhY2goZnVuY3Rpb24oZXJyb3JOYW1lKXtcbiAgYWxsRXJyb3JUeXBlc1tlcnJvck5hbWVdID0gZXJyb3JUeXBlc1tlcnJvck5hbWVdO1xufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIob3BlcmF0aW9uLCByZXF1ZXN0SGFuZGxlcil7XG4gIGZ1bmN0aW9uIFJlcXVlc3QoZGF0YSwgb3B0aW9ucyl7XG4gICAgdGhpcy5tZXRob2QgPSBvcGVyYXRpb24ubWV0aG9kO1xuICAgIHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICAgIHRoaXMuZXJyb3JUeXBlcyA9IGFsbEVycm9yVHlwZXM7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgdmFyIG9wZXJhdGlvbkhhbmRsZXIgPSBmdW5jdGlvbihkYXRhLCBvcHRpb25zKXtcbiAgICB2YXIgZXJyb3IsXG4gICAgICByZXF1ZXN0O1xuICAgIFxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgdHJ5e1xuICAgICAgZGF0YSA9IHNpbmdsZVBhcmFtQ29udmVuaWVuY2VQcm9jZXNzb3Iob3BlcmF0aW9uLCBkYXRhKTtcbiAgICAgIGRhdGEgPSByZW1vdmVVbmtub3duUGFyYW1zKG9wZXJhdGlvbiwgZGF0YSk7XG5cbiAgICAgIGVycm9yID0gc3dhZ2dlclZhbGlkYXRlLm9wZXJhdGlvbihkYXRhLCBvcGVyYXRpb24sIG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ubW9kZWxzKTtcbiAgICAgIFxuICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGRhdGEsIG9wdGlvbnMpO1xuICAgICAgXG4gICAgICAvLyBJZiB3ZSBrbm93IHRoZXJlIGlzIGFuIGVycm9yLCBkb24ndCBhdHRlbXB0IHRvIGNyYWZ0IHRoZSByZXF1ZXN0IHBhcmFtcy5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IHBhcmFtIGdlbmVyYXRvcnMgYXNzdW1lIHZhbGlkIGRhdGEgdG8gd29yayBwcm9wZXJseS5cbiAgICAgIGlmKCFlcnJvcil7XG4gICAgICAgIHJlcXVlc3QudXJsID0gZ2V0UmVxdWVzdFVybChvcGVyYXRpb24sIGRhdGEpO1xuICAgICAgICByZXF1ZXN0LmhlYWRlcnMgPSBnZXRSZXF1ZXN0SGVhZGVycyhvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICByZXF1ZXN0LmJvZHkgPSBnZXRSZXF1ZXN0Qm9keShvcGVyYXRpb24sIGRhdGEsIHJlcXVlc3QuaGVhZGVycyk7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIGVycm9yID0gZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKGVycm9yLCByZXF1ZXN0KTtcbiAgfTtcblxuICAvLyBVc2VmdWwgZm9yIGluc3RhbmNlb2YgY2hlY2tzXG4gIG9wZXJhdGlvbkhhbmRsZXIuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gIG9wZXJhdGlvbkhhbmRsZXIuZXJyb3JUeXBlcyA9IGFsbEVycm9yVHlwZXM7XG5cbiAgLy8gVXNlZnVsIGZvciByZWZsZWN0aW9uXG4gIG9wZXJhdGlvbkhhbmRsZXIub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICBcbiAgLy8gQ2FuIGJlIHVzZWQgdG8gcHJlZW1wdGl2ZWx5IHZhbGlkYXRlIHdpdGhvdXQgYWN0aW9uXG4gIG9wZXJhdGlvbkhhbmRsZXIudmFsaWRhdGUgPSBmdW5jdGlvbihkYXRhKXtcbiAgICByZXR1cm4gc3dhZ2dlclZhbGlkYXRlLm9wZXJhdGlvbihkYXRhLCBvcGVyYXRpb24sIG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ubW9kZWxzKTtcbiAgfTtcblxuICByZXR1cm4gb3BlcmF0aW9uSGFuZGxlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlT3BlcmF0aW9uSGFuZGxlcjtcblxuZnVuY3Rpb24gbm9vcCgpe31cbmNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIubG9nZ2VyID0ge1xuICBkZWJ1Zzogbm9vcCxcbiAgaW5mbzogbm9vcCxcbiAgd2Fybjogbm9vcCxcbiAgZXJyb3I6IG5vb3Bcbn07XG5cbi8vIEVuYWJsZXMgZGF0YSB0byBiZSBwYXNzZWQgZGlyZWN0bHkgZm9yIHNpbmdsZSBwYXJhbSBvcGVyYXRpb25zLlxuZnVuY3Rpb24gc2luZ2xlUGFyYW1Db252ZW5pZW5jZVByb2Nlc3NvcihvcGVyYXRpb24sIGRhdGEpe1xuICBpZighZGF0YSkgcmV0dXJuIGRhdGE7XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgcGFyYW1zLCBiYWlsXG4gIGlmKG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmxlbmd0aCAhPT0gMSkgcmV0dXJuIGRhdGE7XG5cbiAgdmFyIHBhcmFtID0gb3BlcmF0aW9uLnBhcmFtZXRlcnNbMF07XG4gIFxuICAvLyBJZiB0aGUgcGFyYW0gaXMgYWxyZWFkeSBkZWZpbmVkIGV4cGxpY2l0bHksIGJhaWxcbiAgaWYodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICYmIChwYXJhbS5uYW1lIGluIGRhdGEpKSByZXR1cm4gZGF0YTtcblxuICB2YXIgbW9kZWxzID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5tb2RlbHM7XG5cbiAgLy8gSWYgdGhlIGRhdGEgcGFzc2VkIGlzIGlzIG5vdCB2YWxpZCBmb3IgdGhlIHBhcmFtIGRhdGEgdHlwZSwgYmFpbFxuICB0cnkge1xuICAgIHN3YWdnZXJWYWxpZGF0ZS5kYXRhVHlwZShkYXRhLCBwYXJhbSwgbW9kZWxzKTsgXG4gICAgdmFyIHdyYXBwZXIgPSB7fTtcbiAgICB3cmFwcGVyW3BhcmFtLm5hbWVdID0gZGF0YTtcbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVVbmtub3duUGFyYW1zKG9wZXJhdGlvbiwgZGF0YSl7XG4gIGlmKCFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0JykgcmV0dXJuIGRhdGE7XG5cbiAgdmFyIHBhcmFtTmFtZXMgPSB7fTtcbiAgb3BlcmF0aW9uLnBhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXJhbSl7XG4gICAgcGFyYW1OYW1lc1twYXJhbS5uYW1lXSA9IHRydWU7XG4gIH0pO1xuXG4gIHZhciB1bmtub3duS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcihmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiAhKGtleSBpbiBwYXJhbU5hbWVzKTtcbiAgfSk7XG5cbiAgY3JlYXRlT3BlcmF0aW9uSGFuZGxlci5sb2dnZXIud2FybignVW5rbm93biBwYXJhbWV0ZXJzIHJlbW92ZWQgZnJvbSByZXF1ZXN0OicsIFxuICAgIHVua25vd25LZXlzLmpvaW4oJywgJykpO1xuXG4gIHVua25vd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICBkZWxldGUgZGF0YVtrZXldO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEludmFsaWRSZXF1ZXN0RXJyb3IobWVzc2FnZSl7XG4gIHRoaXMubmFtZSA9ICdJbnZhbGlkUmVxdWVzdEVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnSW52YWxpZCByZXF1ZXN0Jztcbn1cbkludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJbnZhbGlkUmVxdWVzdEVycm9yO1xuXG5leHBvcnRzLkludmFsaWRSZXF1ZXN0RXJyb3IgPSBJbnZhbGlkUmVxdWVzdEVycm9yO1xuXG5cbmZ1bmN0aW9uIE1pc3NpbmdQYXRoUGFyYW1zRXJyb3IocGF0aFBhcmFtcyl7XG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nUGF0aFBhcmFtc0Vycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ01pc3NpbmcgdGhlIGZvbGxvd2luZyByZXF1aXJlZCBwYXRoIHBhcmFtZXRlcnM6ICcgKyBwYXRoUGFyYW1zLmpvaW4oJycpO1xufVxuTWlzc2luZ1BhdGhQYXJhbXNFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbk1pc3NpbmdQYXRoUGFyYW1zRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ1BhdGhQYXJhbXNFcnJvcjtcblxuZXhwb3J0cy5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yID0gTWlzc2luZ1BhdGhQYXJhbXNFcnJvcjtcblxuXG5mdW5jdGlvbiBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yKGNvbnRlbnRUeXBlLCBvcGVyYXRpb24pe1xuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuICB2YXIgY29uc3VtZXMgPSBvcGVyYXRpb24uY29uc3VtZXMgfHwgYXBpRGVjbGFyYXRpb24uY29uc3VtZXMgfHwgW107XG5cbiAgdGhpcy5uYW1lID0gJ0NvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnT3BlcmF0aW9uIFsnICsgb3BlcmF0aW9uLm5pY2tuYW1lICsgJ10gZG9lcyBub3QgYWNjZXB0ICcgKyBjb250ZW50VHlwZSArICcuIEl0IHN1cHBvcnRzOiAnICsgXG4gICAgY29uc3VtZXMuam9pbignLCAnKTtcbn1cbkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3I7XG5cbmV4cG9ydHMuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvciA9IENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3I7XG5cblxuZnVuY3Rpb24gQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yKGFjY2VwdHMsIG9wZXJhdGlvbil7XG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb247XG4gIHZhciBwcm9kdWNlcyA9IG9wZXJhdGlvbi5wcm9kdWNlcyB8fCBhcGlEZWNsYXJhdGlvbi5wcm9kdWNlcyB8fCBbXTtcblxuICB0aGlzLm5hbWUgPSAnQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ09wZXJhdGlvbiBbJyArIG9wZXJhdGlvbi5uaWNrbmFtZSArICddIGRvZXMgbm90IHByb2R1Y2UgJyArIGFjY2VwdHMgKyAnLiBJdCBzdXBwb3J0czogJyArIFxuICAgIHByb2R1Y2VzLmpvaW4oJywgJyk7XG59XG5BY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5BY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yO1xuXG5leHBvcnRzLkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvciA9IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcjtcblxuXG5mdW5jdGlvbiBPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3Iob3BlcmF0aW9uLCBlcnJvcnMpe1xuICB0aGlzLm5hbWUgPSAnT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gb3BlcmF0aW9uLm5pY2tuYW1lICsgJyBmYWlsZWQgdmFsaWRhdGlvbjogXFxuXFx0JyArIGVycm9ycy5qb2luKCdcXG5cXHQnKTtcbn1cbk9wZXJhdGlvblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbk9wZXJhdGlvblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3I7XG5cbmV4cG9ydHMuT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yID0gT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yO1xuXG5cbmZ1bmN0aW9uIFBhcmFtZXRlclZhbGlkYXRpb25FcnJvcihwYXJhbWV0ZXIsIGVycm9ycyl7XG4gIHRoaXMubmFtZSA9ICdQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBwYXJhbWV0ZXIubmFtZSArICcgZmFpbGVkIHZhbGlkYXRpb246IFxcblxcdCcgKyBlcnJvcnMuam9pbignXFxuXFx0Jyk7XG59XG5QYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5QYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yO1xuXG5leHBvcnRzLlBhcmFtZXRlclZhbGlkYXRpb25FcnJvciA9IFBhcmFtZXRlclZhbGlkYXRpb25FcnJvcjtcblxuXG5mdW5jdGlvbiBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcihtZXNzYWdlKXtcbiAgdGhpcy5uYW1lID0gJ0RhdGFUeXBlVmFsaWRhdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnSW52YWxpZCBkYXRhIHR5cGUnO1xufVxuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3I7XG5cbmV4cG9ydHMuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UmVxdWVzdEJvZHkob3BlcmF0aW9uLCBkYXRhLCBoZWFkZXJzKXtcbiAgdmFyIGJvZHkgPSBkYXRhLmJvZHk7XG5cbiAgaWYoIShoZWFkZXJzICYmICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHJldHVybiBib2R5O1xuXG4gIHZhciBjb250ZW50VHlwZSA9IGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xuICB2YXIgcHJlc2VudEZvcm1QYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdmb3JtJyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9IG51bGw7XG4gIH0pO1xuXG4gIGlmKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpICE9PSAtMSl7XG4gICAgYm9keSA9IHByZXNlbnRGb3JtUGFyYW1zLm1hcChmdW5jdGlvbihwYXJhbSl7XG4gICAgICB2YXIga2V5ID0gcGFyYW0ubmFtZSxcbiAgICAgICAgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgIH0pLmpvaW4oJyYnKTtcbiAgfSBlbHNlIGlmKGNvbnRlbnRUeXBlLmluZGV4T2YoJ211bHRpcGFydC9mb3JtLWRhdGEnKSAhPT0gLTEpe1xuICAgIHZhciByYW5kb21uZXNzID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyKDIpO1xuICAgIHZhciBib3VuZGFyeSA9ICdTd2FnZ2VyQm91bmRhcnknICsgcmFuZG9tbmVzcztcbiAgICBcbiAgICBib2R5ID0gcHJlc2VudEZvcm1QYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lLFxuICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XSxcbiAgICAgICAgcmVzdWx0ID0gJy0tJyArIGJvdW5kYXJ5O1xuXG4gICAgICByZXN1bHQgKz0gJ1xcbkNvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIicgKyBrZXkgKyAnXCInO1xuICAgICAgXG4gICAgICBpZih2YWx1ZS5jb250ZW50VHlwZSl7XG4gICAgICAgIGlmKHZhbHVlLm5hbWUpe1xuICAgICAgICAgIHJlc3VsdCArPSAnOyBmaWxlbmFtZT1cIicgKyB2YWx1ZS5uYW1lICsgJ1wiJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCArPSAnXFxuQ29udGVudC1UeXBlOiAnICsgdmFsdWUuY29udGVudFR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbHVlLmNvbnRlbnRUcmFuc2ZlckVuY29kaW5nKXtcbiAgICAgICAgcmVzdWx0ICs9ICdcXG5Db250ZW50LVRyYW5zZmVyLUVuY29kaW5nOiAnICsgdmFsdWUuY29udGVudFRyYW5zZmVyRW5jb2Rpbmc7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbHVlLmJvZHkpe1xuICAgICAgICByZXN1bHQgKz0gJ1xcblxcbicgKyB2YWx1ZS5ib2R5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9ICdcXG5cXG4nICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICBib2R5ICs9ICdcXG4tLScgKyBib3VuZGFyeSArICctLVxcbic7XG4gICAgXG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBjb250ZW50VHlwZS5yZXBsYWNlKFxuICAgICAgJ211bHRpcGFydC9mb3JtLWRhdGEnLCBcbiAgICAgICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0nICsgYm91bmRhcnlcbiAgICApO1xuICB9IGVsc2UgaWYoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMSl7XG4gICAgaWYodHlwZW9mIGJvZHkgIT09ICdzdHJpbmcnKXtcbiAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9keTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yID0gZXJyb3JUeXBlcy5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yLFxuICBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IgPSBlcnJvclR5cGVzLkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcjtcblxudmFyIERFRkFVTFRfQUNDRVBUID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0SGVhZGVycyhvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpe1xuICBkYXRhID0gZGF0YSB8fCB7fTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGhlYWRlcnMgPSB7fTtcblxuICAvLyBQYXNzZWQgaGVhZGVyc1xuICBpZihkYXRhLmhlYWRlcnMpe1xuICAgIE9iamVjdC5rZXlzKGRhdGEuaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgaGVhZGVyc1trZXldID0gZGF0YS5oZWFkZXJzW2tleV07XG4gICAgfSk7XG4gIH1cblxuICAvLyBDb250ZW50LVR5cGVcbiAgdmFyIGNvbnRlbnRUeXBlID0gb3B0aW9ucy5jb250ZW50VHlwZSB8fCBnZXRDb250ZW50VHlwZShvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpO1xuICBpZihjb250ZW50VHlwZSkge1xuICAgIGlmKGhhc0FjY2VwdChvcGVyYXRpb24sIGNvbnRlbnRUeXBlKSl7XG4gICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGNvbnRlbnRUeXBlOyAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yKGNvbnRlbnRUeXBlLCBvcGVyYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFjY2VwdFxuICB2YXIgYWNjZXB0ID0gb3B0aW9ucy5hY2NlcHQgfHwgREVGQVVMVF9BQ0NFUFQ7XG4gIGlmKGFjY2VwdCl7XG4gICAgaWYoaGFzQ29udGVudFR5cGUob3BlcmF0aW9uLCBhY2NlcHQpKXtcbiAgICAgIGhlYWRlcnMuQWNjZXB0ID0gYWNjZXB0OyAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IoYWNjZXB0LCBvcGVyYXRpb24pO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGhlYWRlcnM7XG59O1xuXG5mdW5jdGlvbiBnZXRDb250ZW50VHlwZShvcGVyYXRpb24sIGRhdGEpe1xuICB2YXIgaGFzQm9keSA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLnNvbWUoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdib2R5JyAmJiAocGFyYW0ubmFtZSBpbiBkYXRhKTtcbiAgfSk7XG5cbiAgaWYgKGhhc0JvZHkpe1xuICAgIHJldHVybiAnYXBwbGljYXRpb24vanNvbic7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGhhc0Zvcm1QYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5zb21lKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdmb3JtJyAmJiAocGFyYW0ubmFtZSBpbiBkYXRhKTtcbiAgICB9KTtcblxuICAgIHZhciBoYXNGaWxlUGFyYW0gPSBoYXNGb3JtUGFyYW1zICYmIFxuICAgICAgb3BlcmF0aW9uLnBhcmFtZXRlcnMuc29tZShmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiBwYXJhbS50eXBlID09PSAnRmlsZScgJiYgKHBhcmFtLm5hbWUgaW4gZGF0YSk7XG4gICAgICB9KTtcblxuICAgIGlmKGhhc0ZpbGVQYXJhbSkgcmV0dXJuICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICBlbHNlIGlmKGhhc0Zvcm1QYXJhbXMpIHJldHVybiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgfVxufVxuXG4vLyBBY2NlcHRzIGlzIGFuIG9wdGlvbmFsIGZpZWxkIGluIHRoZSBzcGVjLCBidXQgbXVzdCBiZSBlbmZvcmNlZCB3aGVuIHByZXNlbnRcbmZ1bmN0aW9uIGhhc0FjY2VwdChvcGVyYXRpb24sIGNvbnRlbnRUeXBlKXtcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbjtcbiAgdmFyIGFjY2VwdHMgPSBvcGVyYXRpb24uY29uc3VtZXMgfHwgYXBpRGVjbGFyYXRpb24uY29uc3VtZXM7XG5cbiAgaWYoYWNjZXB0cyAmJiBhY2NlcHRzLmxlbmd0aCl7XG4gICAgcmV0dXJuIGFjY2VwdHMuaW5kZXhPZihjb250ZW50VHlwZSkgIT09IC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5leHBvcnRzLmhhc0FjY2VwdCA9IGhhc0FjY2VwdDtcblxuLy8gQ29udGVudC1UeXBlIChwcm9kdWNlcykgaXMgYW4gb3B0aW9uYWwgZmllbGQgaW4gdGhlIHNwZWMsIGJ1dCBtdXN0IGJlIGVuZm9yY2VkIHdoZW4gcHJlc2VudFxuZnVuY3Rpb24gaGFzQ29udGVudFR5cGUob3BlcmF0aW9uLCBjb250ZW50VHlwZSl7XG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24sXG4gICAgY29udGVudFR5cGVzID0gb3BlcmF0aW9uLnByb2R1Y2VzIHx8IGFwaURlY2xhcmF0aW9uLnByb2R1Y2VzO1xuXG4gIGlmKGNvbnRlbnRUeXBlcyAmJiBjb250ZW50VHlwZXMubGVuZ3RoKXtcbiAgICByZXR1cm4gY29udGVudFR5cGVzLmluZGV4T2YoY29udGVudFR5cGUpICE9PSAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuZXhwb3J0cy5oYXNDb250ZW50VHlwZSA9IGhhc0NvbnRlbnRUeXBlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcbiAgTWlzc2luZ1BhdGhQYXJhbXNFcnJvciA9IGVycm9yVHlwZXMuTWlzc2luZ1BhdGhQYXJhbXNFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0VXJsKG9wZXJhdGlvbiwgZGF0YSl7XG4gIHZhciB1cmwgPSBnZXRVcmxUZW1wbGF0ZShvcGVyYXRpb24pO1xuXG4gIHVybCA9IGFwcGx5UGF0aFBhcmFtcyh1cmwsIG9wZXJhdGlvbiwgZGF0YSk7XG5cbiAgaWYoIWRhdGEpIHJldHVybiB1cmw7XG5cbiAgdmFyIHF1ZXJ5UGFyYW1zID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAncXVlcnknICYmIGRhdGFbcGFyYW0ubmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgfSkubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICB2YXIga2V5ID0gcGFyYW0ubmFtZTtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcbiAgfSkuam9pbignJicpO1xuXG4gIGlmKHF1ZXJ5UGFyYW1zKSB1cmwgKz0gJz8nICsgcXVlcnlQYXJhbXM7XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbmZ1bmN0aW9uIGFwcGx5UGF0aFBhcmFtcyh1cmwsIG9wZXJhdGlvbiwgZGF0YSl7XG4gIHZhciBwYXRoUGFyYW1zID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAncGF0aCc7XG4gIH0pO1xuXG4gIHZhciBtaXNzaW5nUGFyYW1zID0gcGF0aFBhcmFtcy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBkYXRhW3BhcmFtLm5hbWVdID09PSB1bmRlZmluZWQ7XG4gIH0pO1xuXG4gIGlmKG1pc3NpbmdQYXJhbXMubGVuZ3RoKXtcbiAgICB0aHJvdyBuZXcgTWlzc2luZ1BhdGhQYXJhbXNFcnJvcihtaXNzaW5nUGFyYW1zLm1hcChmdW5jdGlvbihwYXJhbSl7XG4gICAgICByZXR1cm4gcGFyYW0ubmFtZTtcbiAgICB9KSk7XG4gIH1cblxuICBwYXRoUGFyYW1zLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xuICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lO1xuICAgIFxuICAgIHZhciBleHAgPSBuZXcgUmVnRXhwKCd7JyArIGtleSArICdbXn1dKn0nLCAnZ2knKTtcblxuICAgIHZhciB2YWx1ZSA9IGRhdGFba2V5XS50b1N0cmluZygpO1xuICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLycpLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJy8nKTtcblxuICAgIHVybCA9IHVybC5yZXBsYWNlKGV4cCwgdmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gdXJsO1xufVxuXG5mdW5jdGlvbiBnZXRVcmxUZW1wbGF0ZShvcGVyYXRpb24pe1xuICB2YXIgYXBpT2JqZWN0ID0gb3BlcmF0aW9uLmFwaU9iamVjdDsgXG5cbiAgdmFyIGJhc2VQYXRoID0gYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLmJhc2VQYXRoO1xuICB2YXIgcGF0aCA9IGFwaU9iamVjdC5wYXRoLnJlcGxhY2UoJ3tmb3JtYXR9JywgJ2pzb24nKTtcbiAgXG4gIHJldHVybiBiYXNlUGF0aCArIHBhdGg7XG59XG4iXX0=
(2)
});
