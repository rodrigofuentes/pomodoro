const express = require('express');

const quoteRouter = express.Router();
const quoteController = require('../controllers/quoteController');

// handle Habit retrieval
quoteRouter.get('/', quoteController.getQuote, (req, res) => {
  console.log('quoteRouter: Inside GET');
  res.status(200).json(res.locals.quote);
});

module.exports = quoteRouter;
