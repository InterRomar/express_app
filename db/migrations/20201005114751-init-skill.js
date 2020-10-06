
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('skills', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    title: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    competency_id: {
      type: Sequelize.INTEGER,
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
  down: queryInterface => queryInterface.dropTable('skills')
};
