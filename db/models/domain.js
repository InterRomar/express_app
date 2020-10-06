/* eslint-disable */
const utils = require('../../utils');

module.exports = (sequelize, Sequelize) => {
  const Domain = sequelize.define(
    'domains',
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
    },
  );

  Domain.associate = models => {
    models.domains.hasMany(models.competencies, {
      foreignKey: 'domain_id',
    });
  };

  return Domain;
};
