const db = require('../models');

module.exports = {
  findAllDomains: (options = {}) => db.domains.findAll({
    include: [{
      model: db.competencies,
      include: [{
        model: db.skills
      }]
    }],
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...options
  }),
  findOrCreateDomain: params => db.domains.findOrCreate(params),
  findOneDomain: (query = {}) => db.domains.findOne({
    where: {
      id: query.id
    },
    include: [{
      model: db.competencies,
      include: [{
        model: db.skills
      }]
    }],
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...query
  }),
  updateDomain: (payload, query = {}) => db.domains.update(payload, {
    returning: true,
    ...query
  }),

  deleteDomain: (query = {}) => db.domains.destroy(query)
};
