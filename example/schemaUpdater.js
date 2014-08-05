// run npm install fetch-swagger-schema first
var path = require('path'),
  fs = require('fs'),
  fetchSchema = module.require('fetch-swagger-schema');

var apiDocs = 'http://petstore.swagger.wordnik.com/api/api-docs';
var destination = __dirname + '/schema.json';

fetchSchema(apiDocs, function(err, schema){
  if(err) return console.error(err);

  destination = path.resolve(process.cwd(), destination);
  fs.writeFileSync(destination, JSON.stringify(schema));
});