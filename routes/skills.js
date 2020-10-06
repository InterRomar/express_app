const controller = require('../controllers/skills');

module.exports = (router) => {
  router.get('/', controller.getSkills);
  router.post('/', controller.postSkill);
};
