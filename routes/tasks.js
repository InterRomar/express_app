const controller = require('../controllers/tasks');

module.exports = (router) => {
  router.get('/', controller.getTasks);
  router.post('/', controller.postTask);
};
