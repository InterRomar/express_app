const competencyService = require('../db/services/competencies');

const getCompetencies = async (req, res, next) => {
  try {
    const competencies = await competencyService.findAllCompetencies();
    return res.json({ competencies });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const postCompetency = async (req, res, next) => {
  try {
    const competency = await competencyService.findOrCreateCompetency({
      where: {
        title: req.body.title
      },
      defaults: req.body
    });
    return res.json({ competency });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const getOneCompetency = async (req, res, next) => {
  try {
    const competency = await competencyService.findOneCompetency(req.params);
    return res.json({ competency });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const updateCompetency = async (req, res, next) => {
  try {
    const competency = await competencyService.updateCompetency(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.json({ competency });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const deleteCompetency = async (req, res, next) => {
  try {
    const deletedCompetency = await competencyService.deleteCompetency({
      where: {
        id: req.params.id
      }
    });
    return res.json({ deletedCompetency });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

module.exports = {
  getOneCompetency,
  updateCompetency,
  deleteCompetency,
  getCompetencies,
  postCompetency
};
