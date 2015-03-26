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
    
    if(property === undefined) return;

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
    if (candidate[param.name] !== undefined) return true;
    
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
    var hasAuth = authNames.some(function(authName){
      var auth = authMap[authName];
      var data = authData[authName];

      if(!data) return false;

      if(auth.type === 'apiKey'){
        applyApiKey(auth, authName, data, request);
      } else if(auth.type === 'basicAuth'){
        applyBasicAuth(auth, authName, data.username, data.password, request);
      }

      return true;
    });

    if(!hasAuth){
      throw new MissingAuthorizationError(authNames.join(', '), authMap);
    }
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
    if(arguments.length === 0) return apiAuthData;
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
        if(arguments.length === 0) return resourceAuthData;
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
          if(arguments.length === 0) return apiObjectAuthData;

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
          if(arguments.length === 0) return operationAuthData;

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
      data = prune(data);
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
  
  operationHandler.getUrl = function(data){
    data = prune(data);
    data = singleParamConvenienceProcessor(operation, data);
    data = removeUnknownParams(operation, data);

    var error = swaggerValidate.operation(data, operation, operation.apiObject.apiDeclaration.models);
    if(error) throw error;
    
    return getRequestUrl(operation, data);
  };


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

// Stringify and parse the data to clean up undefined, and non-scalar properties
function prune(data){
  return JSON.parse(JSON.stringify(data));
}

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
  if(typeof data === 'object' &&  data[param.name] !== undefined) return data;

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
    var encodedKey = encodeURIComponent(key);
    var value = data[key];
    
    // For arrays, create multiple of the same query params to accomodate 
    // the spec ambiguity on the issue: http://docs.oracle.com/javaee/6/api/
    // javax/servlet/ServletRequest.html#getParameterValues(java.lang.String)
    if(param.type === 'array' && Array.isArray(value)){
      return value.map(function(item){
        return encodedKey + '=' + encodeURIComponent(item);
      }).join('&');
    } else {
      return encodedKey + '=' + encodeURIComponent(value);  
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9ib2lsZXJwbGF0ZS1ndWxwL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvZXJyb3JUeXBlcy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy9pbmRleC5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZUFycmF5LmpzIiwiL1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivbm9kZV9tb2R1bGVzL3N3YWdnZXItdmFsaWRhdGUvc3JjL3ZhbGlkYXRlRGF0YVR5cGUuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9ub2RlX21vZHVsZXMvc3dhZ2dlci12YWxpZGF0ZS9zcmMvdmFsaWRhdGVNb2RlbC5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZU9wZXJhdGlvbi5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL25vZGVfbW9kdWxlcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZVByaW1pdGl2ZVR5cGVzLmpzIiwiL1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2FwcGx5QXV0aERhdGEuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvY3JlYXRlQ2xpZW50LmpzIiwiL1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2NyZWF0ZU9wZXJhdGlvbkhhbmRsZXIuanMiLCIvVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItY2xpZW50LWdlbmVyYXRvci9zcmMvZXJyb3JUeXBlcy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0Qm9keS5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0SGVhZGVycy5qcyIsIi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1jbGllbnQtZ2VuZXJhdG9yL3NyYy9nZXRSZXF1ZXN0VXJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIERhdGFUeXBlVmFsaWRhdGlvbkVycm9yKG1lc3NhZ2Upe1xuICB0aGlzLm5hbWUgPSAnRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdJbnZhbGlkIGRhdGEgdHlwZSc7XG59XG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjtcbmV4cG9ydHMuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjtcblxuZnVuY3Rpb24gTm90QW5JbnRlZ2VyRXJyb3IodmFsdWUpe1xuICB0aGlzLm5hbWUgPSAnTm90QW5JbnRlZ2VyRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGFuIGludGVnZXInO1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5Ob3RBbkludGVnZXJFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5Ob3RBbkludGVnZXJFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RBbkludGVnZXJFcnJvcjtcbmV4cG9ydHMuTm90QW5JbnRlZ2VyRXJyb3IgPSBOb3RBbkludGVnZXJFcnJvcjtcblxuZnVuY3Rpb24gTm90QU51bWJlckVycm9yKHZhbHVlLCBhY3R1YWxUeXBlKXtcbiAgdGhpcy5uYW1lID0gJ05vdEFOdW1iZXJFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYSBudW1iZXInO1xuICBpZihhY3R1YWxUeXBlKSB0aGlzLm1lc3NhZ2UgKz0gJyAoZ290IGEgJyArIGFjdHVhbFR5cGUgKyAnIGluc3RlYWQpJztcblxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5Ob3RBTnVtYmVyRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTm90QU51bWJlckVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFOdW1iZXJFcnJvcjtcbmV4cG9ydHMuTm90QU51bWJlckVycm9yID0gTm90QU51bWJlckVycm9yO1xuXG5mdW5jdGlvbiBOdW1iZXJUb29MYXJnZUVycm9yKHZhbHVlLCBtYXgpe1xuICB0aGlzLm5hbWUgPSAnTnVtYmVyVG9vTGFyZ2VFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBhYm92ZSB0aGUgbWF4aW11bSBvZiAnICsgbWF4LnRvU3RyaW5nKCk7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk51bWJlclRvb0xhcmdlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTnVtYmVyVG9vTGFyZ2VFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJUb29MYXJnZUVycm9yO1xuZXhwb3J0cy5OdW1iZXJUb29MYXJnZUVycm9yID0gTnVtYmVyVG9vTGFyZ2VFcnJvcjtcblxuZnVuY3Rpb24gTnVtYmVyVG9vU21hbGxFcnJvcih2YWx1ZSwgbWF4KXtcbiAgdGhpcy5uYW1lID0gJ051bWJlclRvb1NtYWxsRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgYWJvdmUgdGhlIG1heGltdW0gb2YgJyArIG1heC50b1N0cmluZygpO1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5OdW1iZXJUb29TbWFsbEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk51bWJlclRvb1NtYWxsRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyVG9vU21hbGxFcnJvcjtcbmV4cG9ydHMuTnVtYmVyVG9vU21hbGxFcnJvciA9IE51bWJlclRvb1NtYWxsRXJyb3I7XG5cbmZ1bmN0aW9uIE5vdEFCb29sZWFuRXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xuICB0aGlzLm5hbWUgPSAnTm90QUJvb2xlYW5FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYSBib29sZWFuJztcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XG5cbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTm90QUJvb2xlYW5FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5Ob3RBQm9vbGVhbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFCb29sZWFuRXJyb3I7XG5leHBvcnRzLk5vdEFCb29sZWFuRXJyb3IgPSBOb3RBQm9vbGVhbkVycm9yO1xuXG5mdW5jdGlvbiBOb3RBbkFycmF5RXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xuICB0aGlzLm5hbWUgPSAnTm90QW5BcnJheUVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhbiBhcnJheSc7XG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk5vdEFuQXJyYXlFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5Ob3RBbkFycmF5RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QW5BcnJheUVycm9yO1xuZXhwb3J0cy5Ob3RBbkFycmF5RXJyb3IgPSBOb3RBbkFycmF5RXJyb3I7XG5cbmZ1bmN0aW9uIER1cGxpY2F0ZUluU2V0RXJyb3IoYXJyLCBkdXBlcyl7XG4gIHRoaXMubmFtZSA9ICdEdXBsaWNhdGVJblNldEVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ0R1cGxpY2F0ZXMgKFwiJyArIGR1cGVzLmpvaW4oJ1wiLCBcIicpICsgJ1wiKSBmb3VuZCBpbiBzZXQ6IFtcIicgKyBhcnIuam9pbignXCIsIFwiJykgKyAnXCInO1xuICB0aGlzLmR1cGVzID0gZHVwZXM7XG4gIHRoaXMudmFsdWUgPSBhcnI7XG59XG5EdXBsaWNhdGVJblNldEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbkR1cGxpY2F0ZUluU2V0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRHVwbGljYXRlSW5TZXRFcnJvcjtcbmV4cG9ydHMuRHVwbGljYXRlSW5TZXRFcnJvciA9IER1cGxpY2F0ZUluU2V0RXJyb3I7XG5cbmZ1bmN0aW9uIE5vdFZvaWRFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XG4gIHRoaXMubmFtZSA9ICdOb3RWb2lkRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkJztcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XG5cbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTm90Vm9pZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk5vdFZvaWRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RWb2lkRXJyb3I7XG5leHBvcnRzLk5vdFZvaWRFcnJvciA9IE5vdFZvaWRFcnJvcjtcblxuZnVuY3Rpb24gTm90QVN0cmluZ0Vycm9yKHZhbHVlLCBhY3R1YWxUeXBlKXtcbiAgdGhpcy5uYW1lID0gJ05vdEFTdHJpbmdFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYSBzdHJpbmcnO1xuICBpZihhY3R1YWxUeXBlKSB0aGlzLm1lc3NhZ2UgKz0gJyAoZ290IGEgJyArIGFjdHVhbFR5cGUgKyAnIGluc3RlYWQpJztcblxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5Ob3RBU3RyaW5nRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTm90QVN0cmluZ0Vycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFTdHJpbmdFcnJvcjtcbmV4cG9ydHMuTm90QVN0cmluZ0Vycm9yID0gTm90QVN0cmluZ0Vycm9yO1xuXG5mdW5jdGlvbiBTdHJpbmdOb3RJbkVudW1FcnJvcih2YWx1ZSwgYWNjZXB0YWJsZVZhbHVlcyl7XG4gIHRoaXMubmFtZSA9ICdTdHJpbmdOb3RJbkVudW1FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYW4gYWNjZXB0YWJsZSB2YWx1ZTogXCInICsgYWNjZXB0YWJsZVZhbHVlcy5qb2luKCdcIiwgXCInKSArICdcIic7XG4gXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cblN0cmluZ05vdEluRW51bUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcblN0cmluZ05vdEluRW51bUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN0cmluZ05vdEluRW51bUVycm9yO1xuZXhwb3J0cy5TdHJpbmdOb3RJbkVudW1FcnJvciA9IFN0cmluZ05vdEluRW51bUVycm9yO1xuXG5cbmZ1bmN0aW9uIEVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yKGVycm9ycyl7XG4gIHRoaXMubmFtZSA9ICdFcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdFcnJvcnMgaW4gYXJyYXkgZWxlbWVudHM6XFxuXFx0JyArIGVycm9ycy5qb2luKCcsXFxuXFx0Jyk7XG4gIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xufVxuRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3I7XG5leHBvcnRzLkVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yID0gRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3I7XG5cbmZ1bmN0aW9uIE1pc3NpbmdWYWx1ZUVycm9yKCl7XG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nVmFsdWVFcnJvcic7XG4gIFxuICB0aGlzLm1lc3NhZ2UgPSAnVGhpcyB2YWx1ZSBpcyByZXF1aXJlZCBidXQgbWlzc2luZyc7XG59XG5NaXNzaW5nVmFsdWVFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5NaXNzaW5nVmFsdWVFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nVmFsdWVFcnJvcjtcbmV4cG9ydHMuTWlzc2luZ1ZhbHVlRXJyb3IgPSBNaXNzaW5nVmFsdWVFcnJvcjtcblxuZnVuY3Rpb24gVmFsaWRhdGlvbkVycm9yKHNwZWNOYW1lLCBzcGVjLCBlcnJvcil7XG4gIHRoaXMubmFtZSA9ICdWYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLnNwZWNOYW1lID0gc3BlY05hbWU7XG4gIHRoaXMuc3BlYyA9IHNwZWM7XG4gIHRoaXMuZXJyb3IgPSBlcnJvcjtcblxuICB0aGlzLm1lc3NhZ2UgPSBzcGVjTmFtZSArICcgaXMgaW52YWxpZDogJyArIGVycm9yLm1lc3NhZ2U7XG59XG5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZhbGlkYXRpb25FcnJvcjtcbmV4cG9ydHMuVmFsaWRhdGlvbkVycm9yID0gVmFsaWRhdGlvbkVycm9yO1xuXG5mdW5jdGlvbiBWYWxpZGF0aW9uRXJyb3JzKHZhbHVlLCBzcGVjTmFtZSwgc3BlYywgZXJyb3JzKXtcbiAgdGhpcy5uYW1lID0gJ1ZhbGlkYXRpb25FcnJvcnMnO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgdGhpcy5zcGVjTmFtZSA9IHNwZWNOYW1lO1xuICB0aGlzLnNwZWMgPSBzcGVjO1xuICB0aGlzLmVycm9ycyA9IGVycm9ycyB8fCBbXTtcblxuICB0aGlzLm1lc3NhZ2UgPSBzcGVjTmFtZSArICcgaXMgaW52YWxpZCc7XG5cbiAgaWYodGhpcy5lcnJvcnMubGVuZ3RoKXtcbiAgICB0aGlzLm1lc3NhZ2UgKz0gJzpcXG5cXHQnICsgdGhpcy5lcnJvcnMubWFwKGZ1bmN0aW9uKGUpeyByZXR1cm4gZS5tZXNzYWdlOyB9KS5qb2luKCdcXG5cXHQnKTtcbiAgfVxufVxuVmFsaWRhdGlvbkVycm9ycy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5WYWxpZGF0aW9uRXJyb3JzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZhbGlkYXRpb25FcnJvcnM7XG5leHBvcnRzLlZhbGlkYXRpb25FcnJvcnMgPSBWYWxpZGF0aW9uRXJyb3JzO1xuIiwiZXhwb3J0cy5kYXRhVHlwZSA9IHJlcXVpcmUoJy4vdmFsaWRhdGVEYXRhVHlwZScpO1xuZXhwb3J0cy5tb2RlbCA9IHJlcXVpcmUoJy4vdmFsaWRhdGVNb2RlbCcpO1xuZXhwb3J0cy5vcGVyYXRpb24gPSByZXF1aXJlKCcuL3ZhbGlkYXRlT3BlcmF0aW9uJyk7XG5leHBvcnRzLmFycmF5ID0gcmVxdWlyZSgnLi92YWxpZGF0ZUFycmF5Jyk7XG5leHBvcnRzLmVycm9ycyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpO1xuXG52YXIgcHJpbWl0aXZlcyA9IHJlcXVpcmUoJy4vdmFsaWRhdGVQcmltaXRpdmVUeXBlcycpO1xuZXhwb3J0cy5wcmltaXRpdmUgPSB7XG4gIGludGVnZXI6IHByaW1pdGl2ZXMudmFsaWRhdGVJbnRlZ2VyLFxuICBudW1iZXI6IHByaW1pdGl2ZXMudmFsaWRhdGVOdW1iZXIsXG4gIHN0cmluZzogcHJpbWl0aXZlcy52YWxpZGF0ZVN0cmluZyxcbiAgYm9vbGVhbjogcHJpbWl0aXZlcy52YWxpZGF0ZUJvb2xlYW4sXG4gIHZvaWQ6IHByaW1pdGl2ZXMudmFsaWRhdGVWb2lkLFxuICBmaWxlOiBwcmltaXRpdmVzLnZhbGlkYXRlRmlsZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcbiAgdmFsaWRhdGUgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXJyYXkoY2FuZGlkYXRlLCBkYXRhVHlwZSwgbW9kZWxzKXtcbiAgaWYoIUFycmF5LmlzQXJyYXkoY2FuZGlkYXRlKSl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdEFuQXJyYXlFcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xuICB9XG5cbiAgdmFyIGl0ZW1zID0gZGF0YVR5cGUuaXRlbXM7XG5cbiAgaWYoZGF0YVR5cGUudW5pcXVlSXRlbXMpe1xuICAgIHZhciBkdXBlQ2hlY2sgPSBbXTtcbiAgICB2YXIgZHVwZXMgPSBjYW5kaWRhdGUuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIHZhciBzaWduYXR1cmU7XG4gICAgICBpZihpdGVtcy4kcmVmKXtcbiAgICAgICAgc2lnbmF0dXJlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2lnbmF0dXJlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZihkdXBlQ2hlY2suaW5kZXhPZihzaWduYXR1cmUpICE9PSAtMSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHVwZUNoZWNrLnB1c2goc2lnbmF0dXJlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoZHVwZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuRHVwbGljYXRlSW5TZXRFcnJvcihjYW5kaWRhdGUsIGR1cGVzKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZXJyb3JzO1xuXG4gIGlmKGl0ZW1zLiRyZWYpe1xuICAgIHZhciBtb2RlbCA9IG1vZGVsc1tpdGVtcy4kcmVmXTtcbiAgICBlcnJvcnMgPSBjYW5kaWRhdGUuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5tb2RlbCh2YWx1ZSwgbW9kZWwsIG1vZGVscyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZXJyb3JzID0gY2FuZGlkYXRlLmZpbHRlcihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICByZXR1cm4gdmFsaWRhdGUuZGF0YVR5cGUodmFsdWUsIGl0ZW1zLCBtb2RlbHMpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYoZXJyb3JzLmxlbmd0aCl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLkVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yKGVycm9ycyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVBcnJheTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcbiAgXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGFUeXBlKGNhbmRpZGF0ZSwgZGF0YVR5cGUsIG1vZGVscyl7XG4gIG1vZGVscyA9IG1vZGVscyB8fCB7fTtcbiAgICAgIFxuICB2YXIgdHlwZSA9IGRhdGFUeXBlLnR5cGUgfHwgZGF0YVR5cGUuZGF0YVR5cGUgfHwgZGF0YVR5cGUuJHJlZjtcblxuICBzd2l0Y2godHlwZSl7XG4gICAgY2FzZSAnaW50ZWdlcic6XG4gICAgICByZXR1cm4gdmFsaWRhdGUucHJpbWl0aXZlLmludGVnZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUubnVtYmVyKGNhbmRpZGF0ZSwgZGF0YVR5cGUpO1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdmFsaWRhdGUucHJpbWl0aXZlLnN0cmluZyhjYW5kaWRhdGUsIGRhdGFUeXBlKTtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuYm9vbGVhbihjYW5kaWRhdGUpO1xuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5hcnJheShjYW5kaWRhdGUsIGRhdGFUeXBlLCBtb2RlbHMpO1xuICAgIGNhc2UgJ3ZvaWQnOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS52b2lkKGNhbmRpZGF0ZSk7XG4gICAgY2FzZSAnRmlsZSc6XG4gICAgICByZXR1cm4gdmFsaWRhdGUucHJpbWl0aXZlLmZpbGUoKTtcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gQXNzdW1lZCB0byBiZSBjb21wbGV4IG1vZGVsXG4gICAgICB2YXIgbW9kZWwgPSBtb2RlbHNbdHlwZV07XG4gICAgICByZXR1cm4gdmFsaWRhdGUubW9kZWwoY2FuZGlkYXRlLCBtb2RlbCwgbW9kZWxzKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZURhdGFUeXBlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcbiAgVmFsaWRhdGlvbkVycm9yID0gZXJyb3JUeXBlcy5WYWxpZGF0aW9uRXJyb3IsXG4gIFZhbGlkYXRpb25FcnJvcnMgPSBlcnJvclR5cGVzLlZhbGlkYXRpb25FcnJvcnMsXG4gIE1pc3NpbmdWYWx1ZUVycm9yID0gZXJyb3JUeXBlcy5NaXNzaW5nVmFsdWVFcnJvcixcbiAgdmFsaWRhdGUgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTIyMTAyL3doYXQtaXMtdGhlLW1vc3QtZWZmaWNpZW50LXdheS10by1jbG9uZS1hbi1vYmplY3RcbmZ1bmN0aW9uIGNsb25lKG9iail7XG4gICAgaWYob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSByZXR1cm4gb2JqO1xuXG4gICAgaWYoQXJyYXkuaXNBcnJheShvYmopKSByZXR1cm4gb2JqLnNsaWNlKCk7XG5cbiAgICB2YXIgdGVtcCA9IHt9O1xuXG4gICAgZm9yKHZhciBrZXkgaW4gb2JqKVxuICAgICAgICB0ZW1wW2tleV0gPSBjbG9uZShvYmpba2V5XSk7XG4gICAgcmV0dXJuIHRlbXA7XG59XG5cbmZ1bmN0aW9uIGFkZEluaGVydGllZFByb3BlcnRpZXMobW9kZWwsIG1vZGVsSWQsIG1vZGVscyl7XG4gIHZhciBwYXJlbnQ7XG5cbiAgT2JqZWN0LmtleXMobW9kZWxzKS5zb21lKGZ1bmN0aW9uKG1vZGVsTmFtZSl7XG4gICAgdmFyIHBvdGVudGlhbFBhcmVudCA9IG1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIGlmICghcG90ZW50aWFsUGFyZW50LnN1YlR5cGVzKSByZXR1cm47XG5cbiAgICBpZihwb3RlbnRpYWxQYXJlbnQuc3ViVHlwZXMuaW5kZXhPZihtb2RlbElkKSAhPT0gLTEpe1xuICAgICAgcGFyZW50ID0gcG90ZW50aWFsUGFyZW50O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZighcGFyZW50KSByZXR1cm47XG5cbiAgZm9yKHZhciBwcm9wZXJ0eU5hbWUgaW4gcGFyZW50LnByb3BlcnRpZXMpe1xuICAgIG1vZGVsLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSA9IHBhcmVudC5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gIH1cbiAgXG4gIGlmKHBhcmVudC5yZXF1aXJlZCkgbW9kZWwucmVxdWlyZWQgPSBtb2RlbC5yZXF1aXJlZC5jb25jYXQocGFyZW50LnJlcXVpcmVkKTtcblxuICBhZGRJbmhlcnRpZWRQcm9wZXJ0aWVzKG1vZGVsLCBwYXJlbnQuaWQsIG1vZGVscyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTW9kZWwoY2FuZGlkYXRlLCBtb2RlbCwgbW9kZWxzKXtcbiAgaWYoY2FuZGlkYXRlID09PSBudWxsIHx8IHR5cGVvZiBjYW5kaWRhdGUgIT09ICdvYmplY3QnKXtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25FcnJvcnMoY2FuZGlkYXRlLCBtb2RlbCk7XG4gIH1cblxuICBtb2RlbHMgPSBtb2RlbHMgfHwge307XG5cbiAgbW9kZWwgPSBjbG9uZShtb2RlbCk7XG4gIGlmKCFtb2RlbC5yZXF1aXJlZCkgbW9kZWwucmVxdWlyZWQgPSBbXTtcbiAgYWRkSW5oZXJ0aWVkUHJvcGVydGllcyhtb2RlbCwgbW9kZWwuaWQsIG1vZGVscyk7XG5cbiAgdmFyIGVycm9ycyA9IFtdO1xuXG4gIG1vZGVsLnJlcXVpcmVkLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKXtcbiAgICBpZiAoY2FuZGlkYXRlW3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgdmFyIHByb3BlcnR5ID0gbW9kZWwucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgIHZhciBlcnJvciA9IG5ldyBNaXNzaW5nVmFsdWVFcnJvcigpO1xuICAgIGVycm9ycy5wdXNoKG5ldyBWYWxpZGF0aW9uRXJyb3IocHJvcGVydHlOYW1lLCBwcm9wZXJ0eSwgZXJyb3IpKTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoY2FuZGlkYXRlKS5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5TmFtZSl7XG4gICAgdmFyIHByb3BlcnR5ID0gbW9kZWwucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgIFxuICAgIGlmKHByb3BlcnR5ID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgIHZhciBlcnJvciA9IHZhbGlkYXRlLmRhdGFUeXBlKGNhbmRpZGF0ZVtwcm9wZXJ0eU5hbWVdLCBwcm9wZXJ0eSwgbW9kZWxzKTtcbiAgICBpZihlcnJvcil7XG4gICAgICBlcnJvcnMucHVzaChuZXcgVmFsaWRhdGlvbkVycm9yKHByb3BlcnR5TmFtZSwgcHJvcGVydHksIGVycm9yKSk7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmKGVycm9ycy5sZW5ndGgpe1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbkVycm9ycyhjYW5kaWRhdGUsIG1vZGVsLmlkLCBtb2RlbCwgZXJyb3JzKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZU1vZGVsOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVycm9yVHlwZXMgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKSxcbiAgVmFsaWRhdGlvbkVycm9yID0gZXJyb3JUeXBlcy5WYWxpZGF0aW9uRXJyb3IsXG4gIFZhbGlkYXRpb25FcnJvcnMgPSBlcnJvclR5cGVzLlZhbGlkYXRpb25FcnJvcnMsXG4gIE1pc3NpbmdWYWx1ZUVycm9yID0gZXJyb3JUeXBlcy5NaXNzaW5nVmFsdWVFcnJvcixcbiAgdmFsaWRhdGUgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlT3BlcmF0aW9uKGNhbmRpZGF0ZSwgb3BlcmF0aW9uLCBtb2RlbHMpe1xuICB2YXIgZXJyb3JzID0gW107XG4gIFxuICB2YXIgcHJlc2VudFBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgaWYgKGNhbmRpZGF0ZVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICBpZiAocGFyYW0ucmVxdWlyZWQpIHtcbiAgICAgIHZhciBlcnJvciA9IG5ldyBNaXNzaW5nVmFsdWVFcnJvcigpO1xuICAgICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwYXJhbS5uYW1lLCBwYXJhbSwgZXJyb3IpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIHByZXNlbnRQYXJhbXMuZm9yRWFjaChmdW5jdGlvbihwYXJhbSl7XG4gICAgdmFyIGVycm9yID0gdmFsaWRhdGUuZGF0YVR5cGUoY2FuZGlkYXRlW3BhcmFtLm5hbWVdLCBwYXJhbSwgbW9kZWxzKTtcbiAgICBpZihlcnJvcil7XG4gICAgICBlcnJvcnMucHVzaChuZXcgVmFsaWRhdGlvbkVycm9yKHBhcmFtLm5hbWUsIHBhcmFtLCBlcnJvcikpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZihlcnJvcnMubGVuZ3RoKXtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25FcnJvcnMoY2FuZGlkYXRlLCBvcGVyYXRpb24ubmlja25hbWUsIG9wZXJhdGlvbiwgZXJyb3JzKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZU9wZXJhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSW50ZWdlcihjYW5kaWRhdGUsIGRhdGFUeXBlKXtcbiAgdmFyIGVycm9yID0gdmFsaWRhdGVOdW1iZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XG4gIGlmKGVycm9yKSByZXR1cm4gZXJyb3I7XG5cbiAgaWYoY2FuZGlkYXRlICUgMSl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdEFuSW50ZWdlckVycm9yKGNhbmRpZGF0ZSk7XG4gIH1cbn1cbmV4cG9ydHMudmFsaWRhdGVJbnRlZ2VyID0gdmFsaWRhdGVJbnRlZ2VyO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU51bWJlcihjYW5kaWRhdGUsIGRhdGFUeXBlKXtcbiAgaWYoISh0eXBlb2YgY2FuZGlkYXRlID09PSAnbnVtYmVyJyB8fCBjYW5kaWRhdGUgaW5zdGFuY2VvZiBOdW1iZXIpIHx8IGlzTmFOKGNhbmRpZGF0ZSkpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBTnVtYmVyRXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcbiAgfVxuICBcbiAgaWYoKGRhdGFUeXBlLm1pbmltdW0gIT09IHVuZGVmaW5lZCkgJiYgY2FuZGlkYXRlIDwgcGFyc2VJbnQoZGF0YVR5cGUubWluaW11bSwgMTApKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTnVtYmVyVG9vU21hbGxFcnJvcihjYW5kaWRhdGUsIGRhdGFUeXBlLm1pbmltdW0pO1xuICB9XG4gIFxuICBpZigoZGF0YVR5cGUubWF4aW11bSAhPT0gdW5kZWZpbmVkKSAmJiBjYW5kaWRhdGUgPiBwYXJzZUludChkYXRhVHlwZS5tYXhpbXVtLCAxMCkpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5OdW1iZXJUb29MYXJnZUVycm9yKGNhbmRpZGF0ZSwgZGF0YVR5cGUubWF4aW11bSk7XG4gIH1cbn1cbmV4cG9ydHMudmFsaWRhdGVOdW1iZXIgPSB2YWxpZGF0ZU51bWJlcjtcblxuZnVuY3Rpb24gdmFsaWRhdGVCb29sZWFuKGNhbmRpZGF0ZSl7XG4gIGlmKCEodHlwZW9mIGNhbmRpZGF0ZSA9PT0gJ2Jvb2xlYW4nIHx8IGNhbmRpZGF0ZSBpbnN0YW5jZW9mIEJvb2xlYW4pKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QUJvb2xlYW5FcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xuICB9XG59XG5leHBvcnRzLnZhbGlkYXRlQm9vbGVhbiA9IHZhbGlkYXRlQm9vbGVhbjtcblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZvaWQoY2FuZGlkYXRlKXtcbiAgaWYoY2FuZGlkYXRlICE9IG51bGwpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RWb2lkRXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcbiAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZVZvaWQgPSB2YWxpZGF0ZVZvaWQ7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRmlsZSgpe1xuICAvLyBOb3Qgc3VyZSBob3cgdG8gY2hlY2sgdGhpcywgc2luY2UgYW55dGhpbmcgY291bGQgcXVhbGlmeSBhcyAnRmlsZScuXG59XG5leHBvcnRzLnZhbGlkYXRlRmlsZSA9IHZhbGlkYXRlRmlsZTtcblxuZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcoY2FuZGlkYXRlLCBkYXRhVHlwZSl7XG4gIGlmKHR5cGVvZiBjYW5kaWRhdGUgIT09ICdzdHJpbmcnICYmICEoY2FuZGlkYXRlIGluc3RhbmNlb2YgU3RyaW5nKSl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdEFTdHJpbmdFcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xuICB9XG5cbiAgaWYoJ2VudW0nIGluIGRhdGFUeXBlKXtcbiAgICBpZihkYXRhVHlwZS5lbnVtLmluZGV4T2YoY2FuZGlkYXRlKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5TdHJpbmdOb3RJbkVudW1FcnJvcihjYW5kaWRhdGUsIGRhdGFUeXBlLmVudW0pO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZVN0cmluZyA9IHZhbGlkYXRlU3RyaW5nOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IgPSByZXF1aXJlKCcuL2Vycm9yVHlwZXMnKS5NaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFwcGx5QXV0aERhdGEob3BlcmF0aW9uLCBhdXRoRGF0YSwgcmVxdWVzdCl7XG4gIHZhciBhdXRoTWFwID0gb3BlcmF0aW9uLmF1dGhvcml6YXRpb25zO1xuICBpZighYXV0aE1hcCkgYXV0aE1hcCA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24uYXV0aG9yaXphdGlvbnM7XG4gIGlmKCFhdXRoTWFwKSByZXR1cm47XG5cbiAgdmFyIGF1dGhOYW1lcyA9IE9iamVjdC5rZXlzKGF1dGhNYXApLmZpbHRlcihmdW5jdGlvbihhdXRoTmFtZSl7XG4gICAgLy8gQ3VycmVudGx5IHVuYWJsZSB0byBoYW5kbGUgb2F1dGgyXG4gICAgcmV0dXJuIGF1dGhNYXBbYXV0aE5hbWVdLnR5cGUgIT09ICdvYXV0aDInO1xuICB9KTtcblxuICBpZihhdXRoTmFtZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgaWYoYXV0aE5hbWVzLmxlbmd0aCA9PT0gMSl7XG4gICAgdmFyIGF1dGhOYW1lID0gYXV0aE5hbWVzWzBdO1xuICAgIHZhciBhdXRoID0gYXV0aE1hcFthdXRoTmFtZV07XG5cbiAgICBpZighYXV0aERhdGEpIHRocm93IG5ldyBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lLCBhdXRoKTtcblxuICAgIC8vIFVucGFjayBuZXN0ZWQgYXV0aERhdGEgZm9yIHNpbmdsZSBhdXRoIG9wczogeyBhcGlLZXk6ICcxMjMnIH0gLT4gJzEyMydcbiAgICBpZihhdXRoRGF0YVthdXRoTmFtZV0pIGF1dGhEYXRhID0gYXV0aERhdGFbYXV0aE5hbWVdO1xuXG4gICAgaWYoYXV0aC50eXBlID09PSAnYXBpS2V5Jyl7XG4gICAgICBhcHBseUFwaUtleShhdXRoLCBhdXRoTmFtZSwgYXV0aERhdGEsIHJlcXVlc3QpO1xuICAgIH0gZWxzZSBpZihhdXRoLnR5cGUgPT09ICdiYXNpY0F1dGgnKSB7XG4gICAgICBhcHBseUJhc2ljQXV0aChhdXRoLCBhdXRoTmFtZSwgYXV0aERhdGEudXNlcm5hbWUsIGF1dGhEYXRhLnBhc3N3b3JkLCByZXF1ZXN0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGhhc0F1dGggPSBhdXRoTmFtZXMuc29tZShmdW5jdGlvbihhdXRoTmFtZSl7XG4gICAgICB2YXIgYXV0aCA9IGF1dGhNYXBbYXV0aE5hbWVdO1xuICAgICAgdmFyIGRhdGEgPSBhdXRoRGF0YVthdXRoTmFtZV07XG5cbiAgICAgIGlmKCFkYXRhKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGlmKGF1dGgudHlwZSA9PT0gJ2FwaUtleScpe1xuICAgICAgICBhcHBseUFwaUtleShhdXRoLCBhdXRoTmFtZSwgZGF0YSwgcmVxdWVzdCk7XG4gICAgICB9IGVsc2UgaWYoYXV0aC50eXBlID09PSAnYmFzaWNBdXRoJyl7XG4gICAgICAgIGFwcGx5QmFzaWNBdXRoKGF1dGgsIGF1dGhOYW1lLCBkYXRhLnVzZXJuYW1lLCBkYXRhLnBhc3N3b3JkLCByZXF1ZXN0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICBpZighaGFzQXV0aCl7XG4gICAgICB0aHJvdyBuZXcgTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcihhdXRoTmFtZXMuam9pbignLCAnKSwgYXV0aE1hcCk7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBhcHBseUFwaUtleShhdXRoLCBhdXRoTmFtZSwgYXBpS2V5LCByZXF1ZXN0KXtcbiAgaWYoIWFwaUtleSkgdGhyb3cgbmV3IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IoYXV0aE5hbWUsIGF1dGgpO1xuICBcbiAgaWYoYXV0aC5wYXNzQXMgPT09ICdoZWFkZXInKXtcbiAgICByZXF1ZXN0LmhlYWRlcnNbYXV0aC5rZXluYW1lXSA9IGFwaUtleTtcbiAgfSBlbHNlIGlmKGF1dGgucGFzc0FzID09PSAncXVlcnknKXtcbiAgICB2YXIgdXJsID0gcmVxdWVzdC51cmw7XG4gICAgdmFyIHF1ZXJ5UGFyYW0gPSBhdXRoLmtleW5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXBpS2V5KTtcbiAgICBpZih1cmwuaW5kZXhPZignPycpID09PSAtMSl7XG4gICAgICB1cmwgKz0gJz8nICsgcXVlcnlQYXJhbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoJz8nLCAnPycgKyBxdWVyeVBhcmFtICsgJyYnKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0LnVybCA9IHVybDtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseUJhc2ljQXV0aChhdXRoLCBhdXRoTmFtZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCByZXF1ZXN0KXtcbiAgaWYoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkgdGhyb3cgbmV3IE1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IoYXV0aE5hbWUsIGF1dGgpO1xuICBcbiAgdmFyIHVybCA9IHJlcXVlc3QudXJsO1xuICBcbiAgLy8gT25seSBhZGQgYmFzaWMgYXV0aCBvbmNlXG4gIGlmKHVybC5pbmRleE9mKCdAJykgPT09IC0xKXtcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgnOi8vJywgJzovLycgKyB1c2VybmFtZSArICc6JyArIHBhc3N3b3JkICsgJ0AnKTtcbiAgfVxuXG4gIHJlcXVlc3QudXJsID0gdXJsO1xufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIgPSByZXF1aXJlKCcuL2NyZWF0ZU9wZXJhdGlvbkhhbmRsZXInKTtcblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KHNjaGVtYSwgcmVxdWVzdEhhbmRsZXIpe1xuICB2YXIgYXBpID0ge30sXG4gICAgYXBpQXV0aERhdGEsXG4gICAgYXV0aE1ldGhvZE5hbWUgPSAnYXV0aCc7XG5cbiAgc2NoZW1hID0gcHJvY2Vzc1NjaGVtYShzY2hlbWEpO1xuICBcbiAgLy8gSWYgdGhlICdhdXRoJyBrZXkgaXMgdXNlZCBmb3IgYW55IHJlc291cmNlIG9yIG9wZXJhdGlvbiwgd2UnbGwgdXNlXG4gIC8vICdhdXRob3JpemF0aW9uJyBpbnN0ZWFkIGZvciB0aGUgYXV0aCBtZXRob2RzXG4gIHZhciBhdXRoSXNJblVzZSA9IHNjaGVtYS5hcGlzLnNvbWUoZnVuY3Rpb24ocmVzb3VyY2VPYmplY3Qpe1xuICAgIHJldHVybiByZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5hcGlzLnNvbWUoZnVuY3Rpb24oYXBpT2JqZWN0KXtcbiAgICAgIHZhciByZXNvdXJjZUFwaU5hbWUgPSBnZXRBcGlOYW1lKGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5yZXNvdXJjZVBhdGggfHwgYXBpT2JqZWN0LnBhdGgpO1xuICAgICAgaWYocmVzb3VyY2VBcGlOYW1lID09PSAnYXV0aCcpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGFwaU9iamVjdC5vcGVyYXRpb25zLnNvbWUoZnVuY3Rpb24ob3BlcmF0aW9uKXtcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbi5uaWNrbmFtZSA9PT0gJ2F1dGgnO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICBcbiAgaWYoYXV0aElzSW5Vc2UpIGF1dGhNZXRob2ROYW1lID0gJ2F1dGhvcml6YXRpb24nO1xuXG4gIGFwaVthdXRoTWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpe1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiBhcGlBdXRoRGF0YTtcbiAgICBhcGlBdXRoRGF0YSA9IHByb2Nlc3NBcGlBdXRoQXJncyhhcmd1bWVudHMpO1xuICB9O1xuXG4gIHNjaGVtYS5hcGlzLmZvckVhY2goZnVuY3Rpb24ocmVzb3VyY2VPYmplY3Qpe1xuICAgIHZhciByZXNvdXJjZU5hbWUsXG4gICAgICByZXNvdXJjZUFwaSxcbiAgICAgIHJlc291cmNlQXV0aERhdGE7XG5cbiAgICBpZihyZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5yZXNvdXJjZVBhdGgpe1xuICAgICAgcmVzb3VyY2VOYW1lID0gZ2V0QXBpTmFtZShyZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5yZXNvdXJjZVBhdGgpO1xuICAgICAgcmVzb3VyY2VBcGkgPSBhcGlbcmVzb3VyY2VOYW1lXSA9IHt9O1xuICAgICAgcmVzb3VyY2VBcGlbYXV0aE1ldGhvZE5hbWVdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc291cmNlQXV0aERhdGE7XG4gICAgICAgIHJlc291cmNlQXV0aERhdGEgPSBwcm9jZXNzQXBpQXV0aEFyZ3MoYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb24uYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKGFwaU9iamVjdCl7XG4gICAgICB2YXIgYXBpT2JqZWN0TmFtZSA9IHJlc291cmNlTmFtZSxcbiAgICAgICAgYXBpT2JqZWN0QXBpID0gcmVzb3VyY2VBcGksXG4gICAgICAgIGFwaU9iamVjdEF1dGhEYXRhO1xuXG4gICAgICBpZighYXBpT2JqZWN0TmFtZSl7XG4gICAgICAgIGFwaU9iamVjdE5hbWUgPSBnZXRBcGlOYW1lKGFwaU9iamVjdC5wYXRoKTtcbiAgICAgICAgYXBpT2JqZWN0QXBpID0gYXBpW2FwaU9iamVjdE5hbWVdID0ge307XG4gICAgICAgIGFwaU9iamVjdEFwaVthdXRoTWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpe1xuICAgICAgICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiBhcGlPYmplY3RBdXRoRGF0YTtcblxuICAgICAgICAgIGFwaU9iamVjdEF1dGhEYXRhID0gcHJvY2Vzc0FwaUF1dGhBcmdzKGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGFwaU9iamVjdC5vcGVyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ob3BlcmF0aW9uKXtcbiAgICAgICAgdmFyIG9wZXJhdGlvbkhhbmRsZXJOYW1lID0gb3BlcmF0aW9uLm5pY2tuYW1lLFxuICAgICAgICAgIG9wZXJhdGlvbkF1dGhEYXRhLFxuICAgICAgICAgIG9wZXJhdGlvbkhhbmRsZXI7IFxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0QXV0aERhdGEoKXtcbiAgICAgICAgICByZXR1cm4gb3BlcmF0aW9uQXV0aERhdGEgfHwgYXBpT2JqZWN0QXV0aERhdGEgfHwgcmVzb3VyY2VBdXRoRGF0YSB8fCBhcGlBdXRoRGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wZXJhdGlvbkhhbmRsZXIgPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyKG9wZXJhdGlvbiwgZ2V0QXV0aERhdGEsIHJlcXVlc3RIYW5kbGVyKTtcblxuICAgICAgICBvcGVyYXRpb25IYW5kbGVyW2F1dGhNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG9wZXJhdGlvbkF1dGhEYXRhO1xuXG4gICAgICAgICAgb3BlcmF0aW9uQXV0aERhdGEgPSBwcm9jZXNzQXBpQXV0aEFyZ3MoYXJndW1lbnRzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBhcGlPYmplY3RBcGlbb3BlcmF0aW9uSGFuZGxlck5hbWVdID0gb3BlcmF0aW9uSGFuZGxlcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gYXBpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDbGllbnQ7XG5cbmZ1bmN0aW9uIHByb2Nlc3NBcGlBdXRoQXJncyhhcmdzKXtcbiAgLy8gZm9yIGJhc2ljIGF1dGgsIGFsbG93IGNhbGxzIHdpdGggdHdvIGFyZ3MgKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgaWYodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnICYmIHR5cGVvZiBhcmdzWzFdID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VybmFtZTogYXJnc1swXSxcbiAgICAgIHBhc3N3b3JkOiBhcmdzWzFdXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxufVxuXG4vLyBIZWxwcGVyIG1ldGhvZCB3aGljaCBhc3NpbmdzIGJhY2sgcG9pbnRlciB0byBvYmplY3QgcGFyZW50cyBhbmQgcmV0dXJuc1xuLy8gdGhlIGFwaSBvYmplY3RzIHdpdGhpbiB0aGUgZ2l2ZW4gc2NoZW1hLlxuZnVuY3Rpb24gcHJvY2Vzc1NjaGVtYShzY2hlbWEpe1xuICBzY2hlbWEuYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKHJlc291cmNlT2JqZWN0KXtcbiAgICByZXNvdXJjZU9iamVjdC5yZXNvdXJjZUxpc3RpbmcgPSBzY2hlbWE7XG5cbiAgICByZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5hcGlzLmZvckVhY2goZnVuY3Rpb24oYXBpT2JqZWN0KXtcbiAgICAgIGFwaU9iamVjdC5yZXNvdXJjZU9iamVjdCA9IHJlc291cmNlT2JqZWN0O1xuICAgICAgYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uID0gcmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb247XG5cbiAgICAgIGFwaU9iamVjdC5vcGVyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ob3BlcmF0aW9uKXtcbiAgICAgICAgb3BlcmF0aW9uLmFwaU9iamVjdCA9IGFwaU9iamVjdDtcblxuICAgICAgICBvcGVyYXRpb24ucGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtZXRlcil7XG4gICAgICAgICAgcGFyYW1ldGVyLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNjaGVtYTtcbn1cblxuLy8gVGFrZXMgYSBwYXRoIGFuZCByZXR1cm5zIGEgSmF2YVNjcmlwdC1mcmllbmRseSB2YXJpYWJsZSBuYW1lXG5mdW5jdGlvbiBnZXRBcGlOYW1lKG5hbWUpe1xuICAvLyBTdHJpbmcgbm9uLXdvcmQgY2hhcmFjdGVyc1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9cXFcvZywgJy8nKTtcblxuICAvLyBUdXJuIHBhdGhzIHdoaWNoIGxvb2svbGlrZS90aGlzIHRvIGxvb2tMaWtlVGhpc1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC8oXFx3KVxcLyhcXHcpL2csIGZ1bmN0aW9uKG1hdGNoLCBwMSwgcDIpe1xuICAgIHJldHVybiBwMSArIHAyLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xuXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcLy9nLCAnJyk7XG5cbiAgcmV0dXJuIG5hbWU7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0UmVxdWVzdEhlYWRlcnMgPSByZXF1aXJlKCcuL2dldFJlcXVlc3RIZWFkZXJzJyksXG4gIGdldFJlcXVlc3RVcmwgPSByZXF1aXJlKCcuL2dldFJlcXVlc3RVcmwnKSxcbiAgZ2V0UmVxdWVzdEJvZHkgPSByZXF1aXJlKCcuL2dldFJlcXVlc3RCb2R5JyksXG4gIGFwcGx5QXV0aERhdGEgPSByZXF1aXJlKCcuL2FwcGx5QXV0aERhdGEnKSxcbiAgZXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpLFxuICBzd2FnZ2VyVmFsaWRhdGUgPSByZXF1aXJlKCdzd2FnZ2VyLXZhbGlkYXRlJyk7XG5cbnZhciBhbGxFcnJvclR5cGVzID0ge307XG5PYmplY3Qua2V5cyhzd2FnZ2VyVmFsaWRhdGUuZXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yTmFtZSl7XG4gIGFsbEVycm9yVHlwZXNbZXJyb3JOYW1lXSA9IHN3YWdnZXJWYWxpZGF0ZS5lcnJvcnNbZXJyb3JOYW1lXTtcbn0pO1xuXG5PYmplY3Qua2V5cyhlcnJvclR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yTmFtZSl7XG4gIGFsbEVycm9yVHlwZXNbZXJyb3JOYW1lXSA9IGVycm9yVHlwZXNbZXJyb3JOYW1lXTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVPcGVyYXRpb25IYW5kbGVyKG9wZXJhdGlvbiwgZ2V0QXV0aERhdGEsIHJlcXVlc3RIYW5kbGVyKXtcbiAgZnVuY3Rpb24gUmVxdWVzdChkYXRhLCBvcHRpb25zKXtcbiAgICB0aGlzLm1ldGhvZCA9IG9wZXJhdGlvbi5tZXRob2Q7XG4gICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgdGhpcy5lcnJvclR5cGVzID0gYWxsRXJyb3JUeXBlcztcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICB2YXIgb3BlcmF0aW9uSGFuZGxlciA9IGZ1bmN0aW9uKGRhdGEsIG9wdGlvbnMpe1xuICAgIHZhciBlcnJvcixcbiAgICAgIHJlcXVlc3Q7XG4gICAgXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgXG4gICAgaWYoZGF0YSA9PSBudWxsKSBkYXRhID0ge307XG5cbiAgICAvLyBpZiBhIGZ1bmN0aW9uIGlzIHBhc3NlZCBpbiBhcyBvcHRpb25zLCBhc3N1bWUgaXQncyBhIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgLy8gZm9yIGNvbnZlbmllbmNlXG4gICAgaWYodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpe1xuICAgICAgb3B0aW9ucy5jYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgdHJ5e1xuICAgICAgZGF0YSA9IHBydW5lKGRhdGEpO1xuICAgICAgZGF0YSA9IHNpbmdsZVBhcmFtQ29udmVuaWVuY2VQcm9jZXNzb3Iob3BlcmF0aW9uLCBkYXRhKTtcbiAgICAgIGRhdGEgPSByZW1vdmVVbmtub3duUGFyYW1zKG9wZXJhdGlvbiwgZGF0YSk7XG5cbiAgICAgIGVycm9yID0gc3dhZ2dlclZhbGlkYXRlLm9wZXJhdGlvbihkYXRhLCBvcGVyYXRpb24sIG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ubW9kZWxzKTtcbiAgICAgIFxuICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGRhdGEsIG9wdGlvbnMpO1xuICAgICAgXG4gICAgICAvLyBJZiB3ZSBrbm93IHRoZXJlIGlzIGFuIGVycm9yLCBkb24ndCBhdHRlbXB0IHRvIGNyYWZ0IHRoZSByZXF1ZXN0IHBhcmFtcy5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IHBhcmFtIGdlbmVyYXRvcnMgYXNzdW1lIHZhbGlkIGRhdGEgdG8gd29yayBwcm9wZXJseS5cbiAgICAgIGlmKCFlcnJvcil7XG4gICAgICAgIHJlcXVlc3QudXJsID0gZ2V0UmVxdWVzdFVybChvcGVyYXRpb24sIGRhdGEpO1xuICAgICAgICByZXF1ZXN0LmhlYWRlcnMgPSBnZXRSZXF1ZXN0SGVhZGVycyhvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICByZXF1ZXN0LmJvZHkgPSBnZXRSZXF1ZXN0Qm9keShvcGVyYXRpb24sIGRhdGEsIHJlcXVlc3QuaGVhZGVycyk7XG4gICAgICAgIFxuICAgICAgICBhcHBseUF1dGhEYXRhKG9wZXJhdGlvbiwgZ2V0QXV0aERhdGEoKSwgcmVxdWVzdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIGVycm9yID0gZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyKGVycm9yLCByZXF1ZXN0KTtcbiAgfTtcblxuICAvLyBVc2VmdWwgZm9yIGluc3RhbmNlb2YgY2hlY2tzXG4gIG9wZXJhdGlvbkhhbmRsZXIuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gIG9wZXJhdGlvbkhhbmRsZXIuZXJyb3JUeXBlcyA9IGFsbEVycm9yVHlwZXM7XG5cbiAgLy8gVXNlZnVsIGZvciByZWZsZWN0aW9uXG4gIG9wZXJhdGlvbkhhbmRsZXIub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICBcbiAgb3BlcmF0aW9uSGFuZGxlci5nZXRVcmwgPSBmdW5jdGlvbihkYXRhKXtcbiAgICBkYXRhID0gcHJ1bmUoZGF0YSk7XG4gICAgZGF0YSA9IHNpbmdsZVBhcmFtQ29udmVuaWVuY2VQcm9jZXNzb3Iob3BlcmF0aW9uLCBkYXRhKTtcbiAgICBkYXRhID0gcmVtb3ZlVW5rbm93blBhcmFtcyhvcGVyYXRpb24sIGRhdGEpO1xuXG4gICAgdmFyIGVycm9yID0gc3dhZ2dlclZhbGlkYXRlLm9wZXJhdGlvbihkYXRhLCBvcGVyYXRpb24sIG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb24ubW9kZWxzKTtcbiAgICBpZihlcnJvcikgdGhyb3cgZXJyb3I7XG4gICAgXG4gICAgcmV0dXJuIGdldFJlcXVlc3RVcmwob3BlcmF0aW9uLCBkYXRhKTtcbiAgfTtcblxuXG4gIC8vIENhbiBiZSB1c2VkIHRvIHByZWVtcHRpdmVseSB2YWxpZGF0ZSB3aXRob3V0IGFjdGlvblxuICBvcGVyYXRpb25IYW5kbGVyLnZhbGlkYXRlID0gZnVuY3Rpb24oZGF0YSl7XG4gICAgcmV0dXJuIHN3YWdnZXJWYWxpZGF0ZS5vcGVyYXRpb24oZGF0YSwgb3BlcmF0aW9uLCBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLm1vZGVscyk7XG4gIH07XG5cbiAgcmV0dXJuIG9wZXJhdGlvbkhhbmRsZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXI7XG5cbmZ1bmN0aW9uIG5vb3AoKXt9XG5jcmVhdGVPcGVyYXRpb25IYW5kbGVyLmxvZ2dlciA9IHtcbiAgZGVidWc6IG5vb3AsXG4gIGluZm86IG5vb3AsXG4gIHdhcm46IG5vb3AsXG4gIGVycm9yOiBub29wXG59O1xuXG4vLyBTdHJpbmdpZnkgYW5kIHBhcnNlIHRoZSBkYXRhIHRvIGNsZWFuIHVwIHVuZGVmaW5lZCwgYW5kIG5vbi1zY2FsYXIgcHJvcGVydGllc1xuZnVuY3Rpb24gcHJ1bmUoZGF0YSl7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbn1cblxuLy8gRW5hYmxlcyBkYXRhIHRvIGJlIHBhc3NlZCBkaXJlY3RseSBmb3Igc2luZ2xlIHBhcmFtIG9wZXJhdGlvbnMuXG5mdW5jdGlvbiBzaW5nbGVQYXJhbUNvbnZlbmllbmNlUHJvY2Vzc29yKG9wZXJhdGlvbiwgZGF0YSl7XG4gIC8vIElmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIHBhcmFtcywgYmFpbFxuICB2YXIgcmVxdWlyZWRQYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBwYXJhbS5yZXF1aXJlZDtcbiAgfSk7XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgcmVxdWlyZWQgcGFyYW1zLCBvciBpZiB0aGVyZSBpcyBubyByZXF1aXJlZCBwYXJhbVxuICAvLyBhbmQgdGhlcmUgYXJlIG1hbnkgb3B0aW9uYWwgcGFyYW1zLCBiYWlsXG4gIGlmKHJlcXVpcmVkUGFyYW1zLmxlbmd0aCA+IDEpIHJldHVybiBkYXRhO1xuXG4gIGlmKHJlcXVpcmVkUGFyYW1zLmxlbmd0aCAhPT0gMSAmJiBvcGVyYXRpb24ucGFyYW1ldGVycy5sZW5ndGggIT09IDEpIHJldHVybiBkYXRhO1xuXG4gIHZhciBwYXJhbSA9IHJlcXVpcmVkUGFyYW1zWzBdIHx8IG9wZXJhdGlvbi5wYXJhbWV0ZXJzWzBdO1xuICBcbiAgLy8gSWYgdGhlIHBhcmFtIGlzIGFscmVhZHkgZGVmaW5lZCBleHBsaWNpdGx5LCBiYWlsXG4gIGlmKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJiAgZGF0YVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gZGF0YTtcblxuICB2YXIgbW9kZWxzID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5tb2RlbHM7XG5cbiAgLy8gSWYgdGhlIGRhdGEgcGFzc2VkIGlzIGlzIG5vdCB2YWxpZCBmb3IgdGhlIHBhcmFtIGRhdGEgdHlwZSwgYmFpbFxuICB2YXIgZXJyb3I7XG5cbiAgdHJ5IHtcbiAgICBlcnJvciA9IHN3YWdnZXJWYWxpZGF0ZS5kYXRhVHlwZShkYXRhLCBwYXJhbSwgbW9kZWxzKTsgXG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbiAgXG4gIC8vIElmIHRoZSBkYXRhIHBhc3NlZCBpcyBhIHZhbGlkIHBhcmFtIGRhdGEgdHlwZSwgYmFpbFxuICBpZighZXJyb3Ipe1xuICAgIHZhciB3cmFwcGVyID0ge307XG4gICAgd3JhcHBlcltwYXJhbS5uYW1lXSA9IGRhdGE7XG4gICAgcmV0dXJuIHdyYXBwZXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiBcblxuZnVuY3Rpb24gcmVtb3ZlVW5rbm93blBhcmFtcyhvcGVyYXRpb24sIGRhdGEpe1xuICBpZighZGF0YSB8fCB0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcpIHJldHVybiBkYXRhO1xuXG4gIHZhciBwYXJhbU5hbWVzID0ge307XG4gIG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xuICAgIHBhcmFtTmFtZXNbcGFyYW0ubmFtZV0gPSB0cnVlO1xuICB9KTtcblxuICB2YXIgdW5rbm93bktleXMgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gIShrZXkgaW4gcGFyYW1OYW1lcyk7XG4gIH0pO1xuXG4gIGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIubG9nZ2VyLndhcm4oJ1Vua25vd24gcGFyYW1ldGVycyByZW1vdmVkIGZyb20gcmVxdWVzdDonLCBcbiAgICB1bmtub3duS2V5cy5qb2luKCcsICcpKTtcblxuICB1bmtub3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBJbnZhbGlkUmVxdWVzdEVycm9yKG1lc3NhZ2Upe1xuICB0aGlzLm5hbWUgPSAnSW52YWxpZFJlcXVlc3RFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0ludmFsaWQgcmVxdWVzdCc7XG59XG5JbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSW52YWxpZFJlcXVlc3RFcnJvcjtcblxuZXhwb3J0cy5JbnZhbGlkUmVxdWVzdEVycm9yID0gSW52YWxpZFJlcXVlc3RFcnJvcjtcblxuXG5mdW5jdGlvbiBNaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yKGF1dGhOYW1lLCBhdXRoKXtcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdBdXRob3JpemF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnTm8gZGF0YSBmb3VuZCBmb3IgYXV0aG9yaXphdGlvbjogJyArIGF1dGhOYW1lO1xuICB0aGlzLmF1dGhvcml6YXRpb24gPSBhdXRoO1xufVxuTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcbk1pc3NpbmdBdXRob3JpemF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcjtcblxuZXhwb3J0cy5NaXNzaW5nQXV0aG9yaXphdGlvbkVycm9yID0gTWlzc2luZ0F1dGhvcml6YXRpb25FcnJvcjtcblxuXG5mdW5jdGlvbiBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yKHBhdGhQYXJhbXMpe1xuICB0aGlzLm5hbWUgPSAnTWlzc2luZ1BhdGhQYXJhbXNFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdNaXNzaW5nIHRoZSBmb2xsb3dpbmcgcmVxdWlyZWQgcGF0aCBwYXJhbWV0ZXJzOiAnICsgcGF0aFBhcmFtcy5qb2luKCcnKTtcbn1cbk1pc3NpbmdQYXRoUGFyYW1zRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdQYXRoUGFyYW1zRXJyb3I7XG5cbmV4cG9ydHMuTWlzc2luZ1BhdGhQYXJhbXNFcnJvciA9IE1pc3NpbmdQYXRoUGFyYW1zRXJyb3I7XG5cblxuZnVuY3Rpb24gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcihjb250ZW50VHlwZSwgb3BlcmF0aW9uKXtcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbjtcbiAgdmFyIGNvbnN1bWVzID0gb3BlcmF0aW9uLmNvbnN1bWVzIHx8IGFwaURlY2xhcmF0aW9uLmNvbnN1bWVzIHx8IFtdO1xuXG4gIHRoaXMubmFtZSA9ICdDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ09wZXJhdGlvbiBbJyArIG9wZXJhdGlvbi5uaWNrbmFtZSArICddIGRvZXMgbm90IGFjY2VwdCAnICsgY29udGVudFR5cGUgKyAnLiBJdCBzdXBwb3J0czogJyArIFxuICAgIGNvbnN1bWVzLmpvaW4oJywgJyk7XG59XG5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yO1xuXG5leHBvcnRzLkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IgPSBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yO1xuXG5cbmZ1bmN0aW9uIEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcihhY2NlcHRzLCBvcGVyYXRpb24pe1xuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xuICB2YXIgcHJvZHVjZXMgPSBvcGVyYXRpb24ucHJvZHVjZXMgfHwgYXBpRGVjbGFyYXRpb24ucHJvZHVjZXMgfHwgW107XG5cbiAgdGhpcy5uYW1lID0gJ0FjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdPcGVyYXRpb24gWycgKyBvcGVyYXRpb24ubmlja25hbWUgKyAnXSBkb2VzIG5vdCBwcm9kdWNlICcgKyBhY2NlcHRzICsgJy4gSXQgc3VwcG9ydHM6ICcgKyBcbiAgICBwcm9kdWNlcy5qb2luKCcsICcpO1xufVxuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcjtcblxuZXhwb3J0cy5BY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IgPSBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3I7XG5cblxuZnVuY3Rpb24gT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yKG9wZXJhdGlvbiwgZXJyb3JzKXtcbiAgdGhpcy5uYW1lID0gJ09wZXJhdGlvblZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IG9wZXJhdGlvbi5uaWNrbmFtZSArICcgZmFpbGVkIHZhbGlkYXRpb246IFxcblxcdCcgKyBlcnJvcnMuam9pbignXFxuXFx0Jyk7XG59XG5PcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XG5PcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yO1xuXG5leHBvcnRzLk9wZXJhdGlvblZhbGlkYXRpb25FcnJvciA9IE9wZXJhdGlvblZhbGlkYXRpb25FcnJvcjtcblxuXG5mdW5jdGlvbiBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IocGFyYW1ldGVyLCBlcnJvcnMpe1xuICB0aGlzLm5hbWUgPSAnUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gcGFyYW1ldGVyLm5hbWUgKyAnIGZhaWxlZCB2YWxpZGF0aW9uOiBcXG5cXHQnICsgZXJyb3JzLmpvaW4oJ1xcblxcdCcpO1xufVxuUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xuUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhcmFtZXRlclZhbGlkYXRpb25FcnJvcjtcblxuZXhwb3J0cy5QYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IgPSBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3I7XG5cblxuZnVuY3Rpb24gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IobWVzc2FnZSl7XG4gIHRoaXMubmFtZSA9ICdEYXRhVHlwZVZhbGlkYXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0ludmFsaWQgZGF0YSB0eXBlJztcbn1cbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yO1xuXG5leHBvcnRzLkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yID0gRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3I7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFJlcXVlc3RCb2R5KG9wZXJhdGlvbiwgZGF0YSwgaGVhZGVycyl7XG4gIHZhciBib2R5ID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnYm9keScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPSBudWxsO1xuICB9KS5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgIHJldHVybiBkYXRhW3BhcmFtLm5hbWVdO1xuICB9KVswXTtcblxuICBpZighKGhlYWRlcnMgJiYgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkgcmV0dXJuIGJvZHk7XG5cbiAgdmFyIGNvbnRlbnRUeXBlID0gaGVhZGVyc1snQ29udGVudC1UeXBlJ107XG4gIHZhciBwcmVzZW50Rm9ybVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2Zvcm0nICYmIGRhdGFbcGFyYW0ubmFtZV0gIT0gbnVsbDtcbiAgfSk7XG5cbiAgaWYoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgIT09IC0xKXtcbiAgICBib2R5ID0gcHJlc2VudEZvcm1QYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lLFxuICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgfSkuam9pbignJicpO1xuICB9IGVsc2UgaWYoY29udGVudFR5cGUuaW5kZXhPZignbXVsdGlwYXJ0L2Zvcm0tZGF0YScpICE9PSAtMSl7XG4gICAgdmFyIHJhbmRvbW5lc3MgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMik7XG4gICAgdmFyIGJvdW5kYXJ5ID0gJ1N3YWdnZXJCb3VuZGFyeScgKyByYW5kb21uZXNzO1xuICAgIFxuICAgIGJvZHkgPSBwcmVzZW50Rm9ybVBhcmFtcy5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgdmFyIGtleSA9IHBhcmFtLm5hbWUsXG4gICAgICAgIHZhbHVlID0gZGF0YVtrZXldLFxuICAgICAgICByZXN1bHQgPSAnLS0nICsgYm91bmRhcnk7XG5cbiAgICAgIHJlc3VsdCArPSAnXFxuQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiJyArIGtleSArICdcIic7XG4gICAgICBcbiAgICAgIGlmKHZhbHVlLmNvbnRlbnRUeXBlKXtcbiAgICAgICAgaWYodmFsdWUubmFtZSl7XG4gICAgICAgICAgcmVzdWx0ICs9ICc7IGZpbGVuYW1lPVwiJyArIHZhbHVlLm5hbWUgKyAnXCInO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ICs9ICdcXG5Db250ZW50LVR5cGU6ICcgKyB2YWx1ZS5jb250ZW50VHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYodmFsdWUuY29udGVudFRyYW5zZmVyRW5jb2Rpbmcpe1xuICAgICAgICByZXN1bHQgKz0gJ1xcbkNvbnRlbnQtVHJhbnNmZXItRW5jb2Rpbmc6ICcgKyB2YWx1ZS5jb250ZW50VHJhbnNmZXJFbmNvZGluZztcbiAgICAgIH1cblxuICAgICAgaWYodmFsdWUuYm9keSl7XG4gICAgICAgIHJlc3VsdCArPSAnXFxuXFxuJyArIHZhbHVlLmJvZHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gJ1xcblxcbicgKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KS5qb2luKCdcXG4nKTtcblxuICAgIGJvZHkgKz0gJ1xcbi0tJyArIGJvdW5kYXJ5ICsgJy0tXFxuJztcbiAgICBcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGNvbnRlbnRUeXBlLnJlcGxhY2UoXG4gICAgICAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIFxuICAgICAgJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PScgKyBib3VuZGFyeVxuICAgICk7XG4gIH0gZWxzZSBpZihjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgIT09IC0xKXtcbiAgICBpZih0eXBlb2YgYm9keSAhPT0gJ3N0cmluZycpe1xuICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib2R5O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IgPSBlcnJvclR5cGVzLkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IsXG4gIEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvciA9IGVycm9yVHlwZXMuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yO1xuXG52YXIgREVGQVVMVF9BQ0NFUFQgPSAnYXBwbGljYXRpb24vanNvbic7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFJlcXVlc3RIZWFkZXJzKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyl7XG4gIGRhdGEgPSBkYXRhIHx8IHt9O1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgaGVhZGVycyA9IHt9O1xuXG4gIG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xuICAgIGlmKHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2hlYWRlcicgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPSBudWxsKXtcbiAgICAgIGhlYWRlcnNbcGFyYW0ubmFtZV0gPSBkYXRhW3BhcmFtLm5hbWVdO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gUGFzc2VkIGhlYWRlcnNcbiAgaWYob3B0aW9ucy5oZWFkZXJzKXtcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgIGhlYWRlcnNba2V5XSA9IG9wdGlvbnMuaGVhZGVyc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQ29udGVudC1UeXBlXG4gIHZhciBjb250ZW50VHlwZSA9IG9wdGlvbnMuY29udGVudFR5cGUgfHwgZ2V0Q29udGVudFR5cGUob3BlcmF0aW9uLCBkYXRhLCBvcHRpb25zKTtcbiAgaWYoY29udGVudFR5cGUpIHtcbiAgICBpZihoYXNBY2NlcHQob3BlcmF0aW9uLCBjb250ZW50VHlwZSkpe1xuICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBjb250ZW50VHlwZTsgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcihjb250ZW50VHlwZSwgb3BlcmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvLyBBY2NlcHRcbiAgdmFyIGFjY2VwdCA9IG9wdGlvbnMuYWNjZXB0IHx8IERFRkFVTFRfQUNDRVBUO1xuICBpZihhY2NlcHQpe1xuICAgIGlmKGhhc0NvbnRlbnRUeXBlKG9wZXJhdGlvbiwgYWNjZXB0KSl7XG4gICAgICBoZWFkZXJzLkFjY2VwdCA9IGFjY2VwdDsgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yKGFjY2VwdCwgb3BlcmF0aW9uKTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBoZWFkZXJzO1xufTtcblxuZnVuY3Rpb24gZ2V0Q29udGVudFR5cGUob3BlcmF0aW9uLCBkYXRhKXtcbiAgdmFyIGhhc0JvZHkgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5zb21lKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnYm9keScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkO1xuICB9KTtcblxuICBpZiAoaGFzQm9keSl7XG4gICAgcmV0dXJuICdhcHBsaWNhdGlvbi9qc29uJztcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGFzRm9ybVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLnNvbWUoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2Zvcm0nICYmIGRhdGFbcGFyYW0ubmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgICB9KTtcblxuICAgIHZhciBoYXNGaWxlUGFyYW0gPSBoYXNGb3JtUGFyYW1zICYmIFxuICAgICAgb3BlcmF0aW9uLnBhcmFtZXRlcnMuc29tZShmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiBwYXJhbS50eXBlID09PSAnRmlsZScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgfSk7XG5cbiAgICBpZihoYXNGaWxlUGFyYW0pIHJldHVybiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgZWxzZSBpZihoYXNGb3JtUGFyYW1zKSByZXR1cm4gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gIH1cbn1cblxuLy8gQWNjZXB0cyBpcyBhbiBvcHRpb25hbCBmaWVsZCBpbiB0aGUgc3BlYywgYnV0IG11c3QgYmUgZW5mb3JjZWQgd2hlbiBwcmVzZW50XG5mdW5jdGlvbiBoYXNBY2NlcHQob3BlcmF0aW9uLCBjb250ZW50VHlwZSl7XG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb247XG4gIHZhciBhY2NlcHRzID0gb3BlcmF0aW9uLmNvbnN1bWVzIHx8IGFwaURlY2xhcmF0aW9uLmNvbnN1bWVzO1xuXG4gIGlmKGFjY2VwdHMgJiYgYWNjZXB0cy5sZW5ndGgpe1xuICAgIHJldHVybiBhY2NlcHRzLmluZGV4T2YoY29udGVudFR5cGUpICE9PSAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuZXhwb3J0cy5oYXNBY2NlcHQgPSBoYXNBY2NlcHQ7XG5cbi8vIENvbnRlbnQtVHlwZSAocHJvZHVjZXMpIGlzIGFuIG9wdGlvbmFsIGZpZWxkIGluIHRoZSBzcGVjLCBidXQgbXVzdCBiZSBlbmZvcmNlZCB3aGVuIHByZXNlbnRcbmZ1bmN0aW9uIGhhc0NvbnRlbnRUeXBlKG9wZXJhdGlvbiwgY29udGVudFR5cGUpe1xuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLFxuICAgIGNvbnRlbnRUeXBlcyA9IG9wZXJhdGlvbi5wcm9kdWNlcyB8fCBhcGlEZWNsYXJhdGlvbi5wcm9kdWNlcztcblxuICBpZihjb250ZW50VHlwZXMgJiYgY29udGVudFR5cGVzLmxlbmd0aCl7XG4gICAgcmV0dXJuIGNvbnRlbnRUeXBlcy5pbmRleE9mKGNvbnRlbnRUeXBlKSAhPT0gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmV4cG9ydHMuaGFzQ29udGVudFR5cGUgPSBoYXNDb250ZW50VHlwZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIE1pc3NpbmdQYXRoUGFyYW1zRXJyb3IgPSBlcnJvclR5cGVzLk1pc3NpbmdQYXRoUGFyYW1zRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UmVxdWVzdFVybChvcGVyYXRpb24sIGRhdGEpe1xuICB2YXIgdXJsID0gZ2V0VXJsVGVtcGxhdGUob3BlcmF0aW9uKTtcblxuICB1cmwgPSBhcHBseVBhdGhQYXJhbXModXJsLCBvcGVyYXRpb24sIGRhdGEpO1xuXG4gIGlmKCFkYXRhKSByZXR1cm4gdXJsO1xuXG4gIHZhciBxdWVyeVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ3F1ZXJ5JyAmJiBkYXRhW3BhcmFtLm5hbWVdICE9PSB1bmRlZmluZWQ7XG4gIH0pLm1hcChmdW5jdGlvbihwYXJhbSl7XG4gICAgdmFyIGtleSA9IHBhcmFtLm5hbWU7XG4gICAgdmFyIGVuY29kZWRLZXkgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICB2YXIgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgXG4gICAgLy8gRm9yIGFycmF5cywgY3JlYXRlIG11bHRpcGxlIG9mIHRoZSBzYW1lIHF1ZXJ5IHBhcmFtcyB0byBhY2NvbW9kYXRlIFxuICAgIC8vIHRoZSBzcGVjIGFtYmlndWl0eSBvbiB0aGUgaXNzdWU6IGh0dHA6Ly9kb2NzLm9yYWNsZS5jb20vamF2YWVlLzYvYXBpL1xuICAgIC8vIGphdmF4L3NlcnZsZXQvU2VydmxldFJlcXVlc3QuaHRtbCNnZXRQYXJhbWV0ZXJWYWx1ZXMoamF2YS5sYW5nLlN0cmluZylcbiAgICBpZihwYXJhbS50eXBlID09PSAnYXJyYXknICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKXtcbiAgICAgIHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgIHJldHVybiBlbmNvZGVkS2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0pO1xuICAgICAgfSkuam9pbignJicpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW5jb2RlZEtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7ICBcbiAgICB9XG4gIH0pLmpvaW4oJyYnKTtcblxuICBpZihxdWVyeVBhcmFtcykgdXJsICs9ICc/JyArIHF1ZXJ5UGFyYW1zO1xuXG4gIHJldHVybiB1cmw7XG59O1xuXG5mdW5jdGlvbiBhcHBseVBhdGhQYXJhbXModXJsLCBvcGVyYXRpb24sIGRhdGEpe1xuICB2YXIgcGF0aFBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ3BhdGgnO1xuICB9KTtcblxuICB2YXIgbWlzc2luZ1BhcmFtcyA9IHBhdGhQYXJhbXMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICByZXR1cm4gZGF0YVtwYXJhbS5uYW1lXSA9PT0gdW5kZWZpbmVkO1xuICB9KTtcblxuICBpZihtaXNzaW5nUGFyYW1zLmxlbmd0aCl7XG4gICAgdGhyb3cgbmV3IE1pc3NpbmdQYXRoUGFyYW1zRXJyb3IobWlzc2luZ1BhcmFtcy5tYXAoZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgcmV0dXJuIHBhcmFtLm5hbWU7XG4gICAgfSkpO1xuICB9XG5cbiAgcGF0aFBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcbiAgICB2YXIga2V5ID0gcGFyYW0ubmFtZTtcbiAgICBcbiAgICB2YXIgZXhwID0gbmV3IFJlZ0V4cCgneycgKyBrZXkgKyAnW159XSp9JywgJ2dpJyk7XG5cbiAgICB2YXIgdmFsdWUgPSBkYXRhW2tleV0udG9TdHJpbmcoKTtcbiAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJy8nKS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCcvJyk7XG5cbiAgICB1cmwgPSB1cmwucmVwbGFjZShleHAsIHZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZnVuY3Rpb24gZ2V0VXJsVGVtcGxhdGUob3BlcmF0aW9uKXtcbiAgdmFyIGFwaU9iamVjdCA9IG9wZXJhdGlvbi5hcGlPYmplY3Q7IFxuXG4gIHZhciBiYXNlUGF0aCA9IGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5iYXNlUGF0aDtcbiAgdmFyIHBhdGggPSBhcGlPYmplY3QucGF0aC5yZXBsYWNlKCd7Zm9ybWF0fScsICdqc29uJyk7XG4gIFxuICByZXR1cm4gYmFzZVBhdGggKyBwYXRoO1xufVxuIl19
(9)
});
