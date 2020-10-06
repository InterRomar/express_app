const controller = require('../controllers/journals');

module.exports = (router) => {
  router.get('/', controller.getJournals);
  router.post('/', controller.postJournals);
  // router.get('/:id', controller.getDomain);
  // router.put('/:id', isAdminOrOwner, controller.editDomain);
  // router.delete('/:id', isAdminOrOwner, controller.deleteDomain);
};
