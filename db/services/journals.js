// import * as bcrypt from 'bcryptjs';
const db = require('../models');

module.exports = {
  findAllJournals: (options = {}) => db.journals.findAll({
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  findOrCreateJournal: params => db.journals.findOrCreate(params)
};
