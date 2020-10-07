const controller = require('../controllers/ai-result');

module.exports = (router) => {
  router.get('/', controller.getAIResults);
  router.post('/', controller.postAIResult);
  router.get('/:id', controller.getOneAIResult);
  router.put('/:id', controller.updateAIResult);
  router.delete('/:id', controller.deleteAIResult);
};
