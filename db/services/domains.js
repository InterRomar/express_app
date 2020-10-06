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
    include: [
      // {
      //   model: Project,
      //   as: 'projects',
      //   attributes: ['id', 'title', 'description'],
      //   through: {
      //     attributes: []
      //   }
      // },
      // {
      //   model: Plan,
      //   as: 'plan',
      //   attributes: {
      //     exclude: ['createdAt', 'updatedAt']
      //   },
      //   include: [
      //     {
      //       model: Task,
      //       as: 'tasks',
      //       attributes: {
      //         exclude: ['createdAt', 'updatedAt']
      //       },
      //       through: {
      //         as: 'taskInfo',
      //         attributes: {
      //           exclude: ['plan_id', 'task_id', 'createdAt', 'updatedAt']
      //         }
      //       }
      //     }
      //   ]
      // }
    ],
    attributes: {
      exclude: ['encryptedPassword', 'createdAt', 'updatedAt']
    },
    ...query
  }),
  updateDomain: (payload, query = {}) => db.domains.update(payload, {
    returning: true,
    ...query
  })
};
