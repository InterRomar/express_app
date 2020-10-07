const controller = require('../controllers/competencies');

module.exports = (router) => {
  router.get('/', controller.getCompetencies);
  router.post('/', controller.postCompetency);
  router.get('/:id', controller.getOneCompetency);
  router.put('/:id', controller.updateCompetency);
  router.delete('/:id', controller.deleteCompetency);
};
