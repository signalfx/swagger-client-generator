!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.swaggerJsClientGenerator=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
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
},{}],2:[function(_dereq_,module,exports){
'use strict';

var SwaggerUtils = _dereq_('./SwaggerUtils'),
  ErrorTypes = _dereq_('./ErrorTypes'),
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
},{"./ErrorTypes":1,"./SwaggerUtils":3}],3:[function(_dereq_,module,exports){
'use strict';

var ErrorTypes = _dereq_('./ErrorTypes'),
  DataTypeValidationError = ErrorTypes.DataTypeValidationError;

function validateDataType(candidate, dataType, models){
  models = models || {};

  var type = dataType.type || dataType.dataType || dataType.$ref;

  switch(type){
    case 'integer':
      validateInteger(candidate, dataType);
      break;
    case 'number':
      validateNumber(candidate, dataType);
      break;
    case 'string':
      validateString(candidate, dataType);
      break;
    case 'boolean':
      validateBoolean(candidate);
      break;
    case 'array':
      validateArray(candidate, dataType);
      break;
    case 'void':
      validateVoid(candidate);
      break;
    case 'File':
      validateFile();
      break;
    default:
      // Assumed to be complex model
      var model = models[type];
      validateModel(candidate, model, models);
      break;
  }
}
exports.validateDataType = validateDataType;

function validateInteger(candidate, dataType){
  validateNumber(candidate, dataType);
  if(candidate % 1){
    throw new DataTypeValidationError(candidate + ' must be am integer');
  }
}

function validateNumber(candidate, dataType){
  if(isNaN(candidate)){
    throw new DataTypeValidationError(candidate + ' must be a number');
  }

  if(('minimum' in dataType) && candidate < dataType.minimum){
    throw new DataTypeValidationError(candidate + ' must be at least ' + dataType.minimum);
  }
  
  if(('maximum' in dataType) && candidate > dataType.maximum){
    throw new DataTypeValidationError(candidate + ' must be at most ' + dataType.maximum);
  }
}

function validateBoolean(candidate){
  if(!(typeof candidate === 'boolean' || candidate instanceof Boolean)){
    throw new DataTypeValidationError(candidate + ' must be boolean');
  }
}

function validateArray(candidate, dataType, models){
  if(!Array.isArray(candidate)){
    throw new DataTypeValidationError(candidate + ' must be an array');
  }

  var items = dataType.items;

  if(dataType.uniqueItems){
    var dupeCheck = [];
    var hasDupes = candidate.some(function(value){
      var signature;
      if(items.$ref){
        signature = JSON.stringify(value);
      } else {
        signature = value;
      }
      if(dupeCheck.indexOf(signature) !== -1) return true;
      dupeCheck.push(signature);

      return false;
    });

    if(hasDupes) {
      throw new DataTypeValidationError(candidate + ' can\'t contain dupelicate values');
    }
  }

  if(items.$ref){
    var model = models[items.$ref];
    candidate.every(function(value){
      validateModel(model, value, models);
    });
  } else {
    candidate.every(function(value){
      validateDataType(value, items, models);
    });
  }
}

function validateVoid(candidate){
  if(candidate != null){
      throw new DataTypeValidationError(candidate + ' must be null or undefined');
  }
}

function validateFile(){
  // Not sure how to check this, since anything could qualify as 'File'.
}

function validateString(candidate, dataType){
  if(typeof candidate !== 'string'){
    throw new DataTypeValidationError(candidate + ' must be a string');
  }

  if('enum' in dataType){
    if(dataType.enum.indexOf(candidate) === -1) {
      throw new DataTypeValidationError(candidate + ' must be one of these values: ' + dataType.enum.join(', '));
    }
  }
}

function validateModel(candidate, model, models){
  models = models || {};

  var requiredProperties = model.required;
  var missingProperties = requiredProperties.filter(function(propertyName){
    return !(propertyName in candidate);
  });

  if(missingProperties) {
      throw new DataTypeValidationError(
        'Model is missing the following required properites ' + missingProperties.join(', ')
      );
  }

  Object.keys(candidate).forEach(function(propertyName){
    var property = model.properties[propertyName];
    validateDataType(property, candidate[propertyName], models);
  });
}
},{"./ErrorTypes":1}],4:[function(_dereq_,module,exports){
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

var SwaggerUtils = _dereq_('./SwaggerUtils'),
  OperationUtils = _dereq_('./OperationUtils'),
  getRequestHeaders = _dereq_('./getRequestHeaders'),
  getRequestUrl = _dereq_('./getRequestUrl'),
  getRequestBody = _dereq_('./getRequestBody');

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
},{"./OperationUtils":2,"./SwaggerUtils":3,"./getRequestBody":6,"./getRequestHeaders":7,"./getRequestUrl":8}],6:[function(_dereq_,module,exports){
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
},{"./ErrorTypes":1,"./OperationUtils":2}],8:[function(_dereq_,module,exports){
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

},{"./ErrorTypes":1}]},{},[4])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcb3phblxcY29kZVxcc3dhZ2dlci1qcy1jbGllbnQtZ2VuZXJhdG9yXFxub2RlX21vZHVsZXNcXGJvaWxlcnBsYXRlLWd1bHBcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItanMtY2xpZW50LWdlbmVyYXRvci9zcmMvY2xpZW50L0Vycm9yVHlwZXMuanMiLCJjOi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1qcy1jbGllbnQtZ2VuZXJhdG9yL3NyYy9jbGllbnQvT3BlcmF0aW9uVXRpbHMuanMiLCJjOi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1qcy1jbGllbnQtZ2VuZXJhdG9yL3NyYy9jbGllbnQvU3dhZ2dlclV0aWxzLmpzIiwiYzovVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItanMtY2xpZW50LWdlbmVyYXRvci9zcmMvY2xpZW50L2NyZWF0ZUNsaWVudC5qcyIsImM6L1VzZXJzL296YW4vY29kZS9zd2FnZ2VyLWpzLWNsaWVudC1nZW5lcmF0b3Ivc3JjL2NsaWVudC9jcmVhdGVPcGVyYXRpb25IYW5kbGVyLmpzIiwiYzovVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItanMtY2xpZW50LWdlbmVyYXRvci9zcmMvY2xpZW50L2dldFJlcXVlc3RCb2R5LmpzIiwiYzovVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItanMtY2xpZW50LWdlbmVyYXRvci9zcmMvY2xpZW50L2dldFJlcXVlc3RIZWFkZXJzLmpzIiwiYzovVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItanMtY2xpZW50LWdlbmVyYXRvci9zcmMvY2xpZW50L2dldFJlcXVlc3RVcmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gSW52YWxpZFJlcXVlc3RFcnJvcihtZXNzYWdlKXtcclxuICB0aGlzLm5hbWUgPSAnSW52YWxpZFJlcXVlc3RFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnSW52YWxpZCByZXF1ZXN0JztcclxufVxyXG5JbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcclxuSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJbnZhbGlkUmVxdWVzdEVycm9yO1xyXG5cclxuZXhwb3J0cy5JbnZhbGlkUmVxdWVzdEVycm9yID0gSW52YWxpZFJlcXVlc3RFcnJvcjtcclxuXHJcblxyXG5mdW5jdGlvbiBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yKHBhdGhQYXJhbXMpe1xyXG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nUGF0aFBhcmFtc0Vycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnTWlzc2luZyB0aGUgZm9sbG93aW5nIHJlcXVpcmVkIHBhdGggcGFyYW1ldGVyczogJyArIHBhdGhQYXJhbXMuam9pbignJyk7XHJcbn1cclxuTWlzc2luZ1BhdGhQYXJhbXNFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcclxuTWlzc2luZ1BhdGhQYXJhbXNFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yO1xyXG5cclxuZXhwb3J0cy5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yID0gTWlzc2luZ1BhdGhQYXJhbXNFcnJvcjtcclxuXHJcblxyXG5mdW5jdGlvbiBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yKGNvbnRlbnRUeXBlLCBvcGVyYXRpb24pe1xyXG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb247XHJcbiAgdmFyIGNvbnN1bWVzID0gb3BlcmF0aW9uLmNvbnN1bWVzIHx8IGFwaURlY2xhcmF0aW9uLmNvbnN1bWVzIHx8IFtdO1xyXG5cclxuICB0aGlzLm5hbWUgPSAnQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ09wZXJhdGlvbiBbJyArIG9wZXJhdGlvbi5uaWNrbmFtZSArICddIGRvZXMgbm90IGFjY2VwdCAnICsgY29udGVudFR5cGUgKyAnLiBJdCBzdXBwb3J0czogJyArIFxyXG4gICAgY29uc3VtZXMuam9pbignLCAnKTtcclxufVxyXG5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xyXG5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3I7XHJcblxyXG5leHBvcnRzLkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IgPSBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcihhY2NlcHRzLCBvcGVyYXRpb24pe1xyXG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb247XHJcbiAgdmFyIHByb2R1Y2VzID0gb3BlcmF0aW9uLnByb2R1Y2VzIHx8IGFwaURlY2xhcmF0aW9uLnByb2R1Y2VzIHx8IFtdO1xyXG5cclxuICB0aGlzLm5hbWUgPSAnQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnT3BlcmF0aW9uIFsnICsgb3BlcmF0aW9uLm5pY2tuYW1lICsgJ10gZG9lcyBub3QgcHJvZHVjZSAnICsgYWNjZXB0cyArICcuIEl0IHN1cHBvcnRzOiAnICsgXHJcbiAgICBwcm9kdWNlcy5qb2luKCcsICcpO1xyXG59XHJcbkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcclxuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcjtcclxuXHJcbmV4cG9ydHMuQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yID0gQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE9wZXJhdGlvblZhbGlkYXRpb25FcnJvcihvcGVyYXRpb24sIGVycm9ycyl7XHJcbiAgdGhpcy5uYW1lID0gJ09wZXJhdGlvblZhbGlkYXRpb25FcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gb3BlcmF0aW9uLm5pY2tuYW1lICsgJyBmYWlsZWQgdmFsaWRhdGlvbjogXFxuXFx0JyArIGVycm9ycy5qb2luKCdcXG5cXHQnKTtcclxufVxyXG5PcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XHJcbk9wZXJhdGlvblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3I7XHJcblxyXG5leHBvcnRzLk9wZXJhdGlvblZhbGlkYXRpb25FcnJvciA9IE9wZXJhdGlvblZhbGlkYXRpb25FcnJvcjtcclxuXHJcblxyXG5mdW5jdGlvbiBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IocGFyYW1ldGVyLCBlcnJvcnMpe1xyXG4gIHRoaXMubmFtZSA9ICdQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9IHBhcmFtZXRlci5uYW1lICsgJyBmYWlsZWQgdmFsaWRhdGlvbjogXFxuXFx0JyArIGVycm9ycy5qb2luKCdcXG5cXHQnKTtcclxufVxyXG5QYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XHJcblBhcmFtZXRlclZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3I7XHJcblxyXG5leHBvcnRzLlBhcmFtZXRlclZhbGlkYXRpb25FcnJvciA9IFBhcmFtZXRlclZhbGlkYXRpb25FcnJvcjtcclxuXHJcblxyXG5mdW5jdGlvbiBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcihtZXNzYWdlKXtcclxuICB0aGlzLm5hbWUgPSAnRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0ludmFsaWQgZGF0YSB0eXBlJztcclxufVxyXG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XHJcbkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yO1xyXG5cclxuZXhwb3J0cy5EYXRhVHlwZVZhbGlkYXRpb25FcnJvciA9IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBTd2FnZ2VyVXRpbHMgPSByZXF1aXJlKCcuL1N3YWdnZXJVdGlscycpLFxyXG4gIEVycm9yVHlwZXMgPSByZXF1aXJlKCcuL0Vycm9yVHlwZXMnKSxcclxuICBQYXJhbWV0ZXJWYWxpZGF0aW9uRXJyb3IgPSBFcnJvclR5cGVzLlBhcmFtZXRlclZhbGlkYXRpb25FcnJvcixcclxuICBPcGVyYXRpb25WYWxpZGF0aW9uRXJyb3IgPSBFcnJvclR5cGVzLk9wZXJhdGlvblZhbGlkYXRpb25FcnJvcjtcclxuXHJcbmZ1bmN0aW9uIGhhc0FjY2VwdChvcGVyYXRpb24sIGNvbnRlbnRUeXBlKXtcclxuICByZXR1cm4gZXhwb3J0cy5nZXRBY2NlcHRzKG9wZXJhdGlvbikuaW5kZXhPZihjb250ZW50VHlwZSkgIT09IC0xO1xyXG59XHJcbmV4cG9ydHMuaGFzQWNjZXB0ID0gaGFzQWNjZXB0O1xyXG5cclxuZnVuY3Rpb24gaGFzQ29udGVudFR5cGUob3BlcmF0aW9uLCBjb250ZW50VHlwZSl7XHJcbiByZXR1cm4gZXhwb3J0cy5nZXRDb250ZW50VHlwZXMob3BlcmF0aW9uKS5pbmRleE9mKGNvbnRlbnRUeXBlKSAhPT0gLTE7IFxyXG59XHJcbmV4cG9ydHMuaGFzQ29udGVudFR5cGUgPSBoYXNDb250ZW50VHlwZTtcclxuXHJcbmZ1bmN0aW9uIGdldENvbnRlbnRUeXBlcyhvcGVyYXRpb24pe1xyXG4gIHZhciBhcGlEZWNsYXJhdGlvbiA9IG9wZXJhdGlvbi5hcGlPYmplY3QuYXBpRGVjbGFyYXRpb247XHJcbiAgcmV0dXJuIG9wZXJhdGlvbi5wcm9kdWNlcyB8fCBhcGlEZWNsYXJhdGlvbi5wcm9kdWNlcyB8fCBbXTtcclxufVxyXG5leHBvcnRzLmdldENvbnRlbnRUeXBlcyA9IGdldENvbnRlbnRUeXBlcztcclxuXHJcbmZ1bmN0aW9uIGdldEFjY2VwdHMob3BlcmF0aW9uKXtcclxuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xyXG4gIHJldHVybiBvcGVyYXRpb24uY29uc3VtZXMgfHwgYXBpRGVjbGFyYXRpb24uY29uc3VtZXMgfHwgW107XHJcbn1cclxuZXhwb3J0cy5nZXRBY2NlcHRzID0gZ2V0QWNjZXB0cztcclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZShvcGVyYXRpb24sIGRhdGEpe1xyXG4gIHZhciBtb2RlbHMgPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLm1vZGVscztcclxuXHJcbiAgdmFyIHJlcXVpcmVkUGFyYW1zID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgIHJldHVybiBwYXJhbS5yZXF1aXJlZDtcclxuICB9KTtcclxuXHJcbiAgdmFyIGVycm9ycyA9IFtdO1xyXG4gIHJlcXVpcmVkUGFyYW1zLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgdHJ5IHtcclxuICAgICAgU3dhZ2dlclV0aWxzLnZhbGlkYXRlRGF0YVR5cGUoZGF0YVtwYXJhbS5uYW1lXSwgcGFyYW0sIG1vZGVscyk7XHJcbiAgICB9IGNhdGNoKGUpe1xyXG4gICAgICBlcnJvcnMucHVzaChuZXcgUGFyYW1ldGVyVmFsaWRhdGlvbkVycm9yKHBhcmFtLCBbZV0pKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYoZXJyb3JzLmxlbmd0aCl7XHJcbiAgICB0aHJvdyBuZXcgT3BlcmF0aW9uVmFsaWRhdGlvbkVycm9yKG9wZXJhdGlvbiwgZXJyb3JzKTtcclxuICB9XHJcbn1cclxuZXhwb3J0cy52YWxpZGF0ZSA9IHZhbGlkYXRlOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBFcnJvclR5cGVzID0gcmVxdWlyZSgnLi9FcnJvclR5cGVzJyksXHJcbiAgRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IgPSBFcnJvclR5cGVzLkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVEYXRhVHlwZShjYW5kaWRhdGUsIGRhdGFUeXBlLCBtb2RlbHMpe1xyXG4gIG1vZGVscyA9IG1vZGVscyB8fCB7fTtcclxuXHJcbiAgdmFyIHR5cGUgPSBkYXRhVHlwZS50eXBlIHx8IGRhdGFUeXBlLmRhdGFUeXBlIHx8IGRhdGFUeXBlLiRyZWY7XHJcblxyXG4gIHN3aXRjaCh0eXBlKXtcclxuICAgIGNhc2UgJ2ludGVnZXInOlxyXG4gICAgICB2YWxpZGF0ZUludGVnZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgdmFsaWRhdGVOdW1iZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgdmFsaWRhdGVTdHJpbmcoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgIHZhbGlkYXRlQm9vbGVhbihjYW5kaWRhdGUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2FycmF5JzpcclxuICAgICAgdmFsaWRhdGVBcnJheShjYW5kaWRhdGUsIGRhdGFUeXBlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICd2b2lkJzpcclxuICAgICAgdmFsaWRhdGVWb2lkKGNhbmRpZGF0ZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnRmlsZSc6XHJcbiAgICAgIHZhbGlkYXRlRmlsZSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIC8vIEFzc3VtZWQgdG8gYmUgY29tcGxleCBtb2RlbFxyXG4gICAgICB2YXIgbW9kZWwgPSBtb2RlbHNbdHlwZV07XHJcbiAgICAgIHZhbGlkYXRlTW9kZWwoY2FuZGlkYXRlLCBtb2RlbCwgbW9kZWxzKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcbmV4cG9ydHMudmFsaWRhdGVEYXRhVHlwZSA9IHZhbGlkYXRlRGF0YVR5cGU7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUludGVnZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSl7XHJcbiAgdmFsaWRhdGVOdW1iZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XHJcbiAgaWYoY2FuZGlkYXRlICUgMSl7XHJcbiAgICB0aHJvdyBuZXcgRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IoY2FuZGlkYXRlICsgJyBtdXN0IGJlIGFtIGludGVnZXInKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlTnVtYmVyKGNhbmRpZGF0ZSwgZGF0YVR5cGUpe1xyXG4gIGlmKGlzTmFOKGNhbmRpZGF0ZSkpe1xyXG4gICAgdGhyb3cgbmV3IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yKGNhbmRpZGF0ZSArICcgbXVzdCBiZSBhIG51bWJlcicpO1xyXG4gIH1cclxuXHJcbiAgaWYoKCdtaW5pbXVtJyBpbiBkYXRhVHlwZSkgJiYgY2FuZGlkYXRlIDwgZGF0YVR5cGUubWluaW11bSl7XHJcbiAgICB0aHJvdyBuZXcgRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IoY2FuZGlkYXRlICsgJyBtdXN0IGJlIGF0IGxlYXN0ICcgKyBkYXRhVHlwZS5taW5pbXVtKTtcclxuICB9XHJcbiAgXHJcbiAgaWYoKCdtYXhpbXVtJyBpbiBkYXRhVHlwZSkgJiYgY2FuZGlkYXRlID4gZGF0YVR5cGUubWF4aW11bSl7XHJcbiAgICB0aHJvdyBuZXcgRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IoY2FuZGlkYXRlICsgJyBtdXN0IGJlIGF0IG1vc3QgJyArIGRhdGFUeXBlLm1heGltdW0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVCb29sZWFuKGNhbmRpZGF0ZSl7XHJcbiAgaWYoISh0eXBlb2YgY2FuZGlkYXRlID09PSAnYm9vbGVhbicgfHwgY2FuZGlkYXRlIGluc3RhbmNlb2YgQm9vbGVhbikpe1xyXG4gICAgdGhyb3cgbmV3IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yKGNhbmRpZGF0ZSArICcgbXVzdCBiZSBib29sZWFuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUFycmF5KGNhbmRpZGF0ZSwgZGF0YVR5cGUsIG1vZGVscyl7XHJcbiAgaWYoIUFycmF5LmlzQXJyYXkoY2FuZGlkYXRlKSl7XHJcbiAgICB0aHJvdyBuZXcgRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IoY2FuZGlkYXRlICsgJyBtdXN0IGJlIGFuIGFycmF5Jyk7XHJcbiAgfVxyXG5cclxuICB2YXIgaXRlbXMgPSBkYXRhVHlwZS5pdGVtcztcclxuXHJcbiAgaWYoZGF0YVR5cGUudW5pcXVlSXRlbXMpe1xyXG4gICAgdmFyIGR1cGVDaGVjayA9IFtdO1xyXG4gICAgdmFyIGhhc0R1cGVzID0gY2FuZGlkYXRlLnNvbWUoZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICB2YXIgc2lnbmF0dXJlO1xyXG4gICAgICBpZihpdGVtcy4kcmVmKXtcclxuICAgICAgICBzaWduYXR1cmUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2lnbmF0dXJlID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYoZHVwZUNoZWNrLmluZGV4T2Yoc2lnbmF0dXJlKSAhPT0gLTEpIHJldHVybiB0cnVlO1xyXG4gICAgICBkdXBlQ2hlY2sucHVzaChzaWduYXR1cmUpO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoaGFzRHVwZXMpIHtcclxuICAgICAgdGhyb3cgbmV3IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yKGNhbmRpZGF0ZSArICcgY2FuXFwndCBjb250YWluIGR1cGVsaWNhdGUgdmFsdWVzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZihpdGVtcy4kcmVmKXtcclxuICAgIHZhciBtb2RlbCA9IG1vZGVsc1tpdGVtcy4kcmVmXTtcclxuICAgIGNhbmRpZGF0ZS5ldmVyeShmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgIHZhbGlkYXRlTW9kZWwobW9kZWwsIHZhbHVlLCBtb2RlbHMpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNhbmRpZGF0ZS5ldmVyeShmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgIHZhbGlkYXRlRGF0YVR5cGUodmFsdWUsIGl0ZW1zLCBtb2RlbHMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVZvaWQoY2FuZGlkYXRlKXtcclxuICBpZihjYW5kaWRhdGUgIT0gbnVsbCl7XHJcbiAgICAgIHRocm93IG5ldyBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcihjYW5kaWRhdGUgKyAnIG11c3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRmlsZSgpe1xyXG4gIC8vIE5vdCBzdXJlIGhvdyB0byBjaGVjayB0aGlzLCBzaW5jZSBhbnl0aGluZyBjb3VsZCBxdWFsaWZ5IGFzICdGaWxlJy5cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcoY2FuZGlkYXRlLCBkYXRhVHlwZSl7XHJcbiAgaWYodHlwZW9mIGNhbmRpZGF0ZSAhPT0gJ3N0cmluZycpe1xyXG4gICAgdGhyb3cgbmV3IERhdGFUeXBlVmFsaWRhdGlvbkVycm9yKGNhbmRpZGF0ZSArICcgbXVzdCBiZSBhIHN0cmluZycpO1xyXG4gIH1cclxuXHJcbiAgaWYoJ2VudW0nIGluIGRhdGFUeXBlKXtcclxuICAgIGlmKGRhdGFUeXBlLmVudW0uaW5kZXhPZihjYW5kaWRhdGUpID09PSAtMSkge1xyXG4gICAgICB0aHJvdyBuZXcgRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IoY2FuZGlkYXRlICsgJyBtdXN0IGJlIG9uZSBvZiB0aGVzZSB2YWx1ZXM6ICcgKyBkYXRhVHlwZS5lbnVtLmpvaW4oJywgJykpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVNb2RlbChjYW5kaWRhdGUsIG1vZGVsLCBtb2RlbHMpe1xyXG4gIG1vZGVscyA9IG1vZGVscyB8fCB7fTtcclxuXHJcbiAgdmFyIHJlcXVpcmVkUHJvcGVydGllcyA9IG1vZGVsLnJlcXVpcmVkO1xyXG4gIHZhciBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoZnVuY3Rpb24ocHJvcGVydHlOYW1lKXtcclxuICAgIHJldHVybiAhKHByb3BlcnR5TmFtZSBpbiBjYW5kaWRhdGUpO1xyXG4gIH0pO1xyXG5cclxuICBpZihtaXNzaW5nUHJvcGVydGllcykge1xyXG4gICAgICB0aHJvdyBuZXcgRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IoXHJcbiAgICAgICAgJ01vZGVsIGlzIG1pc3NpbmcgdGhlIGZvbGxvd2luZyByZXF1aXJlZCBwcm9wZXJpdGVzICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBPYmplY3Qua2V5cyhjYW5kaWRhdGUpLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKXtcclxuICAgIHZhciBwcm9wZXJ0eSA9IG1vZGVsLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcclxuICAgIHZhbGlkYXRlRGF0YVR5cGUocHJvcGVydHksIGNhbmRpZGF0ZVtwcm9wZXJ0eU5hbWVdLCBtb2RlbHMpO1xyXG4gIH0pO1xyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIgPSByZXF1aXJlKCcuL2NyZWF0ZU9wZXJhdGlvbkhhbmRsZXInKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudChzY2hlbWEsIHJlcXVlc3RIYW5kbGVyKXtcclxuICB2YXIgb3BlcmF0aW9ucyA9IHByb2Nlc3NTY2hlbWEoc2NoZW1hKSxcclxuICAgIGFwaSA9IHt9O1xyXG5cclxuICBmdW5jdGlvbiBnZXRBcGkoYXBpT2JqZWN0KXtcclxuICAgIHZhciBuYW1lID0gZ2V0QXBpTmFtZShhcGlPYmplY3QpO1xyXG5cclxuICAgIGlmKCEobmFtZSBpbiBhcGkpKSBhcGlbbmFtZV0gPSB7fTtcclxuICAgIHJldHVybiBhcGlbbmFtZV07XHJcbiAgfVxyXG5cclxuICBvcGVyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ob3BlcmF0aW9uKXtcclxuICAgIHZhciBhcGkgPSBnZXRBcGkob3BlcmF0aW9uLmFwaU9iamVjdCk7XHJcblxyXG4gICAgYXBpW29wZXJhdGlvbi5uaWNrbmFtZV0gPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyKG9wZXJhdGlvbiwgcmVxdWVzdEhhbmRsZXIpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYXBpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNsaWVudDtcclxuY3JlYXRlQ2xpZW50LmNyZWF0ZU9wZXJhdGlvbkhhbmRsZXIgPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyO1xyXG5cclxuLy8gSGVscHBlciBtZXRob2Qgd2hpY2ggYXNzaW5ncyBiYWNrIHBvaW50ZXIgdG8gb2JqZWN0IHBhcmVudHMgYW5kIHJldHVybnNcclxuLy8gdGhlIGFwaSBvYmplY3RzIHdpdGhpbiB0aGUgZ2l2ZW4gc2NoZW1hLlxyXG5mdW5jdGlvbiBwcm9jZXNzU2NoZW1hKHNjaGVtYSl7XHJcbiAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcclxuICBcclxuICBzY2hlbWEuYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKHJlc291cmNlT2JqZWN0KXtcclxuICAgIHJlc291cmNlT2JqZWN0LnJlc291cmNlTGlzdGluZyA9IHNjaGVtYTtcclxuXHJcbiAgICByZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbi5hcGlzLmZvckVhY2goZnVuY3Rpb24oYXBpT2JqZWN0KXtcclxuICAgICAgYXBpT2JqZWN0LnJlc291cmNlT2JqZWN0ID0gcmVzb3VyY2VPYmplY3Q7XHJcbiAgICAgIGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbiA9IHJlc291cmNlT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xyXG5cclxuICAgICAgYXBpT2JqZWN0Lm9wZXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihvcGVyYXRpb24pe1xyXG4gICAgICAgIG9wZXJhdGlvbi5hcGlPYmplY3QgPSBhcGlPYmplY3Q7XHJcblxyXG4gICAgICAgIG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24ocGFyYW1ldGVyKXtcclxuICAgICAgICAgIHBhcmFtZXRlci5vcGVyYXRpb24gPSBvcGVyYXRpb247XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9wZXJhdGlvbnMucHVzaChvcGVyYXRpb24pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gb3BlcmF0aW9ucztcclxufVxyXG5cclxuLy8gVGFrZXMgYSBwYXRoIGFuZCByZXR1cm5zIGEgSmF2YVNjcmlwdC1mcmllbmRseSB2YXJpYWJsZSBuYW1lXHJcbmZ1bmN0aW9uIGdldEFwaU5hbWUoYXBpT2JqZWN0KXtcclxuICB2YXIgcGF0aCA9IGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5yZXNvdXJjZVBhdGggfHwgYXBpT2JqZWN0LnBhdGg7XHJcblxyXG4gIC8vIFN0cmluZyBub24td29yZCBjaGFyYWN0ZXJzXHJcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFxXL2csICcnKTtcclxuXHJcbiAgLy8gVHVybiBwYXRocyB3aGljaCBsb29rL2xpa2UvdGhpcyB0byBsb29rTGlrZVRoaXNcclxuICBwYXRoID0gcGF0aC5yZXBsYWNlKC8oXFx3KVxcLyhcXHcpL2csIGZ1bmN0aW9uKG1hdGNoLCBwMSwgcDIpe1xyXG4gICAgcmV0dXJuIHAxICsgcDIudG9VcHBlckNhc2UoKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFN3YWdnZXJVdGlscyA9IHJlcXVpcmUoJy4vU3dhZ2dlclV0aWxzJyksXHJcbiAgT3BlcmF0aW9uVXRpbHMgPSByZXF1aXJlKCcuL09wZXJhdGlvblV0aWxzJyksXHJcbiAgZ2V0UmVxdWVzdEhlYWRlcnMgPSByZXF1aXJlKCcuL2dldFJlcXVlc3RIZWFkZXJzJyksXHJcbiAgZ2V0UmVxdWVzdFVybCA9IHJlcXVpcmUoJy4vZ2V0UmVxdWVzdFVybCcpLFxyXG4gIGdldFJlcXVlc3RCb2R5ID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0Qm9keScpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3BlcmF0aW9uSGFuZGxlcihvcGVyYXRpb24sIHJlcXVlc3RIYW5kbGVyKXtcclxuICByZXR1cm4gZnVuY3Rpb24oZGF0YSwgb3B0aW9ucyl7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBkYXRhID0gc2luZ2xlUGFyYW1Db252ZW5pZW5jZVByb2Nlc3NvcihvcGVyYXRpb24sIGRhdGEpO1xyXG5cclxuICAgIE9wZXJhdGlvblV0aWxzLnZhbGlkYXRlKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcblxyXG4gICAgZGF0YSA9IHJlbW92ZVVua25vd25QYXJhbXMob3BlcmF0aW9uLCBkYXRhKTtcclxuICAgIFxyXG4gICAgcmVxdWVzdEhhbmRsZXIoe1xyXG4gICAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcclxuXHJcbiAgICAgIG1ldGhvZDogb3BlcmF0aW9uLm1ldGhvZCxcclxuICAgICAgdXJsOiBnZXRSZXF1ZXN0VXJsKG9wZXJhdGlvbiwgZGF0YSksXHJcbiAgICAgIGhlYWRlcnM6IGdldFJlcXVlc3RIZWFkZXJzKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyksXHJcbiAgICAgIGJvZHk6IGdldFJlcXVlc3RCb2R5KG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucylcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyO1xyXG5cclxuZnVuY3Rpb24gbm9vcCgpe31cclxuY3JlYXRlT3BlcmF0aW9uSGFuZGxlci5sb2dnZXIgPSB7XHJcbiAgZGVidWc6IG5vb3AsXHJcbiAgaW5mbzogbm9vcCxcclxuICB3YXJuOiBub29wLFxyXG4gIGVycm9yOiBub29wXHJcbn07XHJcblxyXG4vLyBFbmFibGVzIGRhdGEgdG8gYmUgcGFzc2VkIGRpcmVjdGx5IGZvciBzaW5nbGUgcGFyYW0gb3BlcmF0aW9ucy5cclxuZnVuY3Rpb24gc2luZ2xlUGFyYW1Db252ZW5pZW5jZVByb2Nlc3NvcihvcGVyYXRpb24sIGRhdGEpe1xyXG4gIC8vIElmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIHBhcmFtcywgYmFpbFxyXG4gIGlmKG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmxlbmd0aCAhPT0gMSkgcmV0dXJuIGRhdGE7XHJcblxyXG4gIHZhciBwYXJhbSA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzWzBdO1xyXG4gIFxyXG4gIC8vIElmIHRoZSBwYXJhbSBpcyBhbHJlYWR5IGRlZmluZWQgZXhwbGljaXRseSwgYmFpbFxyXG4gIGlmKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJiAocGFyYW0ubmFtZSBpbiBkYXRhKSkgcmV0dXJuIGRhdGE7XHJcblxyXG4gIHZhciBtb2RlbHMgPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uLm1vZGVscztcclxuXHJcbiAgLy8gSWYgdGhlIGRhdGEgcGFzc2VkIGlzIGlzIG5vdCB2YWxpZCBmb3IgdGhlIHBhcmFtIGRhdGEgdHlwZSwgYmFpbFxyXG4gIHRyeSB7XHJcbiAgICBTd2FnZ2VyVXRpbHMudmFsaWRhdGVEYXRhVHlwZShkYXRhLCBwYXJhbSwgbW9kZWxzKTsgXHJcbiAgICB2YXIgd3JhcHBlciA9IHt9O1xyXG4gICAgd3JhcHBlcltwYXJhbS5uYW1lXSA9IGRhdGE7XHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxuICB9IGNhdGNoKGUpe1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVVbmtub3duUGFyYW1zKG9wZXJhdGlvbiwgZGF0YSl7XHJcbiAgdmFyIHBhcmFtTmFtZXMgPSB7fTtcclxuICBvcGVyYXRpb24ucGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgIHBhcmFtTmFtZXNbcGFyYW0ubmFtZV0gPSB0cnVlO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgdW5rbm93bktleXMgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoZnVuY3Rpb24oa2V5KXtcclxuICAgIHJldHVybiAhKGtleSBpbiBwYXJhbU5hbWVzKTtcclxuICB9KTtcclxuXHJcbiAgY3JlYXRlT3BlcmF0aW9uSGFuZGxlci5sb2dnZXIud2FybignVW5rbm93biBwYXJhbWV0ZXJzIHJlbW92ZWQgZnJvbSByZXF1ZXN0OicsIFxyXG4gICAgdW5rbm93bktleXMuam9pbignLCAnKSk7XHJcblxyXG4gIHVua25vd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcclxuICAgIGRlbGV0ZSBkYXRhW2tleV07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0Qm9keShvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpe1xyXG4gIHZhciBib2R5ID0gZGF0YS5ib2R5O1xyXG5cclxuICBpZighKG9wdGlvbnMuaGVhZGVycyAmJiAgb3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHJldHVybiBib2R5O1xyXG5cclxuICB2YXIgY29udGVudFR5cGUgPSBvcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xyXG4gIHZhciBwcmVzZW50Rm9ybVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XHJcbiAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnZm9ybScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkO1xyXG4gIH0pO1xyXG5cclxuICBpZihjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKSAhPT0gLTEpe1xyXG4gICAgYm9keSA9IHByZXNlbnRGb3JtUGFyYW1zLm1hcChmdW5jdGlvbihwYXJhbSl7XHJcbiAgICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lLFxyXG4gICAgICAgIHZhbHVlID0gZGF0YVtrZXldO1xyXG4gICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgfSkuam9pbignJicpO1xyXG4gIH0gZWxzZSBpZihjb250ZW50VHlwZS5pbmRleE9mKCdtdWx0aXBhcnQvZm9ybS1kYXRhJykgIT09IC0xKXtcclxuICAgIHZhciByYW5kb21uZXNzID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyKDIpO1xyXG4gICAgdmFyIGJvdW5kYXJ5ID0gJ1N3YWdnZXJCb3VuZGFyeScgKyByYW5kb21uZXNzO1xyXG4gICAgXHJcbiAgICBib2R5ID0gcHJlc2VudEZvcm1QYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgICAgdmFyIGtleSA9IHBhcmFtLm5hbWUsXHJcbiAgICAgICAgdmFsdWUgPSBkYXRhW2tleV0sXHJcbiAgICAgICAgcmVzdWx0ID0gJy0tJyArIGJvdW5kYXJ5ICsgJ1xcbic7XHJcblxyXG4gICAgICByZXN1bHQgKz0gJ0NvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIicgKyBrZXkgKyAnXCInO1xyXG4gICAgICByZXN1bHQgKz0gJ1xcblxcbic7XHJcbiAgICAgIHJlc3VsdCArPSB2YWx1ZSArICdcXG4nO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0pLmpvaW4oJycpO1xyXG5cclxuICAgIGJvZHkgKz0gJy0tJyArIGJvdW5kYXJ5ICsgJy0tXFxuJztcclxuICAgIFxyXG4gICAgb3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGNvbnRlbnRUeXBlLnJlcGxhY2UoXHJcbiAgICAgICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgXHJcbiAgICAgICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0nICsgYm91bmRhcnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYm9keTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgT3BlcmF0aW9uVXRpbHMgPSByZXF1aXJlKCcuL09wZXJhdGlvblV0aWxzJyksXHJcbiAgRXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vRXJyb3JUeXBlcycpLFxyXG4gIENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IgPSBFcnJvclR5cGVzLkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IsXHJcbiAgQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yID0gRXJyb3JUeXBlcy5BY2NlcHRzTm90U3VwcG9ydGVkRXJyb3I7XHJcblxyXG52YXIgREVGQVVMVF9BQ0NFUFQgPSAnYXBwbGljYXRpb24vanNvbic7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UmVxdWVzdEhlYWRlcnMob3BlcmF0aW9uLCBkYXRhLCBvcHRpb25zKXtcclxuICB2YXIgaGVhZGVycyA9IHt9O1xyXG5cclxuICAvLyBQYXNzZWQgaGVhZGVyc1xyXG4gIGlmKGRhdGEuaGVhZGVycyl7XHJcbiAgICBPYmplY3Qua2V5cyhkYXRhLmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcclxuICAgICAgaGVhZGVyc1trZXldID0gZGF0YS5oZWFkZXJzW2tleV07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRlbnQtVHlwZVxyXG4gIHZhciBjb250ZW50VHlwZSA9IGdldENvbnRlbnRUeXBlKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgaWYoY29udGVudFR5cGUpIHtcclxuICAgIGlmKE9wZXJhdGlvblV0aWxzLmhhc0FjY2VwdChvcGVyYXRpb24sIGNvbnRlbnRUeXBlKSl7XHJcbiAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gY29udGVudFR5cGU7ICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yKGNvbnRlbnRUeXBlLCBvcGVyYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWNjZXB0XHJcbiAgdmFyIGFjY2VwdCA9IG9wdGlvbnMuYWNjZXB0IHx8IERFRkFVTFRfQUNDRVBUO1xyXG4gIGlmKGFjY2VwdCl7XHJcbiAgICBpZihPcGVyYXRpb25VdGlscy5oYXNDb250ZW50VHlwZShvcGVyYXRpb24sIGFjY2VwdCkpe1xyXG4gICAgICBoZWFkZXJzLkFjY2VwdCA9IGFjY2VwdDsgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcihhY2NlcHQsIG9wZXJhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBoZWFkZXJzO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0Q29udGVudFR5cGUob3BlcmF0aW9uLCBkYXRhLCBvcHRpb25zKXtcclxuICBpZiAoJ2JvZHknIGluIGRhdGEpe1xyXG4gICAgcmV0dXJuIG9wdGlvbnMuY29udGVudFR5cGUgfHwgJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgaGFzRm9ybVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLnNvbWUoZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnZm9ybSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgaGFzRmlsZVBhcmFtID0gaGFzRm9ybVBhcmFtcyAmJiBcclxuICAgICAgb3BlcmF0aW9uLnBhcmFtZXRlcnMuc29tZShmdW5jdGlvbihwYXJhbSl7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtLnR5cGUgPT09ICdGaWxlJztcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYoaGFzRmlsZVBhcmFtKSByZXR1cm4gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xyXG4gICAgZWxzZSBpZihoYXNGb3JtUGFyYW1zKSByZXR1cm4gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcbiAgfVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIE1pc3NpbmdQYXRoUGFyYW1zRXJyb3IgPSByZXF1aXJlKCcuL0Vycm9yVHlwZXMnKS5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yZ2V0O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0VXJsKG9wZXJhdGlvbiwgZGF0YSl7XHJcbiAgdmFyIHVybCA9IGdldFVybFRlbXBsYXRlKG9wZXJhdGlvbik7XHJcbiAgdXJsID0gYXBwbHlQYXRoUGFyYW1zKHVybCwgb3BlcmF0aW9uLCBkYXRhKTtcclxuXHJcbiAgdmFyIHF1ZXJ5UGFyYW1zID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdxdWVyeScgJiYgZGF0YVtwYXJhbS5uYW1lXSAhPT0gdW5kZWZpbmVkO1xyXG4gIH0pLm1hcChmdW5jdGlvbihwYXJhbSl7XHJcbiAgICB2YXIga2V5ID0gcGFyYW0ubmFtZTtcclxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xyXG4gIH0pLmpvaW4oJyYnKTtcclxuXHJcbiAgaWYocXVlcnlQYXJhbXMpIHVybCArPSAnPycgKyBxdWVyeVBhcmFtcztcclxuXHJcbiAgcmV0dXJuIHVybDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5UGF0aFBhcmFtcyh1cmwsIG9wZXJhdGlvbiwgZGF0YSl7XHJcbiAgdmFyIHBhdGhQYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ3BhdGgnO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgbWlzc2luZ1BhcmFtcyA9IHBhdGhQYXJhbXMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgIHJldHVybiBkYXRhW3BhcmFtLm5hbWVdID09PSB1bmRlZmluZWQ7XHJcbiAgfSk7XHJcblxyXG4gIGlmKG1pc3NpbmdQYXJhbXMubGVuZ3RoKXtcclxuICAgIHRocm93IG5ldyBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yKG1pc3NpbmdQYXJhbXMubWFwKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgICAgcmV0dXJuIHBhcmFtLm5hbWU7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBwYXRoUGFyYW1zLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgdmFyIGtleSA9IHBhcmFtLm5hbWU7XHJcbiAgICBcclxuICAgIHZhciBleHAgPSBuZXcgUmVnRXhwKCd7JyArIGtleSArICdbXn1dKn0nLCAnZ2knKTtcclxuXHJcbiAgICB2YXIgdmFsdWUgPSBkYXRhW2tleV0udG9TdHJpbmcoKTtcclxuICAgIGRlbGV0ZSBkYXRhW2tleV07XHJcbiAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcvJykubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignLycpO1xyXG5cclxuICAgIHVybCA9IHVybC5yZXBsYWNlKGV4cCwgdmFsdWUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0VXJsVGVtcGxhdGUob3BlcmF0aW9uKXtcclxuICB2YXIgYXBpT2JqZWN0ID0gb3BlcmF0aW9uLmFwaU9iamVjdDsgXHJcblxyXG4gIHZhciBiYXNlUGF0aCA9IGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5iYXNlUGF0aDtcclxuICB2YXIgcGF0aCA9IGFwaU9iamVjdC5wYXRoLnJlcGxhY2UoJ3tmb3JtYXR9JywgJ2pzb24nKTtcclxuICBcclxuICByZXR1cm4gYmFzZVBhdGggKyBwYXRoO1xyXG59XHJcbiJdfQ==
(4)
});
