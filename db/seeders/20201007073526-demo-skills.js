module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('skills', [
      {
        title: 'Skill 1 for competency 1',
        competency_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 2 for competency 1',
        competency_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 3 for competency 1',
        competency_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 1 for competency 2',
        competency_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 2 for competency 2',
        competency_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 3 for competency 2',
        competency_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 1 for competency 3',
        competency_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 2 for competency 3',
        competency_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 3 for competency 3',
        competency_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 1 for competency 4',
        competency_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 2 for competency 4',
        competency_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 3 for competency 4',
        competency_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 1 for competency 5',
        competency_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 2 for competency 5',
        competency_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 3 for competency 5',
        competency_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 1 for competency 6',
        competency_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 2 for competency 6',
        competency_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 3 for competency 6',
        competency_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 1 for competency 7',
        competency_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 2 for competency 7',
        competency_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 3 for competency 7',
        competency_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 1 for competency 8',
        competency_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 2 for competency 8',
        competency_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 3 for competency 8',
        competency_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 1 for competency 9',
        competency_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 2 for competency 9',
        competency_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 3 for competency 9',
        competency_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 1 for competency 10',
        competency_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 2 for competency 10',
        competency_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 3 for competency 10',
        competency_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 1 for competency 11',
        competency_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 2 for competency 11',
        competency_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 3 for competency 11',
        competency_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 1 for competency 12',
        competency_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 2 for competency 12',
        competency_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 3 for competency 12',
        competency_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 1 for competency 13',
        competency_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 2 for competency 13',
        competency_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Skill 3 for competency 13',
        competency_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skills', null, {});
  }
};
