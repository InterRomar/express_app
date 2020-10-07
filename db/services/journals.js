// import * as bcrypt from 'bcryptjs';
const db = require('../models');

module.exports = {
  findAllJournals: (options = {}) => db.journals.findAll({
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  findOrCreateJournal: params => db.journals.findOrCreate(params),
  findOneJournal: (query = {}) => db.journals.findOne({
    where: {
      id: query.id
    },
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...query
  }),
  updateJournal: (payload, query = {}) => db.journals.update(payload, {
    returning: true,
    ...query
  }),
  deleteJournal: (query = {}) => db.journals.destroy(query)
};
