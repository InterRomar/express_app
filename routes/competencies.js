const controller = require('../controllers/competencies');

module.exports = (router) => {
  router.get('/', controller.getCompetencies);
  router.post('/', controller.postCompetency);
};
