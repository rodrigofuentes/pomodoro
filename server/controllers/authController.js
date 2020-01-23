require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../../db/connect');

const authController = {};

authController.loginUser = (req, res, next) => {
  //if user has hit the login button and EXISTS, log in
  //access stored hash password, b-decrypt, compare
  // Check for cookie -> login
  // -OR-
  // Check for matching hash password. (BCrypt)
};

authController.registerUser = (req, res, next) => {
  //if user has hit the register endpoint, hash pw and register

  // Input Fields: email, password, first_name, last_name
  const { email, password, first_name, last_name } = req.body;
  // bcrypt hash password

  var hashed_password = bcrypt.hashSync(password, 10);
  // ***************
  // Should the hashed_password be sanitized
  // so it doesn't conflict with the psql query string?
  // ***************

  const values = [email, first_name, last_name, hashed_password];
  const queryString = `INSERT INTO Users (email, first_name, last_name, password) VALUES ($1, $2, $3, $4) RETURNING *`;

  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Some error',
        message: 'Some message'
      });
    }
    console.log(data);
    res.json(data.rows);
    res.locals.watervoyager = data.rows;
    return next();
  });
  // After user is logged in send jwt signed cookie in /login
};

authController.setCookie = (req, res, next) => {
  //upon registration or login, set a cookie with the appropriate user ID and redirect
  // create jwt
  res.cookie();
};

authController.verifyUser = (req, res, next) => {
  //this middleware checks to see if the user has a valid cookie or OAuth access token to access their page
  //this redirects, initiating a fetch with a payload of the user ID
};

module.exports = authController;
