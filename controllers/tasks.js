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
    const task = await tasksService.findOrCreateTask({
      where: {
        title: req.body.title
      },
      defaults: req.body
    });
    return res.json({ task });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};


const getOneTask = async (req, res, next) => {
  try {
    const task = await tasksService.findOneTask(req.params);
    return res.json({ task });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const updateTask = async (req, res, next) => {
  try {
    const task = await tasksService.updateTask(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.json({ task });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const deletedTask = await tasksService.deleteTask({
      where: {
        id: req.params.id
      }
    });
    return res.json({ deletedTask });
  } catch (err) {
    next({ ...err, filename: __dirname });
  }
};

module.exports = {
  getOneTask,
  updateTask,
  deleteTask,
  getTasks,
  postTask
};
