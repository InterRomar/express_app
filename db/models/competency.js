/* eslint-disable */
const utils = require('../../utils');

module.exports = (sequelize, Sequelize) => {
  const Competency = sequelize.define(
    'competencies',
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

      domain_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },
  );

  Competency.associate = models => {
    models.competencies.hasMany(models.skills, {
      foreignKey: 'competency_id',
    });
  };

  return Competency;
};
