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
  this.message = 'Missing the following required path parameters: ' + 
    pathParams.join('');
}
MissingPathParamsError.prototype = Object.create(InvalidRequestError.prototype);
MissingPathParamsError.prototype.constructor = MissingPathParamsError;

exports.MissingPathParamsError = MissingPathParamsError;

function ContentTypeNotSupportedError(contentType, operation){
  this.name = 'ContentTypeNotSupportedError';
  this.message = 'Operation [' + operation.nickname + '] does not accept ' + 
    contentType + '. It supports: ' + getOperationAccepts(operation).join(', ');
}
ContentTypeNotSupportedError.prototype = Object.create(InvalidRequestError.prototype);
ContentTypeNotSupportedError.prototype.constructor = ContentTypeNotSupportedError;

exports.ContentTypeNotSupportedError = ContentTypeNotSupportedError;

function AcceptsNotSupportedError(accepts, operation){
  this.name = 'AcceptsNotSupportedError';
  this.message = 'Operation [' + operation.nickname + '] does not produce ' + 
    accepts + '. It supports: ' + getOperationProduces(operation).join(', ');
}
AcceptsNotSupportedError.prototype = Object.create(InvalidRequestError.prototype);
AcceptsNotSupportedError.prototype.constructor = AcceptsNotSupportedError;

