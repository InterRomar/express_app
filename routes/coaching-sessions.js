const controller = require('../controllers/coaching-sessions');

module.exports = (router) => {
  router.get('/', controller.getSessions);
  router.post('/', controller.postSession);
};
