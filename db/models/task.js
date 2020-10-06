/* eslint-disable */
const utils = require('../../utils');

module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define(
    'tasks',
    {
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
        type: Sequelize.TEXT,
      },

      is_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      reminder: {
        type: Sequelize.DATE
      },
    },
  );

  Task.associate = models => {

  };

  return Task;
};
