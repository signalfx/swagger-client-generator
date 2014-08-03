var swaggerJsApi = module.require('../');
var apiDocs = 'http://petstore.swagger.wordnik.com/api/api-docs';
var destination = __dirname + '/schema.json';

swaggerJsApi.save(apiDocs, destination);