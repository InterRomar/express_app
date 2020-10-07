// import * as bcrypt from 'bcryptjs';
const db = require('../models');

module.exports = {
  findAllAIResults: (options = {}) => db.ai_results.findAll({
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  createAIResult: params => db.ai_results.create(params)
};
