/* eslint-disable */
const utils = require('../../utils');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'users',
    {
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
        type: Sequelize.STRING,
      },

      plan_duration: {
        type: Sequelize.STRING,
      },

      coach_id: {
        type: Sequelize.INTEGER,
      }
    },
  );

  User.beforeUpdate((instance, options) => {
    return instance;
  });

  User.beforeCreate(user => {
    if (user.isNewRecord && user.password) {
      user.password = utils.hash.generate(user.password);
    }
    return user;
  });

  User.associate = models => {
    models.users.belongsTo(models.users, {
      foreignKey: 'id',
    });
    models.users.hasMany(models.users, {
      foreignKey: 'coach_id',
    });
    models.users.hasMany(models.client_skills, {
      foreignKey: 'user_id',
    });
    models.users.hasMany(models.journals, {
      foreignKey: 'client_id',
    });
    models.users.hasMany(models.tasks, {
      foreignKey: 'client_id',
    });
    models.users.hasMany(models.coaching_sessions, {
      foreignKey: 'user_id',
    });
    models.users.hasMany(models.zoho_responses, {
      foreignKey: 'client_id',
    });
    models.users.hasMany(models.ai_results, {
      foreignKey: 'student_id',
    });
  };

  return User;
};
