const journalService = require('../db/services/journals');

const getJournals = async (req, res, next) => {
  try {
    const journals = await journalService.findAllJournals();
    return res.json({ journals });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const postJournals = async (req, res, next) => {
  try {
    const journal = await journalService.findOrCreateJournal({
      where: {
        title: req.body.title
      },
      defaults: req.body
    });
    return res.json({ journal });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

module.exports = {
  getJournals,
  postJournals
};
