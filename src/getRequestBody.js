'use strict';

module.exports = function getRequestBody(operation, data, headers){
  var body = data.body;

  if(!(headers &&  headers['Content-Type'])) return body;

  var contentType = headers['Content-Type'];
  var presentFormParams = operation.parameters.filter(function(param){
    return param.paramType === 'form' && data[param.name] !== undefined;
  });

  if(contentType.indexOf('application/x-www-form-urlencoded') !== -1){
    body = presentFormParams.map(function(param){
      var key = param.name,
        value = data[key];
      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }).join('&');
  } else if(contentType.indexOf('multipart/form-data') !== -1){
    var randomness = Math.random().toString(16).substr(2);
    var boundary = 'SwaggerBoundary' + randomness;
    
    body = presentFormParams.map(function(param){
      var key = param.name,
        value = data[key],
        result = '--' + boundary + '\n';

      result += 'Content-Disposition: form-data; name="' + key + '"';
      result += '\n\n';
      result += value + '\n';

      return result;
    }).join('');

    body += '--' + boundary + '--\n';
    
    headers['Content-Type'] = contentType.replace(
      'multipart/form-data', 
      'multipart/form-data; boundary=' + boundary
    );
  } else if(contentType.indexOf('application/json') !== -1){
    if(typeof body !== 'string'){
      body = JSON.stringify(body);
    }
  }

  return body;
};