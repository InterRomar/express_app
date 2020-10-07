const domainService = require('../db/services/domains');

const getDomains = async (req, res, next) => {
  try {
    const domains = await domainService.findAllDomains();
    return res.json({ domains });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const getOneDomain = async (req, res, next) => {
  try {
    const domain = await domainService.findOneDomain(req.params);
    return res.json({ domain });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const postDomain = async (req, res, next) => {
  try {
    const domain = await domainService.findOrCreateDomain({
      where: {
        title: req.body.title
      },
      defaults: req.body
    });
    return res.json({ domain });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const updateDomain = async (req, res, next) => {
  try {
    const domain = await domainService.updateDomain(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.json({ domain });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const deleteDomain = async (req, res, next) => {
  try {
    const deletedDomain = await domainService.deleteDomain({
      where: {
        id: req.params.id
      }
    });
    return res.json({ deletedDomain });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

module.exports = {
  getDomains,
  getOneDomain,
  postDomain,
  updateDomain,
  deleteDomain
};
