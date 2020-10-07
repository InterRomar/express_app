const controller = require('../controllers/skills');

module.exports = (router) => {
  router.get('/', controller.getSkills);
  router.post('/', controller.postSkill);
  router.get('/:id', controller.getOneSkill);
  router.put('/:id', controller.updateSkill);
  router.delete('/:id', controller.deleteSkill);
};
