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
    const session = await sessionService.createSession(req.body);

    return res.json({ session });
  } catch (err) {
    console.log(err);

    next({ ...err, filename: __dirname });
  }
};

const getOneSession = async (req, res, next) => {
  try {
    const session = await sessionService.findOneSession(req.params);
    return res.json({ session });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const updateSession = async (req, res, next) => {
  try {
    const session = await sessionService.updateSession(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.json({ session });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const deleteSession = async (req, res, next) => {
  try {
    const deletedSession = await sessionService.deleteSession({
      where: {
        id: req.params.id
      }
    });
    return res.json({ deletedSession });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

module.exports = {
  getOneSession,
  updateSession,
  deleteSession,
  getSessions,
  postSession
};
