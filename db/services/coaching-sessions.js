// import * as bcrypt from 'bcryptjs';
const db = require('../models');

module.exports = {
  findAllSessions: (options = {}) => db.coaching_sessions.findAll({
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  createSession: params => db.coaching_sessions.create(params)
};
