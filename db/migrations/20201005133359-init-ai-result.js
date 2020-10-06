
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ai_results', {
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
  down: queryInterface => queryInterface.dropTable('ai_results')
};
