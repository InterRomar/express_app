
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tasks', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false
    },

    client_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    session_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    text: {
      type: Sequelize.TEXT
    },

    is_completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },

    reminder: {
      type: Sequelize.DATE
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
  down: queryInterface => queryInterface.dropTable('tasks')
};
