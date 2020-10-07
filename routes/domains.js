const controller = require('../controllers/domains');
const isAdminOrOwner = require('../middlewares/isAdminOrOwner');

module.exports = (router) => {
  router.get('/', controller.getDomains);
  router.post('/', controller.postDomain);
  router.get('/:id', controller.getOneDomain);
  router.put('/:id', controller.updateDomain);
  router.delete('/:id', controller.deleteDomain);
};
