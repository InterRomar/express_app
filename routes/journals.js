const controller = require('../controllers/journals');

module.exports = (router) => {
  router.get('/', controller.getJournals);
  router.post('/', controller.postJournals);
  router.get('/:id', controller.getOneJournal);
  router.put('/:id', controller.updateJournal);
  router.delete('/:id', controller.deleteJournal);
};
