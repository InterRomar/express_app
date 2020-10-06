const domainService = require('../db/services/domains');

const getDomains = async (req, res, next) => {
  try {
    const domains = await domainService.findAllDomains();
    return res.json({ domains });
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


module.exports = {
  getDomains,
  postDomain
};
