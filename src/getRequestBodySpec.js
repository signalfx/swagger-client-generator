'use strict';

var getRequestBody = require('./getRequestBody');

describe('get request body', function(){
  var basicOperation,
    complexOperation;

  beforeEach(function(){
    basicOperation = {
      apiObject: {
        apiDeclaration: {
          basePath: 'http://example.com/api'
        },
        path: '/do/it'
      },
      parameters: [
        {
          paramType: 'query',
          type: 'string',
          name: 'queryParam'
        }
      ]
    };

    complexOperation = {
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
          paramType: 'form',
          type: 'File',
          name: 'theFile'
        }
      ]
    };
  });

  it('returns body as-is if there is no content type', function(){
    var result = getRequestBody(basicOperation, {}, {});
    expect(result).toBeUndefined();
  });

  it('returns body as-is if the content type isn\'t a form content-type', function(){
    var result = getRequestBody(complexOperation, {
      body: 'hello world'
    }, {'Content-Type': 'text/plain'});

    expect(result).toEqual('hello world');
  });

  it('returns strigified body if the content type is application/json', function(){
    var result = getRequestBody(complexOperation, {
      body: { hello: 'world' }
    }, {'Content-Type': 'application/json'});

    expect(result).toEqual('{"hello":"world"}');
  });

  it('returns url-encoded body if the content type is application/x-www-form-urlencoded', function(){
    var result = getRequestBody(complexOperation, {
      formParam: 'hello',
      otherFormParam: 'world'
    }, {'Content-Type': 'application/x-www-form-urlencoded'});

    expect(result).toEqual('formParam=hello&otherFormParam=world');
  });

  it('returns multipart body if the content type is multipart/form-data', function(){
    var result = getRequestBody(complexOperation, {
      formParam: 'hello',
      otherFormParam: 'world',
      theFile: 'this is the file'
    }, {'Content-Type': 'multipart/form-data'});

    var expected = '--SwaggerBoundary{{random}}' +
      '\nContent-Disposition: form-data; name="formParam"' +
      '\n' +
      '\nhello' +
      '\n--SwaggerBoundary{{random}}' + 
      '\nContent-Disposition: form-data; name="otherFormParam"' +
      '\n' +
      '\nworld' +
      '\n--SwaggerBoundary{{random}}' +
      '\nContent-Disposition: form-data; name="theFile"' +
      '\n' +
      '\nthis is the file' +
      '\n--SwaggerBoundary{{random}}--\n';

    expected = expected.replace(/{{random}}/g, result.match('SwaggerBoundary(.*)')[1]);
    expect(result).toEqual(expected);
  });


  it('can handle individual content-types in multipart bodies', function(){
    var result = getRequestBody(complexOperation, {
      formParam: 'hello',
      otherFormParam: 'world',
      theFile: {
        body: 'this is the file',
        name: 'myfile.txt',
        contentType: 'text/plain'

      }
    }, {'Content-Type': 'multipart/form-data'});

    var expected = '--SwaggerBoundary{{random}}' +
      '\nContent-Disposition: form-data; name="formParam"' +
      '\n' +
      '\nhello' +
      '\n--SwaggerBoundary{{random}}' + 
      '\nContent-Disposition: form-data; name="otherFormParam"' +
      '\n' +
      '\nworld' +
      '\n--SwaggerBoundary{{random}}' +
      '\nContent-Disposition: form-data; name="theFile"; filename="myfile.txt"' +
      '\nContent-Type: text/plain' +
      '\n' +
      '\nthis is the file' +
      '\n--SwaggerBoundary{{random}}--\n';

    expected = expected.replace(/{{random}}/g, result.match('SwaggerBoundary(.*)')[1]);
    expect(result).toEqual(expected);
  });
});