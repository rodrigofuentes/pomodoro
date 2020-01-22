const db = require('../../db/connect');

const habitController = {};

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
        log: 'Error getting Habits from DB.  See habitController.getHabits',
        message: 'Error getting Habits from DB.  See habitController.getHabits',
      });
    }
    console.log('Successfully added habit to DB: ', data.rows);
    res.locals.habit = data.rows;
    return next();
  });
};

habitController.updateHabit = (req, res, next) => {};

habitController.deleteHabit = (req, res, next) => {
  const { id } = req.body;
  const values = [id];
  const queryString = 'DELETE FROM habits WHERE id = $1 RETURNING *';
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error deleting Habits from DB.  See habitController.getHabits',
        message: 'Error deleting Habits from DB.  See habitController.getHabits',
      });
    }
    console.log('Successfully added habit to DB: ', data.rows);
    res.locals.habit = data.rows;
    return next();
  });
};

module.exports = habitController;
