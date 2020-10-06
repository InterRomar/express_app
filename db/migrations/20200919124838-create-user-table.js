module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    first_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    last_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    login: {
      type: Sequelize.TEXT,
      allowNull: false,
      notEmpty: true,
      unique: true
    },

    info: {
      type: Sequelize.TEXT
    },

    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false
    },

    role: {
      type: Sequelize.ENUM('client', 'coach', 'admin'),
      defaultValue: 'coach'
    },

    avatar: {
      type: Sequelize.STRING
    },

    status: {
      type: Sequelize.ENUM('paused', 'active', 'disabled'),
      defaultValue: 'paused'
    },

    plan_id: {
      type: Sequelize.STRING
    },

    plan_duration: {
      type: Sequelize.STRING
    },

    coach_id: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }),

  down: queryInterface => queryInterface.dropTable('users')
};
