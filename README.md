# Swagger JS API Generator

This tool allows you to automatically generate an api object from a given
swagger schema. Since this tool doesn't define how resource should be fetched,
it is intended to be composed in to a platform or framework specific resource
handler.

If this library is `require`'d from Node, it comes with `.fetch` and `.save` 
methods to allow you to pull a schema from a given swagger resource listing.
When the library is used client side, it is only a factory function creates an
API object from a schema object. The common flow would be to generate the schema
during your build process and embed it in to your client-side app.

This tool differs from [swagger-js](https://github.com/wordnik/swagger-js)
in that it doesn't define how the resources will be fetched, instead it takes in
a callback function which is called when ever a resource is being called, making
it simple to tie the request logic to the platform or framework of your 
choosing. This library is also an order of magnitude smaller, weighing in at 
~1kb, this is primarily because it doesn't ship with the methods of interacting
with the API server as swagger-js does.

## Example
```js
// in nodejs
var schema = require('swagger-schema');
schema.save('http://api.app.com/api-docs', 'my-schema.json');
```

```js
// in a browser

// Assuming you've loaded my-schema as mySchema
var api = swaggerSchema(mySchema, function(operation){
  return function(data){
    console.log(operation.nickname, 'called with', data);
  }
});

api.user.create('kanye');
// console: 'create called with kanye';
```

## Browser API

### `var api = swaggerSchema(schemaObject, operationHandler)`

#### schemaObject (an object)
An object created by the swagger-schema nodejs library. It's basically a 
single json object of the resource listing and all associated api declarations.

#### operationHandler (a function)
Operation handler is a function which creates the request handler for a given
operation. The request handler is a function which is called whenever a client
interacts with the api (e.g. `api.user.get()` would call the request handler
that was returned for the 'get' operation).

For example, `api.user.get('kanye', kanyeHandler)`
calls the operation with the nickname 'get' on the 'user' resource with
'kanye' as the first argument and a callback as the second.
A very basic handler may look like this:

```js
function operationHandler(operation){
  var endpoint = operation.apiObject.basePath + operation.path;

  return function(data, callback){
    var url = endpoint.replace('{userName}', data);

    var req = new XMLHttpRequest();
    req.onload = function(){
      callback(this.responseText);
    };
    req.open(this.method, url, true);
    req.send();
  }
}

function kanyeHandler(text){
  console.log('kanye is', text);
}
```

From the `this` variable in the operation handler you can access the entire 
schema of the API:
* [Operation](https://github.com/wordnik/swagger-spec/blob/master/versions/1.2.md#523-operation-object) - `operation`
* [API Object](https://github.com/wordnik/swagger-spec/blob/master/versions/1.2.md#522-api-object) - `operation.apiObject`
* [API Declaration](https://github.com/wordnik/swagger-spec/blob/master/versions/1.2.md#52-api-declaration) - `operation.apiObject.apiDeclaration`
* [Resource Object](https://github.com/wordnik/swagger-spec/blob/master/versions/1.2.md#512-resource-object) - `operation.apiObject.resourceObject`
* [Resource Listing](https://github.com/wordnik/swagger-spec/blob/master/versions/1.2.md#51-resource-listing)- `operation.apiObject.resourceObject.resourceListing`
