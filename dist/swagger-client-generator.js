!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.swaggerClientGenerator=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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
},{"./errorTypes":1}],8:[function(_dereq_,module,exports){
'use strict';

var MissingAuthorizationError = _dereq_('./errorTypes').MissingAuthorizationError;

module.exports = function applyAuthData(operation, authData, request){
  var authMap = operation.authorizations;
  if(!authMap) authMap = operation.apiObject.apiDeclaration.authorizations;
  if(!authMap) return;

  var authNames = Object.keys(authMap).filter(function(authName){
    // Currently unable to handle oauth2
    return authMap[authName].type !== 'oauth2';
  });

  if(authNames.length === 0) return;

  if(authNames.length === 1){
    var authName = authNames[0];
    var auth = authMap[authName];

    if(!authData) throw new MissingAuthorizationError(authName, auth);

    // Unpack nested authData for single auth ops: { apiKey: '123' } -> '123'
    if(authData[authName]) authData = authData[authName];

    if(auth.type === 'apiKey'){
      applyApiKey(auth, authName, authData, request);
    } else if(auth.type === 'basicAuth') {
      applyBasicAuth(auth, authName, authData.username, authData.password, request);
    }
  } else {
    authNames.forEach(function(authName){
      var auth = authMap[authName];
      var data = authData[authName];

      if(!data) throw new MissingAuthorizationError(authName, auth);

      if(auth.type === 'apiKey'){
        applyApiKey(auth, authName, data, request);
      } else if(auth.type === 'basicAuth'){
        applyBasicAuth(auth, authName, data.username, data.password, request);
      }
    });
  }
};

function applyApiKey(auth, authName, apiKey, request){
  if(!apiKey) throw new MissingAuthorizationError(authName, auth);
  
  if(auth.passAs === 'header'){
    request.headers[auth.keyname] = apiKey;
  } else if(auth.passAs === 'query'){
    var url = request.url;
    var queryParam = auth.keyname + '=' + encodeURIComponent(apiKey);
    if(url.indexOf('?') === -1){
      url += '?' + queryParam;
    } else {
      url = url.replace('?', '?' + queryParam + '&');
    }

    request.url = url;
  }
}

function applyBasicAuth(auth, authName, username, password, request){
  if(!username || !password) throw new MissingAuthorizationError(authName, auth);
  
  var url = request.url;
  
  // Only add basic auth once
  if(url.indexOf('@') === -1){
    url = url.replace('://', '://' + username + ':' + password + '@');
  }

  request.url = url;
}
},{"./errorTypes":11}],9:[function(_dereq_,module,exports){
'use strict';

var createOperationHandler = _dereq_('./createOperationHandler');

function createClient(schema, requestHandler){
  var resources = processSchema(schema),
    api = {},
    apiAuthData,
    authMethodName = 'auth';

  // If the 'auth' key is used for any resource or operation, we'll use
  // 'authorization' instead for the auth methods
  var authIsInUse = resources.some(function(resource){
    var resourceApiName = getResourceApiName(resource);
    if(resourceApiName === 'auth') return true;
    return resource.operations.some(function(operation){
      return operation.nickname === 'auth';
    });
  });

  if(authIsInUse) authMethodName = 'authorization';

  resources.forEach(function(resource){
    var resourceApiName = getResourceApiName(resource),
      resourceApi = api[resourceApiName] = {},
      resourceAuthData;

    resource.operations.forEach(function(operation){
      var operationHandlerName = operation.nickname,
        operationAuthData,
        operationHandler; 
      
      function getAuthData(){
        return operationAuthData || resourceAuthData || apiAuthData;
      }

      operationHandler = createOperationHandler(operation, getAuthData, requestHandler);

      operationHandler[authMethodName] = function(){
        operationAuthData = processApiAuthArgs(arguments);
      };

      resourceApi[operationHandlerName] = operationHandler;
    });

    resourceApi[authMethodName] = function(){
      resourceAuthData = processApiAuthArgs(arguments);
    };
  });

  api[authMethodName] = function(){
    apiAuthData = processApiAuthArgs(arguments);
  };

  return api;
}
module.exports = createClient;

function processApiAuthArgs(args){
  // for basic auth, allow calls with two args (username, password)
  if(typeof args[0] === 'string' && typeof args[1] === 'string') {
    return {
      username: args[0],
      password: args[1]
    };
  } else {
    return args[0];
  }
}

// Helpper method which assings back pointer to object parents and returns
// the api objects within the given schema.
function processSchema(schema){
  var resources = [];
  
  schema.apis.forEach(function(resourceObject){
    resourceObject.resourceListing = schema;

    resourceObject.apiDeclaration.apis.forEach(function(apiObject){
      apiObject.resourceObject = resourceObject;
      apiObject.apiDeclaration = resourceObject.apiDeclaration;
      
      resources.push(apiObject);

      apiObject.operations.forEach(function(operation){
        operation.apiObject = apiObject;

        operation.parameters.forEach(function(parameter){
          parameter.operation = operation;
        });
      });
    });
  });

  return resources;
}

// Takes a path and returns a JavaScript-friendly variable name
function getResourceApiName(apiObject){
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
},{"./createOperationHandler":10}],10:[function(_dereq_,module,exports){
'use strict';

var getRequestHeaders = _dereq_('./getRequestHeaders'),
  getRequestUrl = _dereq_('./getRequestUrl'),
  getRequestBody = _dereq_('./getRequestBody'),
  applyAuthData = _dereq_('./applyAuthData'),
  errorTypes = _dereq_('./errorTypes'),
  swaggerValidate = _dereq_('swagger-validate');

var allErrorTypes = {};
Object.keys(swaggerValidate.errors).forEach(function(errorName){
  allErrorTypes[errorName] = swaggerValidate.errors[errorName];
});

Object.keys(errorTypes).forEach(function(errorName){
  allErrorTypes[errorName] = errorTypes[errorName];
});

function createOperationHandler(operation, getAuthData, requestHandler){
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
    
    if(data == null) data = {};

    // if a function is passed in as options, assume it's a callback function
    // for convenience
    if(typeof options === 'function'){
      options.callback = options;
    }

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
        
        applyAuthData(operation, getAuthData(), request);
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
  // If there are more than one params, bail
  var requiredParams = operation.parameters.filter(function(param){
    return param.required;
  });

  // If there are more than one required params, or if there is no required param
  // and there are many optional params, bail
  if(requiredParams.length > 1) return data;

  if(requiredParams.length !== 1 && operation.parameters.length !== 1) return data;

  var param = requiredParams[0] || operation.parameters[0];
  
  // If the param is already defined explicitly, bail
  if(typeof data === 'object' && (param.name in data)) return data;

  var models = operation.apiObject.apiDeclaration.models;

  // If the data passed is is not valid for the param data type, bail
  var error = swaggerValidate.dataType(data, param, models); 

  // If the data passed is a valid param data type, bail
  if(!error){
    var wrapper = {};
    wrapper[param.name] = data;
    return wrapper;
  } else {
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
},{"./applyAuthData":8,"./errorTypes":11,"./getRequestBody":12,"./getRequestHeaders":13,"./getRequestUrl":14,"swagger-validate":2}],11:[function(_dereq_,module,exports){
'use strict';

function InvalidRequestError(message){
  this.name = 'InvalidRequestError';
  this.message = message || 'Invalid request';
}
InvalidRequestError.prototype = Object.create(Error.prototype);
InvalidRequestError.prototype.constructor = InvalidRequestError;

exports.InvalidRequestError = InvalidRequestError;


function MissingAuthorizationError(authName, auth){
  this.name = 'MissingAuthorizationError';
  this.message = 'No data found for authorization: ' + authName;
  this.authorization = auth;
}
MissingAuthorizationError.prototype = Object.create(InvalidRequestError.prototype);
MissingAuthorizationError.prototype.constructor = MissingAuthorizationError;

exports.MissingAuthorizationError = MissingAuthorizationError;


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
},{}],12:[function(_dereq_,module,exports){
'use strict';

module.exports = function getRequestBody(operation, data, headers){
  var body = operation.parameters.filter(function(param){
    return param.paramType === 'body' && data[param.name] != null;
  }).map(function(param){
    return data[param.name];
  })[0];

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
},{}],13:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
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
},{"./errorTypes":11}],14:[function(_dereq_,module,exports){
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

},{"./errorTypes":11}]},{},[9])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9ib2lsZXJwbGF0ZS1ndWxwL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvZXJyb3JUeXBlcy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy9pbmRleC5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZUFycmF5LmpzIiwiL1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL3ZhbGlkYXRlRGF0YVR5cGUuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvdmFsaWRhdGVNb2RlbC5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZU9wZXJhdGlvbi5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZVByaW1pdGl2ZVR5cGVzLmpzIiwiL1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2FwcGx5QXV0aERhdGEuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvY3JlYXRlQ2xpZW50LmpzIiwiL1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2NyZWF0ZU9wZXJhdGlvbkhhbmRsZXIuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvZXJyb3JUeXBlcy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0Qm9keS5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0SGVhZGVycy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0VXJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcihtZXNzYWdlKXtcclxuICB0aGlzLm5hbWUgPSAnRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0ludmFsaWQgZGF0YSB0eXBlJztcclxufVxyXG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XHJcbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yO1xyXG5leHBvcnRzLkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yID0gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3I7XHJcblxyXG5mdW5jdGlvbiBOb3RBbkludGVnZXJFcnJvcih2YWx1ZSl7XHJcbiAgdGhpcy5uYW1lID0gJ05vdEFuSW50ZWdlckVycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGFuIGludGVnZXInO1xyXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5Ob3RBbkludGVnZXJFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XHJcbk5vdEFuSW50ZWdlckVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFuSW50ZWdlckVycm9yO1xyXG5leHBvcnRzLk5vdEFuSW50ZWdlckVycm9yID0gTm90QW5JbnRlZ2VyRXJyb3I7XHJcblxyXG5mdW5jdGlvbiBOb3RBTnVtYmVyRXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xyXG4gIHRoaXMubmFtZSA9ICdOb3RBTnVtYmVyRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYSBudW1iZXInO1xyXG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xyXG5cclxuICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbn1cclxuTm90QU51bWJlckVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuTm90QU51bWJlckVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFOdW1iZXJFcnJvcjtcclxuZXhwb3J0cy5Ob3RBTnVtYmVyRXJyb3IgPSBOb3RBTnVtYmVyRXJyb3I7XHJcblxyXG5mdW5jdGlvbiBOdW1iZXJUb29MYXJnZUVycm9yKHZhbHVlLCBtYXgpe1xyXG4gIHRoaXMubmFtZSA9ICdOdW1iZXJUb29MYXJnZUVycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgYWJvdmUgdGhlIG1heGltdW0gb2YgJyArIG1heC50b1N0cmluZygpO1xyXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5OdW1iZXJUb29MYXJnZUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuTnVtYmVyVG9vTGFyZ2VFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJUb29MYXJnZUVycm9yO1xyXG5leHBvcnRzLk51bWJlclRvb0xhcmdlRXJyb3IgPSBOdW1iZXJUb29MYXJnZUVycm9yO1xyXG5cclxuZnVuY3Rpb24gTnVtYmVyVG9vU21hbGxFcnJvcih2YWx1ZSwgbWF4KXtcclxuICB0aGlzLm5hbWUgPSAnTnVtYmVyVG9vU21hbGxFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIGFib3ZlIHRoZSBtYXhpbXVtIG9mICcgKyBtYXgudG9TdHJpbmcoKTtcclxuICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbn1cclxuTnVtYmVyVG9vU21hbGxFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XHJcbk51bWJlclRvb1NtYWxsRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyVG9vU21hbGxFcnJvcjtcclxuZXhwb3J0cy5OdW1iZXJUb29TbWFsbEVycm9yID0gTnVtYmVyVG9vU21hbGxFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIE5vdEFCb29sZWFuRXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xyXG4gIHRoaXMubmFtZSA9ICdOb3RBQm9vbGVhbkVycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGEgYm9vbGVhbic7XHJcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XHJcblxyXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5Ob3RBQm9vbGVhbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuTm90QUJvb2xlYW5FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RBQm9vbGVhbkVycm9yO1xyXG5leHBvcnRzLk5vdEFCb29sZWFuRXJyb3IgPSBOb3RBQm9vbGVhbkVycm9yO1xyXG5cclxuZnVuY3Rpb24gTm90QW5BcnJheUVycm9yKHZhbHVlLCBhY3R1YWxUeXBlKXtcclxuICB0aGlzLm5hbWUgPSAnTm90QW5BcnJheUVycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGFuIGFycmF5JztcclxuICBpZihhY3R1YWxUeXBlKSB0aGlzLm1lc3NhZ2UgKz0gJyAoZ290IGEgJyArIGFjdHVhbFR5cGUgKyAnIGluc3RlYWQpJztcclxuXHJcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG59XHJcbk5vdEFuQXJyYXlFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XHJcbk5vdEFuQXJyYXlFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RBbkFycmF5RXJyb3I7XHJcbmV4cG9ydHMuTm90QW5BcnJheUVycm9yID0gTm90QW5BcnJheUVycm9yO1xyXG5cclxuZnVuY3Rpb24gRHVwbGljYXRlSW5TZXRFcnJvcihhcnIsIGR1cGVzKXtcclxuICB0aGlzLm5hbWUgPSAnRHVwbGljYXRlSW5TZXRFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ0R1cGxpY2F0ZXMgKFwiJyArIGR1cGVzLmpvaW4oJ1wiLCBcIicpICsgJ1wiKSBmb3VuZCBpbiBzZXQ6IFtcIicgKyBhcnIuam9pbignXCIsIFwiJykgKyAnXCInO1xyXG4gIHRoaXMuZHVwZXMgPSBkdXBlcztcclxuICB0aGlzLnZhbHVlID0gYXJyO1xyXG59XHJcbkR1cGxpY2F0ZUluU2V0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5EdXBsaWNhdGVJblNldEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IER1cGxpY2F0ZUluU2V0RXJyb3I7XHJcbmV4cG9ydHMuRHVwbGljYXRlSW5TZXRFcnJvciA9IER1cGxpY2F0ZUluU2V0RXJyb3I7XHJcblxyXG5mdW5jdGlvbiBOb3RWb2lkRXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xyXG4gIHRoaXMubmFtZSA9ICdOb3RWb2lkRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgbnVsbCBvciB1bmRlZmluZWQnO1xyXG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xyXG5cclxuICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbn1cclxuTm90Vm9pZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuTm90Vm9pZEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdFZvaWRFcnJvcjtcclxuZXhwb3J0cy5Ob3RWb2lkRXJyb3IgPSBOb3RWb2lkRXJyb3I7XHJcblxyXG5mdW5jdGlvbiBOb3RBU3RyaW5nRXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xyXG4gIHRoaXMubmFtZSA9ICdOb3RBU3RyaW5nRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYSBzdHJpbmcnO1xyXG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xyXG5cclxuICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbn1cclxuTm90QVN0cmluZ0Vycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuTm90QVN0cmluZ0Vycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFTdHJpbmdFcnJvcjtcclxuZXhwb3J0cy5Ob3RBU3RyaW5nRXJyb3IgPSBOb3RBU3RyaW5nRXJyb3I7XHJcblxyXG5mdW5jdGlvbiBTdHJpbmdOb3RJbkVudW1FcnJvcih2YWx1ZSwgYWNjZXB0YWJsZVZhbHVlcyl7XHJcbiAgdGhpcy5uYW1lID0gJ1N0cmluZ05vdEluRW51bUVycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGFuIGFjY2VwdGFibGUgdmFsdWU6IFwiJyArIGFjY2VwdGFibGVWYWx1ZXMuam9pbignXCIsIFwiJykgKyAnXCInO1xyXG4gXHJcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG59XHJcblN0cmluZ05vdEluRW51bUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuU3RyaW5nTm90SW5FbnVtRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RyaW5nTm90SW5FbnVtRXJyb3I7XHJcbmV4cG9ydHMuU3RyaW5nTm90SW5FbnVtRXJyb3IgPSBTdHJpbmdOb3RJbkVudW1FcnJvcjtcclxuXHJcblxyXG5mdW5jdGlvbiBFcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcihlcnJvcnMpe1xyXG4gIHRoaXMubmFtZSA9ICdFcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ0Vycm9ycyBpbiBhcnJheSBlbGVtZW50czpcXG5cXHQnICsgZXJyb3JzLmpvaW4oJyxcXG5cXHQnKTtcclxuICB0aGlzLmVycm9ycyA9IGVycm9ycztcclxufVxyXG5FcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XHJcbkVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yO1xyXG5leHBvcnRzLkVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yID0gRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3I7XHJcblxyXG5mdW5jdGlvbiBNaXNzaW5nVmFsdWVFcnJvcigpe1xyXG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nVmFsdWVFcnJvcic7XHJcbiAgXHJcbiAgdGhpcy5tZXNzYWdlID0gJ1RoaXMgdmFsdWUgaXMgcmVxdWlyZWQgYnV0IG1pc3NpbmcnO1xyXG59XHJcbk1pc3NpbmdWYWx1ZUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuTWlzc2luZ1ZhbHVlRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ1ZhbHVlRXJyb3I7XHJcbmV4cG9ydHMuTWlzc2luZ1ZhbHVlRXJyb3IgPSBNaXNzaW5nVmFsdWVFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIFZhbGlkYXRpb25FcnJvcihzcGVjTmFtZSwgc3BlYywgZXJyb3Ipe1xyXG4gIHRoaXMubmFtZSA9ICdWYWxpZGF0aW9uRXJyb3InO1xyXG4gIHRoaXMuc3BlY05hbWUgPSBzcGVjTmFtZTtcclxuICB0aGlzLnNwZWMgPSBzcGVjO1xyXG4gIHRoaXMuZXJyb3IgPSBlcnJvcjtcclxuXHJcbiAgdGhpcy5tZXNzYWdlID0gc3BlY05hbWUgKyAnIGlzIGludmFsaWQ6ICcgKyBlcnJvci5tZXNzYWdlO1xyXG59XHJcblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XHJcblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBWYWxpZGF0aW9uRXJyb3I7XHJcbmV4cG9ydHMuVmFsaWRhdGlvbkVycm9yID0gVmFsaWRhdGlvbkVycm9yO1xyXG5cclxuZnVuY3Rpb24gVmFsaWRhdGlvbkVycm9ycyh2YWx1ZSwgc3BlY05hbWUsIHNwZWMsIGVycm9ycyl7XHJcbiAgdGhpcy5uYW1lID0gJ1ZhbGlkYXRpb25FcnJvcnMnO1xyXG5cclxuICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgdGhpcy5zcGVjTmFtZSA9IHNwZWNOYW1lO1xyXG4gIHRoaXMuc3BlYyA9IHNwZWM7XHJcbiAgdGhpcy5lcnJvcnMgPSBlcnJvcnMgfHwgW107XHJcblxyXG4gIHRoaXMubWVzc2FnZSA9IHNwZWNOYW1lICsgJyBpcyBpbnZhbGlkJztcclxuXHJcbiAgaWYodGhpcy5lcnJvcnMubGVuZ3RoKXtcclxuICAgIHRoaXMubWVzc2FnZSArPSAnOlxcblxcdCcgKyB0aGlzLmVycm9ycy5tYXAoZnVuY3Rpb24oZSl7IHJldHVybiBlLm1lc3NhZ2U7IH0pLmpvaW4oJ1xcblxcdCcpO1xyXG4gIH1cclxufVxyXG5WYWxpZGF0aW9uRXJyb3JzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuVmFsaWRhdGlvbkVycm9ycy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBWYWxpZGF0aW9uRXJyb3JzO1xyXG5leHBvcnRzLlZhbGlkYXRpb25FcnJvcnMgPSBWYWxpZGF0aW9uRXJyb3JzO1xyXG4iLCJleHBvcnRzLmRhdGFUeXBlID0gcmVxdWlyZSgnLi92YWxpZGF0ZURhdGFUeXBlJyk7XHJcbmV4cG9ydHMubW9kZWwgPSByZXF1aXJlKCcuL3ZhbGlkYXRlTW9kZWwnKTtcclxuZXhwb3J0cy5vcGVyYXRpb24gPSByZXF1aXJlKCcuL3ZhbGlkYXRlT3BlcmF0aW9uJyk7XHJcbmV4cG9ydHMuYXJyYXkgPSByZXF1aXJlKCcuL3ZhbGlkYXRlQXJyYXknKTtcclxuZXhwb3J0cy5lcnJvcnMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKTtcclxuXHJcbnZhciBwcmltaXRpdmVzID0gcmVxdWlyZSgnLi92YWxpZGF0ZVByaW1pdGl2ZVR5cGVzJyk7XHJcbmV4cG9ydHMucHJpbWl0aXZlID0ge1xyXG4gIGludGVnZXI6IHByaW1pdGl2ZXMudmFsaWRhdGVJbnRlZ2VyLFxyXG4gIG51bWJlcjogcHJpbWl0aXZlcy52YWxpZGF0ZU51bWJlcixcclxuICBzdHJpbmc6IHByaW1pdGl2ZXMudmFsaWRhdGVTdHJpbmcsXHJcbiAgYm9vbGVhbjogcHJpbWl0aXZlcy52YWxpZGF0ZUJvb2xlYW4sXHJcbiAgdm9pZDogcHJpbWl0aXZlcy52YWxpZGF0ZVZvaWQsXHJcbiAgZmlsZTogcHJpbWl0aXZlcy52YWxpZGF0ZUZpbGVcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcclxuICB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQXJyYXkoY2FuZGlkYXRlLCBkYXRhVHlwZSwgbW9kZWxzKXtcclxuICBpZighQXJyYXkuaXNBcnJheShjYW5kaWRhdGUpKXtcclxuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBbkFycmF5RXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcclxuICB9XHJcblxyXG4gIHZhciBpdGVtcyA9IGRhdGFUeXBlLml0ZW1zO1xyXG5cclxuICBpZihkYXRhVHlwZS51bmlxdWVJdGVtcyl7XHJcbiAgICB2YXIgZHVwZUNoZWNrID0gW107XHJcbiAgICB2YXIgZHVwZXMgPSBjYW5kaWRhdGUuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgdmFyIHNpZ25hdHVyZTtcclxuICAgICAgaWYoaXRlbXMuJHJlZil7XHJcbiAgICAgICAgc2lnbmF0dXJlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNpZ25hdHVyZSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGR1cGVDaGVjay5pbmRleE9mKHNpZ25hdHVyZSkgIT09IC0xKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkdXBlQ2hlY2sucHVzaChzaWduYXR1cmUpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoZHVwZXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5EdXBsaWNhdGVJblNldEVycm9yKGNhbmRpZGF0ZSwgZHVwZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGVycm9ycztcclxuXHJcbiAgaWYoaXRlbXMuJHJlZil7XHJcbiAgICB2YXIgbW9kZWwgPSBtb2RlbHNbaXRlbXMuJHJlZl07XHJcbiAgICBlcnJvcnMgPSBjYW5kaWRhdGUuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgcmV0dXJuIHZhbGlkYXRlLm1vZGVsKHZhbHVlLCBtb2RlbCwgbW9kZWxzKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvcnMgPSBjYW5kaWRhdGUuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgcmV0dXJuIHZhbGlkYXRlLmRhdGFUeXBlKHZhbHVlLCBpdGVtcywgbW9kZWxzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYoZXJyb3JzLmxlbmd0aCl7XHJcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IoZXJyb3JzKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZUFycmF5OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcclxuICBcclxuZnVuY3Rpb24gdmFsaWRhdGVEYXRhVHlwZShjYW5kaWRhdGUsIGRhdGFUeXBlLCBtb2RlbHMpe1xyXG4gIG1vZGVscyA9IG1vZGVscyB8fCB7fTtcclxuICAgICAgXHJcbiAgdmFyIHR5cGUgPSBkYXRhVHlwZS50eXBlIHx8IGRhdGFUeXBlLmRhdGFUeXBlIHx8IGRhdGFUeXBlLiRyZWY7XHJcblxyXG4gIHN3aXRjaCh0eXBlKXtcclxuICAgIGNhc2UgJ2ludGVnZXInOlxyXG4gICAgICByZXR1cm4gdmFsaWRhdGUucHJpbWl0aXZlLmludGVnZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XHJcbiAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICByZXR1cm4gdmFsaWRhdGUucHJpbWl0aXZlLm51bWJlcihjYW5kaWRhdGUsIGRhdGFUeXBlKTtcclxuICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuc3RyaW5nKGNhbmRpZGF0ZSwgZGF0YVR5cGUpO1xyXG4gICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuYm9vbGVhbihjYW5kaWRhdGUpO1xyXG4gICAgY2FzZSAnYXJyYXknOlxyXG4gICAgICByZXR1cm4gdmFsaWRhdGUuYXJyYXkoY2FuZGlkYXRlLCBkYXRhVHlwZSwgbW9kZWxzKTtcclxuICAgIGNhc2UgJ3ZvaWQnOlxyXG4gICAgICByZXR1cm4gdmFsaWRhdGUucHJpbWl0aXZlLnZvaWQoY2FuZGlkYXRlKTtcclxuICAgIGNhc2UgJ0ZpbGUnOlxyXG4gICAgICByZXR1cm4gdmFsaWRhdGUucHJpbWl0aXZlLmZpbGUoKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIC8vIEFzc3VtZWQgdG8gYmUgY29tcGxleCBtb2RlbFxyXG4gICAgICB2YXIgbW9kZWwgPSBtb2RlbHNbdHlwZV07XHJcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5tb2RlbChjYW5kaWRhdGUsIG1vZGVsLCBtb2RlbHMpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlRGF0YVR5cGU7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcclxuICBWYWxpZGF0aW9uRXJyb3IgPSBlcnJvclR5cGVzLlZhbGlkYXRpb25FcnJvcixcclxuICBWYWxpZGF0aW9uRXJyb3JzID0gZXJyb3JUeXBlcy5WYWxpZGF0aW9uRXJyb3JzLFxyXG4gIE1pc3NpbmdWYWx1ZUVycm9yID0gZXJyb3JUeXBlcy5NaXNzaW5nVmFsdWVFcnJvcixcclxuICB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcclxuXHJcbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTIyMTAyL3doYXQtaXMtdGhlLW1vc3QtZWZmaWNpZW50LXdheS10by1jbG9uZS1hbi1vYmplY3RcclxuZnVuY3Rpb24gY2xvbmUob2JqKXtcclxuICAgIGlmKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JykgcmV0dXJuIG9iajtcclxuXHJcbiAgICBpZihBcnJheS5pc0FycmF5KG9iaikpIHJldHVybiBvYmouc2xpY2UoKTtcclxuXHJcbiAgICB2YXIgdGVtcCA9IHt9O1xyXG5cclxuICAgIGZvcih2YXIga2V5IGluIG9iailcclxuICAgICAgICB0ZW1wW2tleV0gPSBjbG9uZShvYmpba2V5XSk7XHJcbiAgICByZXR1cm4gdGVtcDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSW5oZXJ0aWVkUHJvcGVydGllcyhtb2RlbCwgbW9kZWxJZCwgbW9kZWxzKXtcclxuICB2YXIgcGFyZW50O1xyXG5cclxuICBPYmplY3Qua2V5cyhtb2RlbHMpLnNvbWUoZnVuY3Rpb24obW9kZWxOYW1lKXtcclxuICAgIHZhciBwb3RlbnRpYWxQYXJlbnQgPSBtb2RlbHNbbW9kZWxOYW1lXTtcclxuICAgIGlmICghcG90ZW50aWFsUGFyZW50LnN1YlR5cGVzKSByZXR1cm47XHJcblxyXG4gICAgaWYocG90ZW50aWFsUGFyZW50LnN1YlR5cGVzLmluZGV4T2YobW9kZWxJZCkgIT09IC0xKXtcclxuICAgICAgcGFyZW50ID0gcG90ZW50aWFsUGFyZW50O1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYoIXBhcmVudCkgcmV0dXJuO1xyXG5cclxuICBmb3IodmFyIHByb3BlcnR5TmFtZSBpbiBwYXJlbnQucHJvcGVydGllcyl7XHJcbiAgICBtb2RlbC5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0gPSBwYXJlbnQucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xyXG4gIH1cclxuICBcclxuICBpZihwYXJlbnQucmVxdWlyZWQpIG1vZGVsLnJlcXVpcmVkID0gbW9kZWwucmVxdWlyZWQuY29uY2F0KHBhcmVudC5yZXF1aXJlZCk7XHJcblxyXG4gIGFkZEluaGVydGllZFByb3BlcnRpZXMobW9kZWwsIHBhcmVudC5pZCwgbW9kZWxzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVNb2RlbChjYW5kaWRhdGUsIG1vZGVsLCBtb2RlbHMpe1xyXG4gIGlmKGNhbmRpZGF0ZSA9PT0gbnVsbCB8fCB0eXBlb2YgY2FuZGlkYXRlICE9PSAnb2JqZWN0Jyl7XHJcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25FcnJvcnMoY2FuZGlkYXRlLCBtb2RlbCk7XHJcbiAgfVxyXG5cclxuICBtb2RlbHMgPSBtb2RlbHMgfHwge307XHJcblxyXG4gIG1vZGVsID0gY2xvbmUobW9kZWwpO1xyXG4gIGlmKCFtb2RlbC5yZXF1aXJlZCkgbW9kZWwucmVxdWlyZWQgPSBbXTtcclxuICBhZGRJbmhlcnRpZWRQcm9wZXJ0aWVzKG1vZGVsLCBtb2RlbC5pZCwgbW9kZWxzKTtcclxuXHJcbiAgdmFyIGVycm9ycyA9IFtdO1xyXG5cclxuICBtb2RlbC5yZXF1aXJlZC5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5TmFtZSl7XHJcbiAgICBpZiAocHJvcGVydHlOYW1lIGluIGNhbmRpZGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgIHZhciBwcm9wZXJ0eSA9IG1vZGVsLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcclxuICAgIHZhciBlcnJvciA9IG5ldyBNaXNzaW5nVmFsdWVFcnJvcigpO1xyXG4gICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwcm9wZXJ0eU5hbWUsIHByb3BlcnR5LCBlcnJvcikpO1xyXG4gIH0pO1xyXG5cclxuICBPYmplY3Qua2V5cyhjYW5kaWRhdGUpLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKXtcclxuICAgIHZhciBwcm9wZXJ0eSA9IG1vZGVsLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcclxuXHJcbiAgICB2YXIgZXJyb3IgPSB2YWxpZGF0ZS5kYXRhVHlwZShjYW5kaWRhdGVbcHJvcGVydHlOYW1lXSwgcHJvcGVydHksIG1vZGVscyk7XHJcbiAgICBpZihlcnJvcil7XHJcbiAgICAgIGVycm9ycy5wdXNoKG5ldyBWYWxpZGF0aW9uRXJyb3IocHJvcGVydHlOYW1lLCBwcm9wZXJ0eSwgZXJyb3IpKTtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICBpZihlcnJvcnMubGVuZ3RoKXtcclxuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbkVycm9ycyhjYW5kaWRhdGUsIG1vZGVsLmlkLCBtb2RlbCwgZXJyb3JzKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZU1vZGVsOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXHJcbiAgVmFsaWRhdGlvbkVycm9yID0gZXJyb3JUeXBlcy5WYWxpZGF0aW9uRXJyb3IsXHJcbiAgVmFsaWRhdGlvbkVycm9ycyA9IGVycm9yVHlwZXMuVmFsaWRhdGlvbkVycm9ycyxcclxuICBNaXNzaW5nVmFsdWVFcnJvciA9IGVycm9yVHlwZXMuTWlzc2luZ1ZhbHVlRXJyb3IsXHJcbiAgdmFsaWRhdGUgPSByZXF1aXJlKCcuL2luZGV4Jyk7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZU9wZXJhdGlvbihjYW5kaWRhdGUsIG9wZXJhdGlvbiwgbW9kZWxzKXtcclxuICB2YXIgZXJyb3JzID0gW107XHJcbiAgXHJcbiAgb3BlcmF0aW9uLnBhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXJhbSl7XHJcbiAgICBpZiAoIXBhcmFtLnJlcXVpcmVkKSByZXR1cm47XHJcbiAgICBpZiAocGFyYW0ubmFtZSBpbiBjYW5kaWRhdGUpIHJldHVybjtcclxuXHJcbiAgICB2YXIgZXJyb3IgPSBuZXcgTWlzc2luZ1ZhbHVlRXJyb3IoKTtcclxuICAgIGVycm9ycy5wdXNoKG5ldyBWYWxpZGF0aW9uRXJyb3IocGFyYW0ubmFtZSwgcGFyYW0sIGVycm9yKSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICBPYmplY3Qua2V5cyhjYW5kaWRhdGUpLmZvckVhY2goZnVuY3Rpb24ocGFyYW1OYW1lKXtcclxuICAgIHZhciBwYXJhbWV0ZXIgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgICByZXR1cm4gcGFyYW0ubmFtZSA9PT0gcGFyYW1OYW1lO1xyXG4gICAgfSlbMF07XHJcblxyXG4gICAgdmFyIGVycm9yID0gdmFsaWRhdGUuZGF0YVR5cGUoY2FuZGlkYXRlW3BhcmFtTmFtZV0sIHBhcmFtZXRlciwgbW9kZWxzKTtcclxuICAgIGlmKGVycm9yKXtcclxuICAgICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwYXJhbU5hbWUsIHBhcmFtZXRlciwgZXJyb3IpKTtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICBpZihlcnJvcnMubGVuZ3RoKXtcclxuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbkVycm9ycyhjYW5kaWRhdGUsIG9wZXJhdGlvbi5uaWNrbmFtZSwgb3BlcmF0aW9uLCBlcnJvcnMpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlT3BlcmF0aW9uOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyk7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUludGVnZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSl7XHJcbiAgdmFyIGVycm9yID0gdmFsaWRhdGVOdW1iZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XHJcbiAgaWYoZXJyb3IpIHJldHVybiBlcnJvcjtcclxuXHJcbiAgaWYoY2FuZGlkYXRlICUgMSl7XHJcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QW5JbnRlZ2VyRXJyb3IoY2FuZGlkYXRlKTtcclxuICB9XHJcbn1cclxuZXhwb3J0cy52YWxpZGF0ZUludGVnZXIgPSB2YWxpZGF0ZUludGVnZXI7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZU51bWJlcihjYW5kaWRhdGUsIGRhdGFUeXBlKXtcclxuICBpZighKHR5cGVvZiBjYW5kaWRhdGUgPT09ICdudW1iZXInIHx8IGNhbmRpZGF0ZSBpbnN0YW5jZW9mIE51bWJlcikgfHwgaXNOYU4oY2FuZGlkYXRlKSl7XHJcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QU51bWJlckVycm9yKGNhbmRpZGF0ZSwgdHlwZW9mIGNhbmRpZGF0ZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlmKCgnbWluaW11bScgaW4gZGF0YVR5cGUpICYmIGNhbmRpZGF0ZSA8IHBhcnNlSW50KGRhdGFUeXBlLm1pbmltdW0sIDEwKSl7XHJcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTnVtYmVyVG9vU21hbGxFcnJvcihjYW5kaWRhdGUsIGRhdGFUeXBlLm1pbmltdW0pO1xyXG4gIH1cclxuICBcclxuICBpZigoJ21heGltdW0nIGluIGRhdGFUeXBlKSAmJiBjYW5kaWRhdGUgPiBwYXJzZUludChkYXRhVHlwZS5tYXhpbXVtLCAxMCkpe1xyXG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk51bWJlclRvb0xhcmdlRXJyb3IoY2FuZGlkYXRlLCBkYXRhVHlwZS5tYXhpbXVtKTtcclxuICB9XHJcbn1cclxuZXhwb3J0cy52YWxpZGF0ZU51bWJlciA9IHZhbGlkYXRlTnVtYmVyO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVCb29sZWFuKGNhbmRpZGF0ZSl7XHJcbiAgaWYoISh0eXBlb2YgY2FuZGlkYXRlID09PSAnYm9vbGVhbicgfHwgY2FuZGlkYXRlIGluc3RhbmNlb2YgQm9vbGVhbikpe1xyXG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdEFCb29sZWFuRXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcclxuICB9XHJcbn1cclxuZXhwb3J0cy52YWxpZGF0ZUJvb2xlYW4gPSB2YWxpZGF0ZUJvb2xlYW47XHJcblxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVWb2lkKGNhbmRpZGF0ZSl7XHJcbiAgaWYoY2FuZGlkYXRlICE9IG51bGwpe1xyXG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdFZvaWRFcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xyXG4gIH1cclxufVxyXG5leHBvcnRzLnZhbGlkYXRlVm9pZCA9IHZhbGlkYXRlVm9pZDtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRmlsZSgpe1xyXG4gIC8vIE5vdCBzdXJlIGhvdyB0byBjaGVjayB0aGlzLCBzaW5jZSBhbnl0aGluZyBjb3VsZCBxdWFsaWZ5IGFzICdGaWxlJy5cclxufVxyXG5leHBvcnRzLnZhbGlkYXRlRmlsZSA9IHZhbGlkYXRlRmlsZTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5nKGNhbmRpZGF0ZSwgZGF0YVR5cGUpe1xyXG4gIGlmKHR5cGVvZiBjYW5kaWRhdGUgIT09ICdzdHJpbmcnICYmICEoY2FuZGlkYXRlIGluc3RhbmNlb2YgU3RyaW5nKSl7XHJcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QVN0cmluZ0Vycm9yKGNhbmRpZGF0ZSwgdHlwZW9mIGNhbmRpZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBpZignZW51bScgaW4gZGF0YVR5cGUpe1xyXG4gICAgaWYoZGF0YVR5cGUuZW51bS5pbmRleE9mKGNhbmRpZGF0ZSkgPT09IC0xKSB7XHJcbiAgICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5TdHJpbmdOb3RJbkVudW1FcnJvcihjYW5kaWRhdGUsIGRhdGFUeXBlLmVudW0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnRzLnZhbGlkYXRlU3RyaW5nID0gdmFsaWRhdGVTdHJpbmc7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvciA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLk1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXBwbHlBdXRoRGF0YShvcGVyYXRpb24sIGF1dGhEYXRhLCByZXF1ZXN0KXtcbiAgdmFyIGF1dGhNYXAgPSBvcGVyYXRpb24uYXV0aG9yaXphdGlvbnM7XG4gIGlmKCFhdXRoTWFwKSBhdXRoTWFwID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5hdXRob3JpemF0aW9ucztcbiAgaWYoIWF1dGhNYXApIHJldHVybjtcblxuICB2YXIgYXV0aE5hbWVzID0gT2JqZWN0LmtleXMoYXV0aE1hcCkuZmlsdGVyKGZ1bmN0aW9uKGF1dGhOYW1lKXtcbiAgICAvLyBDdXJyZW50bHkgdW5hYmxlIHRvIGhhbmRsZSBvYXV0aDJcbiAgICByZXR1cm4gYXV0aE1hcFthdXRoTmFtZV0udHlwZSAhPT0gJ29hdXRoMic7XG4gIH0pO1xuXG4gIGlmKGF1dGhOYW1lcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICBpZihhdXRoTmFtZXMubGVuZ3RoID09PSAxKXtcbiAgICB2YXIgYXV0aE5hbWUgPSBhdXRoTmFtZXNbMF07XG4gICAgdmFyIGF1dGggPSBhdXRoTWFwW2F1dGhOYW1lXTtcblxuICAgIGlmKCFhdXRoRGF0YSkgdGhyb3cgbmV3IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IoYXV0aE5hbWUsIGF1dGgpO1xuXG4gICAgLy8gVW5wYWNrIG5lc3RlZCBhdXRoRGF0YSBmb3Igc2luZ2xlIGF1dGggb3BzOiB7IGFwaUtleTogJzEyMycgfSAtPiAnMTIzJ1xuICAgIGlmKGF1dGhEYXRhW2F1dGhOYW1lXSkgYXV0aERhdGEgPSBhdXRoRGF0YVthdXRoTmFtZV07XG5cbiAgICBpZihhdXRoLnR5cGUgPT09ICdhcGlLZXknKXtcbiAgICAgIGFwcGx5QXBpS2V5KGF1dGgsIGF1dGhOYW1lLCBhdXRoRGF0YSwgcmVxdWVzdCk7XG4gICAgfSBlbHNlIGlmKGF1dGgudHlwZSA9PT0gJ2Jhc2ljQXV0aCcpIHtcbiAgICAgIGFwcGx5QmFzaWNBdXRoKGF1dGgsIGF1dGhOYW1lLCBhdXRoRGF0YS51c2VybmFtZSwgYXV0aERhdGEucGFzc3dvcmQsIHJlcXVlc3QpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhdXRoTmFtZXMuZm9yRWFjaChmdW5jdGlvbihhdXRoTmFtZSl7XG4gICAgICB2YXIgYXV0aCA9IGF1dGhNYXBbYXV0aE5hbWVdO1xuICAgICAgdmFyIGRhdGEgPSBhdXRoRGF0YVthdXRoTmFtZV07XG5cbiAgICAgIGlmKCFkYXRhKSB0aHJvdyBuZXcgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcihhdXRoTmFtZSwgYXV0aCk7XG5cbiAgICAgIGlmKGF1dGgudHlwZSA9PT0gJ2FwaUtleScpe1xuICAgICAgICBhcHBseUFwaUtleShhdXRoLCBhdXRoTmFtZSwgZGF0YSwgcmVxdWVzdCk7XG4gICAgICB9IGVsc2UgaWYoYXV0aC50eXBlID09PSAnYmFzaWNBdXRoJyl7XG4gICAgICAgIGFwcGx5QmFzaWNBdXRoKGF1dGgsIGF1dGhOYW1lLCBkYXRhLnVzZXJuYW1lLCBkYXRhLnBhc3N3b3JkLCByZXF1ZXN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gYXBwbHlBcGlLZXkoYXV0aCwgYXV0aE5hbWUsIGFwaUtleSwgcmVxdWVzdCl7XG4gIGlmKCFhcGlLZXkpIHRocm93IG5ldyBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lLCBhdXRoKTtcbiAgXG4gIGlmKGF1dGgucGFzc0FzID09PSAnaGVhZGVyJyl7XG4gICAgcmVxdWVzdC5oZWFkZXJzW2F1dGgua2V5bmFtZV0gPSBhcGlLZXk7XG4gIH0gZWxzZSBpZihhdXRoLnBhc3NBcyA9PT0gJ3F1ZXJ5Jyl7XG4gICAgdmFyIHVybCA9IHJlcXVlc3QudXJsO1xuICAgIHZhciBxdWVyeVBhcmFtID0gYXV0aC5rZXluYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFwaUtleSk7XG4gICAgaWYodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEpe1xuICAgICAgdXJsICs9ICc/JyArIHF1ZXJ5UGFyYW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKCc/JywgJz8nICsgcXVlcnlQYXJhbSArICcmJyk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC51cmwgPSB1cmw7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlCYXNpY0F1dGgoYXV0aCwgYXV0aE5hbWUsIHVzZXJuYW1lLCBwYXNzd29yZCwgcmVxdWVzdCl7XG4gIGlmKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHRocm93IG5ldyBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lLCBhdXRoKTtcbiAgXG4gIHZhciB1cmwgPSByZXF1ZXN0LnVybDtcbiAgXG4gIC8vIE9ubHkgYWRkIGJhc2ljIGF1dGggb25jZVxuICBpZih1cmwuaW5kZXhPZignQCcpID09PSAtMSl7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoJzovLycsICc6Ly8nICsgdXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCArICdAJyk7XG4gIH1cblxuICByZXF1ZXN0LnVybCA9IHVybDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVPcGVyYXRpb25IYW5kbGVyID0gcmVxdWlyZSgnLi9jcmVhdGVPcGVyYXRpb25IYW5kbGVyJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudChzY2hlbWEsIHJlcXVlc3RIYW5kbGVyKXtcbiAgdmFyIHJlc291cmNlcyA9IHByb2Nlc3NTY2hlbWEoc2NoZW1hKSxcbiAgICBhcGkgPSB7fSxcbiAgICBhcGlBdXRoRGF0YSxcbiAgICBhdXRoTWV0aG9kTmFtZSA9ICdhdXRoJztcblxuICAvLyBJZiB0aGUgJ2F1dGgnIGtleSBpcyB1c2VkIGZvciBhbnkgcmVzb3VyY2Ugb3Igb3BlcmF0aW9uLCB3ZSdsbCB1c2VcbiAgLy8gJ2F1dGhvcml6YXRpb24nIGluc3RlYWQgZm9yIHRoZSBhdXRoIG1ldGhvZHNcbiAgdmFyIGF1dGhJc0luVXNlID0gcmVzb3VyY2VzLnNvbWUoZnVuY3Rpb24ocmVzb3VyY2Upe1xuICAgIHZhciByZXNvdXJjZUFwaU5hbWUgPSBnZXRSZXNvdXJjZUFwaU5hbWUocmVzb3VyY2UpO1xuICAgIGlmKHJlc291cmNlQXBpTmFtZSA9PT0gJ2F1dGgnKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gcmVzb3VyY2Uub3BlcmF0aW9ucy5zb21lKGZ1bmN0aW9uKG9wZXJhdGlvbil7XG4gICAgICByZXR1cm4gb3BlcmF0aW9uLm5pY2tuYW1lID09PSAnYXV0aCc7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmKGF1dGhJc0luVXNlKSBhdXRoTWV0aG9kTmFtZSA9ICdhdXRob3JpemF0aW9uJztcblxuICByZXNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbihyZXNvdXJjZSl7XG4gICAgdmFyIHJlc291cmNlQXBpTmFtZSA9IGdldFJlc291cmNlQXBpTmFtZShyZXNvdXJjZSksXG4gICAgICByZXNvdXJjZUFwaSA9IGFwaVtyZXNvdXJjZUFwaU5hbWVdID0ge30sXG4gICAgICByZXNvdXJjZUF1dGhEYXRhO1xuXG4gICAgcmVzb3VyY2Uub3BlcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdGlvbil7XG4gICAgICB2YXIgb3BlcmF0aW9uSGFuZGxlck5hbWUgPSBvcGVyYXRpb24ubmlja25hbWUsXG4gICAgICAgIG9wZXJhdGlvbkF1dGhEYXRhLFxuICAgICAgICBvcGVyYXRpb25IYW5kbGVyOyBcbiAgICAgIFxuICAgICAgZnVuY3Rpb24gZ2V0QXV0aERhdGEoKXtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbkF1dGhEYXRhIHx8IHJlc291cmNlQXV0aERhdGEgfHwgYXBpQXV0aERhdGE7XG4gICAgICB9XG5cbiAgICAgIG9wZXJhdGlvbkhhbmRsZXIgPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyKG9wZXJhdGlvbiwgZ2V0QXV0aERhdGEsIHJlcXVlc3RIYW5kbGVyKTtcblxuICAgICAgb3BlcmF0aW9uSGFuZGxlclthdXRoTWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBvcGVyYXRpb25BdXRoRGF0YSA9IHByb2Nlc3NBcGlBdXRoQXJncyhhcmd1bWVudHMpO1xuICAgICAgfTtcblxuICAgICAgcmVzb3VyY2VBcGlbb3BlcmF0aW9uSGFuZGxlck5hbWVdID0gb3BlcmF0aW9uSGFuZGxlcjtcbiAgICB9KTtcblxuICAgIHJlc291cmNlQXBpW2F1dGhNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCl7XG4gICAgICByZXNvdXJjZUF1dGhEYXRhID0gcHJvY2Vzc0FwaUF1dGhBcmdzKGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSk7XG5cbiAgYXBpW2F1dGhNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCl7XG4gICAgYXBpQXV0aERhdGEgPSBwcm9jZXNzQXBpQXV0aEFyZ3MoYXJndW1lbnRzKTtcbiAgfTtcblxuICByZXR1cm4gYXBpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDbGllbnQ7XG5cbmZ1bmN0aW9uIHByb2Nlc3NBcGlBdXRoQXJncyhhcmdzKXtcbiAgLy8gZm9yIGJhc2ljIGF1dGgsIGFsbG93IGNhbGxzIHdpdGggdHdvIGFyZ3MgKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgaWYodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnICYmIHR5cGVvZiBhcmdzWzFdID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VybmFtZTogYXJnc1swXSxcbiAgICAgIHBhc3N3b3JkOiBhcmdzWzFdXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxufVxuXG4vLyBIZWxwcGVyIG1ldGhvZCB3aGljaCBhc3NpbmdzIGJhY2sgcG9pbnRlciB0byBvYmplY3QgcGFyZW50cyBhbmQgcmV0dXJuc1xuLy8gdGhlIGFwaSBvYmplY3RzIHdpdGhpbiB0aGUgZ2l2ZW4gc2NoZW1hLlxuZnVuY3Rpb24gcHJvY2Vzc1NjaGVtYShzY2hlbWEpe1xuICB2YXIgcmVzb3VyY2VzID0gW107XG4gIFxuICBzY2hlbWEuYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKHJlc291cmNlT2JqZWN0KXtcbiAgICByZXNvdXJjZU9iamVjdC5yZXNvdXJjZUxpc3RpbmcgPSBzY2hlbWE7XG5cbiAgICByZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5hcGlzLmZvckVhY2goZnVuY3Rpb24oYXBpT2JqZWN0KXtcbiAgICAgIGFwaU9iamVjdC5yZXNvdXJjZU9iamVjdCA9IHJlc291cmNlT2JqZWN0O1xuICAgICAgYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uID0gcmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb247XG4gICAgICBcbiAgICAgIHJlc291cmNlcy5wdXNoKGFwaU9iamVjdCk7XG5cbiAgICAgIGFwaU9iamVjdC5vcGVyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ob3BlcmF0aW9uKXtcbiAgICAgICAgb3BlcmF0aW9uLmFwaU9iamVjdCA9IGFwaU9iamVjdDtcblxuICAgICAgICBvcGVyYXRpb24ucGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtZXRlcil7XG4gICAgICAgICAgcGFyYW1ldGVyLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc291cmNlcztcbn1cblxuLy8gVGFrZXMgYSBwYXRoIGFuZCByZXR1cm5zIGEgSmF2YVNjcmlwdC1mcmllbmRseSB2YXJpYWJsZSBuYW1lXG5mdW5jdGlvbiBnZXRSZXNvdXJjZUFwaU5hbWUoYXBpT2JqZWN0KXtcbiAgdmFyIHBhdGggPSBhcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ucmVzb3VyY2VQYXRoIHx8IGFwaU9iamVjdC5wYXRoO1xuXG4gIC8vIFN0cmluZyBub24td29yZCBjaGFyYWN0ZXJzXG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcVy9nLCAnLycpO1xuXG4gIC8vIFR1cm4gcGF0aHMgd2hpY2ggbG9vay9saWtlL3RoaXMgdG8gbG9va0xpa2VUaGlzXG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoLyhcXHcpXFwvKFxcdykvZywgZnVuY3Rpb24obWF0Y2gsIHAxLCBwMil7XG4gICAgcmV0dXJuIHAxICsgcDIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG5cbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvL2csICcnKTtcblxuICByZXR1cm4gcGF0aDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXRSZXF1ZXN0SGVhZGVycyA9IHJlcXVpcmUoJy4vZ2V0UmVxdWVzdEhlYWRlcnMnKSxcbiAgZ2V0UmVxdWVzdFVybCA9IHJlcXVpcmUoJy4vZ2V0UmVxdWVzdFVybCcpLFxuICBnZXRSZXF1ZXN0Qm9keSA9IHJlcXVpcmUoJy4vZ2V0UmVxdWVzdEJvZHknKSxcbiAgYXBwbHlBdXRoRGF0YSA9IHJlcXVpcmUoJy4vYXBwbHlBdXRoRGF0YScpLFxuICBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIHN3YWdnZXJWYWxpZGF0ZSA9IHJlcXVpcmUoJ3N3YWdnZXItdmFsaWRhdGUnKTtcblxudmFyIGFsbEVycm9yVHlwZXMgPSB7fTtcbk9iamVjdC5rZXlzKHN3YWdnZXJWYWxpZGF0ZS5lcnJvcnMpLmZvckVhY2goZnVuY3Rpb24oZXJyb3JOYW1lKXtcbiAgYWxsRXJyb3JUeXBlc1tlcnJvck5hbWVdID0gc3dhZ2dlclZhbGlkYXRlLmVycm9yc1tlcnJvck5hbWVdO1xufSk7XG5cbk9iamVjdC5rZXlzKGVycm9yVHlwZXMpLmZvckVhY2goZnVuY3Rpb24oZXJyb3JOYW1lKXtcbiAgYWxsRXJyb3JUeXBlc1tlcnJvck5hbWVdID0gZXJyb3JUeXBlc1tlcnJvck5hbWVdO1xufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIob3BlcmF0aW9uLCBnZXRBdXRoRGF0YSwgcmVxdWVzdEhhbmRsZXIpe1xuICBmdW5jdGlvbiBSZXF1ZXN0KGRhdGEsIG9wdGlvbnMpe1xuICAgIHRoaXMubWV0aG9kID0gb3BlcmF0aW9uLm1ldGhvZDtcbiAgICB0aGlzLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcbiAgICB0aGlzLmVycm9yVHlwZXMgPSBhbGxFcnJvclR5cGVzO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHZhciBvcGVyYXRpb25IYW5kbGVyID0gZnVuY3Rpb24oZGF0YSwgb3B0aW9ucyl7XG4gICAgdmFyIGVycm9yLFxuICAgICAgcmVxdWVzdDtcbiAgICBcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBcbiAgICBpZihkYXRhID09IG51bGwpIGRhdGEgPSB7fTtcblxuICAgIC8vIGlmIGEgZnVuY3Rpb24gaXMgcGFzc2VkIGluIGFzIG9wdGlvbnMsIGFzc3VtZSBpdCdzIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAvLyBmb3IgY29udmVuaWVuY2VcbiAgICBpZih0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICBvcHRpb25zLmNhbGxiYWNrID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICB0cnl7XG4gICAgICBkYXRhID0gc2luZ2xlUGFyYW1Db252ZW5pZW5jZVByb2Nlc3NvcihvcGVyYXRpb24sIGRhdGEpO1xuICAgICAgZGF0YSA9IHJlbW92ZVVua25vd25QYXJhbXMob3BlcmF0aW9uLCBkYXRhKTtcblxuICAgICAgZXJyb3IgPSBzd2FnZ2VyVmFsaWRhdGUub3BlcmF0aW9uKGRhdGEsIG9wZXJhdGlvbiwgb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5tb2RlbHMpO1xuICAgICAgXG4gICAgICByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoZGF0YSwgb3B0aW9ucyk7XG4gICAgICBcbiAgICAgIC8vIElmIHdlIGtub3cgdGhlcmUgaXMgYW4gZXJyb3IsIGRvbid0IGF0dGVtcHQgdG8gY3JhZnQgdGhlIHJlcXVlc3QgcGFyYW1zLlxuICAgICAgLy8gVGhlIHJlcXVlc3QgcGFyYW0gZ2VuZXJhdG9ycyBhc3N1bWUgdmFsaWQgZGF0YSB0byB3b3JrIHByb3Blcmx5LlxuICAgICAgaWYoIWVycm9yKXtcbiAgICAgICAgcmVxdWVzdC51cmwgPSBnZXRSZXF1ZXN0VXJsKG9wZXJhdGlvbiwgZGF0YSk7XG4gICAgICAgIHJlcXVlc3QuaGVhZGVycyA9IGdldFJlcXVlc3RIZWFkZXJzKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIHJlcXVlc3QuYm9keSA9IGdldFJlcXVlc3RCb2R5KG9wZXJhdGlvbiwgZGF0YSwgcmVxdWVzdC5oZWFkZXJzKTtcbiAgICAgICAgXG4gICAgICAgIGFwcGx5QXV0aERhdGEob3BlcmF0aW9uLCBnZXRBdXRoRGF0YSgpLCByZXF1ZXN0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpe1xuICAgICAgZXJyb3IgPSBlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXIoZXJyb3IsIHJlcXVlc3QpO1xuICB9O1xuXG4gIC8vIFVzZWZ1bCBmb3IgaW5zdGFuY2VvZiBjaGVja3NcbiAgb3BlcmF0aW9uSGFuZGxlci5SZXF1ZXN0ID0gUmVxdWVzdDtcbiAgb3BlcmF0aW9uSGFuZGxlci5lcnJvclR5cGVzID0gYWxsRXJyb3JUeXBlcztcblxuICAvLyBVc2VmdWwgZm9yIHJlZmxlY3Rpb25cbiAgb3BlcmF0aW9uSGFuZGxlci5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gIFxuICAvLyBDYW4gYmUgdXNlZCB0byBwcmVlbXB0aXZlbHkgdmFsaWRhdGUgd2l0aG91dCBhY3Rpb25cbiAgb3BlcmF0aW9uSGFuZGxlci52YWxpZGF0ZSA9IGZ1bmN0aW9uKGRhdGEpe1xuICAgIHJldHVybiBzd2FnZ2VyVmFsaWRhdGUub3BlcmF0aW9uKGRhdGEsIG9wZXJhdGlvbiwgb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5tb2RlbHMpO1xuICB9O1xuXG4gIHJldHVybiBvcGVyYXRpb25IYW5kbGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyO1xuXG5mdW5jdGlvbiBub29wKCl7fVxuY3JlYXRlT3BlcmF0aW9uSGFuZGxlci5sb2dnZXIgPSB7XG4gIGRlYnVnOiBub29wLFxuICBpbmZvOiBub29wLFxuICB3YXJuOiBub29wLFxuICBlcnJvcjogbm9vcFxufTtcblxuLy8gRW5hYmxlcyBkYXRhIHRvIGJlIHBhc3NlZCBkaXJlY3RseSBmb3Igc2luZ2xlIHBhcmFtIG9wZXJhdGlvbnMuXG5mdW5jdGlvbiBzaW5nbGVQYXJhbUNvbnZlbmllbmNlUHJvY2Vzc29yKG9wZXJhdGlvbiwgZGF0YSl7XG4gIC8vIElmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIHBhcmFtcywgYmFpbFxuICB2YXIgcmVxdWlyZWRQYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5yZXF1aXJlZDtcbiAgfSk7XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgcmVxdWlyZWQgcGFyYW1zLCBvciBpZiB0aGVyZSBpcyBubyByZXF1aXJlZCBwYXJhbVxuICAvLyBhbmQgdGhlcmUgYXJlIG1hbnkgb3B0aW9uYWwgcGFyYW1zLCBiYWlsXG4gIGlmKHJlcXVpcmVkUGFyYW1zLmxlbmd0aCA+IDEpIHJldHVybiBkYXRhO1xuXG4gIGlmKHJlcXVpcmVkUGFyYW1zLmxlbmd0aCAhPT0gMSAmJiBvcGVyYXRpb24ucGFyYW1ldGVycy5sZW5ndGggIT09IDEpIHJldHVybiBkYXRhO1xuXG4gIHZhciBwYXJhbSA9IHJlcXVpcmVkUGFyYW1zWzBdIHx8IG9wZXJhdGlvbi5wYXJhbWV0ZXJzWzBdO1xuICBcbiAgLy8gSWYgdGhlIHBhcmFtIGlzIGFscmVhZHkgZGVmaW5lZCBleHBsaWNpdGx5LCBiYWlsXG4gIGlmKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJiAocGFyYW0ubmFtZSBpbiBkYXRhKSkgcmV0dXJuIGRhdGE7XG5cbiAgdmFyIG1vZGVscyA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ubW9kZWxzO1xuXG4gIC8vIElmIHRoZSBkYXRhIHBhc3NlZCBpcyBpcyBub3QgdmFsaWQgZm9yIHRoZSBwYXJhbSBkYXRhIHR5cGUsIGJhaWxcbiAgdmFyIGVycm9yID0gc3dhZ2dlclZhbGlkYXRlLmRhdGFUeXBlKGRhdGEsIHBhcmFtLCBtb2RlbHMpOyBcblxuICAvLyBJZiB0aGUgZGF0YSBwYXNzZWQgaXMgYSB2YWxpZCBwYXJhbSBkYXRhIHR5cGUsIGJhaWxcbiAgaWYoIWVycm9yKXtcbiAgICB2YXIgd3JhcHBlciA9IHt9O1xuICAgIHdyYXBwZXJbcGFyYW0ubmFtZV0gPSBkYXRhO1xuICAgIHJldHVybiB3cmFwcGVyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG4gXG5cbmZ1bmN0aW9uIHJlbW92ZVVua25vd25QYXJhbXMob3BlcmF0aW9uLCBkYXRhKXtcbiAgaWYoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnKSByZXR1cm4gZGF0YTtcblxuICB2YXIgcGFyYW1OYW1lcyA9IHt9O1xuICBvcGVyYXRpb24ucGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICBwYXJhbU5hbWVzW3BhcmFtLm5hbWVdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgdmFyIHVua25vd25LZXlzID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuICEoa2V5IGluIHBhcmFtTmFtZXMpO1xuICB9KTtcblxuICBjcmVhdGVPcGVyYXRpb25IYW5kbGVyLmxvZ2dlci53YXJuKCdVbmtub3duIHBhcmFtZXRlcnMgcmVtb3ZlZCBmcm9tIHJlcXVlc3Q6JywgXG4gICAgdW5rbm93bktleXMuam9pbignLCAnKSk7XG5cbiAgdW5rbm93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gSW52YWxpZFJlcXVlc3RFcnJvcihtZXNzYWdlKXtcbiAgdGhpcy5uYW1lID0gJ0ludmFsaWRSZXF1ZXN0RXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdJbnZhbGlkIHJlcXVlc3QnO1xufVxuSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5JbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEludmFsaWRSZXF1ZXN0RXJyb3I7XG5cbmV4cG9ydHMuSW52YWxpZFJlcXVlc3RFcnJvciA9IEludmFsaWRSZXF1ZXN0RXJyb3I7XG5cblxuZnVuY3Rpb24gTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcihhdXRoTmFtZSwgYXV0aCl7XG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ05vIGRhdGEgZm91bmQgZm9yIGF1dGhvcml6YXRpb246ICcgKyBhdXRoTmFtZTtcbiAgdGhpcy5hdXRob3JpemF0aW9uID0gYXV0aDtcbn1cbk1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5NaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3I7XG5cbmV4cG9ydHMuTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvciA9IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3I7XG5cblxuZnVuY3Rpb24gTWlzc2luZ1BhdGhQYXJhbXNFcnJvcihwYXRoUGFyYW1zKXtcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdQYXRoUGFyYW1zRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnTWlzc2luZyB0aGUgZm9sbG93aW5nIHJlcXVpcmVkIHBhdGggcGFyYW1ldGVyczogJyArIHBhdGhQYXJhbXMuam9pbignJyk7XG59XG5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuTWlzc2luZ1BhdGhQYXJhbXNFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yO1xuXG5leHBvcnRzLk1pc3NpbmdQYXRoUGFyYW1zRXJyb3IgPSBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yO1xuXG5cbmZ1bmN0aW9uIENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IoY29udGVudFR5cGUsIG9wZXJhdGlvbil7XG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb247XG4gIHZhciBjb25zdW1lcyA9IG9wZXJhdGlvbi5jb25zdW1lcyB8fCBhcGlEZWNsYXJhdGlvbi5jb25zdW1lcyB8fCBbXTtcblxuICB0aGlzLm5hbWUgPSAnQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdPcGVyYXRpb24gWycgKyBvcGVyYXRpb24ubmlja25hbWUgKyAnXSBkb2VzIG5vdCBhY2NlcHQgJyArIGNvbnRlbnRUeXBlICsgJy4gSXQgc3VwcG9ydHM6ICcgKyBcbiAgICBjb25zdW1lcy5qb2luKCcsICcpO1xufVxuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcjtcblxuZXhwb3J0cy5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yID0gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcjtcblxuXG5mdW5jdGlvbiBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IoYWNjZXB0cywgb3BlcmF0aW9uKXtcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbjtcbiAgdmFyIHByb2R1Y2VzID0gb3BlcmF0aW9uLnByb2R1Y2VzIHx8IGFwaURlY2xhcmF0aW9uLnByb2R1Y2VzIHx8IFtdO1xuXG4gIHRoaXMubmFtZSA9ICdBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnT3BlcmF0aW9uIFsnICsgb3BlcmF0aW9uLm5pY2tuYW1lICsgJ10gZG9lcyBub3QgcHJvZHVjZSAnICsgYWNjZXB0cyArICcuIEl0IHN1cHBvcnRzOiAnICsgXG4gICAgcHJvZHVjZXMuam9pbignLCAnKTtcbn1cbkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3I7XG5cbmV4cG9ydHMuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yID0gQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yO1xuXG5cbmZ1bmN0aW9uIE9wZXJhdGlvblZhbGlkYXRpb25FcnJvcihvcGVyYXRpb24sIGVycm9ycyl7XG4gIHRoaXMubmFtZSA9ICdPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBvcGVyYXRpb24ubmlja25hbWUgKyAnIGZhaWxlZCB2YWxpZGF0aW9uOiBcXG5cXHQnICsgZXJyb3JzLmpvaW4oJ1xcblxcdCcpO1xufVxuT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE9wZXJhdGlvblZhbGlkYXRpb25FcnJvcjtcblxuZXhwb3J0cy5PcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IgPSBPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3I7XG5cblxuZnVuY3Rpb24gUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yKHBhcmFtZXRlciwgZXJyb3JzKXtcbiAgdGhpcy5uYW1lID0gJ1BhcmFtZXRlclZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IHBhcmFtZXRlci5uYW1lICsgJyBmYWlsZWQgdmFsaWRhdGlvbjogXFxuXFx0JyArIGVycm9ycy5qb2luKCdcXG5cXHQnKTtcbn1cblBhcmFtZXRlclZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcblBhcmFtZXRlclZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3I7XG5cbmV4cG9ydHMuUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yID0gUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yO1xuXG5cbmZ1bmN0aW9uIERhdGFUeXBlVmFsaWRhdGlvbkVycm9yKG1lc3NhZ2Upe1xuICB0aGlzLm5hbWUgPSAnRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdJbnZhbGlkIGRhdGEgdHlwZSc7XG59XG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjtcblxuZXhwb3J0cy5EYXRhVHlwZVZhbGlkYXRpb25FcnJvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0Qm9keShvcGVyYXRpb24sIGRhdGEsIGhlYWRlcnMpe1xuICB2YXIgYm9keSA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2JvZHknICYmIGRhdGFbcGFyYW0ubmFtZV0gIT0gbnVsbDtcbiAgfSkubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gZGF0YVtwYXJhbS5uYW1lXTtcbiAgfSlbMF07XG5cbiAgaWYoIShoZWFkZXJzICYmICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHJldHVybiBib2R5O1xuXG4gIHZhciBjb250ZW50VHlwZSA9IGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xuICB2YXIgcHJlc2VudEZvcm1QYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdmb3JtJyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9IG51bGw7XG4gIH0pO1xuXG4gIGlmKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpICE9PSAtMSl7XG4gICAgYm9keSA9IHByZXNlbnRGb3JtUGFyYW1zLm1hcChmdW5jdGlvbihwYXJhbSl7XG4gICAgICB2YXIga2V5ID0gcGFyYW0ubmFtZSxcbiAgICAgICAgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgIH0pLmpvaW4oJyYnKTtcbiAgfSBlbHNlIGlmKGNvbnRlbnRUeXBlLmluZGV4T2YoJ211bHRpcGFydC9mb3JtLWRhdGEnKSAhPT0gLTEpe1xuICAgIHZhciByYW5kb21uZXNzID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyKDIpO1xuICAgIHZhciBib3VuZGFyeSA9ICdTd2FnZ2VyQm91bmRhcnknICsgcmFuZG9tbmVzcztcbiAgICBcbiAgICBib2R5ID0gcHJlc2VudEZvcm1QYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lLFxuICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XSxcbiAgICAgICAgcmVzdWx0ID0gJy0tJyArIGJvdW5kYXJ5O1xuXG4gICAgICByZXN1bHQgKz0gJ1xcbkNvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIicgKyBrZXkgKyAnXCInO1xuICAgICAgXG4gICAgICBpZih2YWx1ZS5jb250ZW50VHlwZSl7XG4gICAgICAgIGlmKHZhbHVlLm5hbWUpe1xuICAgICAgICAgIHJlc3VsdCArPSAnOyBmaWxlbmFtZT1cIicgKyB2YWx1ZS5uYW1lICsgJ1wiJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCArPSAnXFxuQ29udGVudC1UeXBlOiAnICsgdmFsdWUuY29udGVudFR5cGU7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbHVlLmNvbnRlbnRUcmFuc2ZlckVuY29kaW5nKXtcbiAgICAgICAgcmVzdWx0ICs9ICdcXG5Db250ZW50LVRyYW5zZmVyLUVuY29kaW5nOiAnICsgdmFsdWUuY29udGVudFRyYW5zZmVyRW5jb2Rpbmc7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbHVlLmJvZHkpe1xuICAgICAgICByZXN1bHQgKz0gJ1xcblxcbicgKyB2YWx1ZS5ib2R5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9ICdcXG5cXG4nICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICBib2R5ICs9ICdcXG4tLScgKyBib3VuZGFyeSArICctLVxcbic7XG4gICAgXG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBjb250ZW50VHlwZS5yZXBsYWNlKFxuICAgICAgJ211bHRpcGFydC9mb3JtLWRhdGEnLCBcbiAgICAgICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0nICsgYm91bmRhcnlcbiAgICApO1xuICB9IGVsc2UgaWYoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMSl7XG4gICAgaWYodHlwZW9mIGJvZHkgIT09ICdzdHJpbmcnKXtcbiAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9keTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yID0gZXJyb3JUeXBlcy5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yLFxuICBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IgPSBlcnJvclR5cGVzLkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcjtcblxudmFyIERFRkFVTFRfQUNDRVBUID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0SGVhZGVycyhvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpe1xuICBkYXRhID0gZGF0YSB8fCB7fTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGhlYWRlcnMgPSB7fTtcblxuICBvcGVyYXRpb24ucGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICBpZihwYXJhbS5wYXJhbVR5cGUgPT09ICdoZWFkZXInICYmIGRhdGFbcGFyYW0ubmFtZV0gIT0gbnVsbCl7XG4gICAgICBoZWFkZXJzW3BhcmFtLm5hbWVdID0gZGF0YVtwYXJhbS5uYW1lXTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFBhc3NlZCBoZWFkZXJzXG4gIGlmKG9wdGlvbnMuaGVhZGVycyl7XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICBoZWFkZXJzW2tleV0gPSBvcHRpb25zLmhlYWRlcnNba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENvbnRlbnQtVHlwZVxuICB2YXIgY29udGVudFR5cGUgPSBvcHRpb25zLmNvbnRlbnRUeXBlIHx8IGdldENvbnRlbnRUeXBlKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyk7XG4gIGlmKGNvbnRlbnRUeXBlKSB7XG4gICAgaWYoaGFzQWNjZXB0KG9wZXJhdGlvbiwgY29udGVudFR5cGUpKXtcbiAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gY29udGVudFR5cGU7ICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IoY29udGVudFR5cGUsIG9wZXJhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLy8gQWNjZXB0XG4gIHZhciBhY2NlcHQgPSBvcHRpb25zLmFjY2VwdCB8fCBERUZBVUxUX0FDQ0VQVDtcbiAgaWYoYWNjZXB0KXtcbiAgICBpZihoYXNDb250ZW50VHlwZShvcGVyYXRpb24sIGFjY2VwdCkpe1xuICAgICAgaGVhZGVycy5BY2NlcHQgPSBhY2NlcHQ7ICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcihhY2NlcHQsIG9wZXJhdGlvbik7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gaGVhZGVycztcbn07XG5cbmZ1bmN0aW9uIGdldENvbnRlbnRUeXBlKG9wZXJhdGlvbiwgZGF0YSl7XG4gIHZhciBoYXNCb2R5ID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuc29tZShmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2JvZHknICYmIChwYXJhbS5uYW1lIGluIGRhdGEpO1xuICB9KTtcblxuICBpZiAoaGFzQm9keSl7XG4gICAgcmV0dXJuICdhcHBsaWNhdGlvbi9qc29uJztcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGFzRm9ybVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLnNvbWUoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2Zvcm0nICYmIChwYXJhbS5uYW1lIGluIGRhdGEpO1xuICAgIH0pO1xuXG4gICAgdmFyIGhhc0ZpbGVQYXJhbSA9IGhhc0Zvcm1QYXJhbXMgJiYgXG4gICAgICBvcGVyYXRpb24ucGFyYW1ldGVycy5zb21lKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHBhcmFtLnR5cGUgPT09ICdGaWxlJyAmJiAocGFyYW0ubmFtZSBpbiBkYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgaWYoaGFzRmlsZVBhcmFtKSByZXR1cm4gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgIGVsc2UgaWYoaGFzRm9ybVBhcmFtcykgcmV0dXJuICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICB9XG59XG5cbi8vIEFjY2VwdHMgaXMgYW4gb3B0aW9uYWwgZmllbGQgaW4gdGhlIHNwZWMsIGJ1dCBtdXN0IGJlIGVuZm9yY2VkIHdoZW4gcHJlc2VudFxuZnVuY3Rpb24gaGFzQWNjZXB0KG9wZXJhdGlvbiwgY29udGVudFR5cGUpe1xuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuICB2YXIgYWNjZXB0cyA9IG9wZXJhdGlvbi5jb25zdW1lcyB8fCBhcGlEZWNsYXJhdGlvbi5jb25zdW1lcztcblxuICBpZihhY2NlcHRzICYmIGFjY2VwdHMubGVuZ3RoKXtcbiAgICByZXR1cm4gYWNjZXB0cy5pbmRleE9mKGNvbnRlbnRUeXBlKSAhPT0gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmV4cG9ydHMuaGFzQWNjZXB0ID0gaGFzQWNjZXB0O1xuXG4vLyBDb250ZW50LVR5cGUgKHByb2R1Y2VzKSBpcyBhbiBvcHRpb25hbCBmaWVsZCBpbiB0aGUgc3BlYywgYnV0IG11c3QgYmUgZW5mb3JjZWQgd2hlbiBwcmVzZW50XG5mdW5jdGlvbiBoYXNDb250ZW50VHlwZShvcGVyYXRpb24sIGNvbnRlbnRUeXBlKXtcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbixcbiAgICBjb250ZW50VHlwZXMgPSBvcGVyYXRpb24ucHJvZHVjZXMgfHwgYXBpRGVjbGFyYXRpb24ucHJvZHVjZXM7XG5cbiAgaWYoY29udGVudFR5cGVzICYmIGNvbnRlbnRUeXBlcy5sZW5ndGgpe1xuICAgIHJldHVybiBjb250ZW50VHlwZXMuaW5kZXhPZihjb250ZW50VHlwZSkgIT09IC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5leHBvcnRzLmhhc0NvbnRlbnRUeXBlID0gaGFzQ29udGVudFR5cGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yID0gZXJyb3JUeXBlcy5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFJlcXVlc3RVcmwob3BlcmF0aW9uLCBkYXRhKXtcbiAgdmFyIHVybCA9IGdldFVybFRlbXBsYXRlKG9wZXJhdGlvbik7XG5cbiAgdXJsID0gYXBwbHlQYXRoUGFyYW1zKHVybCwgb3BlcmF0aW9uLCBkYXRhKTtcblxuICBpZighZGF0YSkgcmV0dXJuIHVybDtcblxuICB2YXIgcXVlcnlQYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdxdWVyeScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkO1xuICB9KS5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lO1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xuICB9KS5qb2luKCcmJyk7XG5cbiAgaWYocXVlcnlQYXJhbXMpIHVybCArPSAnPycgKyBxdWVyeVBhcmFtcztcblxuICByZXR1cm4gdXJsO1xufTtcblxuZnVuY3Rpb24gYXBwbHlQYXRoUGFyYW1zKHVybCwgb3BlcmF0aW9uLCBkYXRhKXtcbiAgdmFyIHBhdGhQYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdwYXRoJztcbiAgfSk7XG5cbiAgdmFyIG1pc3NpbmdQYXJhbXMgPSBwYXRoUGFyYW1zLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIGRhdGFbcGFyYW0ubmFtZV0gPT09IHVuZGVmaW5lZDtcbiAgfSk7XG5cbiAgaWYobWlzc2luZ1BhcmFtcy5sZW5ndGgpe1xuICAgIHRocm93IG5ldyBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yKG1pc3NpbmdQYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgIHJldHVybiBwYXJhbS5uYW1lO1xuICAgIH0pKTtcbiAgfVxuXG4gIHBhdGhQYXJhbXMuZm9yRWFjaChmdW5jdGlvbihwYXJhbSl7XG4gICAgdmFyIGtleSA9IHBhcmFtLm5hbWU7XG4gICAgXG4gICAgdmFyIGV4cCA9IG5ldyBSZWdFeHAoJ3snICsga2V5ICsgJ1tefV0qfScsICdnaScpO1xuXG4gICAgdmFyIHZhbHVlID0gZGF0YVtrZXldLnRvU3RyaW5nKCk7XG4gICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcvJykubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignLycpO1xuXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoZXhwLCB2YWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbmZ1bmN0aW9uIGdldFVybFRlbXBsYXRlKG9wZXJhdGlvbil7XG4gIHZhciBhcGlPYmplY3QgPSBvcGVyYXRpb24uYXBpT2JqZWN0OyBcblxuICB2YXIgYmFzZVBhdGggPSBhcGlPYmplY3QuYXBpRGVjbGFyYXRpb24uYmFzZVBhdGg7XG4gIHZhciBwYXRoID0gYXBpT2JqZWN0LnBhdGgucmVwbGFjZSgne2Zvcm1hdH0nLCAnanNvbicpO1xuICBcbiAgcmV0dXJuIGJhc2VQYXRoICsgcGF0aDtcbn1cbiJdfQ==
(9)
});
