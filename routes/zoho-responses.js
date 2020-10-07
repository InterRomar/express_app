const controller = require('../controllers/zoho-responses');

module.exports = (router) => {
  router.get('/', controller.getZohoResponses);
  router.post('/', controller.postZohoResponse);
};
