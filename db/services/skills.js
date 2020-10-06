// import * as bcrypt from 'bcryptjs';
const db = require('../models');

module.exports = {
  findAllSkills: (options = {}) => db.skills.findAll({
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  findOrCreateSkill: params => db.skills.findOrCreate(params)
};
