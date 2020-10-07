// import * as bcrypt from 'bcryptjs';
const db = require('../models');

module.exports = {
  findAllTasks: (options = {}) => db.tasks.findAll({
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  findOrCreateTask: params => db.tasks.findOrCreate(params)
};
