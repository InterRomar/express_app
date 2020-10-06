/* eslint-disable */
const utils = require('../../utils');

module.exports = (sequelize, Sequelize) => {
  const Journal = sequelize.define(
    'journals',
    {
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
        type: Sequelize.TEXT,
      },

      coach_feedback: {
        type: Sequelize.TEXT
      }
    },
  );

  Journal.associate = models => {
    models.journals.hasMany(models.ai_results, {
      foreignKey: 'journal_id',
    });
  };

  return Journal;
};
