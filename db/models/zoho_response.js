/* eslint-disable */
const utils = require('../../utils');

module.exports = (sequelize, Sequelize) => {
  const ZohoResponse = sequelize.define(
    'zoho_responses',
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

      payload: {
        type: Sequelize.JSONB,
        allowNull: false
      },
    },
  );

  ZohoResponse.associate = models => {
    models.zoho_responses.hasMany(models.ai_results, {
      foreignKey: 'zoho_id',
    });
  };

  return ZohoResponse;
};
