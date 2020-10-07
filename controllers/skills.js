const skillService = require('../db/services/skills');

const getSkills = async (req, res, next) => {
  try {
    const skills = await skillService.findAllSkills();
    return res.json({ skills });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const postSkill = async (req, res, next) => {
  try {
    const skill = await skillService.findOrCreateSkill({
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

const getOneSkill = async (req, res, next) => {
  try {
    const skill = await skillService.findOneSkill(req.params);
    return res.json({ skill });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const updateSkill = async (req, res, next) => {
  try {
    const skill = await skillService.updateSkill(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.json({ skill });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const deleteSkill = async (req, res, next) => {
  try {
    const deletedSkill = await skillService.deleteSkill({
      where: {
        id: req.params.id
      }
    });
    return res.json({ deletedSkill });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};


module.exports = {
  getOneSkill,
  updateSkill,
  deleteSkill,
  getSkills,
  postSkill
};
