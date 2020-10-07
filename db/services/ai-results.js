// import * as bcrypt from 'bcryptjs';
const db = require('../models');

module.exports = {
  findAllAIResults: (options = {}) => db.ai_results.findAll({
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  createAIResult: params => db.ai_results.create(params),
  findOneAIResults: (query = {}) => db.ai_results.findOne({
    where: {
      id: query.id
    },
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...query
  }),
  updateAIResult: (payload, query = {}) => db.ai_results.update(payload, {
    returning: true,
    ...query
  }),
  deleteAIResult: (query = {}) => db.ai_results.destroy(query)
};
