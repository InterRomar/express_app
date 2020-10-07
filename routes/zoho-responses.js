const controller = require('../controllers/zoho-responses');

module.exports = (router) => {
  router.get('/', controller.getZohoResponses);
  router.post('/', controller.postZohoResponse);
  router.get('/:id', controller.getOneZohoResponse);
  router.put('/:id', controller.updateZohoResponse);
  router.delete('/:id', controller.deleteZohoResponse);
};
