/* eslint-disable */
const utils = require('../../utils');

module.exports = (sequelize, Sequelize) => {
  const CoachingSession = sequelize.define(
    'coaching_sessions',
    {
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
      }
    },
  );

  CoachingSession.associate = models => {
    models.coaching_sessions.hasMany(models.ai_results, {
      foreignKey: 'session_id',
    });
  };

  return CoachingSession;
};
