const { Pool } = require('pg');

const myURI =
  'postgres://vqyznmmk:8z8vS-EHRZ991BHXcSuWUbpV8CPrwpga@rajje.db.elephantsql.com:5432/vqyznmmk';

const connectionString = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: myURI
});

pool.on('connect', () => {
  console.log('Connected to the SQL database');
});

module.exports = {
  query: (text, params, callback) => {
    console.log(`Executed query ${text}`);
    return pool.query(text, params, callback);
  }
};
