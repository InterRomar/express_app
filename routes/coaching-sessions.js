const controller = require('../controllers/coaching-sessions');

module.exports = (router) => {
  router.get('/', controller.getSessions);
  router.post('/', controller.postSession);
  router.get('/:id', controller.getOneSession);
  router.put('/:id', controller.updateSession);
  router.delete('/:id', controller.deleteSession);
};
