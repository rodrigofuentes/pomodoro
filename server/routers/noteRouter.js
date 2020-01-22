const express = require('express');

const noteRouter = express.Router();
const noteController = require('../controllers/noteController');

// handle Task retrieval
noteRouter.get('/', noteController.getNotes, (req, res) => {
  console.log('noteRouter: Inside GET');
  res.status(200).json();
});

// handle adding a Task
noteRouter.post('/note', (req, res) => {
  console.log('noteRouter: Inside POST');
  res.status(200).json();
});

// handle updating a Task
noteRouter.put('/note', (req, res) => {
  console.log('noteRouter: Inside UPDATE');
  res.status(200).json();
});

// handle deleting a Task
noteRouter.delete('/note', (req, res) => {
  console.log('noteRouter: Inside DELETE');
  res.status(200).json();
});

module.exports = noteRouter;
