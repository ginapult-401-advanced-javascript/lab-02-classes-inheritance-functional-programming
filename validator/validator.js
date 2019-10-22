'use strict';

class Validator {

  constructor(schema) {
    this.schema = schema;
  }

  isString(input) {
    return typeof input === 'string';
  }

  isObject(input) { 
    return typeof input === 'object' && !this.isArray(input);
  }

  isArray(input) {
    return this.isArray(input);
  }

  isBoolean(input) {
    return typeof input === 'boolean';
  }

  isNumber(input) {
    return typeof input === 'number';
  }

  isFunction(input) {
    return typeof input === 'function';
  }

  isTruthy(input) {
    if(input) {
      return true;
    } else {
      return false;
    }
  }

  // Vinicio - checks an object against a schema
  // isValid(data, schema)
  // isValidObject in my demo code

  isValid(data, schema) {
    
    if(this.isObject(data)) {
      
      const schemaObject = Object.entries(schema.fields);
      let dataObject = Object.entries(data);
        
      if ((typeof dataObject[0][1] !== schemaObject[0][1])
      || (typeof dataObject[1][1] !== schemaObject[1][1])
      || (typeof dataObject[2][1] !== schemaObject[2][1])
      || (typeof dataObject[3][1] !== schemaObject[3][1])
      || (typeof dataObject[4][1] !== schemaObject[4][1])
      || (typeof dataObject[6][1] !== schemaObject[5][1])) {
        return 'invalid data set';
      } else {
        return 'valid data set';
      }
    }
  }
}

module.exports = Validator;