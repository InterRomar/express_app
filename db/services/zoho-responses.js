// import * as bcrypt from 'bcryptjs';
const db = require('../models');

module.exports = {
  findAllZohoResponses: (options = {}) => db.zoho_responses.findAll({
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  createZohoResponse: params => db.zoho_responses.create(params),
  findOneZohoResponse: (query = {}) => db.zoho_responses.findOne({
    where: {
      id: query.id
    },
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...query
  }),
  updateZohoResponse: (payload, query = {}) => db.zoho_responses.update(payload, {
    returning: true,
    ...query
  }),

  deleteZohoResponse: (query = {}) => db.zoho_responses.destroy(query)
};
