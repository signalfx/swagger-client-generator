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
  var api = {},
    apiAuthData,
    authMethodName = 'auth';

  schema = processSchema(schema);
  
  // If the 'auth' key is used for any resource or operation, we'll use
  // 'authorization' instead for the auth methods
  var authIsInUse = schema.apis.some(function(resourceObject){
    return resourceObject.apiDeclaration.apis.some(function(apiObject){
      var resourceApiName = getApiName(apiObject.apiDeclaration.resourcePath || apiObject.path);
      if(resourceApiName === 'auth') return true;
      return apiObject.operations.some(function(operation){
        return operation.nickname === 'auth';
      });
    });
  });
  
  if(authIsInUse) authMethodName = 'authorization';

  api[authMethodName] = function(){
    apiAuthData = processApiAuthArgs(arguments);
  };

  schema.apis.forEach(function(resourceObject){
    var resourceName,
      resourceApi,
      resourceAuthData;

    if(resourceObject.apiDeclaration.resourcePath){
      resourceName = getApiName(resourceObject.apiDeclaration.resourcePath);
      resourceApi = api[resourceName] = {};
      resourceApi[authMethodName] = function(){
        resourceAuthData = processApiAuthArgs(arguments);
      };
    }

    resourceObject.apiDeclaration.apis.forEach(function(apiObject){
      var apiObjectName = resourceName,
        apiObjectApi = resourceApi,
        apiObjectAuthData;

      if(!apiObjectName){
        apiObjectName = getApiName(apiObject.path);
        apiObjectApi = api[apiObjectName] = {};
        apiObjectApi[authMethodName] = function(){
          apiObjectAuthData = processApiAuthArgs(arguments);
        };
      }

      apiObject.operations.forEach(function(operation){
        var operationHandlerName = operation.nickname,
          operationAuthData,
          operationHandler; 
        
        function getAuthData(){
          return operationAuthData || apiObjectAuthData || resourceAuthData || apiAuthData;
        }

        operationHandler = createOperationHandler(operation, getAuthData, requestHandler);

        operationHandler[authMethodName] = function(){
          operationAuthData = processApiAuthArgs(arguments);
        };

        apiObjectApi[operationHandlerName] = operationHandler;
      });
    });
  });

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
      });
    });
  });

  return schema;
}

