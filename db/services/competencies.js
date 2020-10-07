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
  findOrCreateCompetency: params => db.competencies.findOrCreate(params),
  findOneCompetency: (query = {}) => db.competencies.findOne({
    where: {
      id: query.id
    },
    include: [{
      model: db.skills
    }],
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...query
  }),
  updateCompetency: (payload, query = {}) => db.competencies.update(payload, {
    returning: true,
    ...query
  }),

  deleteCompetency: (query = {}) => db.competencies.destroy(query)
};
