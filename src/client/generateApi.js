'use strict';

module.exports = function generateApi(schema, operationHandler){
  var operations = processSchema(schema),
    api = {};

  function getApi(apiObject){
    var name = getApiName(apiObject);

    if(name in api) return api[name];
    return api[name] = {};
  }

  operations.forEach(function(operation){
    var api = getApi(operation.apiObject);

    api[operation.nickname] = operationHandler(operation);
  });

  return api;
};

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
