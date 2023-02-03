const db = require('../config/connection');


class Employee {
    constructor(id, first_name, last_name, role_id, manager_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }
    getEmployees() {
        const sql = `SELECT e.id, CONCAT(e.first_name," ", e.last_name) as 'Employee Name', r.title, d.name as department, r.salary, CONCAT(b.first_name," ", b.last_name) as manager FROM employee e JOIN employee AS b on e.manager_id = b.id JOIN role r on r.id = e.role_id INNER JOIN department d on d.id = r.department_id;`;
     return db.promise()
            .query(sql)
            .then(([rows]) =>{
                return rows;
            })
    }
    addEmployee() {
        // use this to add things: (first_name, last_name, role_id, manager_id)
        // add to department
        // add to role
        const sql = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES(?)`;
        const employee = [this.first_name, this.last_name, this.role_id, this.manager_id]
        return db.promise()
              .query(sql, employee)
    }
    updateEmployee() {
        const sql = `UPDATE employee SET role_id = ? WHERE id = ${this.id}`;
        const employee = [this.role_id]
        return db.promise()
              .query(sql, employee)
              .then(([rows]) =>{
                return rows;
              })
    }
}

console.log(Employee.getEmployees);
module.exports = Employee
// To view the correct department
// TODO:
// db.query(
//     'SELECT * FROM department;',
//     ['Page', 45],
//     function(err, results) {
//       console.log(results);
//     }
//   );

// To view the correct role
// TODO:
// db.query(
//   'SELECT r.title, r.title, d.name AS department, r.salary FROM role AS r JOIN department AS d on d.id = r.department_id;',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// To view the correct employee
// TODO: convert manager_id num to manager name
// db.query(
//   'SELECT e.first_name, e.last_name, r.title, d.name as department, r.salary, e.manager_id FROM employee AS e JOIN role AS r on r.id = e.role_id INNER JOIN department AS d on d.id = r.department_id;',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );

// use this to add things:
// add to department
// db.query("INSERT INTO department(name) VALUES(?)", req.body.movie_name, (err, results) => {
//     if (err) {
//         console.log(err);
//       } else {
//         res.send("Movie Successfully Added!")
//       }
// })
// add to role
// db.query("INSERT INTO role (title, department_id, salary) VALUES(?)", req.body.movie_name, (err, results) => {
//     if (err) {
//         console.log(err);
//       } else {
//         res.send("Movie Successfully Added!")
//       }
// })
// add to employee
// db.query("INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES(?)", req.body.movie_name, (err, results) => {
//     if (err) {
//         console.log(err);
//       } else {
//         res.send("Movie Successfully Added!")
//       }
// })

// use this to update things:
// update an employee role
// db.query("UPDATE employee SET role_id =? WHERE id=?;", [req.body.review, req.params.id], (err, results) => {
//     if (err) {
//         console.log(err);
//       } else {
//         res.send("Review Successfully Updated!")
//       }
// })




// BONUS:
// update an employee managers
// db.query("UPDATE reviews SET review =? WHERE id=?;", [req.body.review, req.params.id], (err, results) => {
//     if (err) {
//         console.log(err);
//       } else {
//         res.send("Review Successfully Updated!")
//       }
// })

// view employee by manager
// db.query(
//     'SELECT r.title, r.title, d.name AS department, r.salary FROM role AS r JOIN department AS d on d.id = r.department_id;',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
// );

// view employee by department
// db.query(
//     'SELECT r.title, r.title, d.name AS department, r.salary FROM role AS r JOIN department AS d on d.id = r.department_id;',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
// );

// delete departments, roles, and employees.
// db.query("DELETE FROM movies WHERE id=?;", req.params.id, (err, results) => {
//     if (err) {
//         console.log(err);
//       } else {
//         res.send("Movie Successfully Deleted!")
//       }
// })

// View the total utilized budget of a department—in other words, the combined 
// salaries of all employees in that department.
// db.query(
//     'SELECT r.title, r.title, d.name AS department, r.salary FROM role AS r JOIN department AS d on d.id = r.department_id;',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
// );