const db = require('../../db/connect');

const noteController = {};

noteController.getNotes = (req, res, next) => {
  const queryString = 'SELECT * FROM notes';
  db.query(queryString, (err, data) => {
    if (err) {
      return next({
        log: 'Error getting notes from DB.  See noteController.getNotes',
        message: 'Error getting notes from DB.  See noteController.getNotes',
      });
    }
    console.log(`Successfully retrieved ${data.rows.length} notes from DB`);
    res.locals.notes = data.rows;
    return next();
  });
};

noteController.addNote = (req, res, next) => {
  const { note } = req.body;
  const values = [note];
  const queryString = 'INSERT INTO notes (note) VALUES ($1) RETURNING *';
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error adding note from DB.  See noteController.addNote',
        message: 'Error adding note from DB.  See noteController.addNote',
      });
    }
    console.log('Successfully added note to the DB: ', data.rows);
    res.locals.notes = data.rows;
    return next();
  });
};

noteController.updateNote = (req, res, next) => {};

noteController.deleteNote = (req, res, next) => {};

module.exports = noteController;
