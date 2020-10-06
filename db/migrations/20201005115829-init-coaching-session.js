
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('coaching_sessions', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    coach_feedback: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    client_feedback: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    session_date: {
      type: Sequelize.DATE,
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
  down: queryInterface => queryInterface.dropTable('coaching_sessions')
};
