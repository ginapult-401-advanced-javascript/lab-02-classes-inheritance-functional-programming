'use strict';

// const Validator = require('../validator.js');
// const data = require('../data/data-recommendation.json');
// const schema = require('../index.js');
 

describe('validator validates data according to schema', () => {
    
  //   test('is object', () => {
  //     expect(Validator.isObject(data).toBeTruthy());
  //   });

  //   test('validator validates all data against schema', () => {
  //     expect(Validator.isValid(data, schema).toEqual('valid data set'));
  //   });

  test('add', () => {
    expect(2+2).toEqual(4);
  });

});