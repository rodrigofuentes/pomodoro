const db = require('../../db/connect');

const habitController = {};

//retrieves all habits upon load-in or any time we call it
//(provided there is an existing session for today)

habitController.getHabits = (req, res, next) => {
  const queryString = 'SELECT * FROM habits';
  db.query(queryString, (err, data) => {
    if (err) {
      return next({
        log: 'Error getting Habits from DB.  See noteController.getHabits',
        message: 'Error getting Habits from DB.  See noteController.getHabits',
      });
    }
    console.log(`Successfully retrieved ${data.rows.length} habits from DB`);
    res.locals.habits = data.rows;
    return next();
  });
};

habitController.addHabit = (req, res, next) => {
  const { habit } = req.body;
  const values = [habit];
  const queryString = 'INSERT INTO habits (habit) VALUES ($1) RETURNING *';
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error adding habit to the DB.  See habitController.addHabit',
        message: 'Error adding habit to the DB.  See habitController.addHabit',
      });
    }
    console.log('Successfully added habit to DB: ', data.rows);
    res.locals.habit = data.rows;
    return next();
  });
};

//this API is for when we wish to update the text of a habit entry

habitController.updateHabit = (req, res, next) => {
  const {habit, id} = req.body;
  const queryString = `UPDATE Habits SET habit=$1 WHERE id=$2 RETURNING *`;
  const values = [habit, id];

  db.query(queryString, values, (err, data) => {
    if (err){
      return next({
        log: 'Error updating habit in DB.  See habitController.updateHabit',
        message: 'Error updating habit in DB.  See habitController.updateHabit',
      })
    }
    console.log(`Updated habit ID: ${id} entry in the database. Now reads ${habit}`);
    res.locals.updated = data;
    next();
  });


};

//this API is for the checkbox, toggling habit completion states

habitController.toggleHabit = (req, res, next) => {
  const {id} = req.body;
  let {completed} = req.body;
  completed = !completed;
  const values = [completed, id]
  const queryString = `UPDATE Habits SET completed=$1 WHERE id=$2 RETURNING *`

  db.query(queryString, values, (err, data) => {
    if (err){
      return next({
        log: 'Error getting Habits from DB.  See habitController.getHabits',
        message: 'Error getting Habits from DB.  See habitController.getHabits',
      });
    }
    console.log(`Habit id ${id} completion: ${completed}`);
    res.locals.completed = data.completed;
    return next();
  })
};

//delete a habit from its 'delete' button using its ID as payload

habitController.deleteHabit = (req, res, next) => {
  const { id } = req.body;
  const values = [id];
  const queryString = 'DELETE FROM habits WHERE id = $1 RETURNING *';
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error deleting habit from DB.  See habitController.deleteHabit',
        message: 'Error deleting habit from DB.  See habitController.deleteHabit',
      });
    }
    console.log('Successfully deleted habit from DB: ', data.rows);
    res.locals.habit = data.rows;
    return next();
  });
};

module.exports = habitController;
