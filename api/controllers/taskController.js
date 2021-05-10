const Task = require('../models/Task');

exports.allTasks = async (_, res) => {
  try {
    let tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addTask = async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      category: req.body.category
    });
    let newTask = await task.save();
    res.status(200).json({ data: newTask });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const id = req.params.taskId;
    let result = await Task.remove({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const id = req.params.taskId;
    let result = await Task.findByIdAndUpdate(id, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
