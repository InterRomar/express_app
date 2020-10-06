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

module.exports = {
  getCompetencies,
  postCompetency
};
