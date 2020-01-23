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
const quoteRouter = require('./routers/quoteRouter.js');
const taskController = require('./controllers/taskController.js');
const habitController = require('./controllers/habitController.js');
const noteController = require('./controllers/noteController.js');

app.use(express.json());
app.use(cookieParser());

// serve up static stylings and index.js script
app.use(express.static(path.resolve(__dirname, 'build')));
// app.use(express.static(path.resolve(__dirname, '../build/styles')));

// send index.html on root access
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});

// handle login requests
app.post('/login', authController.loginUser, authController.setCookie, (req, res) => {
  res.status(200).json(res.locals.userData);
});

// handle signup requests
app.post('/register', authController.registerUser, authController.setCookie, (req, res) => {
  res.status(200).json(res.locals.toggle);
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
