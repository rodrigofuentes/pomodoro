const express = require('express');

const noteRouter = express.Router();
const noteController = require('../controllers/noteController');

// handle Task retrieval
noteRouter.get('/', noteController.getNotes, (req, res) => {
  console.log('noteRouter: Inside GET');
  res.status(200).json(res.locals.notes);
});

// handle adding a Task
noteRouter.post('/', noteController.addNote, (req, res) => {
  console.log('noteRouter: Inside POST');
  res.status(200).json(res.locals.note);
});

// handle updating a Task
noteRouter.put('/', noteController.updateNote, (req, res) => {
  console.log('noteRouter: Inside UPDATE');
  res.status(200).json();
});

// handle deleting a Task
noteRouter.delete('/', noteController.deleteNote, (req, res) => {
  console.log('noteRouter: Inside DELETE');
  res.status(200).json();
});

module.exports = noteRouter;
