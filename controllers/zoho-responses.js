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

const getOneZohoResponse = async (req, res, next) => {
  try {
    const zoho_response = await zohoResponsesService.findOneZohoResponse(req.params);
    return res.json({ zoho_response });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const updateZohoResponse = async (req, res, next) => {
  try {
    const zoho_response = await zohoResponsesService.updateZohoResponse(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.json({ zoho_response });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const deleteZohoResponse = async (req, res, next) => {
  try {
    const deletedZohoResponse = await zohoResponsesService.deleteZohoResponse({
      where: {
        id: req.params.id
      }
    });
    return res.json({ deletedZohoResponse });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

module.exports = {
  getOneZohoResponse,
  updateZohoResponse,
  deleteZohoResponse,
  getZohoResponses,
  postZohoResponse
};
