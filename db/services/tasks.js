// import * as bcrypt from 'bcryptjs';
const db = require('../models');

module.exports = {
  findAllTasks: (options = {}) => db.tasks.findAll({
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  findOrCreateTask: params => db.tasks.findOrCreate(params),
  findOneTask: (query = {}) => db.tasks.findOne({
    where: {
      id: query.id
    },
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...query
  }),
  updateTask: (payload, query = {}) => db.tasks.update(payload, {
    returning: true,
    ...query
  }),

  deleteTask: (query = {}) => db.tasks.destroy(query)
};
