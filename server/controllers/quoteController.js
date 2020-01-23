const db = require('../../db/connect');

const quoteController = {};

quoteController.getQuote = (req, res, next) => {
  const random = Math.ceil(Math.random() * 15);
  const values = [random];
  const queryString = 'SELECT * FROM quotes WHERE id = $1';
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error getting Quote to DB.  See taskController.getQuote',
        message: 'Error getting Quote to DB.  See taskController.getQuote'
      });
    }
    console.log('Successfully retrieved quoet from DB: ', data.rows);
    res.locals.quote = data.rows;
    return next();
  });
};

module.exports = quoteController;
