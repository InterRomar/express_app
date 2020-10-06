const competencyService = require('../db/services/skills');

const getSkills = async (req, res, next) => {
  try {
    const skills = await competencyService.findAllSkills();
    return res.json({ skills });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const postSkill = async (req, res, next) => {
  try {
    const skill = await competencyService.findOrCreateSkill({
      where: {
        title: req.body.title
      },
      defaults: req.body
    });
    return res.json({ skill });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

module.exports = {
  getSkills,
  postSkill
};
