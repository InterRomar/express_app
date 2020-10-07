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


const getOneJournal = async (req, res, next) => {
  try {
    const journal = await journalService.findOneJournal(req.params);
    return res.json({ journal });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const updateJournal = async (req, res, next) => {
  try {
    const journal = await journalService.updateJournal(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.json({ journal });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const deleteJournal = async (req, res, next) => {
  try {
    const deletedJournal = await journalService.deleteJournal({
      where: {
        id: req.params.id
      }
    });
    return res.json({ deletedJournal });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

module.exports = {
  getOneJournal,
  updateJournal,
  deleteJournal,
  getJournals,
  postJournals
};
