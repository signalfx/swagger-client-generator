'use strict';

var applyAuthData = require('./applyAuthData');

describe('apply auth data', function(){
  var request;

  beforeEach(function(){
    request = {
      url: 'http://example.com?param=value',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: 'Hello, world'
    };
  });

  it('doesn\'t change the request if there is no auth for the op', function(){
    var noAuthOperation = {
      apiObject: {
        apiDeclaration: {
          authorizations: {}
        }
      }
    };

    applyAuthData(noAuthOperation, undefined, request);

    expect(request.url).toBe('http://example.com?param=value');
    expect(request.headers).toEqual({'Content-Type': 'text/plain'});
    expect(request.body).toBe('Hello, world');
  });

  it('respects the op-level auth override if it exists', function(){
    var operation = {
      authorizations: {
        apiKey: {
          type: 'apiKey',
          keyname: 'opToken',
          passAs: 'query'
        }
      },
      apiObject: {
        apiDeclaration: {
          authorizations: {
            apiKey: {
              type: 'apiKey',
              keyname: 'apiToken',
              passAs: 'query'
            }
          }
        }
      }
    };

    applyAuthData(operation, '123', request);
    expect(request.url).toBe('http://example.com?opToken=123&param=value');
  });

  it('uses the api-level auth if no op-level auth exists', function(){
    var operation = {
      apiObject: {
        apiDeclaration: {
          authorizations: {
            apiKey: {
              type: 'apiKey',
              keyname: 'apiToken',
              passAs: 'query'
            }
          }
        }
      }
    };

    applyAuthData(operation, '123', request);
    expect(request.url).toBe('http://example.com?apiToken=123&param=value');
  });

  it('throws a missing auth error if required auth params are not present', function(){
    var operation = {
      apiObject: {
        apiDeclaration: {
          authorizations: {
            apiKey: {
              type: 'apiKey',
              keyname: 'apiToken',
              passAs: 'query'
            }
          }
        }
      }
    };
    expect(function(){
      applyAuthData(operation, undefined, request);
    }).toThrow();
  });

  it('does not throw a missing auth error if only one of many auth methods present', function(){
    var operation = {
      apiObject: {
        apiDeclaration: {
          authorizations: {
            apiKey: {
              type: 'apiKey',
              keyname: 'apiToken',
              passAs: 'query'
            },
            basicAuth: {
              type: 'basicAuth'
            }
          }
        }
      }
    };

    expect(function(){
      applyAuthData(operation, {basicAuth: {username: 'Bob', password: 'secret' }}, request);
    }).not.toThrow();
  });

  it('can apply apikeys to headers', function(){
    var operation = {
      apiObject: {
        apiDeclaration: {
          authorizations: {
            apiKey: {
              type: 'apiKey',
              keyname: 'apiToken',
              passAs: 'header'
            }
          }
        }
      }
    };

    applyAuthData(operation, '123', request);
    expect(request.headers).toEqual({
      'Content-Type': 'text/plain',
      'apiToken': '123'
    });
  });

  it('can apply basic auth to urls', function(){
    var operation = {
      apiObject: {
        apiDeclaration: {
          authorizations: {
            apiKey: {
              type: 'basicAuth',
            }
          }
        }
      }
    };

    applyAuthData(operation, {username: 'Bob', password: 'secret' }, request);
    expect(request.url).toEqual('http://Bob:secret@example.com?param=value');
  });

  it('can apply multiple auths to a request', function(){
    var operation = {
      apiObject: {
        apiDeclaration: {
          authorizations: {
            basicAuth: {
              type: 'basicAuth',
            },
            apiKeyHeader: {
              type: 'apiKey',
              keyname: 'headerToken',
              passAs: 'header'
            },
            apiKeyQuery: {
              type: 'apiKey',
              keyname: 'queryToken',
              passAs: 'header'
            }
          }
        }
      }
    };

    applyAuthData(operation, {
      basicAuth: {username: 'Bob', password: 'secret' },
      apiKeyQuery: 'query',
      apiKeyHeader: 'header'
    }, request);

    expect(request.url).toEqual('http://Bob:secret@example.com?param=value');
  });
});