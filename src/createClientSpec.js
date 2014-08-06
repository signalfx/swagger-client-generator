'use strict';
/* global jasmine */

var createClient = require('./createClient');

describe('create client', function(){
  var schema,
    promise,
    requestHandler;

  beforeEach(function(){
    promise = {
      then: jasmine.createSpy('promise.then')
    };

    requestHandler = jasmine.createSpy('requestHandler').and.returnValue(promise);

    schema = {
      apis: [{
        apiDeclaration: {
          resourcePath: '/resource',
          basePath: 'http://example.com/api',
          apis: [{
            path: '/resource/all-of-it',
            operations: [{
              method: 'GET',
              nickname: 'doIt',
              parameters: [{
                paramType: 'query',
                type: 'string',
                name: 'queryParam'
              }]
            }]            
          }]
        }
      }]
    };
  });

  it('uses the resource path if it\'s available for the api name', function(){
    var client = createClient(schema, requestHandler);
    expect(client.resource).toBeDefined();
  });

  it('uses the apiObject path as a fallback', function(){
    delete schema.apis[0].apiDeclaration.resourcePath;
    var client = createClient(schema, requestHandler);
    expect(client.resourceAllOfIt).toBeDefined();
  });

  it('uses the operation nickname for the operation name', function(){
    var client = createClient(schema, requestHandler);
    expect(client.resource.doIt).toBeDefined();
  });
});