
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('client_skills', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    skill_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    client_answer: {
      type: Sequelize.TEXT
    },

    coach_feedback: {
      type: Sequelize.TEXT
    },

    isStrength: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },

    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  }),
  down: queryInterface => queryInterface.dropTable('client_skills')
};
