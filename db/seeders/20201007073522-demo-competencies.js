module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('competencies', [
      {
        title: 'Self Awareness competency 1',
        domain_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Self Awareness competency 2',
        domain_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Self Awareness competency 3',
        domain_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Self Management competency 1',
        domain_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Self Management competency 2',
        domain_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Self Management competency 3',
        domain_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Self Management competency 4',
        domain_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Social Awareness competency 1',
        domain_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Social Awareness competency 2',
        domain_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Relationship Management competency 1',
        domain_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Relationship Management competency 2',
        domain_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Relationship Management competency 3',
        domain_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Relationship Management competency 4',
        domain_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('competencies', null, {});
  }
};
