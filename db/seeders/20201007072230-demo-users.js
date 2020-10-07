module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        first_name: 'Kirill',
        last_name: 'Perepelitsa',
        login: 'coach1',
        info: 'bla bla bla bla bla',
        email: 'coach1@email.com',
        password: '123123',
        role: 'coach',
        avatar: 'avatar',
        status: 'active',
        plan_id: 1,
        plan_duration: 100,
        coach_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Kirill',
        last_name: 'Perepelitsa',
        login: '',
        info: 'bla bla bla bla bla',
        email: 'student1@email.com',
        password: '23hfh',
        role: 'coach',
        avatar: 'avatar',
        status: 'paused',
        plan_id: 2,
        plan_duration: 100,
        coach_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Kirill',
        last_name: 'Perepelitsa',
        login: 'student1',
        info: 'bla bla bla bla bla',
        email: 'student1@email.com',
        password: '23hfh',
        role: 'client',
        avatar: 'avatar',
        status: 'active',
        plan_id: null,
        plan_duration: null,
        coach_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Kirill',
        last_name: 'Perepelitsa',
        login: 'student2',
        info: 'bla bla bla bla bla',
        email: 'student2@email.com',
        password: '23hfh',
        role: 'client',
        avatar: 'avatar',
        status: 'active',
        plan_id: null,
        plan_duration: null,
        coach_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Kirill',
        last_name: 'Perepelitsa',
        login: 'student3',
        info: 'bla bla bla bla bla',
        email: 'student3@email.com',
        password: '23hfh',
        role: 'client',
        avatar: 'avatar',
        status: 'active',
        plan_id: null,
        plan_duration: null,
        coach_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
