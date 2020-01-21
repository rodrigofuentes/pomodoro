const express = require('express');
const taskRouter = express.Router();

//handle Task retrieval
taskRouter.get('/task', (req, res) => {
  console.log(`taskRouter: Inside GET`);
  res.status(200).json();
});

//handle adding a Task
taskRouter.post('/task', (req, res) => {
  console.log(`taskRouter: Inside POST`);
  res.status(200).json();
});

//handle updating a Task
taskRouter.put('/task', (req, res) => {
  console.log(`taskRouter: Inside UPDATE`);
  res.status(200).json();
});

//handle deleting a Task
taskRouter.delete('/task', (req, res) => {
  console.log(`taskRouter: Inside DELETE`);
  res.status(200).json();
});

module.exports = taskRouter;