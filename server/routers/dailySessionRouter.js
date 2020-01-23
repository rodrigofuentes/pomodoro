const express = require('express');
const sessionRouter = express.Router();
const sessionController = require('../controllers/dailySessionController.js');

//not sure if we need a session Router, or if we should just
//implement the middelware to manipulate the data passing through
