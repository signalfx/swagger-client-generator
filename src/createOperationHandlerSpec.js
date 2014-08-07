'use strict';
/* global jasmine */
var createOperationHandler = require('./createOperationHandler');

describe('create operation handler', function(){
  var basicOperation,
    complexOperation,
    requestHandler,
    promise;

  beforeEach(function(){
    promise = {
      then: jasmine.createSpy('promise.then')
    };

    requestHandler = jasmine.createSpy('requestHandler').and.returnValue(promise);
    basicOperation = {
      method: 'GET',
      apiObject: {
        apiDeclaration: {
          basePath: 'http://example.com/api'
        },
        path: '/do/it'
      },
      parameters: [
        {
          paramType: 'query',
          type: 'number',
          name: 'queryParam'
        }
      ]
    };

    complexOperation = {
      method: 'PUT',
      apiObject: {
        apiDeclaration: {
          basePath: 'http://example.com/api'
        },
        path: '/do/{what}.{format}'
      },
      consumes: [
        'application/json',
        'multipart/form-data',
        'application/x-www-form-urlencoded',
        'text/plain'
      ],
      produces: ['application/json'],
      parameters: [
        {
          paramType: 'path',
          type: 'string',
          name: 'pathParam'
        },
        {
          paramType: 'form',
          type: 'string',
          name: 'formParam'
        },
        {
          paramType: 'form',
          type: 'string',
          name: 'otherFormParam'
        },
        {
          paramType: 'body',
          type: 'string',
          name: 'theBody'
        },
        {
          paramType: 'query',
          type: 'string',
          name: 'queryParam'
        },
        {
          paramType: 'query',
          type: 'number',
          name: 'queryNumberParam'
        },
        {
          paramType: 'form',
          type: 'File',
          name: 'theFile'
        }
      ]
    };
  });

  it('returns the result of the request handler regardless of errors', function(){
    var operationHandler = createOperationHandler(basicOperation, requestHandler);
    var result = operationHandler();
    expect(requestHandler).toHaveBeenCalled();
    expect(result).toBe(promise);
  });

  it('converts passed value to it\'s corresponding param for one-param operations', function(){
    var operationHandler = createOperationHandler(basicOperation, requestHandler);
    
    operationHandler(1);
    
    expect(requestHandler).toHaveBeenCalledWith(undefined, jasmine.objectContaining(
      {data: {queryParam: 1}}
    ));
  });


  it('converts passed value to it\'s corresponding param for one-param operations', function(){
    var operationHandler = createOperationHandler(basicOperation, requestHandler);
    
    operationHandler(0);
    
    expect(requestHandler).toHaveBeenCalledWith(undefined, jasmine.objectContaining(
      {data: {queryParam: 0}}
    ));
  });

  it('doesn\'t convert passed values if they are an object and a key in the object' +
    'corresponds to a param name', function(){
    var operationHandler = createOperationHandler(basicOperation, requestHandler);
    
    operationHandler({ queryParam: 1 });
    
    expect(requestHandler).toHaveBeenCalledWith(undefined, jasmine.objectContaining(
      {data: {queryParam: 1}}
    ));
  });

  it('prunes unknown params immediately', function(){
    var operationHandler = createOperationHandler(basicOperation, requestHandler);
    
    operationHandler({ 
      queryParam: 1,
      unkownParamName: 'turn down for what' 
    });
    
    expect(requestHandler).not.toHaveBeenCalledWith(undefined, jasmine.objectContaining(
      {data: { unkownParamName: 'turn down for what' }}
    ));

    expect(requestHandler).toHaveBeenCalledWith(undefined, jasmine.objectContaining(
      {data: {queryParam: 1}}
    ));
  });

  it('provides error types for the operation handler as a property', function(){
    var operationHandler = createOperationHandler(basicOperation, requestHandler);
    
    operationHandler({ queryParam: '1' });
    expect(requestHandler).toHaveBeenCalledWith(
      jasmine.any(operationHandler.errorTypes.ValidationErrors), 
      jasmine.any(operationHandler.Request)
    );
  });

  it('provides an operation data validator as a property', function(){
    var operationHandler = createOperationHandler(basicOperation, requestHandler);
    expect(operationHandler.validate).toBeDefined();
  });

  it('provides the operation as a property', function(){
    var operationHandler = createOperationHandler(basicOperation, requestHandler);
    expect(operationHandler.operation).toBe(basicOperation);
  });

  it('provides the possible error types for the operation as a property', function(){
    var operationHandler = createOperationHandler(basicOperation, requestHandler);
    expect(operationHandler.errorTypes).toBeDefined();
  });

  it('provides the Request type for the operation as a property', function(){
    var operationHandler = createOperationHandler(basicOperation, requestHandler);
    expect(operationHandler.Request).toBeDefined();

    var otherOperationHandler = createOperationHandler(complexOperation, requestHandler);
    expect(otherOperationHandler.Request).toBeDefined();
  
    expect(otherOperationHandler.Request).not.toBe(operationHandler.Request);
  });
});