'use strict';

var createOperationHandler = require('./createOperationHandler');

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