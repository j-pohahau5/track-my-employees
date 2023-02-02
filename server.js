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

// To view the correct department
// TODO:
db.query(
    'SELECT * FROM department',
    ['Page', 45],
    function(err, results) {
      console.log(results);
    }
  );

// To view the correct role
// TODO:
db.query(
  'SELECT r.title, r.title, d.name AS department, r.salary FROM role AS r JOIN department AS d on d.id = r.department_id',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// To view the correct employee
// TODO: convert manager_id num to manager name
db.query(
  'SELECT e.first_name, e.last_name, r.title, d.name as department, r.salary, e.manager_id FROM employee AS e JOIN role AS r on r.id = e.role_id INNER JOIN department AS d on d.id = r.department_id',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);

;