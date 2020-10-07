const sessionService = require('../db/services/coaching-sessions');

const getSessions = async (req, res, next) => {
  try {
    const sessions = await sessionService.findAllSessions();
    return res.json({ sessions });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const postSession = async (req, res, next) => {
  try {
    console.log(1);

    const session = await sessionService.createSession(req.body);
    console.log(2);

    return res.json({ session });
  } catch (err) {
    console.log(err);

    next({ ...err, filename: __dirname });
  }
};

module.exports = {
  getSessions,
  postSession
};
