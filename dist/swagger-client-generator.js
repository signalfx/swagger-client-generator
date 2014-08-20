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
    if (candidate[propertyName] !== undefined) return;

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
  
  var presentParams = operation.parameters.filter(function(param){
    if (param.name in candidate) return true;
    
    if (param.required) {
      var error = new MissingValueError();
      errors.push(new ValidationError(param.name, param, error));
    }

    return false;
  });

  presentParams.forEach(function(param){
    var error = validate.dataType(candidate[param.name], param, models);
    if(error){
      errors.push(new ValidationError(param.name, param, error));
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
  
  if((dataType.minimum !== undefined) && candidate < parseInt(dataType.minimum, 10)){
    return new errorTypes.NumberTooSmallError(candidate, dataType.minimum);
  }
  
  if((dataType.maximum !== undefined) && candidate > parseInt(dataType.maximum, 10)){
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
  var error;

  try {
    error = swaggerValidate.dataType(data, param, models); 
  } catch(e){
    return data;
  }
  
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9ib2lsZXJwbGF0ZS1ndWxwL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvZXJyb3JUeXBlcy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy9pbmRleC5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZUFycmF5LmpzIiwiL1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL3ZhbGlkYXRlRGF0YVR5cGUuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvdmFsaWRhdGVNb2RlbC5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZU9wZXJhdGlvbi5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZVByaW1pdGl2ZVR5cGVzLmpzIiwiL1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2FwcGx5QXV0aERhdGEuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvY3JlYXRlQ2xpZW50LmpzIiwiL1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2NyZWF0ZU9wZXJhdGlvbkhhbmRsZXIuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvZXJyb3JUeXBlcy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0Qm9keS5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0SGVhZGVycy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0VXJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IobWVzc2FnZSl7XG4gIHRoaXMubmFtZSA9ICdEYXRhVHlwZVZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0ludmFsaWQgZGF0YSB0eXBlJztcbn1cbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yO1xuZXhwb3J0cy5EYXRhVHlwZVZhbGlkYXRpb25FcnJvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yO1xuXG5mdW5jdGlvbiBOb3RBbkludGVnZXJFcnJvcih2YWx1ZSl7XG4gIHRoaXMubmFtZSA9ICdOb3RBbkludGVnZXJFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYW4gaW50ZWdlcic7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk5vdEFuSW50ZWdlckVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk5vdEFuSW50ZWdlckVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFuSW50ZWdlckVycm9yO1xuZXhwb3J0cy5Ob3RBbkludGVnZXJFcnJvciA9IE5vdEFuSW50ZWdlckVycm9yO1xuXG5mdW5jdGlvbiBOb3RBTnVtYmVyRXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xuICB0aGlzLm5hbWUgPSAnTm90QU51bWJlckVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhIG51bWJlcic7XG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk5vdEFOdW1iZXJFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5Ob3RBTnVtYmVyRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QU51bWJlckVycm9yO1xuZXhwb3J0cy5Ob3RBTnVtYmVyRXJyb3IgPSBOb3RBTnVtYmVyRXJyb3I7XG5cbmZ1bmN0aW9uIE51bWJlclRvb0xhcmdlRXJyb3IodmFsdWUsIG1heCl7XG4gIHRoaXMubmFtZSA9ICdOdW1iZXJUb29MYXJnZUVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIGFib3ZlIHRoZSBtYXhpbXVtIG9mICcgKyBtYXgudG9TdHJpbmcoKTtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTnVtYmVyVG9vTGFyZ2VFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5OdW1iZXJUb29MYXJnZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlclRvb0xhcmdlRXJyb3I7XG5leHBvcnRzLk51bWJlclRvb0xhcmdlRXJyb3IgPSBOdW1iZXJUb29MYXJnZUVycm9yO1xuXG5mdW5jdGlvbiBOdW1iZXJUb29TbWFsbEVycm9yKHZhbHVlLCBtYXgpe1xuICB0aGlzLm5hbWUgPSAnTnVtYmVyVG9vU21hbGxFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBhYm92ZSB0aGUgbWF4aW11bSBvZiAnICsgbWF4LnRvU3RyaW5nKCk7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk51bWJlclRvb1NtYWxsRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTnVtYmVyVG9vU21hbGxFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJUb29TbWFsbEVycm9yO1xuZXhwb3J0cy5OdW1iZXJUb29TbWFsbEVycm9yID0gTnVtYmVyVG9vU21hbGxFcnJvcjtcblxuZnVuY3Rpb24gTm90QUJvb2xlYW5FcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XG4gIHRoaXMubmFtZSA9ICdOb3RBQm9vbGVhbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhIGJvb2xlYW4nO1xuICBpZihhY3R1YWxUeXBlKSB0aGlzLm1lc3NhZ2UgKz0gJyAoZ290IGEgJyArIGFjdHVhbFR5cGUgKyAnIGluc3RlYWQpJztcblxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5Ob3RBQm9vbGVhbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk5vdEFCb29sZWFuRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QUJvb2xlYW5FcnJvcjtcbmV4cG9ydHMuTm90QUJvb2xlYW5FcnJvciA9IE5vdEFCb29sZWFuRXJyb3I7XG5cbmZ1bmN0aW9uIE5vdEFuQXJyYXlFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XG4gIHRoaXMubmFtZSA9ICdOb3RBbkFycmF5RXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGFuIGFycmF5JztcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XG5cbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTm90QW5BcnJheUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk5vdEFuQXJyYXlFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RBbkFycmF5RXJyb3I7XG5leHBvcnRzLk5vdEFuQXJyYXlFcnJvciA9IE5vdEFuQXJyYXlFcnJvcjtcblxuZnVuY3Rpb24gRHVwbGljYXRlSW5TZXRFcnJvcihhcnIsIGR1cGVzKXtcbiAgdGhpcy5uYW1lID0gJ0R1cGxpY2F0ZUluU2V0RXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnRHVwbGljYXRlcyAoXCInICsgZHVwZXMuam9pbignXCIsIFwiJykgKyAnXCIpIGZvdW5kIGluIHNldDogW1wiJyArIGFyci5qb2luKCdcIiwgXCInKSArICdcIic7XG4gIHRoaXMuZHVwZXMgPSBkdXBlcztcbiAgdGhpcy52YWx1ZSA9IGFycjtcbn1cbkR1cGxpY2F0ZUluU2V0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuRHVwbGljYXRlSW5TZXRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEdXBsaWNhdGVJblNldEVycm9yO1xuZXhwb3J0cy5EdXBsaWNhdGVJblNldEVycm9yID0gRHVwbGljYXRlSW5TZXRFcnJvcjtcblxuZnVuY3Rpb24gTm90Vm9pZEVycm9yKHZhbHVlLCBhY3R1YWxUeXBlKXtcbiAgdGhpcy5uYW1lID0gJ05vdFZvaWRFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgbnVsbCBvciB1bmRlZmluZWQnO1xuICBpZihhY3R1YWxUeXBlKSB0aGlzLm1lc3NhZ2UgKz0gJyAoZ290IGEgJyArIGFjdHVhbFR5cGUgKyAnIGluc3RlYWQpJztcblxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5Ob3RWb2lkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTm90Vm9pZEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdFZvaWRFcnJvcjtcbmV4cG9ydHMuTm90Vm9pZEVycm9yID0gTm90Vm9pZEVycm9yO1xuXG5mdW5jdGlvbiBOb3RBU3RyaW5nRXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xuICB0aGlzLm5hbWUgPSAnTm90QVN0cmluZ0Vycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhIHN0cmluZyc7XG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk5vdEFTdHJpbmdFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5Ob3RBU3RyaW5nRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QVN0cmluZ0Vycm9yO1xuZXhwb3J0cy5Ob3RBU3RyaW5nRXJyb3IgPSBOb3RBU3RyaW5nRXJyb3I7XG5cbmZ1bmN0aW9uIFN0cmluZ05vdEluRW51bUVycm9yKHZhbHVlLCBhY2NlcHRhYmxlVmFsdWVzKXtcbiAgdGhpcy5uYW1lID0gJ1N0cmluZ05vdEluRW51bUVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhbiBhY2NlcHRhYmxlIHZhbHVlOiBcIicgKyBhY2NlcHRhYmxlVmFsdWVzLmpvaW4oJ1wiLCBcIicpICsgJ1wiJztcbiBcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuU3RyaW5nTm90SW5FbnVtRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuU3RyaW5nTm90SW5FbnVtRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RyaW5nTm90SW5FbnVtRXJyb3I7XG5leHBvcnRzLlN0cmluZ05vdEluRW51bUVycm9yID0gU3RyaW5nTm90SW5FbnVtRXJyb3I7XG5cblxuZnVuY3Rpb24gRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IoZXJyb3JzKXtcbiAgdGhpcy5uYW1lID0gJ0Vycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ0Vycm9ycyBpbiBhcnJheSBlbGVtZW50czpcXG5cXHQnICsgZXJyb3JzLmpvaW4oJyxcXG5cXHQnKTtcbiAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG59XG5FcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5FcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcjtcbmV4cG9ydHMuRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IgPSBFcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcjtcblxuZnVuY3Rpb24gTWlzc2luZ1ZhbHVlRXJyb3IoKXtcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdWYWx1ZUVycm9yJztcbiAgXG4gIHRoaXMubWVzc2FnZSA9ICdUaGlzIHZhbHVlIGlzIHJlcXVpcmVkIGJ1dCBtaXNzaW5nJztcbn1cbk1pc3NpbmdWYWx1ZUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk1pc3NpbmdWYWx1ZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdWYWx1ZUVycm9yO1xuZXhwb3J0cy5NaXNzaW5nVmFsdWVFcnJvciA9IE1pc3NpbmdWYWx1ZUVycm9yO1xuXG5mdW5jdGlvbiBWYWxpZGF0aW9uRXJyb3Ioc3BlY05hbWUsIHNwZWMsIGVycm9yKXtcbiAgdGhpcy5uYW1lID0gJ1ZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMuc3BlY05hbWUgPSBzcGVjTmFtZTtcbiAgdGhpcy5zcGVjID0gc3BlYztcbiAgdGhpcy5lcnJvciA9IGVycm9yO1xuXG4gIHRoaXMubWVzc2FnZSA9IHNwZWNOYW1lICsgJyBpcyBpbnZhbGlkOiAnICsgZXJyb3IubWVzc2FnZTtcbn1cblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVmFsaWRhdGlvbkVycm9yO1xuZXhwb3J0cy5WYWxpZGF0aW9uRXJyb3IgPSBWYWxpZGF0aW9uRXJyb3I7XG5cbmZ1bmN0aW9uIFZhbGlkYXRpb25FcnJvcnModmFsdWUsIHNwZWNOYW1lLCBzcGVjLCBlcnJvcnMpe1xuICB0aGlzLm5hbWUgPSAnVmFsaWRhdGlvbkVycm9ycyc7XG5cbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB0aGlzLnNwZWNOYW1lID0gc3BlY05hbWU7XG4gIHRoaXMuc3BlYyA9IHNwZWM7XG4gIHRoaXMuZXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuXG4gIHRoaXMubWVzc2FnZSA9IHNwZWNOYW1lICsgJyBpcyBpbnZhbGlkJztcblxuICBpZih0aGlzLmVycm9ycy5sZW5ndGgpe1xuICAgIHRoaXMubWVzc2FnZSArPSAnOlxcblxcdCcgKyB0aGlzLmVycm9ycy5tYXAoZnVuY3Rpb24oZSl7IHJldHVybiBlLm1lc3NhZ2U7IH0pLmpvaW4oJ1xcblxcdCcpO1xuICB9XG59XG5WYWxpZGF0aW9uRXJyb3JzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcblZhbGlkYXRpb25FcnJvcnMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVmFsaWRhdGlvbkVycm9ycztcbmV4cG9ydHMuVmFsaWRhdGlvbkVycm9ycyA9IFZhbGlkYXRpb25FcnJvcnM7XG4iLCJleHBvcnRzLmRhdGFUeXBlID0gcmVxdWlyZSgnLi92YWxpZGF0ZURhdGFUeXBlJyk7XG5leHBvcnRzLm1vZGVsID0gcmVxdWlyZSgnLi92YWxpZGF0ZU1vZGVsJyk7XG5leHBvcnRzLm9wZXJhdGlvbiA9IHJlcXVpcmUoJy4vdmFsaWRhdGVPcGVyYXRpb24nKTtcbmV4cG9ydHMuYXJyYXkgPSByZXF1aXJlKCcuL3ZhbGlkYXRlQXJyYXknKTtcbmV4cG9ydHMuZXJyb3JzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyk7XG5cbnZhciBwcmltaXRpdmVzID0gcmVxdWlyZSgnLi92YWxpZGF0ZVByaW1pdGl2ZVR5cGVzJyk7XG5leHBvcnRzLnByaW1pdGl2ZSA9IHtcbiAgaW50ZWdlcjogcHJpbWl0aXZlcy52YWxpZGF0ZUludGVnZXIsXG4gIG51bWJlcjogcHJpbWl0aXZlcy52YWxpZGF0ZU51bWJlcixcbiAgc3RyaW5nOiBwcmltaXRpdmVzLnZhbGlkYXRlU3RyaW5nLFxuICBib29sZWFuOiBwcmltaXRpdmVzLnZhbGlkYXRlQm9vbGVhbixcbiAgdm9pZDogcHJpbWl0aXZlcy52YWxpZGF0ZVZvaWQsXG4gIGZpbGU6IHByaW1pdGl2ZXMudmFsaWRhdGVGaWxlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVBcnJheShjYW5kaWRhdGUsIGRhdGFUeXBlLCBtb2RlbHMpe1xuICBpZighQXJyYXkuaXNBcnJheShjYW5kaWRhdGUpKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QW5BcnJheUVycm9yKGNhbmRpZGF0ZSwgdHlwZW9mIGNhbmRpZGF0ZSk7XG4gIH1cblxuICB2YXIgaXRlbXMgPSBkYXRhVHlwZS5pdGVtcztcblxuICBpZihkYXRhVHlwZS51bmlxdWVJdGVtcyl7XG4gICAgdmFyIGR1cGVDaGVjayA9IFtdO1xuICAgIHZhciBkdXBlcyA9IGNhbmRpZGF0ZS5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xuICAgICAgdmFyIHNpZ25hdHVyZTtcbiAgICAgIGlmKGl0ZW1zLiRyZWYpe1xuICAgICAgICBzaWduYXR1cmUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWduYXR1cmUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmKGR1cGVDaGVjay5pbmRleE9mKHNpZ25hdHVyZSkgIT09IC0xKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkdXBlQ2hlY2sucHVzaChzaWduYXR1cmUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihkdXBlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5EdXBsaWNhdGVJblNldEVycm9yKGNhbmRpZGF0ZSwgZHVwZXMpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlcnJvcnM7XG5cbiAgaWYoaXRlbXMuJHJlZil7XG4gICAgdmFyIG1vZGVsID0gbW9kZWxzW2l0ZW1zLiRyZWZdO1xuICAgIGVycm9ycyA9IGNhbmRpZGF0ZS5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuIHZhbGlkYXRlLm1vZGVsKHZhbHVlLCBtb2RlbCwgbW9kZWxzKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBlcnJvcnMgPSBjYW5kaWRhdGUuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5kYXRhVHlwZSh2YWx1ZSwgaXRlbXMsIG1vZGVscyk7XG4gICAgfSk7XG4gIH1cblxuICBpZihlcnJvcnMubGVuZ3RoKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IoZXJyb3JzKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZUFycmF5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuICBcbmZ1bmN0aW9uIHZhbGlkYXRlRGF0YVR5cGUoY2FuZGlkYXRlLCBkYXRhVHlwZSwgbW9kZWxzKXtcbiAgbW9kZWxzID0gbW9kZWxzIHx8IHt9O1xuICAgICAgXG4gIHZhciB0eXBlID0gZGF0YVR5cGUudHlwZSB8fCBkYXRhVHlwZS5kYXRhVHlwZSB8fCBkYXRhVHlwZS4kcmVmO1xuXG4gIHN3aXRjaCh0eXBlKXtcbiAgICBjYXNlICdpbnRlZ2VyJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuaW50ZWdlcihjYW5kaWRhdGUsIGRhdGFUeXBlKTtcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5udW1iZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuc3RyaW5nKGNhbmRpZGF0ZSwgZGF0YVR5cGUpO1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5ib29sZWFuKGNhbmRpZGF0ZSk7XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLmFycmF5KGNhbmRpZGF0ZSwgZGF0YVR5cGUsIG1vZGVscyk7XG4gICAgY2FzZSAndm9pZCc6XG4gICAgICByZXR1cm4gdmFsaWRhdGUucHJpbWl0aXZlLnZvaWQoY2FuZGlkYXRlKTtcbiAgICBjYXNlICdGaWxlJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuZmlsZSgpO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBBc3N1bWVkIHRvIGJlIGNvbXBsZXggbW9kZWxcbiAgICAgIHZhciBtb2RlbCA9IG1vZGVsc1t0eXBlXTtcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5tb2RlbChjYW5kaWRhdGUsIG1vZGVsLCBtb2RlbHMpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlRGF0YVR5cGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICBWYWxpZGF0aW9uRXJyb3IgPSBlcnJvclR5cGVzLlZhbGlkYXRpb25FcnJvcixcbiAgVmFsaWRhdGlvbkVycm9ycyA9IGVycm9yVHlwZXMuVmFsaWRhdGlvbkVycm9ycyxcbiAgTWlzc2luZ1ZhbHVlRXJyb3IgPSBlcnJvclR5cGVzLk1pc3NpbmdWYWx1ZUVycm9yLFxuICB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjIxMDIvd2hhdC1pcy10aGUtbW9zdC1lZmZpY2llbnQtd2F5LXRvLWNsb25lLWFuLW9iamVjdFxuZnVuY3Rpb24gY2xvbmUob2JqKXtcbiAgICBpZihvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHJldHVybiBvYmo7XG5cbiAgICBpZihBcnJheS5pc0FycmF5KG9iaikpIHJldHVybiBvYmouc2xpY2UoKTtcblxuICAgIHZhciB0ZW1wID0ge307XG5cbiAgICBmb3IodmFyIGtleSBpbiBvYmopXG4gICAgICAgIHRlbXBba2V5XSA9IGNsb25lKG9ialtrZXldKTtcbiAgICByZXR1cm4gdGVtcDtcbn1cblxuZnVuY3Rpb24gYWRkSW5oZXJ0aWVkUHJvcGVydGllcyhtb2RlbCwgbW9kZWxJZCwgbW9kZWxzKXtcbiAgdmFyIHBhcmVudDtcblxuICBPYmplY3Qua2V5cyhtb2RlbHMpLnNvbWUoZnVuY3Rpb24obW9kZWxOYW1lKXtcbiAgICB2YXIgcG90ZW50aWFsUGFyZW50ID0gbW9kZWxzW21vZGVsTmFtZV07XG4gICAgaWYgKCFwb3RlbnRpYWxQYXJlbnQuc3ViVHlwZXMpIHJldHVybjtcblxuICAgIGlmKHBvdGVudGlhbFBhcmVudC5zdWJUeXBlcy5pbmRleE9mKG1vZGVsSWQpICE9PSAtMSl7XG4gICAgICBwYXJlbnQgPSBwb3RlbnRpYWxQYXJlbnQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmKCFwYXJlbnQpIHJldHVybjtcblxuICBmb3IodmFyIHByb3BlcnR5TmFtZSBpbiBwYXJlbnQucHJvcGVydGllcyl7XG4gICAgbW9kZWwucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gcGFyZW50LnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgfVxuICBcbiAgaWYocGFyZW50LnJlcXVpcmVkKSBtb2RlbC5yZXF1aXJlZCA9IG1vZGVsLnJlcXVpcmVkLmNvbmNhdChwYXJlbnQucmVxdWlyZWQpO1xuXG4gIGFkZEluaGVydGllZFByb3BlcnRpZXMobW9kZWwsIHBhcmVudC5pZCwgbW9kZWxzKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVNb2RlbChjYW5kaWRhdGUsIG1vZGVsLCBtb2RlbHMpe1xuICBpZihjYW5kaWRhdGUgPT09IG51bGwgfHwgdHlwZW9mIGNhbmRpZGF0ZSAhPT0gJ29iamVjdCcpe1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbkVycm9ycyhjYW5kaWRhdGUsIG1vZGVsKTtcbiAgfVxuXG4gIG1vZGVscyA9IG1vZGVscyB8fCB7fTtcblxuICBtb2RlbCA9IGNsb25lKG1vZGVsKTtcbiAgaWYoIW1vZGVsLnJlcXVpcmVkKSBtb2RlbC5yZXF1aXJlZCA9IFtdO1xuICBhZGRJbmhlcnRpZWRQcm9wZXJ0aWVzKG1vZGVsLCBtb2RlbC5pZCwgbW9kZWxzKTtcblxuICB2YXIgZXJyb3JzID0gW107XG5cbiAgbW9kZWwucmVxdWlyZWQuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eU5hbWUpe1xuICAgIGlmIChjYW5kaWRhdGVbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICB2YXIgcHJvcGVydHkgPSBtb2RlbC5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gICAgdmFyIGVycm9yID0gbmV3IE1pc3NpbmdWYWx1ZUVycm9yKCk7XG4gICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwcm9wZXJ0eU5hbWUsIHByb3BlcnR5LCBlcnJvcikpO1xuICB9KTtcblxuICBPYmplY3Qua2V5cyhjYW5kaWRhdGUpLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKXtcbiAgICB2YXIgcHJvcGVydHkgPSBtb2RlbC5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cbiAgICB2YXIgZXJyb3IgPSB2YWxpZGF0ZS5kYXRhVHlwZShjYW5kaWRhdGVbcHJvcGVydHlOYW1lXSwgcHJvcGVydHksIG1vZGVscyk7XG4gICAgaWYoZXJyb3Ipe1xuICAgICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwcm9wZXJ0eU5hbWUsIHByb3BlcnR5LCBlcnJvcikpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZihlcnJvcnMubGVuZ3RoKXtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25FcnJvcnMoY2FuZGlkYXRlLCBtb2RlbC5pZCwgbW9kZWwsIGVycm9ycyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVNb2RlbDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIFZhbGlkYXRpb25FcnJvciA9IGVycm9yVHlwZXMuVmFsaWRhdGlvbkVycm9yLFxuICBWYWxpZGF0aW9uRXJyb3JzID0gZXJyb3JUeXBlcy5WYWxpZGF0aW9uRXJyb3JzLFxuICBNaXNzaW5nVmFsdWVFcnJvciA9IGVycm9yVHlwZXMuTWlzc2luZ1ZhbHVlRXJyb3IsXG4gIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU9wZXJhdGlvbihjYW5kaWRhdGUsIG9wZXJhdGlvbiwgbW9kZWxzKXtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICBcbiAgdmFyIHByZXNlbnRQYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIGlmIChwYXJhbS5uYW1lIGluIGNhbmRpZGF0ZSkgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgaWYgKHBhcmFtLnJlcXVpcmVkKSB7XG4gICAgICB2YXIgZXJyb3IgPSBuZXcgTWlzc2luZ1ZhbHVlRXJyb3IoKTtcbiAgICAgIGVycm9ycy5wdXNoKG5ldyBWYWxpZGF0aW9uRXJyb3IocGFyYW0ubmFtZSwgcGFyYW0sIGVycm9yKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcblxuICBwcmVzZW50UGFyYW1zLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xuICAgIHZhciBlcnJvciA9IHZhbGlkYXRlLmRhdGFUeXBlKGNhbmRpZGF0ZVtwYXJhbS5uYW1lXSwgcGFyYW0sIG1vZGVscyk7XG4gICAgaWYoZXJyb3Ipe1xuICAgICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwYXJhbS5uYW1lLCBwYXJhbSwgZXJyb3IpKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYoZXJyb3JzLmxlbmd0aCl7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uRXJyb3JzKGNhbmRpZGF0ZSwgb3BlcmF0aW9uLm5pY2tuYW1lLCBvcGVyYXRpb24sIGVycm9ycyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVPcGVyYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUludGVnZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSl7XG4gIHZhciBlcnJvciA9IHZhbGlkYXRlTnVtYmVyKGNhbmRpZGF0ZSwgZGF0YVR5cGUpO1xuICBpZihlcnJvcikgcmV0dXJuIGVycm9yO1xuXG4gIGlmKGNhbmRpZGF0ZSAlIDEpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBbkludGVnZXJFcnJvcihjYW5kaWRhdGUpO1xuICB9XG59XG5leHBvcnRzLnZhbGlkYXRlSW50ZWdlciA9IHZhbGlkYXRlSW50ZWdlcjtcblxuZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSl7XG4gIGlmKCEodHlwZW9mIGNhbmRpZGF0ZSA9PT0gJ251bWJlcicgfHwgY2FuZGlkYXRlIGluc3RhbmNlb2YgTnVtYmVyKSB8fCBpc05hTihjYW5kaWRhdGUpKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QU51bWJlckVycm9yKGNhbmRpZGF0ZSwgdHlwZW9mIGNhbmRpZGF0ZSk7XG4gIH1cbiAgXG4gIGlmKChkYXRhVHlwZS5taW5pbXVtICE9PSB1bmRlZmluZWQpICYmIGNhbmRpZGF0ZSA8IHBhcnNlSW50KGRhdGFUeXBlLm1pbmltdW0sIDEwKSl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk51bWJlclRvb1NtYWxsRXJyb3IoY2FuZGlkYXRlLCBkYXRhVHlwZS5taW5pbXVtKTtcbiAgfVxuICBcbiAgaWYoKGRhdGFUeXBlLm1heGltdW0gIT09IHVuZGVmaW5lZCkgJiYgY2FuZGlkYXRlID4gcGFyc2VJbnQoZGF0YVR5cGUubWF4aW11bSwgMTApKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTnVtYmVyVG9vTGFyZ2VFcnJvcihjYW5kaWRhdGUsIGRhdGFUeXBlLm1heGltdW0pO1xuICB9XG59XG5leHBvcnRzLnZhbGlkYXRlTnVtYmVyID0gdmFsaWRhdGVOdW1iZXI7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQm9vbGVhbihjYW5kaWRhdGUpe1xuICBpZighKHR5cGVvZiBjYW5kaWRhdGUgPT09ICdib29sZWFuJyB8fCBjYW5kaWRhdGUgaW5zdGFuY2VvZiBCb29sZWFuKSl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdEFCb29sZWFuRXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcbiAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZUJvb2xlYW4gPSB2YWxpZGF0ZUJvb2xlYW47XG5cblxuZnVuY3Rpb24gdmFsaWRhdGVWb2lkKGNhbmRpZGF0ZSl7XG4gIGlmKGNhbmRpZGF0ZSAhPSBudWxsKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90Vm9pZEVycm9yKGNhbmRpZGF0ZSwgdHlwZW9mIGNhbmRpZGF0ZSk7XG4gIH1cbn1cbmV4cG9ydHMudmFsaWRhdGVWb2lkID0gdmFsaWRhdGVWb2lkO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUZpbGUoKXtcbiAgLy8gTm90IHN1cmUgaG93IHRvIGNoZWNrIHRoaXMsIHNpbmNlIGFueXRoaW5nIGNvdWxkIHF1YWxpZnkgYXMgJ0ZpbGUnLlxufVxuZXhwb3J0cy52YWxpZGF0ZUZpbGUgPSB2YWxpZGF0ZUZpbGU7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5nKGNhbmRpZGF0ZSwgZGF0YVR5cGUpe1xuICBpZih0eXBlb2YgY2FuZGlkYXRlICE9PSAnc3RyaW5nJyAmJiAhKGNhbmRpZGF0ZSBpbnN0YW5jZW9mIFN0cmluZykpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBU3RyaW5nRXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcbiAgfVxuXG4gIGlmKCdlbnVtJyBpbiBkYXRhVHlwZSl7XG4gICAgaWYoZGF0YVR5cGUuZW51bS5pbmRleE9mKGNhbmRpZGF0ZSkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuU3RyaW5nTm90SW5FbnVtRXJyb3IoY2FuZGlkYXRlLCBkYXRhVHlwZS5lbnVtKTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydHMudmFsaWRhdGVTdHJpbmcgPSB2YWxpZGF0ZVN0cmluZzsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJykuTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhcHBseUF1dGhEYXRhKG9wZXJhdGlvbiwgYXV0aERhdGEsIHJlcXVlc3Qpe1xuICB2YXIgYXV0aE1hcCA9IG9wZXJhdGlvbi5hdXRob3JpemF0aW9ucztcbiAgaWYoIWF1dGhNYXApIGF1dGhNYXAgPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLmF1dGhvcml6YXRpb25zO1xuICBpZighYXV0aE1hcCkgcmV0dXJuO1xuXG4gIHZhciBhdXRoTmFtZXMgPSBPYmplY3Qua2V5cyhhdXRoTWFwKS5maWx0ZXIoZnVuY3Rpb24oYXV0aE5hbWUpe1xuICAgIC8vIEN1cnJlbnRseSB1bmFibGUgdG8gaGFuZGxlIG9hdXRoMlxuICAgIHJldHVybiBhdXRoTWFwW2F1dGhOYW1lXS50eXBlICE9PSAnb2F1dGgyJztcbiAgfSk7XG5cbiAgaWYoYXV0aE5hbWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIGlmKGF1dGhOYW1lcy5sZW5ndGggPT09IDEpe1xuICAgIHZhciBhdXRoTmFtZSA9IGF1dGhOYW1lc1swXTtcbiAgICB2YXIgYXV0aCA9IGF1dGhNYXBbYXV0aE5hbWVdO1xuXG4gICAgaWYoIWF1dGhEYXRhKSB0aHJvdyBuZXcgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcihhdXRoTmFtZSwgYXV0aCk7XG5cbiAgICAvLyBVbnBhY2sgbmVzdGVkIGF1dGhEYXRhIGZvciBzaW5nbGUgYXV0aCBvcHM6IHsgYXBpS2V5OiAnMTIzJyB9IC0+ICcxMjMnXG4gICAgaWYoYXV0aERhdGFbYXV0aE5hbWVdKSBhdXRoRGF0YSA9IGF1dGhEYXRhW2F1dGhOYW1lXTtcblxuICAgIGlmKGF1dGgudHlwZSA9PT0gJ2FwaUtleScpe1xuICAgICAgYXBwbHlBcGlLZXkoYXV0aCwgYXV0aE5hbWUsIGF1dGhEYXRhLCByZXF1ZXN0KTtcbiAgICB9IGVsc2UgaWYoYXV0aC50eXBlID09PSAnYmFzaWNBdXRoJykge1xuICAgICAgYXBwbHlCYXNpY0F1dGgoYXV0aCwgYXV0aE5hbWUsIGF1dGhEYXRhLnVzZXJuYW1lLCBhdXRoRGF0YS5wYXNzd29yZCwgcmVxdWVzdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGF1dGhOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGF1dGhOYW1lKXtcbiAgICAgIHZhciBhdXRoID0gYXV0aE1hcFthdXRoTmFtZV07XG4gICAgICB2YXIgZGF0YSA9IGF1dGhEYXRhW2F1dGhOYW1lXTtcblxuICAgICAgaWYoIWRhdGEpIHRocm93IG5ldyBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lLCBhdXRoKTtcblxuICAgICAgaWYoYXV0aC50eXBlID09PSAnYXBpS2V5Jyl7XG4gICAgICAgIGFwcGx5QXBpS2V5KGF1dGgsIGF1dGhOYW1lLCBkYXRhLCByZXF1ZXN0KTtcbiAgICAgIH0gZWxzZSBpZihhdXRoLnR5cGUgPT09ICdiYXNpY0F1dGgnKXtcbiAgICAgICAgYXBwbHlCYXNpY0F1dGgoYXV0aCwgYXV0aE5hbWUsIGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQsIHJlcXVlc3QpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBhcHBseUFwaUtleShhdXRoLCBhdXRoTmFtZSwgYXBpS2V5LCByZXF1ZXN0KXtcbiAgaWYoIWFwaUtleSkgdGhyb3cgbmV3IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IoYXV0aE5hbWUsIGF1dGgpO1xuICBcbiAgaWYoYXV0aC5wYXNzQXMgPT09ICdoZWFkZXInKXtcbiAgICByZXF1ZXN0LmhlYWRlcnNbYXV0aC5rZXluYW1lXSA9IGFwaUtleTtcbiAgfSBlbHNlIGlmKGF1dGgucGFzc0FzID09PSAncXVlcnknKXtcbiAgICB2YXIgdXJsID0gcmVxdWVzdC51cmw7XG4gICAgdmFyIHF1ZXJ5UGFyYW0gPSBhdXRoLmtleW5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXBpS2V5KTtcbiAgICBpZih1cmwuaW5kZXhPZignPycpID09PSAtMSl7XG4gICAgICB1cmwgKz0gJz8nICsgcXVlcnlQYXJhbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoJz8nLCAnPycgKyBxdWVyeVBhcmFtICsgJyYnKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0LnVybCA9IHVybDtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseUJhc2ljQXV0aChhdXRoLCBhdXRoTmFtZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCByZXF1ZXN0KXtcbiAgaWYoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkgdGhyb3cgbmV3IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IoYXV0aE5hbWUsIGF1dGgpO1xuICBcbiAgdmFyIHVybCA9IHJlcXVlc3QudXJsO1xuICBcbiAgLy8gT25seSBhZGQgYmFzaWMgYXV0aCBvbmNlXG4gIGlmKHVybC5pbmRleE9mKCdAJykgPT09IC0xKXtcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgnOi8vJywgJzovLycgKyB1c2VybmFtZSArICc6JyArIHBhc3N3b3JkICsgJ0AnKTtcbiAgfVxuXG4gIHJlcXVlc3QudXJsID0gdXJsO1xufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIgPSByZXF1aXJlKCcuL2NyZWF0ZU9wZXJhdGlvbkhhbmRsZXInKTtcblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KHNjaGVtYSwgcmVxdWVzdEhhbmRsZXIpe1xuICB2YXIgYXBpID0ge30sXG4gICAgYXBpQXV0aERhdGEsXG4gICAgYXV0aE1ldGhvZE5hbWUgPSAnYXV0aCc7XG5cbiAgc2NoZW1hID0gcHJvY2Vzc1NjaGVtYShzY2hlbWEpO1xuICBcbiAgLy8gSWYgdGhlICdhdXRoJyBrZXkgaXMgdXNlZCBmb3IgYW55IHJlc291cmNlIG9yIG9wZXJhdGlvbiwgd2UnbGwgdXNlXG4gIC8vICdhdXRob3JpemF0aW9uJyBpbnN0ZWFkIGZvciB0aGUgYXV0aCBtZXRob2RzXG4gIHZhciBhdXRoSXNJblVzZSA9IHNjaGVtYS5hcGlzLnNvbWUoZnVuY3Rpb24ocmVzb3VyY2VPYmplY3Qpe1xuICAgIHJldHVybiByZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5hcGlzLnNvbWUoZnVuY3Rpb24oYXBpT2JqZWN0KXtcbiAgICAgIHZhciByZXNvdXJjZUFwaU5hbWUgPSBnZXRBcGlOYW1lKGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5yZXNvdXJjZVBhdGggfHwgYXBpT2JqZWN0LnBhdGgpO1xuICAgICAgaWYocmVzb3VyY2VBcGlOYW1lID09PSAnYXV0aCcpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGFwaU9iamVjdC5vcGVyYXRpb25zLnNvbWUoZnVuY3Rpb24ob3BlcmF0aW9uKXtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbi5uaWNrbmFtZSA9PT0gJ2F1dGgnO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICBcbiAgaWYoYXV0aElzSW5Vc2UpIGF1dGhNZXRob2ROYW1lID0gJ2F1dGhvcml6YXRpb24nO1xuXG4gIGFwaVthdXRoTWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpe1xuICAgIGFwaUF1dGhEYXRhID0gcHJvY2Vzc0FwaUF1dGhBcmdzKGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgc2NoZW1hLmFwaXMuZm9yRWFjaChmdW5jdGlvbihyZXNvdXJjZU9iamVjdCl7XG4gICAgdmFyIHJlc291cmNlTmFtZSxcbiAgICAgIHJlc291cmNlQXBpLFxuICAgICAgcmVzb3VyY2VBdXRoRGF0YTtcblxuICAgIGlmKHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uLnJlc291cmNlUGF0aCl7XG4gICAgICByZXNvdXJjZU5hbWUgPSBnZXRBcGlOYW1lKHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uLnJlc291cmNlUGF0aCk7XG4gICAgICByZXNvdXJjZUFwaSA9IGFwaVtyZXNvdXJjZU5hbWVdID0ge307XG4gICAgICByZXNvdXJjZUFwaVthdXRoTWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpe1xuICAgICAgICByZXNvdXJjZUF1dGhEYXRhID0gcHJvY2Vzc0FwaUF1dGhBcmdzKGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uLmFwaXMuZm9yRWFjaChmdW5jdGlvbihhcGlPYmplY3Qpe1xuICAgICAgdmFyIGFwaU9iamVjdE5hbWUgPSByZXNvdXJjZU5hbWUsXG4gICAgICAgIGFwaU9iamVjdEFwaSA9IHJlc291cmNlQXBpLFxuICAgICAgICBhcGlPYmplY3RBdXRoRGF0YTtcblxuICAgICAgaWYoIWFwaU9iamVjdE5hbWUpe1xuICAgICAgICBhcGlPYmplY3ROYW1lID0gZ2V0QXBpTmFtZShhcGlPYmplY3QucGF0aCk7XG4gICAgICAgIGFwaU9iamVjdEFwaSA9IGFwaVthcGlPYmplY3ROYW1lXSA9IHt9O1xuICAgICAgICBhcGlPYmplY3RBcGlbYXV0aE1ldGhvZE5hbWVdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICBhcGlPYmplY3RBdXRoRGF0YSA9IHByb2Nlc3NBcGlBdXRoQXJncyhhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBhcGlPYmplY3Qub3BlcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdGlvbil7XG4gICAgICAgIHZhciBvcGVyYXRpb25IYW5kbGVyTmFtZSA9IG9wZXJhdGlvbi5uaWNrbmFtZSxcbiAgICAgICAgICBvcGVyYXRpb25BdXRoRGF0YSxcbiAgICAgICAgICBvcGVyYXRpb25IYW5kbGVyOyBcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldEF1dGhEYXRhKCl7XG4gICAgICAgICAgcmV0dXJuIG9wZXJhdGlvbkF1dGhEYXRhIHx8IGFwaU9iamVjdEF1dGhEYXRhIHx8IHJlc291cmNlQXV0aERhdGEgfHwgYXBpQXV0aERhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBvcGVyYXRpb25IYW5kbGVyID0gY3JlYXRlT3BlcmF0aW9uSGFuZGxlcihvcGVyYXRpb24sIGdldEF1dGhEYXRhLCByZXF1ZXN0SGFuZGxlcik7XG5cbiAgICAgICAgb3BlcmF0aW9uSGFuZGxlclthdXRoTWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpe1xuICAgICAgICAgIG9wZXJhdGlvbkF1dGhEYXRhID0gcHJvY2Vzc0FwaUF1dGhBcmdzKGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYXBpT2JqZWN0QXBpW29wZXJhdGlvbkhhbmRsZXJOYW1lXSA9IG9wZXJhdGlvbkhhbmRsZXI7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFwaTtcbn1cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2xpZW50O1xuXG5mdW5jdGlvbiBwcm9jZXNzQXBpQXV0aEFyZ3MoYXJncyl7XG4gIC8vIGZvciBiYXNpYyBhdXRoLCBhbGxvdyBjYWxscyB3aXRoIHR3byBhcmdzICh1c2VybmFtZSwgcGFzc3dvcmQpXG4gIGlmKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgYXJnc1sxXSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcm5hbWU6IGFyZ3NbMF0sXG4gICAgICBwYXNzd29yZDogYXJnc1sxXVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cbn1cblxuLy8gSGVscHBlciBtZXRob2Qgd2hpY2ggYXNzaW5ncyBiYWNrIHBvaW50ZXIgdG8gb2JqZWN0IHBhcmVudHMgYW5kIHJldHVybnNcbi8vIHRoZSBhcGkgb2JqZWN0cyB3aXRoaW4gdGhlIGdpdmVuIHNjaGVtYS5cbmZ1bmN0aW9uIHByb2Nlc3NTY2hlbWEoc2NoZW1hKXtcbiAgc2NoZW1hLmFwaXMuZm9yRWFjaChmdW5jdGlvbihyZXNvdXJjZU9iamVjdCl7XG4gICAgcmVzb3VyY2VPYmplY3QucmVzb3VyY2VMaXN0aW5nID0gc2NoZW1hO1xuXG4gICAgcmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb24uYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKGFwaU9iamVjdCl7XG4gICAgICBhcGlPYmplY3QucmVzb3VyY2VPYmplY3QgPSByZXNvdXJjZU9iamVjdDtcbiAgICAgIGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbiA9IHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuXG4gICAgICBhcGlPYmplY3Qub3BlcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdGlvbil7XG4gICAgICAgIG9wZXJhdGlvbi5hcGlPYmplY3QgPSBhcGlPYmplY3Q7XG5cbiAgICAgICAgb3BlcmF0aW9uLnBhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXJhbWV0ZXIpe1xuICAgICAgICAgIHBhcmFtZXRlci5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBzY2hlbWE7XG59XG5cbi8vIFRha2VzIGEgcGF0aCBhbmQgcmV0dXJucyBhIEphdmFTY3JpcHQtZnJpZW5kbHkgdmFyaWFibGUgbmFtZVxuZnVuY3Rpb24gZ2V0QXBpTmFtZShuYW1lKXtcbiAgLy8gU3RyaW5nIG5vbi13b3JkIGNoYXJhY3RlcnNcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvXFxXL2csICcvJyk7XG5cbiAgLy8gVHVybiBwYXRocyB3aGljaCBsb29rL2xpa2UvdGhpcyB0byBsb29rTGlrZVRoaXNcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvKFxcdylcXC8oXFx3KS9nLCBmdW5jdGlvbihtYXRjaCwgcDEsIHAyKXtcbiAgICByZXR1cm4gcDEgKyBwMi50b1VwcGVyQ2FzZSgpO1xuICB9KTtcblxuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9cXC8vZywgJycpO1xuXG4gIHJldHVybiBuYW1lO1xufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldFJlcXVlc3RIZWFkZXJzID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0SGVhZGVycycpLFxuICBnZXRSZXF1ZXN0VXJsID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0VXJsJyksXG4gIGdldFJlcXVlc3RCb2R5ID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0Qm9keScpLFxuICBhcHBseUF1dGhEYXRhID0gcmVxdWlyZSgnLi9hcHBseUF1dGhEYXRhJyksXG4gIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcbiAgc3dhZ2dlclZhbGlkYXRlID0gcmVxdWlyZSgnc3dhZ2dlci12YWxpZGF0ZScpO1xuXG52YXIgYWxsRXJyb3JUeXBlcyA9IHt9O1xuT2JqZWN0LmtleXMoc3dhZ2dlclZhbGlkYXRlLmVycm9ycykuZm9yRWFjaChmdW5jdGlvbihlcnJvck5hbWUpe1xuICBhbGxFcnJvclR5cGVzW2Vycm9yTmFtZV0gPSBzd2FnZ2VyVmFsaWRhdGUuZXJyb3JzW2Vycm9yTmFtZV07XG59KTtcblxuT2JqZWN0LmtleXMoZXJyb3JUeXBlcykuZm9yRWFjaChmdW5jdGlvbihlcnJvck5hbWUpe1xuICBhbGxFcnJvclR5cGVzW2Vycm9yTmFtZV0gPSBlcnJvclR5cGVzW2Vycm9yTmFtZV07XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlT3BlcmF0aW9uSGFuZGxlcihvcGVyYXRpb24sIGdldEF1dGhEYXRhLCByZXF1ZXN0SGFuZGxlcil7XG4gIGZ1bmN0aW9uIFJlcXVlc3QoZGF0YSwgb3B0aW9ucyl7XG4gICAgdGhpcy5tZXRob2QgPSBvcGVyYXRpb24ubWV0aG9kO1xuICAgIHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICAgIHRoaXMuZXJyb3JUeXBlcyA9IGFsbEVycm9yVHlwZXM7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgdmFyIG9wZXJhdGlvbkhhbmRsZXIgPSBmdW5jdGlvbihkYXRhLCBvcHRpb25zKXtcbiAgICB2YXIgZXJyb3IsXG4gICAgICByZXF1ZXN0O1xuICAgIFxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIFxuICAgIGlmKGRhdGEgPT0gbnVsbCkgZGF0YSA9IHt9O1xuXG4gICAgLy8gaWYgYSBmdW5jdGlvbiBpcyBwYXNzZWQgaW4gYXMgb3B0aW9ucywgYXNzdW1lIGl0J3MgYSBjYWxsYmFjayBmdW5jdGlvblxuICAgIC8vIGZvciBjb252ZW5pZW5jZVxuICAgIGlmKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKXtcbiAgICAgIG9wdGlvbnMuY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIHRyeXtcbiAgICAgIGRhdGEgPSBzaW5nbGVQYXJhbUNvbnZlbmllbmNlUHJvY2Vzc29yKG9wZXJhdGlvbiwgZGF0YSk7XG4gICAgICBkYXRhID0gcmVtb3ZlVW5rbm93blBhcmFtcyhvcGVyYXRpb24sIGRhdGEpO1xuXG4gICAgICBlcnJvciA9IHN3YWdnZXJWYWxpZGF0ZS5vcGVyYXRpb24oZGF0YSwgb3BlcmF0aW9uLCBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLm1vZGVscyk7XG4gICAgICBcbiAgICAgIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChkYXRhLCBvcHRpb25zKTtcbiAgICAgIFxuICAgICAgLy8gSWYgd2Uga25vdyB0aGVyZSBpcyBhbiBlcnJvciwgZG9uJ3QgYXR0ZW1wdCB0byBjcmFmdCB0aGUgcmVxdWVzdCBwYXJhbXMuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBwYXJhbSBnZW5lcmF0b3JzIGFzc3VtZSB2YWxpZCBkYXRhIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgICBpZighZXJyb3Ipe1xuICAgICAgICByZXF1ZXN0LnVybCA9IGdldFJlcXVlc3RVcmwob3BlcmF0aW9uLCBkYXRhKTtcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0gZ2V0UmVxdWVzdEhlYWRlcnMob3BlcmF0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgICAgICAgcmVxdWVzdC5ib2R5ID0gZ2V0UmVxdWVzdEJvZHkob3BlcmF0aW9uLCBkYXRhLCByZXF1ZXN0LmhlYWRlcnMpO1xuICAgICAgICBcbiAgICAgICAgYXBwbHlBdXRoRGF0YShvcGVyYXRpb24sIGdldEF1dGhEYXRhKCksIHJlcXVlc3QpO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSl7XG4gICAgICBlcnJvciA9IGU7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcihlcnJvciwgcmVxdWVzdCk7XG4gIH07XG5cbiAgLy8gVXNlZnVsIGZvciBpbnN0YW5jZW9mIGNoZWNrc1xuICBvcGVyYXRpb25IYW5kbGVyLlJlcXVlc3QgPSBSZXF1ZXN0O1xuICBvcGVyYXRpb25IYW5kbGVyLmVycm9yVHlwZXMgPSBhbGxFcnJvclR5cGVzO1xuXG4gIC8vIFVzZWZ1bCBmb3IgcmVmbGVjdGlvblxuICBvcGVyYXRpb25IYW5kbGVyLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcbiAgXG4gIC8vIENhbiBiZSB1c2VkIHRvIHByZWVtcHRpdmVseSB2YWxpZGF0ZSB3aXRob3V0IGFjdGlvblxuICBvcGVyYXRpb25IYW5kbGVyLnZhbGlkYXRlID0gZnVuY3Rpb24oZGF0YSl7XG4gICAgcmV0dXJuIHN3YWdnZXJWYWxpZGF0ZS5vcGVyYXRpb24oZGF0YSwgb3BlcmF0aW9uLCBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLm1vZGVscyk7XG4gIH07XG5cbiAgcmV0dXJuIG9wZXJhdGlvbkhhbmRsZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXI7XG5cbmZ1bmN0aW9uIG5vb3AoKXt9XG5jcmVhdGVPcGVyYXRpb25IYW5kbGVyLmxvZ2dlciA9IHtcbiAgZGVidWc6IG5vb3AsXG4gIGluZm86IG5vb3AsXG4gIHdhcm46IG5vb3AsXG4gIGVycm9yOiBub29wXG59O1xuXG4vLyBFbmFibGVzIGRhdGEgdG8gYmUgcGFzc2VkIGRpcmVjdGx5IGZvciBzaW5nbGUgcGFyYW0gb3BlcmF0aW9ucy5cbmZ1bmN0aW9uIHNpbmdsZVBhcmFtQ29udmVuaWVuY2VQcm9jZXNzb3Iob3BlcmF0aW9uLCBkYXRhKXtcbiAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgcGFyYW1zLCBiYWlsXG4gIHZhciByZXF1aXJlZFBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnJlcXVpcmVkO1xuICB9KTtcblxuICAvLyBJZiB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZSByZXF1aXJlZCBwYXJhbXMsIG9yIGlmIHRoZXJlIGlzIG5vIHJlcXVpcmVkIHBhcmFtXG4gIC8vIGFuZCB0aGVyZSBhcmUgbWFueSBvcHRpb25hbCBwYXJhbXMsIGJhaWxcbiAgaWYocmVxdWlyZWRQYXJhbXMubGVuZ3RoID4gMSkgcmV0dXJuIGRhdGE7XG5cbiAgaWYocmVxdWlyZWRQYXJhbXMubGVuZ3RoICE9PSAxICYmIG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmxlbmd0aCAhPT0gMSkgcmV0dXJuIGRhdGE7XG5cbiAgdmFyIHBhcmFtID0gcmVxdWlyZWRQYXJhbXNbMF0gfHwgb3BlcmF0aW9uLnBhcmFtZXRlcnNbMF07XG4gIFxuICAvLyBJZiB0aGUgcGFyYW0gaXMgYWxyZWFkeSBkZWZpbmVkIGV4cGxpY2l0bHksIGJhaWxcbiAgaWYodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICYmIChwYXJhbS5uYW1lIGluIGRhdGEpKSByZXR1cm4gZGF0YTtcblxuICB2YXIgbW9kZWxzID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5tb2RlbHM7XG5cbiAgLy8gSWYgdGhlIGRhdGEgcGFzc2VkIGlzIGlzIG5vdCB2YWxpZCBmb3IgdGhlIHBhcmFtIGRhdGEgdHlwZSwgYmFpbFxuICB2YXIgZXJyb3I7XG5cbiAgdHJ5IHtcbiAgICBlcnJvciA9IHN3YWdnZXJWYWxpZGF0ZS5kYXRhVHlwZShkYXRhLCBwYXJhbSwgbW9kZWxzKTsgXG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbiAgXG4gIC8vIElmIHRoZSBkYXRhIHBhc3NlZCBpcyBhIHZhbGlkIHBhcmFtIGRhdGEgdHlwZSwgYmFpbFxuICBpZighZXJyb3Ipe1xuICAgIHZhciB3cmFwcGVyID0ge307XG4gICAgd3JhcHBlcltwYXJhbS5uYW1lXSA9IGRhdGE7XG4gICAgcmV0dXJuIHdyYXBwZXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiBcblxuZnVuY3Rpb24gcmVtb3ZlVW5rbm93blBhcmFtcyhvcGVyYXRpb24sIGRhdGEpe1xuICBpZighZGF0YSB8fCB0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcpIHJldHVybiBkYXRhO1xuXG4gIHZhciBwYXJhbU5hbWVzID0ge307XG4gIG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xuICAgIHBhcmFtTmFtZXNbcGFyYW0ubmFtZV0gPSB0cnVlO1xuICB9KTtcblxuICB2YXIgdW5rbm93bktleXMgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gIShrZXkgaW4gcGFyYW1OYW1lcyk7XG4gIH0pO1xuXG4gIGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIubG9nZ2VyLndhcm4oJ1Vua25vd24gcGFyYW1ldGVycyByZW1vdmVkIGZyb20gcmVxdWVzdDonLCBcbiAgICB1bmtub3duS2V5cy5qb2luKCcsICcpKTtcblxuICB1bmtub3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBJbnZhbGlkUmVxdWVzdEVycm9yKG1lc3NhZ2Upe1xuICB0aGlzLm5hbWUgPSAnSW52YWxpZFJlcXVlc3RFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0ludmFsaWQgcmVxdWVzdCc7XG59XG5JbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSW52YWxpZFJlcXVlc3RFcnJvcjtcblxuZXhwb3J0cy5JbnZhbGlkUmVxdWVzdEVycm9yID0gSW52YWxpZFJlcXVlc3RFcnJvcjtcblxuXG5mdW5jdGlvbiBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lLCBhdXRoKXtcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdBdXRob3JpemF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnTm8gZGF0YSBmb3VuZCBmb3IgYXV0aG9yaXphdGlvbjogJyArIGF1dGhOYW1lO1xuICB0aGlzLmF1dGhvcml6YXRpb24gPSBhdXRoO1xufVxuTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbk1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcjtcblxuZXhwb3J0cy5NaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yID0gTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcjtcblxuXG5mdW5jdGlvbiBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yKHBhdGhQYXJhbXMpe1xuICB0aGlzLm5hbWUgPSAnTWlzc2luZ1BhdGhQYXJhbXNFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdNaXNzaW5nIHRoZSBmb2xsb3dpbmcgcmVxdWlyZWQgcGF0aCBwYXJhbWV0ZXJzOiAnICsgcGF0aFBhcmFtcy5qb2luKCcnKTtcbn1cbk1pc3NpbmdQYXRoUGFyYW1zRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdQYXRoUGFyYW1zRXJyb3I7XG5cbmV4cG9ydHMuTWlzc2luZ1BhdGhQYXJhbXNFcnJvciA9IE1pc3NpbmdQYXRoUGFyYW1zRXJyb3I7XG5cblxuZnVuY3Rpb24gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcihjb250ZW50VHlwZSwgb3BlcmF0aW9uKXtcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbjtcbiAgdmFyIGNvbnN1bWVzID0gb3BlcmF0aW9uLmNvbnN1bWVzIHx8IGFwaURlY2xhcmF0aW9uLmNvbnN1bWVzIHx8IFtdO1xuXG4gIHRoaXMubmFtZSA9ICdDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ09wZXJhdGlvbiBbJyArIG9wZXJhdGlvbi5uaWNrbmFtZSArICddIGRvZXMgbm90IGFjY2VwdCAnICsgY29udGVudFR5cGUgKyAnLiBJdCBzdXBwb3J0czogJyArIFxuICAgIGNvbnN1bWVzLmpvaW4oJywgJyk7XG59XG5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yO1xuXG5leHBvcnRzLkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IgPSBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yO1xuXG5cbmZ1bmN0aW9uIEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcihhY2NlcHRzLCBvcGVyYXRpb24pe1xuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuICB2YXIgcHJvZHVjZXMgPSBvcGVyYXRpb24ucHJvZHVjZXMgfHwgYXBpRGVjbGFyYXRpb24ucHJvZHVjZXMgfHwgW107XG5cbiAgdGhpcy5uYW1lID0gJ0FjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdPcGVyYXRpb24gWycgKyBvcGVyYXRpb24ubmlja25hbWUgKyAnXSBkb2VzIG5vdCBwcm9kdWNlICcgKyBhY2NlcHRzICsgJy4gSXQgc3VwcG9ydHM6ICcgKyBcbiAgICBwcm9kdWNlcy5qb2luKCcsICcpO1xufVxuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcjtcblxuZXhwb3J0cy5BY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IgPSBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3I7XG5cblxuZnVuY3Rpb24gT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yKG9wZXJhdGlvbiwgZXJyb3JzKXtcbiAgdGhpcy5uYW1lID0gJ09wZXJhdGlvblZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IG9wZXJhdGlvbi5uaWNrbmFtZSArICcgZmFpbGVkIHZhbGlkYXRpb246IFxcblxcdCcgKyBlcnJvcnMuam9pbignXFxuXFx0Jyk7XG59XG5PcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5PcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yO1xuXG5leHBvcnRzLk9wZXJhdGlvblZhbGlkYXRpb25FcnJvciA9IE9wZXJhdGlvblZhbGlkYXRpb25FcnJvcjtcblxuXG5mdW5jdGlvbiBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IocGFyYW1ldGVyLCBlcnJvcnMpe1xuICB0aGlzLm5hbWUgPSAnUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gcGFyYW1ldGVyLm5hbWUgKyAnIGZhaWxlZCB2YWxpZGF0aW9uOiBcXG5cXHQnICsgZXJyb3JzLmpvaW4oJ1xcblxcdCcpO1xufVxuUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhcmFtZXRlclZhbGlkYXRpb25FcnJvcjtcblxuZXhwb3J0cy5QYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IgPSBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3I7XG5cblxuZnVuY3Rpb24gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IobWVzc2FnZSl7XG4gIHRoaXMubmFtZSA9ICdEYXRhVHlwZVZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0ludmFsaWQgZGF0YSB0eXBlJztcbn1cbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yO1xuXG5leHBvcnRzLkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yID0gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3I7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFJlcXVlc3RCb2R5KG9wZXJhdGlvbiwgZGF0YSwgaGVhZGVycyl7XG4gIHZhciBib2R5ID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnYm9keScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPSBudWxsO1xuICB9KS5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBkYXRhW3BhcmFtLm5hbWVdO1xuICB9KVswXTtcblxuICBpZighKGhlYWRlcnMgJiYgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkgcmV0dXJuIGJvZHk7XG5cbiAgdmFyIGNvbnRlbnRUeXBlID0gaGVhZGVyc1snQ29udGVudC1UeXBlJ107XG4gIHZhciBwcmVzZW50Rm9ybVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2Zvcm0nICYmIGRhdGFbcGFyYW0ubmFtZV0gIT0gbnVsbDtcbiAgfSk7XG5cbiAgaWYoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgIT09IC0xKXtcbiAgICBib2R5ID0gcHJlc2VudEZvcm1QYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lLFxuICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgfSkuam9pbignJicpO1xuICB9IGVsc2UgaWYoY29udGVudFR5cGUuaW5kZXhPZignbXVsdGlwYXJ0L2Zvcm0tZGF0YScpICE9PSAtMSl7XG4gICAgdmFyIHJhbmRvbW5lc3MgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMik7XG4gICAgdmFyIGJvdW5kYXJ5ID0gJ1N3YWdnZXJCb3VuZGFyeScgKyByYW5kb21uZXNzO1xuICAgIFxuICAgIGJvZHkgPSBwcmVzZW50Rm9ybVBhcmFtcy5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgdmFyIGtleSA9IHBhcmFtLm5hbWUsXG4gICAgICAgIHZhbHVlID0gZGF0YVtrZXldLFxuICAgICAgICByZXN1bHQgPSAnLS0nICsgYm91bmRhcnk7XG5cbiAgICAgIHJlc3VsdCArPSAnXFxuQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiJyArIGtleSArICdcIic7XG4gICAgICBcbiAgICAgIGlmKHZhbHVlLmNvbnRlbnRUeXBlKXtcbiAgICAgICAgaWYodmFsdWUubmFtZSl7XG4gICAgICAgICAgcmVzdWx0ICs9ICc7IGZpbGVuYW1lPVwiJyArIHZhbHVlLm5hbWUgKyAnXCInO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ICs9ICdcXG5Db250ZW50LVR5cGU6ICcgKyB2YWx1ZS5jb250ZW50VHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYodmFsdWUuY29udGVudFRyYW5zZmVyRW5jb2Rpbmcpe1xuICAgICAgICByZXN1bHQgKz0gJ1xcbkNvbnRlbnQtVHJhbnNmZXItRW5jb2Rpbmc6ICcgKyB2YWx1ZS5jb250ZW50VHJhbnNmZXJFbmNvZGluZztcbiAgICAgIH1cblxuICAgICAgaWYodmFsdWUuYm9keSl7XG4gICAgICAgIHJlc3VsdCArPSAnXFxuXFxuJyArIHZhbHVlLmJvZHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gJ1xcblxcbicgKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KS5qb2luKCdcXG4nKTtcblxuICAgIGJvZHkgKz0gJ1xcbi0tJyArIGJvdW5kYXJ5ICsgJy0tXFxuJztcbiAgICBcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGNvbnRlbnRUeXBlLnJlcGxhY2UoXG4gICAgICAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIFxuICAgICAgJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PScgKyBib3VuZGFyeVxuICAgICk7XG4gIH0gZWxzZSBpZihjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgIT09IC0xKXtcbiAgICBpZih0eXBlb2YgYm9keSAhPT0gJ3N0cmluZycpe1xuICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib2R5O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IgPSBlcnJvclR5cGVzLkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IsXG4gIEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvciA9IGVycm9yVHlwZXMuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yO1xuXG52YXIgREVGQVVMVF9BQ0NFUFQgPSAnYXBwbGljYXRpb24vanNvbic7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFJlcXVlc3RIZWFkZXJzKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyl7XG4gIGRhdGEgPSBkYXRhIHx8IHt9O1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgaGVhZGVycyA9IHt9O1xuXG4gIG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xuICAgIGlmKHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2hlYWRlcicgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPSBudWxsKXtcbiAgICAgIGhlYWRlcnNbcGFyYW0ubmFtZV0gPSBkYXRhW3BhcmFtLm5hbWVdO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gUGFzc2VkIGhlYWRlcnNcbiAgaWYob3B0aW9ucy5oZWFkZXJzKXtcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgIGhlYWRlcnNba2V5XSA9IG9wdGlvbnMuaGVhZGVyc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQ29udGVudC1UeXBlXG4gIHZhciBjb250ZW50VHlwZSA9IG9wdGlvbnMuY29udGVudFR5cGUgfHwgZ2V0Q29udGVudFR5cGUob3BlcmF0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgaWYoY29udGVudFR5cGUpIHtcbiAgICBpZihoYXNBY2NlcHQob3BlcmF0aW9uLCBjb250ZW50VHlwZSkpe1xuICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBjb250ZW50VHlwZTsgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcihjb250ZW50VHlwZSwgb3BlcmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvLyBBY2NlcHRcbiAgdmFyIGFjY2VwdCA9IG9wdGlvbnMuYWNjZXB0IHx8IERFRkFVTFRfQUNDRVBUO1xuICBpZihhY2NlcHQpe1xuICAgIGlmKGhhc0NvbnRlbnRUeXBlKG9wZXJhdGlvbiwgYWNjZXB0KSl7XG4gICAgICBoZWFkZXJzLkFjY2VwdCA9IGFjY2VwdDsgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yKGFjY2VwdCwgb3BlcmF0aW9uKTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBoZWFkZXJzO1xufTtcblxuZnVuY3Rpb24gZ2V0Q29udGVudFR5cGUob3BlcmF0aW9uLCBkYXRhKXtcbiAgdmFyIGhhc0JvZHkgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5zb21lKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnYm9keScgJiYgKHBhcmFtLm5hbWUgaW4gZGF0YSk7XG4gIH0pO1xuXG4gIGlmIChoYXNCb2R5KXtcbiAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICB9IGVsc2Uge1xuICAgIHZhciBoYXNGb3JtUGFyYW1zID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuc29tZShmdW5jdGlvbihwYXJhbSl7XG4gICAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnZm9ybScgJiYgKHBhcmFtLm5hbWUgaW4gZGF0YSk7XG4gICAgfSk7XG5cbiAgICB2YXIgaGFzRmlsZVBhcmFtID0gaGFzRm9ybVBhcmFtcyAmJiBcbiAgICAgIG9wZXJhdGlvbi5wYXJhbWV0ZXJzLnNvbWUoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gcGFyYW0udHlwZSA9PT0gJ0ZpbGUnICYmIChwYXJhbS5uYW1lIGluIGRhdGEpO1xuICAgICAgfSk7XG5cbiAgICBpZihoYXNGaWxlUGFyYW0pIHJldHVybiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgZWxzZSBpZihoYXNGb3JtUGFyYW1zKSByZXR1cm4gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gIH1cbn1cblxuLy8gQWNjZXB0cyBpcyBhbiBvcHRpb25hbCBmaWVsZCBpbiB0aGUgc3BlYywgYnV0IG11c3QgYmUgZW5mb3JjZWQgd2hlbiBwcmVzZW50XG5mdW5jdGlvbiBoYXNBY2NlcHQob3BlcmF0aW9uLCBjb250ZW50VHlwZSl7XG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb247XG4gIHZhciBhY2NlcHRzID0gb3BlcmF0aW9uLmNvbnN1bWVzIHx8IGFwaURlY2xhcmF0aW9uLmNvbnN1bWVzO1xuXG4gIGlmKGFjY2VwdHMgJiYgYWNjZXB0cy5sZW5ndGgpe1xuICAgIHJldHVybiBhY2NlcHRzLmluZGV4T2YoY29udGVudFR5cGUpICE9PSAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuZXhwb3J0cy5oYXNBY2NlcHQgPSBoYXNBY2NlcHQ7XG5cbi8vIENvbnRlbnQtVHlwZSAocHJvZHVjZXMpIGlzIGFuIG9wdGlvbmFsIGZpZWxkIGluIHRoZSBzcGVjLCBidXQgbXVzdCBiZSBlbmZvcmNlZCB3aGVuIHByZXNlbnRcbmZ1bmN0aW9uIGhhc0NvbnRlbnRUeXBlKG9wZXJhdGlvbiwgY29udGVudFR5cGUpe1xuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLFxuICAgIGNvbnRlbnRUeXBlcyA9IG9wZXJhdGlvbi5wcm9kdWNlcyB8fCBhcGlEZWNsYXJhdGlvbi5wcm9kdWNlcztcblxuICBpZihjb250ZW50VHlwZXMgJiYgY29udGVudFR5cGVzLmxlbmd0aCl7XG4gICAgcmV0dXJuIGNvbnRlbnRUeXBlcy5pbmRleE9mKGNvbnRlbnRUeXBlKSAhPT0gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmV4cG9ydHMuaGFzQ29udGVudFR5cGUgPSBoYXNDb250ZW50VHlwZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIE1pc3NpbmdQYXRoUGFyYW1zRXJyb3IgPSBlcnJvclR5cGVzLk1pc3NpbmdQYXRoUGFyYW1zRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UmVxdWVzdFVybChvcGVyYXRpb24sIGRhdGEpe1xuICB2YXIgdXJsID0gZ2V0VXJsVGVtcGxhdGUob3BlcmF0aW9uKTtcblxuICB1cmwgPSBhcHBseVBhdGhQYXJhbXModXJsLCBvcGVyYXRpb24sIGRhdGEpO1xuXG4gIGlmKCFkYXRhKSByZXR1cm4gdXJsO1xuXG4gIHZhciBxdWVyeVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ3F1ZXJ5JyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9PSB1bmRlZmluZWQ7XG4gIH0pLm1hcChmdW5jdGlvbihwYXJhbSl7XG4gICAgdmFyIGtleSA9IHBhcmFtLm5hbWU7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XG4gIH0pLmpvaW4oJyYnKTtcblxuICBpZihxdWVyeVBhcmFtcykgdXJsICs9ICc/JyArIHF1ZXJ5UGFyYW1zO1xuXG4gIHJldHVybiB1cmw7XG59O1xuXG5mdW5jdGlvbiBhcHBseVBhdGhQYXJhbXModXJsLCBvcGVyYXRpb24sIGRhdGEpe1xuICB2YXIgcGF0aFBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ3BhdGgnO1xuICB9KTtcblxuICB2YXIgbWlzc2luZ1BhcmFtcyA9IHBhdGhQYXJhbXMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gZGF0YVtwYXJhbS5uYW1lXSA9PT0gdW5kZWZpbmVkO1xuICB9KTtcblxuICBpZihtaXNzaW5nUGFyYW1zLmxlbmd0aCl7XG4gICAgdGhyb3cgbmV3IE1pc3NpbmdQYXRoUGFyYW1zRXJyb3IobWlzc2luZ1BhcmFtcy5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgcmV0dXJuIHBhcmFtLm5hbWU7XG4gICAgfSkpO1xuICB9XG5cbiAgcGF0aFBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICB2YXIga2V5ID0gcGFyYW0ubmFtZTtcbiAgICBcbiAgICB2YXIgZXhwID0gbmV3IFJlZ0V4cCgneycgKyBrZXkgKyAnW159XSp9JywgJ2dpJyk7XG5cbiAgICB2YXIgdmFsdWUgPSBkYXRhW2tleV0udG9TdHJpbmcoKTtcbiAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJy8nKS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCcvJyk7XG5cbiAgICB1cmwgPSB1cmwucmVwbGFjZShleHAsIHZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZnVuY3Rpb24gZ2V0VXJsVGVtcGxhdGUob3BlcmF0aW9uKXtcbiAgdmFyIGFwaU9iamVjdCA9IG9wZXJhdGlvbi5hcGlPYmplY3Q7IFxuXG4gIHZhciBiYXNlUGF0aCA9IGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5iYXNlUGF0aDtcbiAgdmFyIHBhdGggPSBhcGlPYmplY3QucGF0aC5yZXBsYWNlKCd7Zm9ybWF0fScsICdqc29uJyk7XG4gIFxuICByZXR1cm4gYmFzZVBhdGggKyBwYXRoO1xufVxuIl19
(9)
});
