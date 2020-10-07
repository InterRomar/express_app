// import * as bcrypt from 'bcryptjs';
const db = require('../models');

module.exports = {
  findAllZohoResponses: (options = {}) => db.zoho_responses.findAll({
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  createZohoResponse: params => db.zoho_responses.create(params)
};
