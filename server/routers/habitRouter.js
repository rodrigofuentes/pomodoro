const express = require('express');

const habitRouter = express.Router();
const habitController = require('../controllers/habitController');

// handle Habit retrieval
habitRouter.get('/', habitController.getHabits, (req, res) => {
  console.log('habitRouter: Inside GET');
  res.status(200).json(res.locals.habits);
});

// handle adding a Habit
habitRouter.post('/', habitController.addHabit, (req, res) => {
  console.log('habitRouter: Inside POST');
  res.status(200).json(res.locals.habit);
});

// handle updating a Habit....but do we even have/need this functionality?
habitRouter.put('/update', habitController.updateHabit, (req, res) => {
  console.log('habitRouter: Inside UPDATE');
  res.status(200).json(res.locals.updated);
});

habitRouter.put('/toggle', habitController.toggleHabit, (req, res) => {
  console.log('habitRouter: Inside TOGGLE');
  res.status(200).json(res.locals.completed);
});

// handle deleting a Habit
habitRouter.delete('/', habitController.deleteHabit, (req, res) => {
  console.log('habitRouter: Inside DELETE');
  res.status(200).json(res.locals.habit);
});

module.exports = habitRouter;
