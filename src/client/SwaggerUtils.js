'use strict';

var ErrorTypes = require('./ErrorTypes'),
  DataTypeValidationError = ErrorTypes.DataTypeValidationError;

function validateDataType(candidate, dataType, models){
  models = models || {};

  var type = dataType.type || dataType.dataType || dataType.$ref;

  switch(type){
    case 'integer':
      validateInteger(candidate, dataType);
      break;
    case 'number':
      validateNumber(candidate, dataType);
      break;
    case 'string':
      validateString(candidate, dataType);
      break;
    case 'boolean':
      validateBoolean(candidate);
      break;
    case 'array':
      validateArray(candidate, dataType);
      break;
    case 'void':
      validateVoid(candidate);
      break;
    case 'File':
      validateFile();
      break;
    default:
      // Assumed to be complex model
      var model = models[type];
      validateModel(candidate, model, models);
      break;
  }
}
exports.validateDataType = validateDataType;

function validateInteger(candidate, dataType){
  validateNumber(candidate, dataType);
  if(candidate % 1){
    throw new DataTypeValidationError(candidate + ' must be am integer');
  }
}

function validateNumber(candidate, dataType){
  if(isNaN(candidate)){
    throw new DataTypeValidationError(candidate + ' must be a number');
  }

  if(('minimum' in dataType) && candidate < dataType.minimum){
    throw new DataTypeValidationError(candidate + ' must be at least ' + dataType.minimum);
  }
  
  if(('maximum' in dataType) && candidate > dataType.maximum){
    throw new DataTypeValidationError(candidate + ' must be at most ' + dataType.maximum);
  }
}

function validateBoolean(candidate){
  if(!(typeof candidate === 'boolean' || candidate instanceof Boolean)){
    throw new DataTypeValidationError(candidate + ' must be boolean');
  }
}

function validateArray(candidate, dataType, models){
  if(!Array.isArray(candidate)){
    throw new DataTypeValidationError(candidate + ' must be an array');
  }

  var items = dataType.items;

  if(dataType.uniqueItems){
    var dupeCheck = [];
    var hasDupes = candidate.some(function(value){
      var signature;
      if(items.$ref){
        signature = JSON.stringify(value);
      } else {
        signature = value;
      }
      if(dupeCheck.indexOf(signature) !== -1) return true;
      dupeCheck.push(signature);

      return false;
    });

    if(hasDupes) {
      throw new DataTypeValidationError(candidate + ' can\'t contain dupelicate values');
    }
  }

  if(items.$ref){
    var model = models[items.$ref];
    candidate.every(function(value){
      validateModel(model, value, models);
    });
  } else {
    candidate.every(function(value){
      validateDataType(value, items, models);
    });
  }
}

function validateVoid(candidate){
  if(candidate != null){
      throw new DataTypeValidationError(candidate + ' must be null or undefined');
  }
}

function validateFile(){
  // Not sure how to check this, since anything could qualify as 'File'.
}

function validateString(candidate, dataType){
  if(typeof candidate !== 'string'){
    throw new DataTypeValidationError(candidate + ' must be a string');
  }

  if('enum' in dataType){
    if(dataType.enum.indexOf(candidate) === -1) {
      throw new DataTypeValidationError(candidate + ' must be one of these values: ' + dataType.enum.join(', '));
    }
  }
}

function validateModel(candidate, model, models){
  models = models || {};

  var requiredProperties = model.required;
  var missingProperties = requiredProperties.filter(function(propertyName){
    return !(propertyName in candidate);
  });

  if(missingProperties) {
      throw new DataTypeValidationError(
        'Model is missing the following required properites ' + missingProperties.join(', ')
      );
  }

  Object.keys(candidate).forEach(function(propertyName){
    var property = model.properties[propertyName];
    validateDataType(property, candidate[propertyName], models);
  });
}