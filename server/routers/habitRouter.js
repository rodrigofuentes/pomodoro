const express = require('express');
const habitRouter = express.Router();

//handle Habit retrieval
habitRouter.get('/habit', (req, res) => {
  console.log(`habitRouter: Inside GET`);
  res.status(200).json();
});

//handle adding a Habit
habitRouter.post('/habit', (req, res) => {
  console.log(`habitRouter: Inside POST`);
  res.status(200).json();
});

//handle updating a Habit
habitRouter.put('/habit', (req, res) => {
  console.log(`habitRouter: Inside UPDATE`);
  res.status(200).json();
});

//handle deleting a Habit
habitRouter.delete('/habit', (req, res) => {
  console.log(`habitRouter: Inside DELETE`);
  res.status(200).json();
});

module.exports = habitRouter;