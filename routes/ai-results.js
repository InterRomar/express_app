const controller = require('../controllers/ai-result');

module.exports = (router) => {
  router.get('/', controller.getAIResults);
  router.post('/', controller.postAIResult);
};
