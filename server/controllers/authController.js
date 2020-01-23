require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../../db/connect');

const authController = {};

authController.loginUser = (req, res, next) => {
  // if user has hit the login button and EXISTS, log in
  // access stored hash password, b-decrypt, compare
  const { email, password } = req.body;
  console.log('password: ', password);
  const queryString = 'SELECT * FROM users WHERE email = $1';
  const values = [email];
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error registering user in DB.  See authController.registerUser',
        message: 'Error registering user in DB.  See authController.registerUser',
      });
    }
    if (data.rows.length === 0) {
      res.status(401).json('User not found.');
    }
    const userPassword = data.rows[0].password;
    console.log('userpassword: ', userPassword);
    if (bcrypt.compareSync(password, userPassword)) return next();
    res.status(401).json('Auth failed.');
  });
};

authController.registerUser = (req, res, next) => {
  // if user has hit the register endpoint, hash pw and register
  // eslint-disable-next-line object-curly-newline
  const { email, first_name, last_name, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const queryString = 'INSERT INTO users (email, first_name, last_name, password) VALUES ($1, $2, $3, $4)';
  const values = [email, first_name, last_name, hashedPassword];
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error registering user in DB.  See authController.registerUser',
        message: 'Error registering user in DB.  See authController.registerUser',
      });
    }
    return next();
  });
};

authController.setCookie = (req, res, next) => {
  // upon registration or login, set a cookie with the appropriate user ID and redirect
  const { email } = req.body;
  const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET_HASH_PASS_FBI_CIA_SPECOPS_ENCRYPTION);
  res.cookie('token', token, { httpOnly: true });
  res.json('logged in and cookie set');
};

authController.verifyCookie = (req, res, next) => {
  // this middleware checks to see if the user has a valid cookie or OAuth access token to access their page
  // this redirects, initiating a fetch with a payload of the user ID
  const { token } = req.cookies;
  if (token === undefined) return res.status(401).send('not authorized');
  const email = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_HASH_PASS_FBI_CIA_SPECOPS_ENCRYPTION, (err, user) => {
    if (err) {
      return next({
        log: 'Error decrypting JWT.  See authController.verifyCookie',
        message: 'Error decrypting JWT.  See authController.verifyCookie',
      });
    }
    // get email from verify and check email in DB and console log user
    return user;
  });
  console.log(email);
  const queryString = 'SELECT * FROM users WHERE email = $1';
  const values = [email];
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error authorizing JWT.  See authController.verifyCookie',
        message: 'Error authorizing JWT.  See authController.verifyCookie',
      });
    } if (data.rows.length === 0) {
      res.status(401).json('Invalid credentials.');
    }
    next();
  });
};

module.exports = authController;
