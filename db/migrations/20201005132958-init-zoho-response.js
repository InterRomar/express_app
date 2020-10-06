
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('zoho_responses', {
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

    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  }),
  down: queryInterface => queryInterface.dropTable('zoho_responses')
};
