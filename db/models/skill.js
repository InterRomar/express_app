/* eslint-disable */
const utils = require('../../utils');

module.exports = (sequelize, Sequelize) => {
  const Skill = sequelize.define(
    'skills',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      competency_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
    },
  );

  Skill.associate = models => {
    models.skills.hasMany(models.client_skills, {
      foreignKey: 'skill_id',
    });
  };

  return Skill;
};
