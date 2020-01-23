const sessionController = {};

const now = new Date(Date.now());
console.log(now.getMinutes());

console.log(now.getMinutes());

/*
This controller creates a session cookie that expires midnight daily.
It is used to determine whether to GET tasks/habits/notes on load-in
(e.g. have you logged in today, or are you viewing another day's data?)
*/

//TODO: define a dedicated endpoint to page through entries

sessionController.lookupSession = (req, res, next) => {
  //first perform a check to see if the user has a 'day' cookie

  if (req.cookies.today && !req.cookies.day) {
    //TODO: ensure that we don't need additional logic here to prevent overfetching
    next();
  } else if (req.cookies.day) {
    //if you have a 'day' cookie set, pull that day's value

    next();
  } else {
    //if you have no 'today' or 'day' cookie set, set one with sessionController.createSession
    //then use normal getTasks logic to find any for today
    //TODO: determine how we want to send results of this checker middleware to front-end
    next();
  }
};

//if you have entered this middleware, you have been authenticated
sessionController.createSession = (req, res, next) => {
  const now = new Date(Date.now());
  const midnight = new Date();
  midnight.setHours(23, 59, 59, 0);
  const expirationDate = midnight - now;

  let month = now.getUTCMonth() + 1;
  let day = now.getUTCDate();
  let year = now.getUTCFullYear();
  const today = `${year}-${month}-${day}`;

  res.cookie('today', `${today}`, { expires: expirationDate });
  next();
};

//this API will update the session to allow users to page through past entries
sessionController.pastSession = (req, res, next) => {
  const now = new Date(Date.now());
  const midnight = new Date();
  midnight.setHours(23, 59, 59, 0);
  const fiveMinutesFromNow = now.setMinutes(now.getMinutes() + 5);

  let month = now.getUTCMonth() + 1;
  let day = now.getUTCDate();
  let year = now.getUTCFullYear();

  //this logic decrements the day, rolling back the month as needed
  if (day === 1) {
    if (month === (1 || 11 || 9 || 8 || 6 || 4 || 2)) {
      //account for January 1st of any given year
      if (month === 1) {
        month = 12;
        year -= 1;
      } else {
        month -= 1;
      }
      day = 31;
    } else if (month === (12 || 10 || 7 || 5)) {
      month -= 1;
      day = 30;
    } else if (month === 3) {
      const lastTwoYearDigits = year.toString().substr(2);
      if (parseInt(lastTwoYearDigits) % 4 === 0) {
        month -= 1;
        day = 29;
      } else {
        month -= 1;
        day = 28;
      }
    }
  }

  //JavaScript returns the UTC Date with no leading zeroes
  //we will add them and use day as a string for now
  if (day.length === 1 && day !== 1) {
    const zeroLeading = `0`.concat((day - 1).toString());
    day = zeroLeading;
  }

  delete req.cookies.day;
  const currentDay = `${year}-${month}-${day}`;
  res.cookie('day', `${currentDay}`, { expires: fiveMinutesFromNow });
  next();
};

//this API will update the session to allow users to page through future entries
sessionController.futureSession = (req, res, next) => {
  const now = new Date(Date.now());
  const midnight = new Date();
  midnight.setHours(23, 59, 59, 0);
  const fiveMinutesFromNow = now.setMinutes(now.getMinutes() + 5);

  let month = now.getUTCMonth() + 1;
  let day = now.getUTCDate();
  let year = now.getUTCFullYear();

  //this logic increments the day, rolling forward the month as needed
  if (day === 31 && month === (1 || 3 || 5 || 7 || 8 || 10 || 12)) {
    //account for New Year's Eve of any given year
    if (month === 12) {
      month = 1;
      year += 1;
    } else {
      month += 1;
    }
    day = 1;
  } else if (day === 30 && month === (4 || 6 || 9 || 11)) {
    day = 1;
    month += 1;
  } else if (day === 28 && month === 2) {
    const lastTwoYearDigits = year.toString().substr(2);
    if (parseInt(lastTwoYearDigits) % 4 === 0) {
      day = 29;
    } else {
      day = 1;
      month += 1;
    }
  }

  //JavaScript returns the UTC Date with no leading zeroes
  //we will add them and use day as a string for now
  if (day.length === 1 && day !== 1) {
    const zeroLeading = `0`.concat((day - 1).toString());
    day = zeroLeading;
  }

  delete req.cookies.day;
  const currentDay = `${year}-${month}-${day}`;
  res.cookie('day', `${currentDay}`, { expires: fiveMinutesFromNow });
  next();
};
