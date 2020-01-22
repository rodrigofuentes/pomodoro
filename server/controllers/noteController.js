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
  const queryString = 'INSERT INTO notes (notes) VALUES ($1) RETURNING *';
  db.query(queryString, values, (err, data) => {
    if (err) {
      console.log(err);
      return next({
        log: 'Error adding note from DB.  See noteController.addNote',
        message: 'Error adding note from DB.  See noteController.addNote',
      });
    }
    console.log('Successfully added note to the DB: ', data.rows);
    res.locals.note = data.rows;
    return next();
  });
};

noteController.updateNote = (req, res, next) => {
  const { id, note } = req.body;
  const queryString = 'UPDATE notes SET notes = $1 WHERE id = $2 RETURNING *';
  const values = [note, id];
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error updating note in DB.  See noteController.updateNote',
        message: 'Error updating note in DB.  See noteController.updateNote',
      });
    }
    console.log('Successfully updated note in the DB: ', data.rows);
    res.locals.note = data.rows;
    return next();
  });
};

noteController.deleteNote = (req, res, next) => {
  const { id } = req.body;
  const queryString = 'DELETE FROM notes WHERE id = $1 RETURNING *';
  const values = [id];
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error deleting note in DB.  See noteController.deleteNote',
        message: 'Error deleting note in DB.  See noteController.deleteNote',
      });
    }
    console.log('Successfully deleted note in the DB: ', data.rows);
    res.locals.note = data.rows;
    return next();
  });
};

module.exports = noteController;
