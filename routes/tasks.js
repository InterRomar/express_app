const controller = require('../controllers/tasks');

module.exports = (router) => {
  router.get('/', controller.getTasks);
  router.post('/', controller.postTask);
  router.get('/:id', controller.getOneTask);
  router.put('/:id', controller.updateTask);
  router.delete('/:id', controller.deleteTask);
};
