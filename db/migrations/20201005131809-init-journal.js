
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('journals', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    client_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false
    },

    text: {
      type: Sequelize.TEXT
    },

    coach_feedback: {
      type: Sequelize.TEXT,
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
  down: queryInterface => queryInterface.dropTable('journals')
};
