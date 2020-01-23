const db = require('../../db/connect');

const taskController = {};

taskController.getTasks = (req, res, next) => {
  const {day} = req.cookies;
  const values = [day];
  const queryString = 'SELECT * FROM tasks WHERE date=$1 ORDER BY priority';
  
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error getting tasks to DB.  See taskController.getTasks',
        message: 'Error getting tasks to DB.  See taskController.getTasks',
      });
    }
    console.log(`Successfully retrieved ${data.rows.length} tasks from DB`);
    res.locals.tasks = data.rows;
    return next();
  });
};

taskController.addTask = (req, res, next) => {
  const { task, priority } = req.body;
  const values = [task, priority];
  const queryString = 'INSERT INTO tasks (task, priority) VALUES ($1, $2) RETURNING *';
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error adding task to DB.  See taskController.addTask',
        message: 'Error adding task to DB.  See taskController.addTask',
      });
    }
    console.log('Successfully added task to DB: ', data.rows);
    res.locals.posted = data.rows;
    return next();
  });
};

taskController.updateTask = (req, res, next) => {
  const { id, task } = req.body;
  const queryString = 'UPDATE tasks SET task = $1 WHERE id = $2 RETURNING *';
  const values = [task, id];
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error updating task to DB.  See taskController.updateTask',
        message: 'Error updating task to DB.  See taskController.updateTask',
      });
    }
    console.log('Successfully updated task to DB: ', data.rows);
    return next();
  });
};

taskController.deleteTask = (req, res, next) => {
  const { id } = req.body;
  const queryString = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
  const values = [id];
  db.query(queryString, values, (err, data) => {
    if (err) {
      return next({
        log: 'Error deleting task from DB.  See taskController.deleteTask',
        message: 'Error deleting task from DB.  See taskController.deleteTask',
      });
    }
    console.log('Successfully deleted task from DB: ', data.rows);
    res.locals.deleted = data.rows;
    return next();
  });
};

module.exports = taskController;
