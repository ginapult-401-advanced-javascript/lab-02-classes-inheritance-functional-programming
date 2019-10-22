'use strict';

const schema = {
  fields: {
    firstName: { type : 'string'},
    lastName: { type: 'string'},
    hair: { type: 'object'},
    favoriteFoods: { type: 'array'},
    married: { type: 'boolean' },
    kids: { type: 'number' },
  },
};

module.exports = schema;