const AIResultService = require('../db/services/ai-results');

const getAIResults = async (req, res, next) => {
  try {
    const results = await AIResultService.findAllAIResults();
    return res.json({ results });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const postAIResult = async (req, res, next) => {
  try {
    const ai_result = await AIResultService.createAIResult(req.body);

    return res.json({ ai_result });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const getOneAIResult = async (req, res, next) => {
  try {
    const ai_result = await AIResultService.findOneAIResults(req.params);
    return res.json({ ai_result });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const updateAIResult = async (req, res, next) => {
  try {
    const ai_result = await AIResultService.updateAIResult(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.json({ ai_result });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const deleteAIResult = async (req, res, next) => {
  try {
    const deletedAIResult = await AIResultService.deleteAIResult({
      where: {
        id: req.params.id
      }
    });
    return res.json({ deletedAIResult });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

module.exports = {
  getOneAIResult,
  updateAIResult,
  deleteAIResult,
  getAIResults,
  postAIResult
};
