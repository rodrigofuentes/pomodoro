const authController = {};
// const bcrypt = require('bcrypt');

authController.loginUser = (req, res, next) => {
  //if user has hit the login button and EXISTS, log in
  //access stored hash password, b-decrypt, compare
};

authController.registerUser = (req, res, next) => {
  //if user has hit the register endpoint, hash pw and register
};

authController.setCookie = (req, res, next) => {
  //upon registration or login, set a cookie with the appropriate user ID and redirect
};

authController.verifyUser = (req, res, next) => {
  //this middleware checks to see if the user has a valid cookie or OAuth access token to access their page
  //this redirects, initiating a fetch with a payload of the user ID
};

module.exports = authController;