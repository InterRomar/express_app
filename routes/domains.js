const controller = require('../controllers/domains');
const isAdminOrOwner = require('../middlewares/isAdminOrOwner');

module.exports = (router) => {
  router.get('/', controller.getDomains);
  router.post('/', controller.postDomain);
};