// Takes a path and returns a JavaScript-friendly variable name
function getApiName(name){
  // String non-word characters
  name = name.replace(/\W/g, '/');

  // Turn paths which look/like/this to lookLikeThis
  name = name.replace(/(\w)\/(\w)/g, function(match, p1, p2){
    return p1 + p2.toUpperCase();
  });

  name = name.replace(/\//g, '');

  return name;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcb3phblxcY29kZVxcc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yXFxub2RlX21vZHVsZXNcXGJvaWxlcnBsYXRlLWd1bHBcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvZXJyb3JUeXBlcy5qcyIsImM6L1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL2luZGV4LmpzIiwiYzovVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvdmFsaWRhdGVBcnJheS5qcyIsImM6L1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL3ZhbGlkYXRlRGF0YVR5cGUuanMiLCJjOi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZU1vZGVsLmpzIiwiYzovVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvdmFsaWRhdGVPcGVyYXRpb24uanMiLCJjOi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZVByaW1pdGl2ZVR5cGVzLmpzIiwiYzovVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvYXBwbHlBdXRoRGF0YS5qcyIsImM6L1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2NyZWF0ZUNsaWVudC5qcyIsImM6L1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2NyZWF0ZU9wZXJhdGlvbkhhbmRsZXIuanMiLCJjOi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9lcnJvclR5cGVzLmpzIiwiYzovVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvZ2V0UmVxdWVzdEJvZHkuanMiLCJjOi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0SGVhZGVycy5qcyIsImM6L1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2dldFJlcXVlc3RVcmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIERhdGFUeXBlVmFsaWRhdGlvbkVycm9yKG1lc3NhZ2Upe1xyXG4gIHRoaXMubmFtZSA9ICdEYXRhVHlwZVZhbGlkYXRpb25FcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnSW52YWxpZCBkYXRhIHR5cGUnO1xyXG59XHJcbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcclxuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3I7XHJcbmV4cG9ydHMuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjtcclxuXHJcbmZ1bmN0aW9uIE5vdEFuSW50ZWdlckVycm9yKHZhbHVlKXtcclxuICB0aGlzLm5hbWUgPSAnTm90QW5JbnRlZ2VyRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYW4gaW50ZWdlcic7XHJcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG59XHJcbk5vdEFuSW50ZWdlckVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuTm90QW5JbnRlZ2VyRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QW5JbnRlZ2VyRXJyb3I7XHJcbmV4cG9ydHMuTm90QW5JbnRlZ2VyRXJyb3IgPSBOb3RBbkludGVnZXJFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIE5vdEFOdW1iZXJFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XHJcbiAgdGhpcy5uYW1lID0gJ05vdEFOdW1iZXJFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhIG51bWJlcic7XHJcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XHJcblxyXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5Ob3RBTnVtYmVyRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5Ob3RBTnVtYmVyRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QU51bWJlckVycm9yO1xyXG5leHBvcnRzLk5vdEFOdW1iZXJFcnJvciA9IE5vdEFOdW1iZXJFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIE51bWJlclRvb0xhcmdlRXJyb3IodmFsdWUsIG1heCl7XHJcbiAgdGhpcy5uYW1lID0gJ051bWJlclRvb0xhcmdlRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBhYm92ZSB0aGUgbWF4aW11bSBvZiAnICsgbWF4LnRvU3RyaW5nKCk7XHJcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG59XHJcbk51bWJlclRvb0xhcmdlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5OdW1iZXJUb29MYXJnZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlclRvb0xhcmdlRXJyb3I7XHJcbmV4cG9ydHMuTnVtYmVyVG9vTGFyZ2VFcnJvciA9IE51bWJlclRvb0xhcmdlRXJyb3I7XHJcblxyXG5mdW5jdGlvbiBOdW1iZXJUb29TbWFsbEVycm9yKHZhbHVlLCBtYXgpe1xyXG4gIHRoaXMubmFtZSA9ICdOdW1iZXJUb29TbWFsbEVycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgYWJvdmUgdGhlIG1heGltdW0gb2YgJyArIG1heC50b1N0cmluZygpO1xyXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5OdW1iZXJUb29TbWFsbEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuTnVtYmVyVG9vU21hbGxFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJUb29TbWFsbEVycm9yO1xyXG5leHBvcnRzLk51bWJlclRvb1NtYWxsRXJyb3IgPSBOdW1iZXJUb29TbWFsbEVycm9yO1xyXG5cclxuZnVuY3Rpb24gTm90QUJvb2xlYW5FcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XHJcbiAgdGhpcy5uYW1lID0gJ05vdEFCb29sZWFuRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYSBib29sZWFuJztcclxuICBpZihhY3R1YWxUeXBlKSB0aGlzLm1lc3NhZ2UgKz0gJyAoZ290IGEgJyArIGFjdHVhbFR5cGUgKyAnIGluc3RlYWQpJztcclxuXHJcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG59XHJcbk5vdEFCb29sZWFuRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5Ob3RBQm9vbGVhbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFCb29sZWFuRXJyb3I7XHJcbmV4cG9ydHMuTm90QUJvb2xlYW5FcnJvciA9IE5vdEFCb29sZWFuRXJyb3I7XHJcblxyXG5mdW5jdGlvbiBOb3RBbkFycmF5RXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xyXG4gIHRoaXMubmFtZSA9ICdOb3RBbkFycmF5RXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYW4gYXJyYXknO1xyXG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xyXG5cclxuICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbn1cclxuTm90QW5BcnJheUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuTm90QW5BcnJheUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFuQXJyYXlFcnJvcjtcclxuZXhwb3J0cy5Ob3RBbkFycmF5RXJyb3IgPSBOb3RBbkFycmF5RXJyb3I7XHJcblxyXG5mdW5jdGlvbiBEdXBsaWNhdGVJblNldEVycm9yKGFyciwgZHVwZXMpe1xyXG4gIHRoaXMubmFtZSA9ICdEdXBsaWNhdGVJblNldEVycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnRHVwbGljYXRlcyAoXCInICsgZHVwZXMuam9pbignXCIsIFwiJykgKyAnXCIpIGZvdW5kIGluIHNldDogW1wiJyArIGFyci5qb2luKCdcIiwgXCInKSArICdcIic7XHJcbiAgdGhpcy5kdXBlcyA9IGR1cGVzO1xyXG4gIHRoaXMudmFsdWUgPSBhcnI7XHJcbn1cclxuRHVwbGljYXRlSW5TZXRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XHJcbkR1cGxpY2F0ZUluU2V0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRHVwbGljYXRlSW5TZXRFcnJvcjtcclxuZXhwb3J0cy5EdXBsaWNhdGVJblNldEVycm9yID0gRHVwbGljYXRlSW5TZXRFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIE5vdFZvaWRFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XHJcbiAgdGhpcy5uYW1lID0gJ05vdFZvaWRFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZCc7XHJcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XHJcblxyXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5Ob3RWb2lkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5Ob3RWb2lkRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90Vm9pZEVycm9yO1xyXG5leHBvcnRzLk5vdFZvaWRFcnJvciA9IE5vdFZvaWRFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIE5vdEFTdHJpbmdFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XHJcbiAgdGhpcy5uYW1lID0gJ05vdEFTdHJpbmdFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhIHN0cmluZyc7XHJcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XHJcblxyXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxufVxyXG5Ob3RBU3RyaW5nRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5Ob3RBU3RyaW5nRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QVN0cmluZ0Vycm9yO1xyXG5leHBvcnRzLk5vdEFTdHJpbmdFcnJvciA9IE5vdEFTdHJpbmdFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIFN0cmluZ05vdEluRW51bUVycm9yKHZhbHVlLCBhY2NlcHRhYmxlVmFsdWVzKXtcclxuICB0aGlzLm5hbWUgPSAnU3RyaW5nTm90SW5FbnVtRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYW4gYWNjZXB0YWJsZSB2YWx1ZTogXCInICsgYWNjZXB0YWJsZVZhbHVlcy5qb2luKCdcIiwgXCInKSArICdcIic7XHJcbiBcclxuICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbn1cclxuU3RyaW5nTm90SW5FbnVtRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5TdHJpbmdOb3RJbkVudW1FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdHJpbmdOb3RJbkVudW1FcnJvcjtcclxuZXhwb3J0cy5TdHJpbmdOb3RJbkVudW1FcnJvciA9IFN0cmluZ05vdEluRW51bUVycm9yO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yKGVycm9ycyl7XHJcbiAgdGhpcy5uYW1lID0gJ0Vycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnRXJyb3JzIGluIGFycmF5IGVsZW1lbnRzOlxcblxcdCcgKyBlcnJvcnMuam9pbignLFxcblxcdCcpO1xyXG4gIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xyXG59XHJcbkVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3I7XHJcbmV4cG9ydHMuRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IgPSBFcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIE1pc3NpbmdWYWx1ZUVycm9yKCl7XHJcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdWYWx1ZUVycm9yJztcclxuICBcclxuICB0aGlzLm1lc3NhZ2UgPSAnVGhpcyB2YWx1ZSBpcyByZXF1aXJlZCBidXQgbWlzc2luZyc7XHJcbn1cclxuTWlzc2luZ1ZhbHVlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5NaXNzaW5nVmFsdWVFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nVmFsdWVFcnJvcjtcclxuZXhwb3J0cy5NaXNzaW5nVmFsdWVFcnJvciA9IE1pc3NpbmdWYWx1ZUVycm9yO1xyXG5cclxuZnVuY3Rpb24gVmFsaWRhdGlvbkVycm9yKHNwZWNOYW1lLCBzcGVjLCBlcnJvcil7XHJcbiAgdGhpcy5uYW1lID0gJ1ZhbGlkYXRpb25FcnJvcic7XHJcbiAgdGhpcy5zcGVjTmFtZSA9IHNwZWNOYW1lO1xyXG4gIHRoaXMuc3BlYyA9IHNwZWM7XHJcbiAgdGhpcy5lcnJvciA9IGVycm9yO1xyXG5cclxuICB0aGlzLm1lc3NhZ2UgPSBzcGVjTmFtZSArICcgaXMgaW52YWxpZDogJyArIGVycm9yLm1lc3NhZ2U7XHJcbn1cclxuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZhbGlkYXRpb25FcnJvcjtcclxuZXhwb3J0cy5WYWxpZGF0aW9uRXJyb3IgPSBWYWxpZGF0aW9uRXJyb3I7XHJcblxyXG5mdW5jdGlvbiBWYWxpZGF0aW9uRXJyb3JzKHZhbHVlLCBzcGVjTmFtZSwgc3BlYywgZXJyb3JzKXtcclxuICB0aGlzLm5hbWUgPSAnVmFsaWRhdGlvbkVycm9ycyc7XHJcblxyXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB0aGlzLnNwZWNOYW1lID0gc3BlY05hbWU7XHJcbiAgdGhpcy5zcGVjID0gc3BlYztcclxuICB0aGlzLmVycm9ycyA9IGVycm9ycyB8fCBbXTtcclxuXHJcbiAgdGhpcy5tZXNzYWdlID0gc3BlY05hbWUgKyAnIGlzIGludmFsaWQnO1xyXG5cclxuICBpZih0aGlzLmVycm9ycy5sZW5ndGgpe1xyXG4gICAgdGhpcy5tZXNzYWdlICs9ICc6XFxuXFx0JyArIHRoaXMuZXJyb3JzLm1hcChmdW5jdGlvbihlKXsgcmV0dXJuIGUubWVzc2FnZTsgfSkuam9pbignXFxuXFx0Jyk7XHJcbiAgfVxyXG59XHJcblZhbGlkYXRpb25FcnJvcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xyXG5WYWxpZGF0aW9uRXJyb3JzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZhbGlkYXRpb25FcnJvcnM7XHJcbmV4cG9ydHMuVmFsaWRhdGlvbkVycm9ycyA9IFZhbGlkYXRpb25FcnJvcnM7XHJcbiIsImV4cG9ydHMuZGF0YVR5cGUgPSByZXF1aXJlKCcuL3ZhbGlkYXRlRGF0YVR5cGUnKTtcclxuZXhwb3J0cy5tb2RlbCA9IHJlcXVpcmUoJy4vdmFsaWRhdGVNb2RlbCcpO1xyXG5leHBvcnRzLm9wZXJhdGlvbiA9IHJlcXVpcmUoJy4vdmFsaWRhdGVPcGVyYXRpb24nKTtcclxuZXhwb3J0cy5hcnJheSA9IHJlcXVpcmUoJy4vdmFsaWRhdGVBcnJheScpO1xyXG5leHBvcnRzLmVycm9ycyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpO1xyXG5cclxudmFyIHByaW1pdGl2ZXMgPSByZXF1aXJlKCcuL3ZhbGlkYXRlUHJpbWl0aXZlVHlwZXMnKTtcclxuZXhwb3J0cy5wcmltaXRpdmUgPSB7XHJcbiAgaW50ZWdlcjogcHJpbWl0aXZlcy52YWxpZGF0ZUludGVnZXIsXHJcbiAgbnVtYmVyOiBwcmltaXRpdmVzLnZhbGlkYXRlTnVtYmVyLFxyXG4gIHN0cmluZzogcHJpbWl0aXZlcy52YWxpZGF0ZVN0cmluZyxcclxuICBib29sZWFuOiBwcmltaXRpdmVzLnZhbGlkYXRlQm9vbGVhbixcclxuICB2b2lkOiBwcmltaXRpdmVzLnZhbGlkYXRlVm9pZCxcclxuICBmaWxlOiBwcmltaXRpdmVzLnZhbGlkYXRlRmlsZVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxyXG4gIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVBcnJheShjYW5kaWRhdGUsIGRhdGFUeXBlLCBtb2RlbHMpe1xyXG4gIGlmKCFBcnJheS5pc0FycmF5KGNhbmRpZGF0ZSkpe1xyXG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdEFuQXJyYXlFcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGl0ZW1zID0gZGF0YVR5cGUuaXRlbXM7XHJcblxyXG4gIGlmKGRhdGFUeXBlLnVuaXF1ZUl0ZW1zKXtcclxuICAgIHZhciBkdXBlQ2hlY2sgPSBbXTtcclxuICAgIHZhciBkdXBlcyA9IGNhbmRpZGF0ZS5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICB2YXIgc2lnbmF0dXJlO1xyXG4gICAgICBpZihpdGVtcy4kcmVmKXtcclxuICAgICAgICBzaWduYXR1cmUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2lnbmF0dXJlID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYoZHVwZUNoZWNrLmluZGV4T2Yoc2lnbmF0dXJlKSAhPT0gLTEpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGR1cGVDaGVjay5wdXNoKHNpZ25hdHVyZSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihkdXBlcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLkR1cGxpY2F0ZUluU2V0RXJyb3IoY2FuZGlkYXRlLCBkdXBlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgZXJyb3JzO1xyXG5cclxuICBpZihpdGVtcy4kcmVmKXtcclxuICAgIHZhciBtb2RlbCA9IG1vZGVsc1tpdGVtcy4kcmVmXTtcclxuICAgIGVycm9ycyA9IGNhbmRpZGF0ZS5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICByZXR1cm4gdmFsaWRhdGUubW9kZWwodmFsdWUsIG1vZGVsLCBtb2RlbHMpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVycm9ycyA9IGNhbmRpZGF0ZS5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICByZXR1cm4gdmFsaWRhdGUuZGF0YVR5cGUodmFsdWUsIGl0ZW1zLCBtb2RlbHMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZihlcnJvcnMubGVuZ3RoKXtcclxuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5FcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcihlcnJvcnMpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlQXJyYXk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xyXG4gIFxyXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGFUeXBlKGNhbmRpZGF0ZSwgZGF0YVR5cGUsIG1vZGVscyl7XHJcbiAgbW9kZWxzID0gbW9kZWxzIHx8IHt9O1xyXG4gICAgICBcclxuICB2YXIgdHlwZSA9IGRhdGFUeXBlLnR5cGUgfHwgZGF0YVR5cGUuZGF0YVR5cGUgfHwgZGF0YVR5cGUuJHJlZjtcclxuXHJcbiAgc3dpdGNoKHR5cGUpe1xyXG4gICAgY2FzZSAnaW50ZWdlcic6XHJcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuaW50ZWdlcihjYW5kaWRhdGUsIGRhdGFUeXBlKTtcclxuICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUubnVtYmVyKGNhbmRpZGF0ZSwgZGF0YVR5cGUpO1xyXG4gICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5zdHJpbmcoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XHJcbiAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5ib29sZWFuKGNhbmRpZGF0ZSk7XHJcbiAgICBjYXNlICdhcnJheSc6XHJcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5hcnJheShjYW5kaWRhdGUsIGRhdGFUeXBlLCBtb2RlbHMpO1xyXG4gICAgY2FzZSAndm9pZCc6XHJcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUudm9pZChjYW5kaWRhdGUpO1xyXG4gICAgY2FzZSAnRmlsZSc6XHJcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuZmlsZSgpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgLy8gQXNzdW1lZCB0byBiZSBjb21wbGV4IG1vZGVsXHJcbiAgICAgIHZhciBtb2RlbCA9IG1vZGVsc1t0eXBlXTtcclxuICAgICAgcmV0dXJuIHZhbGlkYXRlLm1vZGVsKGNhbmRpZGF0ZSwgbW9kZWwsIG1vZGVscyk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVEYXRhVHlwZTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxyXG4gIFZhbGlkYXRpb25FcnJvciA9IGVycm9yVHlwZXMuVmFsaWRhdGlvbkVycm9yLFxyXG4gIFZhbGlkYXRpb25FcnJvcnMgPSBlcnJvclR5cGVzLlZhbGlkYXRpb25FcnJvcnMsXHJcbiAgTWlzc2luZ1ZhbHVlRXJyb3IgPSBlcnJvclR5cGVzLk1pc3NpbmdWYWx1ZUVycm9yLFxyXG4gIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xyXG5cclxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjIxMDIvd2hhdC1pcy10aGUtbW9zdC1lZmZpY2llbnQtd2F5LXRvLWNsb25lLWFuLW9iamVjdFxyXG5mdW5jdGlvbiBjbG9uZShvYmope1xyXG4gICAgaWYob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSByZXR1cm4gb2JqO1xyXG5cclxuICAgIGlmKEFycmF5LmlzQXJyYXkob2JqKSkgcmV0dXJuIG9iai5zbGljZSgpO1xyXG5cclxuICAgIHZhciB0ZW1wID0ge307XHJcblxyXG4gICAgZm9yKHZhciBrZXkgaW4gb2JqKVxyXG4gICAgICAgIHRlbXBba2V5XSA9IGNsb25lKG9ialtrZXldKTtcclxuICAgIHJldHVybiB0ZW1wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJbmhlcnRpZWRQcm9wZXJ0aWVzKG1vZGVsLCBtb2RlbElkLCBtb2RlbHMpe1xyXG4gIHZhciBwYXJlbnQ7XHJcblxyXG4gIE9iamVjdC5rZXlzKG1vZGVscykuc29tZShmdW5jdGlvbihtb2RlbE5hbWUpe1xyXG4gICAgdmFyIHBvdGVudGlhbFBhcmVudCA9IG1vZGVsc1ttb2RlbE5hbWVdO1xyXG4gICAgaWYgKCFwb3RlbnRpYWxQYXJlbnQuc3ViVHlwZXMpIHJldHVybjtcclxuXHJcbiAgICBpZihwb3RlbnRpYWxQYXJlbnQuc3ViVHlwZXMuaW5kZXhPZihtb2RlbElkKSAhPT0gLTEpe1xyXG4gICAgICBwYXJlbnQgPSBwb3RlbnRpYWxQYXJlbnQ7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZighcGFyZW50KSByZXR1cm47XHJcblxyXG4gIGZvcih2YXIgcHJvcGVydHlOYW1lIGluIHBhcmVudC5wcm9wZXJ0aWVzKXtcclxuICAgIG1vZGVsLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSA9IHBhcmVudC5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XHJcbiAgfVxyXG4gIFxyXG4gIGlmKHBhcmVudC5yZXF1aXJlZCkgbW9kZWwucmVxdWlyZWQgPSBtb2RlbC5yZXF1aXJlZC5jb25jYXQocGFyZW50LnJlcXVpcmVkKTtcclxuXHJcbiAgYWRkSW5oZXJ0aWVkUHJvcGVydGllcyhtb2RlbCwgcGFyZW50LmlkLCBtb2RlbHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZU1vZGVsKGNhbmRpZGF0ZSwgbW9kZWwsIG1vZGVscyl7XHJcbiAgaWYoY2FuZGlkYXRlID09PSBudWxsIHx8IHR5cGVvZiBjYW5kaWRhdGUgIT09ICdvYmplY3QnKXtcclxuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbkVycm9ycyhjYW5kaWRhdGUsIG1vZGVsKTtcclxuICB9XHJcblxyXG4gIG1vZGVscyA9IG1vZGVscyB8fCB7fTtcclxuXHJcbiAgbW9kZWwgPSBjbG9uZShtb2RlbCk7XHJcbiAgaWYoIW1vZGVsLnJlcXVpcmVkKSBtb2RlbC5yZXF1aXJlZCA9IFtdO1xyXG4gIGFkZEluaGVydGllZFByb3BlcnRpZXMobW9kZWwsIG1vZGVsLmlkLCBtb2RlbHMpO1xyXG5cclxuICB2YXIgZXJyb3JzID0gW107XHJcblxyXG4gIG1vZGVsLnJlcXVpcmVkLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKXtcclxuICAgIGlmIChwcm9wZXJ0eU5hbWUgaW4gY2FuZGlkYXRlKSByZXR1cm47XHJcblxyXG4gICAgdmFyIHByb3BlcnR5ID0gbW9kZWwucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xyXG4gICAgdmFyIGVycm9yID0gbmV3IE1pc3NpbmdWYWx1ZUVycm9yKCk7XHJcbiAgICBlcnJvcnMucHVzaChuZXcgVmFsaWRhdGlvbkVycm9yKHByb3BlcnR5TmFtZSwgcHJvcGVydHksIGVycm9yKSk7XHJcbiAgfSk7XHJcblxyXG4gIE9iamVjdC5rZXlzKGNhbmRpZGF0ZSkuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eU5hbWUpe1xyXG4gICAgdmFyIHByb3BlcnR5ID0gbW9kZWwucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xyXG5cclxuICAgIHZhciBlcnJvciA9IHZhbGlkYXRlLmRhdGFUeXBlKGNhbmRpZGF0ZVtwcm9wZXJ0eU5hbWVdLCBwcm9wZXJ0eSwgbW9kZWxzKTtcclxuICAgIGlmKGVycm9yKXtcclxuICAgICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwcm9wZXJ0eU5hbWUsIHByb3BlcnR5LCBlcnJvcikpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIGlmKGVycm9ycy5sZW5ndGgpe1xyXG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uRXJyb3JzKGNhbmRpZGF0ZSwgbW9kZWwuaWQsIG1vZGVsLCBlcnJvcnMpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlTW9kZWw7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcclxuICBWYWxpZGF0aW9uRXJyb3IgPSBlcnJvclR5cGVzLlZhbGlkYXRpb25FcnJvcixcclxuICBWYWxpZGF0aW9uRXJyb3JzID0gZXJyb3JUeXBlcy5WYWxpZGF0aW9uRXJyb3JzLFxyXG4gIE1pc3NpbmdWYWx1ZUVycm9yID0gZXJyb3JUeXBlcy5NaXNzaW5nVmFsdWVFcnJvcixcclxuICB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlT3BlcmF0aW9uKGNhbmRpZGF0ZSwgb3BlcmF0aW9uLCBtb2RlbHMpe1xyXG4gIHZhciBlcnJvcnMgPSBbXTtcclxuICBcclxuICBvcGVyYXRpb24ucGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgIGlmICghcGFyYW0ucmVxdWlyZWQpIHJldHVybjtcclxuICAgIGlmIChwYXJhbS5uYW1lIGluIGNhbmRpZGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgIHZhciBlcnJvciA9IG5ldyBNaXNzaW5nVmFsdWVFcnJvcigpO1xyXG4gICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwYXJhbS5uYW1lLCBwYXJhbSwgZXJyb3IpKTtcclxuICB9KTtcclxuXHJcblxyXG4gIE9iamVjdC5rZXlzKGNhbmRpZGF0ZSkuZm9yRWFjaChmdW5jdGlvbihwYXJhbU5hbWUpe1xyXG4gICAgdmFyIHBhcmFtZXRlciA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XHJcbiAgICAgIHJldHVybiBwYXJhbS5uYW1lID09PSBwYXJhbU5hbWU7XHJcbiAgICB9KVswXTtcclxuXHJcbiAgICB2YXIgZXJyb3IgPSB2YWxpZGF0ZS5kYXRhVHlwZShjYW5kaWRhdGVbcGFyYW1OYW1lXSwgcGFyYW1ldGVyLCBtb2RlbHMpO1xyXG4gICAgaWYoZXJyb3Ipe1xyXG4gICAgICBlcnJvcnMucHVzaChuZXcgVmFsaWRhdGlvbkVycm9yKHBhcmFtTmFtZSwgcGFyYW1ldGVyLCBlcnJvcikpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIGlmKGVycm9ycy5sZW5ndGgpe1xyXG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uRXJyb3JzKGNhbmRpZGF0ZSwgb3BlcmF0aW9uLm5pY2tuYW1lLCBvcGVyYXRpb24sIGVycm9ycyk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVPcGVyYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlSW50ZWdlcihjYW5kaWRhdGUsIGRhdGFUeXBlKXtcclxuICB2YXIgZXJyb3IgPSB2YWxpZGF0ZU51bWJlcihjYW5kaWRhdGUsIGRhdGFUeXBlKTtcclxuICBpZihlcnJvcikgcmV0dXJuIGVycm9yO1xyXG5cclxuICBpZihjYW5kaWRhdGUgJSAxKXtcclxuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBbkludGVnZXJFcnJvcihjYW5kaWRhdGUpO1xyXG4gIH1cclxufVxyXG5leHBvcnRzLnZhbGlkYXRlSW50ZWdlciA9IHZhbGlkYXRlSW50ZWdlcjtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlTnVtYmVyKGNhbmRpZGF0ZSwgZGF0YVR5cGUpe1xyXG4gIGlmKCEodHlwZW9mIGNhbmRpZGF0ZSA9PT0gJ251bWJlcicgfHwgY2FuZGlkYXRlIGluc3RhbmNlb2YgTnVtYmVyKSB8fCBpc05hTihjYW5kaWRhdGUpKXtcclxuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBTnVtYmVyRXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcclxuICB9XHJcbiAgXHJcbiAgaWYoKCdtaW5pbXVtJyBpbiBkYXRhVHlwZSkgJiYgY2FuZGlkYXRlIDwgcGFyc2VJbnQoZGF0YVR5cGUubWluaW11bSwgMTApKXtcclxuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5OdW1iZXJUb29TbWFsbEVycm9yKGNhbmRpZGF0ZSwgZGF0YVR5cGUubWluaW11bSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlmKCgnbWF4aW11bScgaW4gZGF0YVR5cGUpICYmIGNhbmRpZGF0ZSA+IHBhcnNlSW50KGRhdGFUeXBlLm1heGltdW0sIDEwKSl7XHJcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTnVtYmVyVG9vTGFyZ2VFcnJvcihjYW5kaWRhdGUsIGRhdGFUeXBlLm1heGltdW0pO1xyXG4gIH1cclxufVxyXG5leHBvcnRzLnZhbGlkYXRlTnVtYmVyID0gdmFsaWRhdGVOdW1iZXI7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUJvb2xlYW4oY2FuZGlkYXRlKXtcclxuICBpZighKHR5cGVvZiBjYW5kaWRhdGUgPT09ICdib29sZWFuJyB8fCBjYW5kaWRhdGUgaW5zdGFuY2VvZiBCb29sZWFuKSl7XHJcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QUJvb2xlYW5FcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xyXG4gIH1cclxufVxyXG5leHBvcnRzLnZhbGlkYXRlQm9vbGVhbiA9IHZhbGlkYXRlQm9vbGVhbjtcclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVZvaWQoY2FuZGlkYXRlKXtcclxuICBpZihjYW5kaWRhdGUgIT0gbnVsbCl7XHJcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90Vm9pZEVycm9yKGNhbmRpZGF0ZSwgdHlwZW9mIGNhbmRpZGF0ZSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydHMudmFsaWRhdGVWb2lkID0gdmFsaWRhdGVWb2lkO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGaWxlKCl7XHJcbiAgLy8gTm90IHN1cmUgaG93IHRvIGNoZWNrIHRoaXMsIHNpbmNlIGFueXRoaW5nIGNvdWxkIHF1YWxpZnkgYXMgJ0ZpbGUnLlxyXG59XHJcbmV4cG9ydHMudmFsaWRhdGVGaWxlID0gdmFsaWRhdGVGaWxlO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcoY2FuZGlkYXRlLCBkYXRhVHlwZSl7XHJcbiAgaWYodHlwZW9mIGNhbmRpZGF0ZSAhPT0gJ3N0cmluZycgJiYgIShjYW5kaWRhdGUgaW5zdGFuY2VvZiBTdHJpbmcpKXtcclxuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBU3RyaW5nRXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcclxuICB9XHJcblxyXG4gIGlmKCdlbnVtJyBpbiBkYXRhVHlwZSl7XHJcbiAgICBpZihkYXRhVHlwZS5lbnVtLmluZGV4T2YoY2FuZGlkYXRlKSA9PT0gLTEpIHtcclxuICAgICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLlN0cmluZ05vdEluRW51bUVycm9yKGNhbmRpZGF0ZSwgZGF0YVR5cGUuZW51bSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydHMudmFsaWRhdGVTdHJpbmcgPSB2YWxpZGF0ZVN0cmluZzsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvciA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLk1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3I7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFwcGx5QXV0aERhdGEob3BlcmF0aW9uLCBhdXRoRGF0YSwgcmVxdWVzdCl7XHJcbiAgdmFyIGF1dGhNYXAgPSBvcGVyYXRpb24uYXV0aG9yaXphdGlvbnM7XHJcbiAgaWYoIWF1dGhNYXApIGF1dGhNYXAgPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLmF1dGhvcml6YXRpb25zO1xyXG4gIGlmKCFhdXRoTWFwKSByZXR1cm47XHJcblxyXG4gIHZhciBhdXRoTmFtZXMgPSBPYmplY3Qua2V5cyhhdXRoTWFwKS5maWx0ZXIoZnVuY3Rpb24oYXV0aE5hbWUpe1xyXG4gICAgLy8gQ3VycmVudGx5IHVuYWJsZSB0byBoYW5kbGUgb2F1dGgyXHJcbiAgICByZXR1cm4gYXV0aE1hcFthdXRoTmFtZV0udHlwZSAhPT0gJ29hdXRoMic7XHJcbiAgfSk7XHJcblxyXG4gIGlmKGF1dGhOYW1lcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgaWYoYXV0aE5hbWVzLmxlbmd0aCA9PT0gMSl7XHJcbiAgICB2YXIgYXV0aE5hbWUgPSBhdXRoTmFtZXNbMF07XHJcbiAgICB2YXIgYXV0aCA9IGF1dGhNYXBbYXV0aE5hbWVdO1xyXG5cclxuICAgIGlmKCFhdXRoRGF0YSkgdGhyb3cgbmV3IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IoYXV0aE5hbWUsIGF1dGgpO1xyXG5cclxuICAgIC8vIFVucGFjayBuZXN0ZWQgYXV0aERhdGEgZm9yIHNpbmdsZSBhdXRoIG9wczogeyBhcGlLZXk6ICcxMjMnIH0gLT4gJzEyMydcclxuICAgIGlmKGF1dGhEYXRhW2F1dGhOYW1lXSkgYXV0aERhdGEgPSBhdXRoRGF0YVthdXRoTmFtZV07XHJcblxyXG4gICAgaWYoYXV0aC50eXBlID09PSAnYXBpS2V5Jyl7XHJcbiAgICAgIGFwcGx5QXBpS2V5KGF1dGgsIGF1dGhOYW1lLCBhdXRoRGF0YSwgcmVxdWVzdCk7XHJcbiAgICB9IGVsc2UgaWYoYXV0aC50eXBlID09PSAnYmFzaWNBdXRoJykge1xyXG4gICAgICBhcHBseUJhc2ljQXV0aChhdXRoLCBhdXRoTmFtZSwgYXV0aERhdGEudXNlcm5hbWUsIGF1dGhEYXRhLnBhc3N3b3JkLCByZXF1ZXN0KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgYXV0aE5hbWVzLmZvckVhY2goZnVuY3Rpb24oYXV0aE5hbWUpe1xyXG4gICAgICB2YXIgYXV0aCA9IGF1dGhNYXBbYXV0aE5hbWVdO1xyXG4gICAgICB2YXIgZGF0YSA9IGF1dGhEYXRhW2F1dGhOYW1lXTtcclxuXHJcbiAgICAgIGlmKCFkYXRhKSB0aHJvdyBuZXcgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcihhdXRoTmFtZSwgYXV0aCk7XHJcblxyXG4gICAgICBpZihhdXRoLnR5cGUgPT09ICdhcGlLZXknKXtcclxuICAgICAgICBhcHBseUFwaUtleShhdXRoLCBhdXRoTmFtZSwgZGF0YSwgcmVxdWVzdCk7XHJcbiAgICAgIH0gZWxzZSBpZihhdXRoLnR5cGUgPT09ICdiYXNpY0F1dGgnKXtcclxuICAgICAgICBhcHBseUJhc2ljQXV0aChhdXRoLCBhdXRoTmFtZSwgZGF0YS51c2VybmFtZSwgZGF0YS5wYXNzd29yZCwgcmVxdWVzdCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5QXBpS2V5KGF1dGgsIGF1dGhOYW1lLCBhcGlLZXksIHJlcXVlc3Qpe1xyXG4gIGlmKCFhcGlLZXkpIHRocm93IG5ldyBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lLCBhdXRoKTtcclxuICBcclxuICBpZihhdXRoLnBhc3NBcyA9PT0gJ2hlYWRlcicpe1xyXG4gICAgcmVxdWVzdC5oZWFkZXJzW2F1dGgua2V5bmFtZV0gPSBhcGlLZXk7XHJcbiAgfSBlbHNlIGlmKGF1dGgucGFzc0FzID09PSAncXVlcnknKXtcclxuICAgIHZhciB1cmwgPSByZXF1ZXN0LnVybDtcclxuICAgIHZhciBxdWVyeVBhcmFtID0gYXV0aC5rZXluYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFwaUtleSk7XHJcbiAgICBpZih1cmwuaW5kZXhPZignPycpID09PSAtMSl7XHJcbiAgICAgIHVybCArPSAnPycgKyBxdWVyeVBhcmFtO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoJz8nLCAnPycgKyBxdWVyeVBhcmFtICsgJyYnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0LnVybCA9IHVybDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5QmFzaWNBdXRoKGF1dGgsIGF1dGhOYW1lLCB1c2VybmFtZSwgcGFzc3dvcmQsIHJlcXVlc3Qpe1xyXG4gIGlmKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHRocm93IG5ldyBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lLCBhdXRoKTtcclxuICBcclxuICB2YXIgdXJsID0gcmVxdWVzdC51cmw7XHJcbiAgXHJcbiAgLy8gT25seSBhZGQgYmFzaWMgYXV0aCBvbmNlXHJcbiAgaWYodXJsLmluZGV4T2YoJ0AnKSA9PT0gLTEpe1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoJzovLycsICc6Ly8nICsgdXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCArICdAJyk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0LnVybCA9IHVybDtcclxufSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBjcmVhdGVPcGVyYXRpb25IYW5kbGVyID0gcmVxdWlyZSgnLi9jcmVhdGVPcGVyYXRpb25IYW5kbGVyJyk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDbGllbnQoc2NoZW1hLCByZXF1ZXN0SGFuZGxlcil7XHJcbiAgdmFyIGFwaSA9IHt9LFxyXG4gICAgYXBpQXV0aERhdGEsXHJcbiAgICBhdXRoTWV0aG9kTmFtZSA9ICdhdXRoJztcclxuXHJcbiAgc2NoZW1hID0gcHJvY2Vzc1NjaGVtYShzY2hlbWEpO1xyXG4gIFxyXG4gIC8vIElmIHRoZSAnYXV0aCcga2V5IGlzIHVzZWQgZm9yIGFueSByZXNvdXJjZSBvciBvcGVyYXRpb24sIHdlJ2xsIHVzZVxyXG4gIC8vICdhdXRob3JpemF0aW9uJyBpbnN0ZWFkIGZvciB0aGUgYXV0aCBtZXRob2RzXHJcbiAgdmFyIGF1dGhJc0luVXNlID0gc2NoZW1hLmFwaXMuc29tZShmdW5jdGlvbihyZXNvdXJjZU9iamVjdCl7XHJcbiAgICByZXR1cm4gcmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb24uYXBpcy5zb21lKGZ1bmN0aW9uKGFwaU9iamVjdCl7XHJcbiAgICAgIHZhciByZXNvdXJjZUFwaU5hbWUgPSBnZXRBcGlOYW1lKGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5yZXNvdXJjZVBhdGggfHwgYXBpT2JqZWN0LnBhdGgpO1xyXG4gICAgICBpZihyZXNvdXJjZUFwaU5hbWUgPT09ICdhdXRoJykgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBhcGlPYmplY3Qub3BlcmF0aW9ucy5zb21lKGZ1bmN0aW9uKG9wZXJhdGlvbil7XHJcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbi5uaWNrbmFtZSA9PT0gJ2F1dGgnO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGlmKGF1dGhJc0luVXNlKSBhdXRoTWV0aG9kTmFtZSA9ICdhdXRob3JpemF0aW9uJztcclxuXHJcbiAgYXBpW2F1dGhNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBhcGlBdXRoRGF0YSA9IHByb2Nlc3NBcGlBdXRoQXJncyhhcmd1bWVudHMpO1xyXG4gIH07XHJcblxyXG4gIHNjaGVtYS5hcGlzLmZvckVhY2goZnVuY3Rpb24ocmVzb3VyY2VPYmplY3Qpe1xyXG4gICAgdmFyIHJlc291cmNlTmFtZSxcclxuICAgICAgcmVzb3VyY2VBcGksXHJcbiAgICAgIHJlc291cmNlQXV0aERhdGE7XHJcblxyXG4gICAgaWYocmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb24ucmVzb3VyY2VQYXRoKXtcclxuICAgICAgcmVzb3VyY2VOYW1lID0gZ2V0QXBpTmFtZShyZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5yZXNvdXJjZVBhdGgpO1xyXG4gICAgICByZXNvdXJjZUFwaSA9IGFwaVtyZXNvdXJjZU5hbWVdID0ge307XHJcbiAgICAgIHJlc291cmNlQXBpW2F1dGhNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmVzb3VyY2VBdXRoRGF0YSA9IHByb2Nlc3NBcGlBdXRoQXJncyhhcmd1bWVudHMpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uLmFwaXMuZm9yRWFjaChmdW5jdGlvbihhcGlPYmplY3Qpe1xyXG4gICAgICB2YXIgYXBpT2JqZWN0TmFtZSA9IHJlc291cmNlTmFtZSxcclxuICAgICAgICBhcGlPYmplY3RBcGkgPSByZXNvdXJjZUFwaSxcclxuICAgICAgICBhcGlPYmplY3RBdXRoRGF0YTtcclxuXHJcbiAgICAgIGlmKCFhcGlPYmplY3ROYW1lKXtcclxuICAgICAgICBhcGlPYmplY3ROYW1lID0gZ2V0QXBpTmFtZShhcGlPYmplY3QucGF0aCk7XHJcbiAgICAgICAgYXBpT2JqZWN0QXBpID0gYXBpW2FwaU9iamVjdE5hbWVdID0ge307XHJcbiAgICAgICAgYXBpT2JqZWN0QXBpW2F1dGhNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBhcGlPYmplY3RBdXRoRGF0YSA9IHByb2Nlc3NBcGlBdXRoQXJncyhhcmd1bWVudHMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFwaU9iamVjdC5vcGVyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ob3BlcmF0aW9uKXtcclxuICAgICAgICB2YXIgb3BlcmF0aW9uSGFuZGxlck5hbWUgPSBvcGVyYXRpb24ubmlja25hbWUsXHJcbiAgICAgICAgICBvcGVyYXRpb25BdXRoRGF0YSxcclxuICAgICAgICAgIG9wZXJhdGlvbkhhbmRsZXI7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEF1dGhEYXRhKCl7XHJcbiAgICAgICAgICByZXR1cm4gb3BlcmF0aW9uQXV0aERhdGEgfHwgYXBpT2JqZWN0QXV0aERhdGEgfHwgcmVzb3VyY2VBdXRoRGF0YSB8fCBhcGlBdXRoRGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wZXJhdGlvbkhhbmRsZXIgPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyKG9wZXJhdGlvbiwgZ2V0QXV0aERhdGEsIHJlcXVlc3RIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgb3BlcmF0aW9uSGFuZGxlclthdXRoTWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgb3BlcmF0aW9uQXV0aERhdGEgPSBwcm9jZXNzQXBpQXV0aEFyZ3MoYXJndW1lbnRzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhcGlPYmplY3RBcGlbb3BlcmF0aW9uSGFuZGxlck5hbWVdID0gb3BlcmF0aW9uSGFuZGxlcjtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGFwaTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNsaWVudDtcclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NBcGlBdXRoQXJncyhhcmdzKXtcclxuICAvLyBmb3IgYmFzaWMgYXV0aCwgYWxsb3cgY2FsbHMgd2l0aCB0d28gYXJncyAodXNlcm5hbWUsIHBhc3N3b3JkKVxyXG4gIGlmKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgYXJnc1sxXSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJuYW1lOiBhcmdzWzBdLFxyXG4gICAgICBwYXNzd29yZDogYXJnc1sxXVxyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGFyZ3NbMF07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBIZWxwcGVyIG1ldGhvZCB3aGljaCBhc3NpbmdzIGJhY2sgcG9pbnRlciB0byBvYmplY3QgcGFyZW50cyBhbmQgcmV0dXJuc1xyXG4vLyB0aGUgYXBpIG9iamVjdHMgd2l0aGluIHRoZSBnaXZlbiBzY2hlbWEuXHJcbmZ1bmN0aW9uIHByb2Nlc3NTY2hlbWEoc2NoZW1hKXtcclxuICBzY2hlbWEuYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKHJlc291cmNlT2JqZWN0KXtcclxuICAgIHJlc291cmNlT2JqZWN0LnJlc291cmNlTGlzdGluZyA9IHNjaGVtYTtcclxuXHJcbiAgICByZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5hcGlzLmZvckVhY2goZnVuY3Rpb24oYXBpT2JqZWN0KXtcclxuICAgICAgYXBpT2JqZWN0LnJlc291cmNlT2JqZWN0ID0gcmVzb3VyY2VPYmplY3Q7XHJcbiAgICAgIGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbiA9IHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xyXG5cclxuICAgICAgYXBpT2JqZWN0Lm9wZXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihvcGVyYXRpb24pe1xyXG4gICAgICAgIG9wZXJhdGlvbi5hcGlPYmplY3QgPSBhcGlPYmplY3Q7XHJcblxyXG4gICAgICAgIG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24ocGFyYW1ldGVyKXtcclxuICAgICAgICAgIHBhcmFtZXRlci5vcGVyYXRpb24gPSBvcGVyYXRpb247XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBzY2hlbWE7XHJcbn1cclxuXHJcbi8vIFRha2VzIGEgcGF0aCBhbmQgcmV0dXJucyBhIEphdmFTY3JpcHQtZnJpZW5kbHkgdmFyaWFibGUgbmFtZVxyXG5mdW5jdGlvbiBnZXRBcGlOYW1lKG5hbWUpe1xyXG4gIC8vIFN0cmluZyBub24td29yZCBjaGFyYWN0ZXJzXHJcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvXFxXL2csICcvJyk7XHJcblxyXG4gIC8vIFR1cm4gcGF0aHMgd2hpY2ggbG9vay9saWtlL3RoaXMgdG8gbG9va0xpa2VUaGlzXHJcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvKFxcdylcXC8oXFx3KS9nLCBmdW5jdGlvbihtYXRjaCwgcDEsIHAyKXtcclxuICAgIHJldHVybiBwMSArIHAyLnRvVXBwZXJDYXNlKCk7XHJcbiAgfSk7XHJcblxyXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcLy9nLCAnJyk7XHJcblxyXG4gIHJldHVybiBuYW1lO1xyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGdldFJlcXVlc3RIZWFkZXJzID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0SGVhZGVycycpLFxyXG4gIGdldFJlcXVlc3RVcmwgPSByZXF1aXJlKCcuL2dldFJlcXVlc3RVcmwnKSxcclxuICBnZXRSZXF1ZXN0Qm9keSA9IHJlcXVpcmUoJy4vZ2V0UmVxdWVzdEJvZHknKSxcclxuICBhcHBseUF1dGhEYXRhID0gcmVxdWlyZSgnLi9hcHBseUF1dGhEYXRhJyksXHJcbiAgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxyXG4gIHN3YWdnZXJWYWxpZGF0ZSA9IHJlcXVpcmUoJ3N3YWdnZXItdmFsaWRhdGUnKTtcclxuXHJcbnZhciBhbGxFcnJvclR5cGVzID0ge307XHJcbk9iamVjdC5rZXlzKHN3YWdnZXJWYWxpZGF0ZS5lcnJvcnMpLmZvckVhY2goZnVuY3Rpb24oZXJyb3JOYW1lKXtcclxuICBhbGxFcnJvclR5cGVzW2Vycm9yTmFtZV0gPSBzd2FnZ2VyVmFsaWRhdGUuZXJyb3JzW2Vycm9yTmFtZV07XHJcbn0pO1xyXG5cclxuT2JqZWN0LmtleXMoZXJyb3JUeXBlcykuZm9yRWFjaChmdW5jdGlvbihlcnJvck5hbWUpe1xyXG4gIGFsbEVycm9yVHlwZXNbZXJyb3JOYW1lXSA9IGVycm9yVHlwZXNbZXJyb3JOYW1lXTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPcGVyYXRpb25IYW5kbGVyKG9wZXJhdGlvbiwgZ2V0QXV0aERhdGEsIHJlcXVlc3RIYW5kbGVyKXtcclxuICBmdW5jdGlvbiBSZXF1ZXN0KGRhdGEsIG9wdGlvbnMpe1xyXG4gICAgdGhpcy5tZXRob2QgPSBvcGVyYXRpb24ubWV0aG9kO1xyXG4gICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XHJcbiAgICB0aGlzLmVycm9yVHlwZXMgPSBhbGxFcnJvclR5cGVzO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICB2YXIgb3BlcmF0aW9uSGFuZGxlciA9IGZ1bmN0aW9uKGRhdGEsIG9wdGlvbnMpe1xyXG4gICAgdmFyIGVycm9yLFxyXG4gICAgICByZXF1ZXN0O1xyXG4gICAgXHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIFxyXG4gICAgaWYoZGF0YSA9PSBudWxsKSBkYXRhID0ge307XHJcblxyXG4gICAgLy8gaWYgYSBmdW5jdGlvbiBpcyBwYXNzZWQgaW4gYXMgb3B0aW9ucywgYXNzdW1lIGl0J3MgYSBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgLy8gZm9yIGNvbnZlbmllbmNlXHJcbiAgICBpZih0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgIG9wdGlvbnMuY2FsbGJhY2sgPSBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeXtcclxuICAgICAgZGF0YSA9IHNpbmdsZVBhcmFtQ29udmVuaWVuY2VQcm9jZXNzb3Iob3BlcmF0aW9uLCBkYXRhKTtcclxuICAgICAgZGF0YSA9IHJlbW92ZVVua25vd25QYXJhbXMob3BlcmF0aW9uLCBkYXRhKTtcclxuXHJcbiAgICAgIGVycm9yID0gc3dhZ2dlclZhbGlkYXRlLm9wZXJhdGlvbihkYXRhLCBvcGVyYXRpb24sIG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ubW9kZWxzKTtcclxuICAgICAgXHJcbiAgICAgIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChkYXRhLCBvcHRpb25zKTtcclxuICAgICAgXHJcbiAgICAgIC8vIElmIHdlIGtub3cgdGhlcmUgaXMgYW4gZXJyb3IsIGRvbid0IGF0dGVtcHQgdG8gY3JhZnQgdGhlIHJlcXVlc3QgcGFyYW1zLlxyXG4gICAgICAvLyBUaGUgcmVxdWVzdCBwYXJhbSBnZW5lcmF0b3JzIGFzc3VtZSB2YWxpZCBkYXRhIHRvIHdvcmsgcHJvcGVybHkuXHJcbiAgICAgIGlmKCFlcnJvcil7XHJcbiAgICAgICAgcmVxdWVzdC51cmwgPSBnZXRSZXF1ZXN0VXJsKG9wZXJhdGlvbiwgZGF0YSk7XHJcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0gZ2V0UmVxdWVzdEhlYWRlcnMob3BlcmF0aW9uLCBkYXRhLCBvcHRpb25zKTtcclxuICAgICAgICByZXF1ZXN0LmJvZHkgPSBnZXRSZXF1ZXN0Qm9keShvcGVyYXRpb24sIGRhdGEsIHJlcXVlc3QuaGVhZGVycyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXBwbHlBdXRoRGF0YShvcGVyYXRpb24sIGdldEF1dGhEYXRhKCksIHJlcXVlc3QpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGUpe1xyXG4gICAgICBlcnJvciA9IGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihlcnJvciwgcmVxdWVzdCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gVXNlZnVsIGZvciBpbnN0YW5jZW9mIGNoZWNrc1xyXG4gIG9wZXJhdGlvbkhhbmRsZXIuUmVxdWVzdCA9IFJlcXVlc3Q7XHJcbiAgb3BlcmF0aW9uSGFuZGxlci5lcnJvclR5cGVzID0gYWxsRXJyb3JUeXBlcztcclxuXHJcbiAgLy8gVXNlZnVsIGZvciByZWZsZWN0aW9uXHJcbiAgb3BlcmF0aW9uSGFuZGxlci5vcGVyYXRpb24gPSBvcGVyYXRpb247XHJcbiAgXHJcbiAgLy8gQ2FuIGJlIHVzZWQgdG8gcHJlZW1wdGl2ZWx5IHZhbGlkYXRlIHdpdGhvdXQgYWN0aW9uXHJcbiAgb3BlcmF0aW9uSGFuZGxlci52YWxpZGF0ZSA9IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgcmV0dXJuIHN3YWdnZXJWYWxpZGF0ZS5vcGVyYXRpb24oZGF0YSwgb3BlcmF0aW9uLCBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLm1vZGVscyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIG9wZXJhdGlvbkhhbmRsZXI7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyO1xyXG5cclxuZnVuY3Rpb24gbm9vcCgpe31cclxuY3JlYXRlT3BlcmF0aW9uSGFuZGxlci5sb2dnZXIgPSB7XHJcbiAgZGVidWc6IG5vb3AsXHJcbiAgaW5mbzogbm9vcCxcclxuICB3YXJuOiBub29wLFxyXG4gIGVycm9yOiBub29wXHJcbn07XHJcblxyXG4vLyBFbmFibGVzIGRhdGEgdG8gYmUgcGFzc2VkIGRpcmVjdGx5IGZvciBzaW5nbGUgcGFyYW0gb3BlcmF0aW9ucy5cclxuZnVuY3Rpb24gc2luZ2xlUGFyYW1Db252ZW5pZW5jZVByb2Nlc3NvcihvcGVyYXRpb24sIGRhdGEpe1xyXG4gIC8vIElmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIHBhcmFtcywgYmFpbFxyXG4gIHZhciByZXF1aXJlZFBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XHJcbiAgICByZXR1cm4gcGFyYW0ucmVxdWlyZWQ7XHJcbiAgfSk7XHJcblxyXG4gIC8vIElmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIHJlcXVpcmVkIHBhcmFtcywgb3IgaWYgdGhlcmUgaXMgbm8gcmVxdWlyZWQgcGFyYW1cclxuICAvLyBhbmQgdGhlcmUgYXJlIG1hbnkgb3B0aW9uYWwgcGFyYW1zLCBiYWlsXHJcbiAgaWYocmVxdWlyZWRQYXJhbXMubGVuZ3RoID4gMSkgcmV0dXJuIGRhdGE7XHJcblxyXG4gIGlmKHJlcXVpcmVkUGFyYW1zLmxlbmd0aCAhPT0gMSAmJiBvcGVyYXRpb24ucGFyYW1ldGVycy5sZW5ndGggIT09IDEpIHJldHVybiBkYXRhO1xyXG5cclxuICB2YXIgcGFyYW0gPSByZXF1aXJlZFBhcmFtc1swXSB8fCBvcGVyYXRpb24ucGFyYW1ldGVyc1swXTtcclxuICBcclxuICAvLyBJZiB0aGUgcGFyYW0gaXMgYWxyZWFkeSBkZWZpbmVkIGV4cGxpY2l0bHksIGJhaWxcclxuICBpZih0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgKHBhcmFtLm5hbWUgaW4gZGF0YSkpIHJldHVybiBkYXRhO1xyXG5cclxuICB2YXIgbW9kZWxzID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5tb2RlbHM7XHJcblxyXG4gIC8vIElmIHRoZSBkYXRhIHBhc3NlZCBpcyBpcyBub3QgdmFsaWQgZm9yIHRoZSBwYXJhbSBkYXRhIHR5cGUsIGJhaWxcclxuICB2YXIgZXJyb3IgPSBzd2FnZ2VyVmFsaWRhdGUuZGF0YVR5cGUoZGF0YSwgcGFyYW0sIG1vZGVscyk7IFxyXG5cclxuICAvLyBJZiB0aGUgZGF0YSBwYXNzZWQgaXMgYSB2YWxpZCBwYXJhbSBkYXRhIHR5cGUsIGJhaWxcclxuICBpZighZXJyb3Ipe1xyXG4gICAgdmFyIHdyYXBwZXIgPSB7fTtcclxuICAgIHdyYXBwZXJbcGFyYW0ubmFtZV0gPSBkYXRhO1xyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG4gXHJcblxyXG5mdW5jdGlvbiByZW1vdmVVbmtub3duUGFyYW1zKG9wZXJhdGlvbiwgZGF0YSl7XHJcbiAgaWYoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnKSByZXR1cm4gZGF0YTtcclxuXHJcbiAgdmFyIHBhcmFtTmFtZXMgPSB7fTtcclxuICBvcGVyYXRpb24ucGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgIHBhcmFtTmFtZXNbcGFyYW0ubmFtZV0gPSB0cnVlO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgdW5rbm93bktleXMgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoZnVuY3Rpb24oa2V5KXtcclxuICAgIHJldHVybiAhKGtleSBpbiBwYXJhbU5hbWVzKTtcclxuICB9KTtcclxuXHJcbiAgY3JlYXRlT3BlcmF0aW9uSGFuZGxlci5sb2dnZXIud2FybignVW5rbm93biBwYXJhbWV0ZXJzIHJlbW92ZWQgZnJvbSByZXF1ZXN0OicsIFxyXG4gICAgdW5rbm93bktleXMuam9pbignLCAnKSk7XHJcblxyXG4gIHVua25vd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcclxuICAgIGRlbGV0ZSBkYXRhW2tleV07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gSW52YWxpZFJlcXVlc3RFcnJvcihtZXNzYWdlKXtcclxuICB0aGlzLm5hbWUgPSAnSW52YWxpZFJlcXVlc3RFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnSW52YWxpZCByZXF1ZXN0JztcclxufVxyXG5JbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcclxuSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJbnZhbGlkUmVxdWVzdEVycm9yO1xyXG5cclxuZXhwb3J0cy5JbnZhbGlkUmVxdWVzdEVycm9yID0gSW52YWxpZFJlcXVlc3RFcnJvcjtcclxuXHJcblxyXG5mdW5jdGlvbiBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lLCBhdXRoKXtcclxuICB0aGlzLm5hbWUgPSAnTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ05vIGRhdGEgZm91bmQgZm9yIGF1dGhvcml6YXRpb246ICcgKyBhdXRoTmFtZTtcclxuICB0aGlzLmF1dGhvcml6YXRpb24gPSBhdXRoO1xyXG59XHJcbk1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XHJcbk1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcjtcclxuXHJcbmV4cG9ydHMuTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvciA9IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3I7XHJcblxyXG5cclxuZnVuY3Rpb24gTWlzc2luZ1BhdGhQYXJhbXNFcnJvcihwYXRoUGFyYW1zKXtcclxuICB0aGlzLm5hbWUgPSAnTWlzc2luZ1BhdGhQYXJhbXNFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ01pc3NpbmcgdGhlIGZvbGxvd2luZyByZXF1aXJlZCBwYXRoIHBhcmFtZXRlcnM6ICcgKyBwYXRoUGFyYW1zLmpvaW4oJycpO1xyXG59XHJcbk1pc3NpbmdQYXRoUGFyYW1zRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XHJcbk1pc3NpbmdQYXRoUGFyYW1zRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ1BhdGhQYXJhbXNFcnJvcjtcclxuXHJcbmV4cG9ydHMuTWlzc2luZ1BhdGhQYXJhbXNFcnJvciA9IE1pc3NpbmdQYXRoUGFyYW1zRXJyb3I7XHJcblxyXG5cclxuZnVuY3Rpb24gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcihjb250ZW50VHlwZSwgb3BlcmF0aW9uKXtcclxuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xyXG4gIHZhciBjb25zdW1lcyA9IG9wZXJhdGlvbi5jb25zdW1lcyB8fCBhcGlEZWNsYXJhdGlvbi5jb25zdW1lcyB8fCBbXTtcclxuXHJcbiAgdGhpcy5uYW1lID0gJ0NvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdPcGVyYXRpb24gWycgKyBvcGVyYXRpb24ubmlja25hbWUgKyAnXSBkb2VzIG5vdCBhY2NlcHQgJyArIGNvbnRlbnRUeXBlICsgJy4gSXQgc3VwcG9ydHM6ICcgKyBcclxuICAgIGNvbnN1bWVzLmpvaW4oJywgJyk7XHJcbn1cclxuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcclxuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yO1xyXG5cclxuZXhwb3J0cy5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yID0gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcjtcclxuXHJcblxyXG5mdW5jdGlvbiBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IoYWNjZXB0cywgb3BlcmF0aW9uKXtcclxuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xyXG4gIHZhciBwcm9kdWNlcyA9IG9wZXJhdGlvbi5wcm9kdWNlcyB8fCBhcGlEZWNsYXJhdGlvbi5wcm9kdWNlcyB8fCBbXTtcclxuXHJcbiAgdGhpcy5uYW1lID0gJ0FjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ09wZXJhdGlvbiBbJyArIG9wZXJhdGlvbi5uaWNrbmFtZSArICddIGRvZXMgbm90IHByb2R1Y2UgJyArIGFjY2VwdHMgKyAnLiBJdCBzdXBwb3J0czogJyArIFxyXG4gICAgcHJvZHVjZXMuam9pbignLCAnKTtcclxufVxyXG5BY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XHJcbkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3I7XHJcblxyXG5leHBvcnRzLkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvciA9IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcjtcclxuXHJcblxyXG5mdW5jdGlvbiBPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3Iob3BlcmF0aW9uLCBlcnJvcnMpe1xyXG4gIHRoaXMubmFtZSA9ICdPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9IG9wZXJhdGlvbi5uaWNrbmFtZSArICcgZmFpbGVkIHZhbGlkYXRpb246IFxcblxcdCcgKyBlcnJvcnMuam9pbignXFxuXFx0Jyk7XHJcbn1cclxuT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xyXG5PcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yO1xyXG5cclxuZXhwb3J0cy5PcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IgPSBPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3I7XHJcblxyXG5cclxuZnVuY3Rpb24gUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yKHBhcmFtZXRlciwgZXJyb3JzKXtcclxuICB0aGlzLm5hbWUgPSAnUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSBwYXJhbWV0ZXIubmFtZSArICcgZmFpbGVkIHZhbGlkYXRpb246IFxcblxcdCcgKyBlcnJvcnMuam9pbignXFxuXFx0Jyk7XHJcbn1cclxuUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xyXG5QYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yO1xyXG5cclxuZXhwb3J0cy5QYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IgPSBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3I7XHJcblxyXG5cclxuZnVuY3Rpb24gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IobWVzc2FnZSl7XHJcbiAgdGhpcy5uYW1lID0gJ0RhdGFUeXBlVmFsaWRhdGlvbkVycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdJbnZhbGlkIGRhdGEgdHlwZSc7XHJcbn1cclxuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xyXG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjtcclxuXHJcbmV4cG9ydHMuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFJlcXVlc3RCb2R5KG9wZXJhdGlvbiwgZGF0YSwgaGVhZGVycyl7XHJcbiAgdmFyIGJvZHkgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2JvZHknICYmIGRhdGFbcGFyYW0ubmFtZV0gIT0gbnVsbDtcclxuICB9KS5tYXAoZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgcmV0dXJuIGRhdGFbcGFyYW0ubmFtZV07XHJcbiAgfSlbMF07XHJcblxyXG4gIGlmKCEoaGVhZGVycyAmJiAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSByZXR1cm4gYm9keTtcclxuXHJcbiAgdmFyIGNvbnRlbnRUeXBlID0gaGVhZGVyc1snQ29udGVudC1UeXBlJ107XHJcbiAgdmFyIHByZXNlbnRGb3JtUGFyYW1zID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdmb3JtJyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9IG51bGw7XHJcbiAgfSk7XHJcblxyXG4gIGlmKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpICE9PSAtMSl7XHJcbiAgICBib2R5ID0gcHJlc2VudEZvcm1QYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgICAgdmFyIGtleSA9IHBhcmFtLm5hbWUsXHJcbiAgICAgICAgdmFsdWUgPSBkYXRhW2tleV07XHJcbiAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICB9KS5qb2luKCcmJyk7XHJcbiAgfSBlbHNlIGlmKGNvbnRlbnRUeXBlLmluZGV4T2YoJ211bHRpcGFydC9mb3JtLWRhdGEnKSAhPT0gLTEpe1xyXG4gICAgdmFyIHJhbmRvbW5lc3MgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMik7XHJcbiAgICB2YXIgYm91bmRhcnkgPSAnU3dhZ2dlckJvdW5kYXJ5JyArIHJhbmRvbW5lc3M7XHJcbiAgICBcclxuICAgIGJvZHkgPSBwcmVzZW50Rm9ybVBhcmFtcy5tYXAoZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgICB2YXIga2V5ID0gcGFyYW0ubmFtZSxcclxuICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XSxcclxuICAgICAgICByZXN1bHQgPSAnLS0nICsgYm91bmRhcnk7XHJcblxyXG4gICAgICByZXN1bHQgKz0gJ1xcbkNvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIicgKyBrZXkgKyAnXCInO1xyXG4gICAgICBcclxuICAgICAgaWYodmFsdWUuY29udGVudFR5cGUpe1xyXG4gICAgICAgIGlmKHZhbHVlLm5hbWUpe1xyXG4gICAgICAgICAgcmVzdWx0ICs9ICc7IGZpbGVuYW1lPVwiJyArIHZhbHVlLm5hbWUgKyAnXCInO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ICs9ICdcXG5Db250ZW50LVR5cGU6ICcgKyB2YWx1ZS5jb250ZW50VHlwZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodmFsdWUuY29udGVudFRyYW5zZmVyRW5jb2Rpbmcpe1xyXG4gICAgICAgIHJlc3VsdCArPSAnXFxuQ29udGVudC1UcmFuc2Zlci1FbmNvZGluZzogJyArIHZhbHVlLmNvbnRlbnRUcmFuc2ZlckVuY29kaW5nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih2YWx1ZS5ib2R5KXtcclxuICAgICAgICByZXN1bHQgKz0gJ1xcblxcbicgKyB2YWx1ZS5ib2R5O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCArPSAnXFxuXFxuJyArIHZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSkuam9pbignXFxuJyk7XHJcblxyXG4gICAgYm9keSArPSAnXFxuLS0nICsgYm91bmRhcnkgKyAnLS1cXG4nO1xyXG4gICAgXHJcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGNvbnRlbnRUeXBlLnJlcGxhY2UoXHJcbiAgICAgICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgXHJcbiAgICAgICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0nICsgYm91bmRhcnlcclxuICAgICk7XHJcbiAgfSBlbHNlIGlmKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSAhPT0gLTEpe1xyXG4gICAgaWYodHlwZW9mIGJvZHkgIT09ICdzdHJpbmcnKXtcclxuICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGJvZHk7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcclxuICBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yID0gZXJyb3JUeXBlcy5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yLFxyXG4gIEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvciA9IGVycm9yVHlwZXMuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yO1xyXG5cclxudmFyIERFRkFVTFRfQUNDRVBUID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFJlcXVlc3RIZWFkZXJzKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyl7XHJcbiAgZGF0YSA9IGRhdGEgfHwge307XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gIHZhciBoZWFkZXJzID0ge307XHJcblxyXG4gIG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgaWYocGFyYW0ucGFyYW1UeXBlID09PSAnaGVhZGVyJyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9IG51bGwpe1xyXG4gICAgICBoZWFkZXJzW3BhcmFtLm5hbWVdID0gZGF0YVtwYXJhbS5uYW1lXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gUGFzc2VkIGhlYWRlcnNcclxuICBpZihvcHRpb25zLmhlYWRlcnMpe1xyXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIGhlYWRlcnNba2V5XSA9IG9wdGlvbnMuaGVhZGVyc1trZXldO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBDb250ZW50LVR5cGVcclxuICB2YXIgY29udGVudFR5cGUgPSBvcHRpb25zLmNvbnRlbnRUeXBlIHx8IGdldENvbnRlbnRUeXBlKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgaWYoY29udGVudFR5cGUpIHtcclxuICAgIGlmKGhhc0FjY2VwdChvcGVyYXRpb24sIGNvbnRlbnRUeXBlKSl7XHJcbiAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gY29udGVudFR5cGU7ICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yKGNvbnRlbnRUeXBlLCBvcGVyYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWNjZXB0XHJcbiAgdmFyIGFjY2VwdCA9IG9wdGlvbnMuYWNjZXB0IHx8IERFRkFVTFRfQUNDRVBUO1xyXG4gIGlmKGFjY2VwdCl7XHJcbiAgICBpZihoYXNDb250ZW50VHlwZShvcGVyYXRpb24sIGFjY2VwdCkpe1xyXG4gICAgICBoZWFkZXJzLkFjY2VwdCA9IGFjY2VwdDsgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcihhY2NlcHQsIG9wZXJhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBoZWFkZXJzO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0Q29udGVudFR5cGUob3BlcmF0aW9uLCBkYXRhKXtcclxuICB2YXIgaGFzQm9keSA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLnNvbWUoZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2JvZHknICYmIChwYXJhbS5uYW1lIGluIGRhdGEpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoaGFzQm9keSl7XHJcbiAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgaGFzRm9ybVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLnNvbWUoZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnZm9ybScgJiYgKHBhcmFtLm5hbWUgaW4gZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgaGFzRmlsZVBhcmFtID0gaGFzRm9ybVBhcmFtcyAmJiBcclxuICAgICAgb3BlcmF0aW9uLnBhcmFtZXRlcnMuc29tZShmdW5jdGlvbihwYXJhbSl7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtLnR5cGUgPT09ICdGaWxlJyAmJiAocGFyYW0ubmFtZSBpbiBkYXRhKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYoaGFzRmlsZVBhcmFtKSByZXR1cm4gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xyXG4gICAgZWxzZSBpZihoYXNGb3JtUGFyYW1zKSByZXR1cm4gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBY2NlcHRzIGlzIGFuIG9wdGlvbmFsIGZpZWxkIGluIHRoZSBzcGVjLCBidXQgbXVzdCBiZSBlbmZvcmNlZCB3aGVuIHByZXNlbnRcclxuZnVuY3Rpb24gaGFzQWNjZXB0KG9wZXJhdGlvbiwgY29udGVudFR5cGUpe1xyXG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb247XHJcbiAgdmFyIGFjY2VwdHMgPSBvcGVyYXRpb24uY29uc3VtZXMgfHwgYXBpRGVjbGFyYXRpb24uY29uc3VtZXM7XHJcblxyXG4gIGlmKGFjY2VwdHMgJiYgYWNjZXB0cy5sZW5ndGgpe1xyXG4gICAgcmV0dXJuIGFjY2VwdHMuaW5kZXhPZihjb250ZW50VHlwZSkgIT09IC0xO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuZXhwb3J0cy5oYXNBY2NlcHQgPSBoYXNBY2NlcHQ7XHJcblxyXG4vLyBDb250ZW50LVR5cGUgKHByb2R1Y2VzKSBpcyBhbiBvcHRpb25hbCBmaWVsZCBpbiB0aGUgc3BlYywgYnV0IG11c3QgYmUgZW5mb3JjZWQgd2hlbiBwcmVzZW50XHJcbmZ1bmN0aW9uIGhhc0NvbnRlbnRUeXBlKG9wZXJhdGlvbiwgY29udGVudFR5cGUpe1xyXG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24sXHJcbiAgICBjb250ZW50VHlwZXMgPSBvcGVyYXRpb24ucHJvZHVjZXMgfHwgYXBpRGVjbGFyYXRpb24ucHJvZHVjZXM7XHJcblxyXG4gIGlmKGNvbnRlbnRUeXBlcyAmJiBjb250ZW50VHlwZXMubGVuZ3RoKXtcclxuICAgIHJldHVybiBjb250ZW50VHlwZXMuaW5kZXhPZihjb250ZW50VHlwZSkgIT09IC0xO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuZXhwb3J0cy5oYXNDb250ZW50VHlwZSA9IGhhc0NvbnRlbnRUeXBlOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXHJcbiAgTWlzc2luZ1BhdGhQYXJhbXNFcnJvciA9IGVycm9yVHlwZXMuTWlzc2luZ1BhdGhQYXJhbXNFcnJvcjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UmVxdWVzdFVybChvcGVyYXRpb24sIGRhdGEpe1xyXG4gIHZhciB1cmwgPSBnZXRVcmxUZW1wbGF0ZShvcGVyYXRpb24pO1xyXG5cclxuICB1cmwgPSBhcHBseVBhdGhQYXJhbXModXJsLCBvcGVyYXRpb24sIGRhdGEpO1xyXG5cclxuICBpZighZGF0YSkgcmV0dXJuIHVybDtcclxuXHJcbiAgdmFyIHF1ZXJ5UGFyYW1zID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdxdWVyeScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkO1xyXG4gIH0pLm1hcChmdW5jdGlvbihwYXJhbSl7XHJcbiAgICB2YXIga2V5ID0gcGFyYW0ubmFtZTtcclxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xyXG4gIH0pLmpvaW4oJyYnKTtcclxuXHJcbiAgaWYocXVlcnlQYXJhbXMpIHVybCArPSAnPycgKyBxdWVyeVBhcmFtcztcclxuXHJcbiAgcmV0dXJuIHVybDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5UGF0aFBhcmFtcyh1cmwsIG9wZXJhdGlvbiwgZGF0YSl7XHJcbiAgdmFyIHBhdGhQYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ3BhdGgnO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgbWlzc2luZ1BhcmFtcyA9IHBhdGhQYXJhbXMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgIHJldHVybiBkYXRhW3BhcmFtLm5hbWVdID09PSB1bmRlZmluZWQ7XHJcbiAgfSk7XHJcblxyXG4gIGlmKG1pc3NpbmdQYXJhbXMubGVuZ3RoKXtcclxuICAgIHRocm93IG5ldyBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yKG1pc3NpbmdQYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgICAgcmV0dXJuIHBhcmFtLm5hbWU7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBwYXRoUGFyYW1zLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgdmFyIGtleSA9IHBhcmFtLm5hbWU7XHJcbiAgICBcclxuICAgIHZhciBleHAgPSBuZXcgUmVnRXhwKCd7JyArIGtleSArICdbXn1dKn0nLCAnZ2knKTtcclxuXHJcbiAgICB2YXIgdmFsdWUgPSBkYXRhW2tleV0udG9TdHJpbmcoKTtcclxuICAgIGRlbGV0ZSBkYXRhW2tleV07XHJcbiAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcvJykubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignLycpO1xyXG5cclxuICAgIHVybCA9IHVybC5yZXBsYWNlKGV4cCwgdmFsdWUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcmxUZW1wbGF0ZShvcGVyYXRpb24pe1xyXG4gIHZhciBhcGlPYmplY3QgPSBvcGVyYXRpb24uYXBpT2JqZWN0OyBcclxuXHJcbiAgdmFyIGJhc2VQYXRoID0gYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLmJhc2VQYXRoO1xyXG4gIHZhciBwYXRoID0gYXBpT2JqZWN0LnBhdGgucmVwbGFjZSgne2Zvcm1hdH0nLCAnanNvbicpO1xyXG4gIFxyXG4gIHJldHVybiBiYXNlUGF0aCArIHBhdGg7XHJcbn1cclxuIl19
(9)
});
