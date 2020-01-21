const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

/* ROUTERS AND CONTROLLER MIDDLEWARE */
const db = require('../db/connect.js');
const authController = require('./controllers/authController.js');
const oAuthController = require('./controllers/oAuthController.js');

const taskRouter = require('./routers/taskRouter.js');
const habitRouter = require('./routers/habitRouter.js');
const noteRouter = require('./routers/noteRouter.js');
const taskController = require('./controllers/taskController.js');
const habitController = require('./controllers/habitController.js');
const noteController = require('./controllers/noteController.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

//serve up static stylings and index.js script
app.use(express.static(path.resolve(__dirname, '../src/index.js')));
app.use(express.static(path.resolve(__dirname, '../src/styles')));

// send index.html on root access
app.get('/', (req, res) => {
  res.sendFile(index.html);
});

//handle login requests
app.post('/login', (req, res) => {
  res.status(200).json();
});

//handle signup requests
app.post('/signup', (req, res) => {
  res.status(200).json();
});

//handle OAuth requests
app.post('/oauth', (req, res) => {
  res.status(200).json();
});

//defer to Task Router
app.use('/task', taskRouter);

//defer to Habit Router
app.use('/habit', habitRouter);

//defer to Note Router
app.use('/note', noteRouter);

// listen on 3000
app.listen(3000, () => console.log('Server listening on 3000'));
