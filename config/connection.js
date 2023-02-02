const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'employee_db'
    },
    console.log(`Connected to the movie_db database.`)
);

module.exports = db;