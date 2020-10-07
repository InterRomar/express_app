// import * as bcrypt from 'bcryptjs';
const db = require('../models');

module.exports = {
  findAllSkills: (options = {}) => db.skills.findAll({
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  findOrCreateSkill: params => db.skills.findOrCreate(params),
  findOneSkill: (query = {}) => db.skills.findOne({
    where: {
      id: query.id
    },
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...query
  }),
  updateSkill: (payload, query = {}) => db.skills.update(payload, {
    returning: true,
    ...query
  }),

  deleteSkill: (query = {}) => db.skills.destroy(query)
};
