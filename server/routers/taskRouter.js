const express = require('express');

const taskRouter = express.Router();
const taskController = require('../controllers/taskController');

// handle Task retrieval
taskRouter.post('/get', taskController.getTasks, (req, res) => {
  console.log('taskRouter: Inside GET');
  res.status(200).json(res.locals.tasks);
});

// handle adding a Task
taskRouter.post('/', taskController.addTask, (req, res) => {
  console.log('taskRouter: Inside POST');
  res.status(200).json(res.locals.posted);
});

// handle updating a Task
taskRouter.put('/', taskController.updateTask, (req, res) => {
  console.log('taskRouter: Inside UPDATE');
  res.status(200).json();
});

// handle deleting a Task
taskRouter.delete('/', taskController.deleteTask, (req, res) => {
  console.log('taskRouter: Inside DELETE');
  res.status(200).json(res.locals.deleted);
});

module.exports = taskRouter;
