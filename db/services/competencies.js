// import * as bcrypt from 'bcryptjs';
const db = require('../models');

module.exports = {
  findAllCompetencies: (options = {}) => db.competencies.findAll({
    include: [{
      model: db.skills
    }],
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  findOrCreateCompetency: params => db.competencies.findOrCreate(params)
};
