const tasksService = require('../db/services/tasks');

const getTasks = async (req, res, next) => {
  try {
    const tasks = await tasksService.findAllTasks();
    return res.json({ tasks });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const postTask = async (req, res, next) => {
  try {
    const skill = await tasksService.findOrCreateTask({
      where: {
        title: req.body.title
      },
      defaults: req.body
    });
    return res.json({ skill });
  } catch (err) {
    console.log(err);

    next({ ...err, filename: __dirname });
  }
};

module.exports = {
  getTasks,
  postTask
};
