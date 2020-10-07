// import * as bcrypt from 'bcryptjs';
const db = require('../models');

module.exports = {
  findAllSessions: (options = {}) => db.coaching_sessions.findAll({
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  createSession: params => db.coaching_sessions.create(params),
  findOneSession: (query = {}) => db.coaching_sessions.findOne({
    where: {
      id: query.id
    },
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...query
  }),
  updateSession: (payload, query = {}) => db.coaching_sessions.update(payload, {
    returning: true,
    ...query
  }),

  deleteSession: (query = {}) => db.coaching_sessions.destroy(query)
};
