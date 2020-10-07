module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('domains', [
      {
        title: 'Self Awareness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Self Management',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Social Awareness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Relationship Management',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('domains', null, {});
  }
};
