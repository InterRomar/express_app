const zohoResponsesService = require('../db/services/zoho-responses');

const getZohoResponses = async (req, res, next) => {
  try {
    const responses = await zohoResponsesService.findAllZohoResponses();
    return res.json({ responses });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const postZohoResponse = async (req, res, next) => {
  try {
    const zohoResponse = await zohoResponsesService.createZohoResponse(req.body);
    return res.json({ zohoResponse });
  } catch (err) {
    console.log(err);

    next({ ...err, filename: __dirname });
  }
};

module.exports = {
  getZohoResponses,
  postZohoResponse
};
