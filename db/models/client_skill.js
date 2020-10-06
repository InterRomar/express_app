/* eslint-disable */
const utils = require('../../utils');

module.exports = (sequelize, Sequelize) => {
  const ClientSkill = sequelize.define(
    'client_skills',
    {
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
        type: Sequelize.TEXT,
      },

      coach_feedback: {
        type: Sequelize.TEXT
      },

      isStrength: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    },
  );

  ClientSkill.associate = models => {
  };

  return ClientSkill;
};
