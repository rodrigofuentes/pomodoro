require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

/* ROUTERS AND CONTROLLER MIDDLEWARE */
const db = require('../db/connect.js');
const authController = require('./controllers/authController.js');
const oAuthController = require('./controllers/oAuthController.js');

const taskRouter = require('./routers/taskRouter.js');
const habitRouter = require('./routers/habitRouter.js');
const noteRouter = require('./routers/noteRouter.js');
const quoteRouter = require('./routers/quoteRouter.js');
const taskController = require('./controllers/taskController.js');
const habitController = require('./controllers/habitController.js');
const noteController = require('./controllers/noteController.js');

app.use(express.json());
app.use(cookieParser());

// Set the cookie
// has to live above express.static
app.use('/', (req, res, next) => {
  let options = {
    maxAge: 1000 * 60 * 15, // would expire after 15 minutes
    httpOnly: true // The cookie only accessible by the web server
  };
  // TODO: Check for cookie
  const cookieJar = req.cookies; // is an obj
  // If no cookie exists set cookie
  // set name and value based on auth from login.
  // maybe this should live in /login or /register
  res.cookie('cookieName', 'cookieValue', options);
  console.log("Made a cookie inside app.use('/')");

  next();
});

// serve up static stylings and index.js script
app.use(express.static(path.resolve(__dirname, 'build')));

// send index.html on root access
app.get('/', (req, res) => {
  // This route does nothing with Proxy...
  // How to fix without breaking route to serve file.

  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

// handle login requests
app.post('/login', authController.loginUser, (req, res) => {
  // check if user exists and password matches and send jwt cookie
  res.status(200).json();
});

app.post('/signup', authController.registerUser, (req, res) => {
  res.status(200).json();
});

// handle OAuth requests
app.post('/oauth', (req, res) => {
  res.status(200).json();
});

// defer to Task Router
app.use('/task', taskRouter);

// defer to Habit Router
app.use('/habit', habitRouter);

// defer to Note Router
app.use('/note', noteRouter);

// app.use('/quote', (req, res) => {
//   const { quotes } = req.body;
app.use('/quote', quoteRouter);

// get quotes from DB
// app.get('/quote', (req, res) => {
//   const queryString = 'SELECT * FROM quotes';
//   db.query(queryString, (err, data) => {
//     if (err) {
//       console.log('error getting quotes');
//     }
//     console.log(`Successfully retrieved ${data.rows.length} quotes from DB`);
//     res.locals.quotes = data.rows;
//     res.status(200).send(res.locals.quotes);
//   });
// });

// post quotes to DB
// app.post('/quote', (req, res) => {
//   const { quotes } = req.body;
//   console.log('quotes: ', quotes);
//   const queryString = 'INSERT INTO quotes (text, author) VALUES ($1, $2) RETURNING *';
//   res.locals.quotes = [];
//   quotes.forEach((el) => {
//     const values = [el.text, el.author];
//     db.query(queryString, values, (err, data) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log('Successfully added habit to DB: ', data.rows);
//       res.locals.quotes.push(data.rows[0]);
//     });
//   });
//   res.status(200).send(res.locals.quotes);
// });

// listen on 3000
app.listen(3000, () => console.log('Server listening on 3000'));

module.exports = app;
