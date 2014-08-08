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

  it('has the ability to set auth at many levels', function(){
    var client = createClient(schema, requestHandler);
    
    expect(function(){
      client.auth('api-level-auth');
      client.resource.auth('resource-level-auth');
      client.resource.doIt.auth('operation-level-auth');
    }).not.toThrow();
  });

  it('provides the most specific auth data passed in to it (resource-level)', function(){
    schema.apis[0].apiDeclaration.authorizations = {
      apiKey: {
        type: 'apiKey',
        passAs: 'query',
        keyname: 'token'
      }
    };
    var client = createClient(schema, requestHandler);
    
    client.auth('api-level-auth');
    client.resource.auth('resource-level-auth');
    client.resource.doIt('1');
    expect(requestHandler.calls.mostRecent().args[1].url)
      .toBe('http://example.com/api/resource/all-of-it?token=resource-level-auth&queryParam=1');
  });

  it('provides the most specific auth data passed in to it (op-level)', function(){
    schema.apis[0].apiDeclaration.authorizations = {
      apiKey: {
        type: 'apiKey',
        passAs: 'query',
        keyname: 'token'
      }
    };
    var client = createClient(schema, requestHandler);
    
    client.auth('api-level-auth');
    client.resource.auth('resource-level-auth');
    client.resource.doIt.auth('operation-level-auth');
    client.resource.doIt('1');
    expect(requestHandler.calls.mostRecent().args[1].url)
      .toBe('http://example.com/api/resource/all-of-it?token=operation-level-auth&queryParam=1');
  });
});