exports.AcceptsNotSupportedError = AcceptsNotSupportedError;
},{}],2:[function(_dereq_,module,exports){
'use strict';

var createOperationHandler = _dereq_('./createOperationHandler');

function createClient(schema, requestHandler){
  var operations = processSchema(schema),
    api = {};

  function getApi(apiObject){
    var name = getApiName(apiObject);

    if(name in api) return api[name];
    return api[name] = {};
  }

  operations.forEach(function(operation){
    var api = getApi(operation.apiObject);

    api[operation.nickname] = createOperationHandler(operation, requestHandler);
  });

  return api;
};

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
  return path.replace(/\W/g, '');

  // Turn paths which look/like/this to lookLikeThis
  path = path.replace(/(\w)\/(\w)/g, function(match, p1, p2){
    return p1 + p2.toUpperCase();
  });
}

},{"./createOperationHandler":3}],3:[function(_dereq_,module,exports){
'use strict';

var getRequestHeaders = _dereq_('./getRequestHeaders'),
  getRequestUrl = _dereq_('./getRequestUrl'),
  getRequestBody = _dereq_('./getRequestBody');

function createOperationHandler(operation, requestHandler){
  return function(data, options){
    options = options || {};
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

function noop(){};
createOperationHandler.logger = {
  debug: noop,
  info: noop,
  warn: noop,
  error: noop
};

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
};
},{"./getRequestBody":4,"./getRequestHeaders":5,"./getRequestUrl":6}],4:[function(_dereq_,module,exports){
'use strict';

module.exports = function getRequestBody(operation, data, options){
  var contentType = options.headers['Content-Type'],
    body = data.body;

  if(!contentType) return body;

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
      result += value + "\n";

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
},{}],5:[function(_dereq_,module,exports){
'use strict';

var ErrorTypes = _dereq_('./ErrorTypes'),
  ContentTypeNotSupportedError = ErrorTypes.ContentTypeNotSupportedError,
  AcceptsNotSupportedError = ErrorTypes.AcceptsNotSupportedError;

var DEFAULT_ACCEPT = 'application/json';
module.exports = function getRequestHeaders(operation, data, options){
  // Passed headers
  if(data.headers){
    Object.keys(data.headers).forEach(function(key){
      headers[key] = data.headers[key];
    });
  }

  // Content-Type
  var contentType = getContentType(operation, data, options);
  if(contentType) {
    if(operationConsumes(operation, contentType)){
      headers['Content-Type'] = contentType;  
    } else {
      throw new ContentTypeNotSupportedError(contentType, operation);
    }
  }

  // Accept
  var accept = options.accept || DEFAULT_ACCEPT;
  if(accept){
    if(operationProduces(accept)){
      headers['Accept'] = accept;  
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

function operationConsumes(operation, contentType){
  return getOperationConsumes().indexOf(contentType) !== -1;
}

function operationProduces(operation, contentType){
 return getOperationProduces().indexOf(contentType) !== -1; 
}

function getOperationProduces(operation){
  var apiDeclaration = operation.apiObject.apiDeclaration;
  return operation.produces || apiDeclaration.produces || [];
}

function getOperationConsumes(operation){
  var apiDeclaration = operation.apiObject.apiDeclaration;
  return operation.consumes || apiDeclaration.consumes || [];
}

},{"./ErrorTypes":1}],6:[function(_dereq_,module,exports){
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

},{"./ErrorTypes":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcb3phblxcY29kZVxcc3dhZ2dlci1qcy1jbGllbnQtZ2VuZXJhdG9yXFxub2RlX21vZHVsZXNcXGJvaWxlcnBsYXRlLWd1bHBcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItanMtY2xpZW50LWdlbmVyYXRvci9zcmMvY2xpZW50L0Vycm9yVHlwZXMuanMiLCJjOi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1qcy1jbGllbnQtZ2VuZXJhdG9yL3NyYy9jbGllbnQvY3JlYXRlQ2xpZW50LmpzIiwiYzovVXNlcnMvb3phbi9jb2RlL3N3YWdnZXItanMtY2xpZW50LWdlbmVyYXRvci9zcmMvY2xpZW50L2NyZWF0ZU9wZXJhdGlvbkhhbmRsZXIuanMiLCJjOi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1qcy1jbGllbnQtZ2VuZXJhdG9yL3NyYy9jbGllbnQvZ2V0UmVxdWVzdEJvZHkuanMiLCJjOi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1qcy1jbGllbnQtZ2VuZXJhdG9yL3NyYy9jbGllbnQvZ2V0UmVxdWVzdEhlYWRlcnMuanMiLCJjOi9Vc2Vycy9vemFuL2NvZGUvc3dhZ2dlci1qcy1jbGllbnQtZ2VuZXJhdG9yL3NyYy9jbGllbnQvZ2V0UmVxdWVzdFVybC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIEludmFsaWRSZXF1ZXN0RXJyb3IobWVzc2FnZSl7XHJcbiAgdGhpcy5uYW1lID0gJ0ludmFsaWRSZXF1ZXN0RXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0ludmFsaWQgcmVxdWVzdCc7XHJcbn1cclxuSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XHJcbkludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSW52YWxpZFJlcXVlc3RFcnJvcjtcclxuXHJcbmV4cG9ydHMuSW52YWxpZFJlcXVlc3RFcnJvciA9IEludmFsaWRSZXF1ZXN0RXJyb3I7XHJcblxyXG5mdW5jdGlvbiBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yKHBhdGhQYXJhbXMpe1xyXG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nUGF0aFBhcmFtc0Vycm9yJztcclxuICB0aGlzLm1lc3NhZ2UgPSAnTWlzc2luZyB0aGUgZm9sbG93aW5nIHJlcXVpcmVkIHBhdGggcGFyYW1ldGVyczogJyArIFxyXG4gICAgcGF0aFBhcmFtcy5qb2luKCcnKTtcclxufVxyXG5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW52YWxpZFJlcXVlc3RFcnJvci5wcm90b3R5cGUpO1xyXG5NaXNzaW5nUGF0aFBhcmFtc0Vycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdQYXRoUGFyYW1zRXJyb3I7XHJcblxyXG5leHBvcnRzLk1pc3NpbmdQYXRoUGFyYW1zRXJyb3IgPSBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yO1xyXG5cclxuZnVuY3Rpb24gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcihjb250ZW50VHlwZSwgb3BlcmF0aW9uKXtcclxuICB0aGlzLm5hbWUgPSAnQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcic7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ09wZXJhdGlvbiBbJyArIG9wZXJhdGlvbi5uaWNrbmFtZSArICddIGRvZXMgbm90IGFjY2VwdCAnICsgXHJcbiAgICBjb250ZW50VHlwZSArICcuIEl0IHN1cHBvcnRzOiAnICsgZ2V0T3BlcmF0aW9uQWNjZXB0cyhvcGVyYXRpb24pLmpvaW4oJywgJyk7XHJcbn1cclxuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludmFsaWRSZXF1ZXN0RXJyb3IucHJvdG90eXBlKTtcclxuQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yO1xyXG5cclxuZXhwb3J0cy5Db250ZW50VHlwZU5vdFN1cHBvcnRlZEVycm9yID0gQ29udGVudFR5cGVOb3RTdXBwb3J0ZWRFcnJvcjtcclxuXHJcbmZ1bmN0aW9uIEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcihhY2NlcHRzLCBvcGVyYXRpb24pe1xyXG4gIHRoaXMubmFtZSA9ICdBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3InO1xyXG4gIHRoaXMubWVzc2FnZSA9ICdPcGVyYXRpb24gWycgKyBvcGVyYXRpb24ubmlja25hbWUgKyAnXSBkb2VzIG5vdCBwcm9kdWNlICcgKyBcclxuICAgIGFjY2VwdHMgKyAnLiBJdCBzdXBwb3J0czogJyArIGdldE9wZXJhdGlvblByb2R1Y2VzKG9wZXJhdGlvbikuam9pbignLCAnKTtcclxufVxyXG5BY2NlcHRzTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnZhbGlkUmVxdWVzdEVycm9yLnByb3RvdHlwZSk7XHJcbkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBY2NlcHRzTm90U3VwcG9ydGVkRXJyb3I7XHJcblxyXG5leHBvcnRzLkFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvciA9IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcjsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgY3JlYXRlT3BlcmF0aW9uSGFuZGxlciA9IHJlcXVpcmUoJy4vY3JlYXRlT3BlcmF0aW9uSGFuZGxlcicpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KHNjaGVtYSwgcmVxdWVzdEhhbmRsZXIpe1xyXG4gIHZhciBvcGVyYXRpb25zID0gcHJvY2Vzc1NjaGVtYShzY2hlbWEpLFxyXG4gICAgYXBpID0ge307XHJcblxyXG4gIGZ1bmN0aW9uIGdldEFwaShhcGlPYmplY3Qpe1xyXG4gICAgdmFyIG5hbWUgPSBnZXRBcGlOYW1lKGFwaU9iamVjdCk7XHJcblxyXG4gICAgaWYobmFtZSBpbiBhcGkpIHJldHVybiBhcGlbbmFtZV07XHJcbiAgICByZXR1cm4gYXBpW25hbWVdID0ge307XHJcbiAgfVxyXG5cclxuICBvcGVyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ob3BlcmF0aW9uKXtcclxuICAgIHZhciBhcGkgPSBnZXRBcGkob3BlcmF0aW9uLmFwaU9iamVjdCk7XHJcblxyXG4gICAgYXBpW29wZXJhdGlvbi5uaWNrbmFtZV0gPSBjcmVhdGVPcGVyYXRpb25IYW5kbGVyKG9wZXJhdGlvbiwgcmVxdWVzdEhhbmRsZXIpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYXBpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDbGllbnQ7XHJcbmNyZWF0ZUNsaWVudC5jcmVhdGVPcGVyYXRpb25IYW5kbGVyID0gY3JlYXRlT3BlcmF0aW9uSGFuZGxlcjtcclxuXHJcbi8vIEhlbHBwZXIgbWV0aG9kIHdoaWNoIGFzc2luZ3MgYmFjayBwb2ludGVyIHRvIG9iamVjdCBwYXJlbnRzIGFuZCByZXR1cm5zXHJcbi8vIHRoZSBhcGkgb2JqZWN0cyB3aXRoaW4gdGhlIGdpdmVuIHNjaGVtYS5cclxuZnVuY3Rpb24gcHJvY2Vzc1NjaGVtYShzY2hlbWEpe1xyXG4gIHZhciBvcGVyYXRpb25zID0gW107XHJcbiAgXHJcbiAgc2NoZW1hLmFwaXMuZm9yRWFjaChmdW5jdGlvbihyZXNvdXJjZU9iamVjdCl7XHJcbiAgICByZXNvdXJjZU9iamVjdC5yZXNvdXJjZUxpc3RpbmcgPSBzY2hlbWE7XHJcblxyXG4gICAgcmVzb3VyY2VPYmplY3QuYXBpRGVjbGFyYXRpb24uYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKGFwaU9iamVjdCl7XHJcbiAgICAgIGFwaU9iamVjdC5yZXNvdXJjZU9iamVjdCA9IHJlc291cmNlT2JqZWN0O1xyXG4gICAgICBhcGlPYmplY3QuYXBpRGVjbGFyYXRpb24gPSByZXNvdXJjZU9iamVjdC5hcGlEZWNsYXJhdGlvbjtcclxuXHJcbiAgICAgIGFwaU9iamVjdC5vcGVyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ob3BlcmF0aW9uKXtcclxuICAgICAgICBvcGVyYXRpb24uYXBpT2JqZWN0ID0gYXBpT2JqZWN0O1xyXG4gICAgICAgIG9wZXJhdGlvbnMucHVzaChvcGVyYXRpb24pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gb3BlcmF0aW9ucztcclxufVxyXG5cclxuLy8gVGFrZXMgYSBwYXRoIGFuZCByZXR1cm5zIGEgSmF2YVNjcmlwdC1mcmllbmRseSB2YXJpYWJsZSBuYW1lXHJcbmZ1bmN0aW9uIGdldEFwaU5hbWUoYXBpT2JqZWN0KXtcclxuICB2YXIgcGF0aCA9IGFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbi5yZXNvdXJjZVBhdGggfHwgYXBpT2JqZWN0LnBhdGg7XHJcblxyXG4gIC8vIFN0cmluZyBub24td29yZCBjaGFyYWN0ZXJzXHJcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFxXL2csICcnKTtcclxuXHJcbiAgLy8gVHVybiBwYXRocyB3aGljaCBsb29rL2xpa2UvdGhpcyB0byBsb29rTGlrZVRoaXNcclxuICBwYXRoID0gcGF0aC5yZXBsYWNlKC8oXFx3KVxcLyhcXHcpL2csIGZ1bmN0aW9uKG1hdGNoLCBwMSwgcDIpe1xyXG4gICAgcmV0dXJuIHAxICsgcDIudG9VcHBlckNhc2UoKTtcclxuICB9KTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgZ2V0UmVxdWVzdEhlYWRlcnMgPSByZXF1aXJlKCcuL2dldFJlcXVlc3RIZWFkZXJzJyksXHJcbiAgZ2V0UmVxdWVzdFVybCA9IHJlcXVpcmUoJy4vZ2V0UmVxdWVzdFVybCcpLFxyXG4gIGdldFJlcXVlc3RCb2R5ID0gcmVxdWlyZSgnLi9nZXRSZXF1ZXN0Qm9keScpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3BlcmF0aW9uSGFuZGxlcihvcGVyYXRpb24sIHJlcXVlc3RIYW5kbGVyKXtcclxuICByZXR1cm4gZnVuY3Rpb24oZGF0YSwgb3B0aW9ucyl7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIGRhdGEgPSByZW1vdmVVbmtub3duUGFyYW1zKG9wZXJhdGlvbiwgZGF0YSk7XHJcbiAgICBcclxuICAgIHJlcXVlc3RIYW5kbGVyKHtcclxuICAgICAgb3BlcmF0aW9uOiBvcGVyYXRpb24sXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXHJcblxyXG4gICAgICBtZXRob2Q6IG9wZXJhdGlvbi5tZXRob2QsXHJcbiAgICAgIHVybDogZ2V0UmVxdWVzdFVybChvcGVyYXRpb24sIGRhdGEpLFxyXG4gICAgICBoZWFkZXJzOiBnZXRSZXF1ZXN0SGVhZGVycyhvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpLFxyXG4gICAgICBib2R5OiBnZXRSZXF1ZXN0Qm9keShvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlT3BlcmF0aW9uSGFuZGxlcjtcclxuXHJcbmZ1bmN0aW9uIG5vb3AoKXt9O1xyXG5jcmVhdGVPcGVyYXRpb25IYW5kbGVyLmxvZ2dlciA9IHtcclxuICBkZWJ1Zzogbm9vcCxcclxuICBpbmZvOiBub29wLFxyXG4gIHdhcm46IG5vb3AsXHJcbiAgZXJyb3I6IG5vb3BcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVVua25vd25QYXJhbXMob3BlcmF0aW9uLCBkYXRhKXtcclxuICB2YXIgcGFyYW1OYW1lcyA9IHt9O1xyXG4gIG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgcGFyYW1OYW1lc1twYXJhbS5uYW1lXSA9IHRydWU7XHJcbiAgfSk7XHJcblxyXG4gIHZhciB1bmtub3duS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcihmdW5jdGlvbihrZXkpe1xyXG4gICAgcmV0dXJuICEoa2V5IGluIHBhcmFtTmFtZXMpO1xyXG4gIH0pO1xyXG5cclxuICBjcmVhdGVPcGVyYXRpb25IYW5kbGVyLmxvZ2dlci53YXJuKCdVbmtub3duIHBhcmFtZXRlcnMgcmVtb3ZlZCBmcm9tIHJlcXVlc3Q6JywgXHJcbiAgICB1bmtub3duS2V5cy5qb2luKCcsICcpKTtcclxuXHJcbiAgdW5rbm93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xyXG4gICAgZGVsZXRlIGRhdGFba2V5XTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRSZXF1ZXN0Qm9keShvcGVyYXRpb24sIGRhdGEsIG9wdGlvbnMpe1xyXG4gIHZhciBjb250ZW50VHlwZSA9IG9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10sXHJcbiAgICBib2R5ID0gZGF0YS5ib2R5O1xyXG5cclxuICBpZighY29udGVudFR5cGUpIHJldHVybiBib2R5O1xyXG5cclxuICB2YXIgcHJlc2VudEZvcm1QYXJhbXMgPSBvcGVyYXRpb24ucGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgcmV0dXJuIHBhcmFtLnBhcmFtVHlwZSA9PT0gJ2Zvcm0nICYmIGRhdGFbcGFyYW0ubmFtZV0gIT09IHVuZGVmaW5lZDtcclxuICB9KTtcclxuXHJcbiAgaWYoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgIT09IC0xKXtcclxuICAgIGJvZHkgPSBwcmVzZW50Rm9ybVBhcmFtcy5tYXAoZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgICB2YXIga2V5ID0gcGFyYW0ubmFtZSxcclxuICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XTtcclxuICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICAgIH0pLmpvaW4oJyYnKTtcclxuICB9IGVsc2UgaWYoY29udGVudFR5cGUuaW5kZXhPZignbXVsdGlwYXJ0L2Zvcm0tZGF0YScpICE9PSAtMSl7XHJcbiAgICB2YXIgcmFuZG9tbmVzcyA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnN1YnN0cigyKTtcclxuICAgIHZhciBib3VuZGFyeSA9ICdTd2FnZ2VyQm91bmRhcnknICsgcmFuZG9tbmVzcztcclxuICAgIFxyXG4gICAgYm9keSA9IHByZXNlbnRGb3JtUGFyYW1zLm1hcChmdW5jdGlvbihwYXJhbSl7XHJcbiAgICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lLFxyXG4gICAgICAgIHZhbHVlID0gZGF0YVtrZXldLFxyXG4gICAgICAgIHJlc3VsdCA9ICctLScgKyBib3VuZGFyeSArICdcXG4nO1xyXG5cclxuICAgICAgcmVzdWx0ICs9ICdDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCInICsga2V5ICsgJ1wiJztcclxuICAgICAgcmVzdWx0ICs9ICdcXG5cXG4nO1xyXG4gICAgICByZXN1bHQgKz0gdmFsdWUgKyBcIlxcblwiO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0pLmpvaW4oJycpO1xyXG5cclxuICAgIGJvZHkgKz0gJy0tJyArIGJvdW5kYXJ5ICsgJy0tXFxuJztcclxuICAgIFxyXG4gICAgb3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGNvbnRlbnRUeXBlLnJlcGxhY2UoXHJcbiAgICAgICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgXHJcbiAgICAgICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0nICsgYm91bmRhcnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYm9keTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgRXJyb3JUeXBlcyA9IHJlcXVpcmUoJy4vRXJyb3JUeXBlcycpLFxyXG4gIENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IgPSBFcnJvclR5cGVzLkNvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IsXHJcbiAgQWNjZXB0c05vdFN1cHBvcnRlZEVycm9yID0gRXJyb3JUeXBlcy5BY2NlcHRzTm90U3VwcG9ydGVkRXJyb3I7XHJcblxyXG52YXIgREVGQVVMVF9BQ0NFUFQgPSAnYXBwbGljYXRpb24vanNvbic7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UmVxdWVzdEhlYWRlcnMob3BlcmF0aW9uLCBkYXRhLCBvcHRpb25zKXtcclxuICAvLyBQYXNzZWQgaGVhZGVyc1xyXG4gIGlmKGRhdGEuaGVhZGVycyl7XHJcbiAgICBPYmplY3Qua2V5cyhkYXRhLmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcclxuICAgICAgaGVhZGVyc1trZXldID0gZGF0YS5oZWFkZXJzW2tleV07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRlbnQtVHlwZVxyXG4gIHZhciBjb250ZW50VHlwZSA9IGdldENvbnRlbnRUeXBlKG9wZXJhdGlvbiwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgaWYoY29udGVudFR5cGUpIHtcclxuICAgIGlmKG9wZXJhdGlvbkNvbnN1bWVzKG9wZXJhdGlvbiwgY29udGVudFR5cGUpKXtcclxuICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBjb250ZW50VHlwZTsgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IENvbnRlbnRUeXBlTm90U3VwcG9ydGVkRXJyb3IoY29udGVudFR5cGUsIG9wZXJhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBY2NlcHRcclxuICB2YXIgYWNjZXB0ID0gb3B0aW9ucy5hY2NlcHQgfHwgREVGQVVMVF9BQ0NFUFQ7XHJcbiAgaWYoYWNjZXB0KXtcclxuICAgIGlmKG9wZXJhdGlvblByb2R1Y2VzKGFjY2VwdCkpe1xyXG4gICAgICBoZWFkZXJzWydBY2NlcHQnXSA9IGFjY2VwdDsgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEFjY2VwdHNOb3RTdXBwb3J0ZWRFcnJvcihhY2NlcHQsIG9wZXJhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBoZWFkZXJzO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0Q29udGVudFR5cGUob3BlcmF0aW9uLCBkYXRhLCBvcHRpb25zKXtcclxuICBpZiAoJ2JvZHknIGluIGRhdGEpe1xyXG4gICAgcmV0dXJuIG9wdGlvbnMuY29udGVudFR5cGUgfHwgJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgaGFzRm9ybVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLnNvbWUoZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAnZm9ybSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgaGFzRmlsZVBhcmFtID0gaGFzRm9ybVBhcmFtcyAmJiBcclxuICAgICAgb3BlcmF0aW9uLnBhcmFtZXRlcnMuc29tZShmdW5jdGlvbihwYXJhbSl7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtLnR5cGUgPT09ICdGaWxlJztcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYoaGFzRmlsZVBhcmFtKSByZXR1cm4gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xyXG4gICAgZWxzZSBpZihoYXNGb3JtUGFyYW1zKSByZXR1cm4gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVyYXRpb25Db25zdW1lcyhvcGVyYXRpb24sIGNvbnRlbnRUeXBlKXtcclxuICByZXR1cm4gZ2V0T3BlcmF0aW9uQ29uc3VtZXMoKS5pbmRleE9mKGNvbnRlbnRUeXBlKSAhPT0gLTE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZXJhdGlvblByb2R1Y2VzKG9wZXJhdGlvbiwgY29udGVudFR5cGUpe1xyXG4gcmV0dXJuIGdldE9wZXJhdGlvblByb2R1Y2VzKCkuaW5kZXhPZihjb250ZW50VHlwZSkgIT09IC0xOyBcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3BlcmF0aW9uUHJvZHVjZXMob3BlcmF0aW9uKXtcclxuICB2YXIgYXBpRGVjbGFyYXRpb24gPSBvcGVyYXRpb24uYXBpT2JqZWN0LmFwaURlY2xhcmF0aW9uO1xyXG4gIHJldHVybiBvcGVyYXRpb24ucHJvZHVjZXMgfHwgYXBpRGVjbGFyYXRpb24ucHJvZHVjZXMgfHwgW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9wZXJhdGlvbkNvbnN1bWVzKG9wZXJhdGlvbil7XHJcbiAgdmFyIGFwaURlY2xhcmF0aW9uID0gb3BlcmF0aW9uLmFwaU9iamVjdC5hcGlEZWNsYXJhdGlvbjtcclxuICByZXR1cm4gb3BlcmF0aW9uLmNvbnN1bWVzIHx8IGFwaURlY2xhcmF0aW9uLmNvbnN1bWVzIHx8IFtdO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBNaXNzaW5nUGF0aFBhcmFtc0Vycm9yID0gcmVxdWlyZSgnLi9FcnJvclR5cGVzJykuTWlzc2luZ1BhdGhQYXJhbXNFcnJvcmdldDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UmVxdWVzdFVybChvcGVyYXRpb24sIGRhdGEpe1xyXG4gIHZhciB1cmwgPSBnZXRVcmxUZW1wbGF0ZShvcGVyYXRpb24pO1xyXG4gIHVybCA9IGFwcGx5UGF0aFBhcmFtcyh1cmwsIG9wZXJhdGlvbiwgZGF0YSk7XHJcblxyXG4gIHZhciBxdWVyeVBhcmFtcyA9IG9wZXJhdGlvbi5wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XHJcbiAgICByZXR1cm4gcGFyYW0ucGFyYW1UeXBlID09PSAncXVlcnknICYmIGRhdGFbcGFyYW0ubmFtZV0gIT09IHVuZGVmaW5lZDtcclxuICB9KS5tYXAoZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgdmFyIGtleSA9IHBhcmFtLm5hbWU7XHJcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcclxuICB9KS5qb2luKCcmJyk7XHJcblxyXG4gIGlmKHF1ZXJ5UGFyYW1zKSB1cmwgKz0gJz8nICsgcXVlcnlQYXJhbXM7XHJcblxyXG4gIHJldHVybiB1cmw7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhcHBseVBhdGhQYXJhbXModXJsLCBvcGVyYXRpb24sIGRhdGEpe1xyXG4gIHZhciBwYXRoUGFyYW1zID0gb3BlcmF0aW9uLnBhcmFtZXRlcnMuZmlsdGVyKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgIHJldHVybiBwYXJhbS5wYXJhbVR5cGUgPT09ICdwYXRoJztcclxuICB9KTtcclxuXHJcbiAgdmFyIG1pc3NpbmdQYXJhbXMgPSBwYXRoUGFyYW1zLmZpbHRlcihmdW5jdGlvbihwYXJhbSl7XHJcbiAgICByZXR1cm4gZGF0YVtwYXJhbS5uYW1lXSA9PT0gdW5kZWZpbmVkO1xyXG4gIH0pO1xyXG5cclxuICBpZihtaXNzaW5nUGFyYW1zLmxlbmd0aCl7XHJcbiAgICB0aHJvdyBuZXcgTWlzc2luZ1BhdGhQYXJhbXNFcnJvcihtaXNzaW5nUGFyYW1zLm1hcChmdW5jdGlvbihwYXJhbSl7XHJcbiAgICAgIHJldHVybiBwYXJhbS5uYW1lO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcGF0aFBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgIHZhciBrZXkgPSBwYXJhbS5uYW1lO1xyXG4gICAgXHJcbiAgICB2YXIgZXhwID0gbmV3IFJlZ0V4cCgneycgKyBrZXkgKyAnW159XSp9JywgJ2dpJyk7XHJcblxyXG4gICAgdmFyIHZhbHVlID0gZGF0YVtrZXldLnRvU3RyaW5nKCk7XHJcbiAgICBkZWxldGUgZGF0YVtrZXldO1xyXG4gICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLycpLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJy8nKTtcclxuXHJcbiAgICB1cmwgPSB1cmwucmVwbGFjZShleHAsIHZhbHVlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHVybDtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFVybFRlbXBsYXRlKG9wZXJhdGlvbil7XHJcbiAgdmFyIGFwaU9iamVjdCA9IG9wZXJhdGlvbi5hcGlPYmplY3Q7IFxyXG5cclxuICB2YXIgYmFzZVBhdGggPSBhcGlPYmplY3QuYXBpRGVjbGFyYXRpb24uYmFzZVBhdGg7XHJcbiAgdmFyIHBhdGggPSBhcGlPYmplY3QucGF0aC5yZXBsYWNlKCd7Zm9ybWF0fScsICdqc29uJyk7XHJcbiAgXHJcbiAgcmV0dXJuIGJhc2VQYXRoICsgcGF0aDtcclxufVxyXG4iXX0=
(2)
});
