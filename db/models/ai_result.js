/* eslint-disable */
const utils = require('../../utils');

module.exports = (sequelize, Sequelize) => {
  const AIResult = sequelize.define(
    'ai_results',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      
      journal_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      
      session_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      zoho_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      result: {
        type: Sequelize.JSONB,
        allowNull: false
      },

      text: {
        type: Sequelize.TEXT
      }
    },
  );

  AIResult.associate = models => {
  };

  return AIResult;
};
