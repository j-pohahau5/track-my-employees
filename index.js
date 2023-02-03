const inquirer = require("inquirer");
const db = require("./config/connection");

const addDepartment = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the name of the department?",
      },
    ])
    .then(function ({ name }) {
      db.query(
        "INSERT INTO department(name) VALUES(?)",
        (name), function (err, result) {
            if (err) throw err;
      }
      );
      startsPrompts();
    });
};

const addRole = () => {
  return inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the title of the role?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary of the role?",
      },
      {
        name: "department_name",
        type: "list",
        message: "Which department does does the role belong to?",
        choices: ["Sales", "Engineering", "Finance", "Legal"],
      },
    ])
    .then(function ({ title, salary, department_name }) {
      db.query(
        "INSERT INTO role (title, department_id, salary) VALUES(?)",
        (title, salary, department_name), function (err, result) {
            if (err) throw err;
        }
      );
      startsPrompts();
    });
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the employee's first name?",
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the employee's last name?",
      },
      {
        name: "role",
        type: "list",
        message: "What is the employee's role?",
        choices: [
          "Sales Lead",
          "Salesperson",
          "Lead Engineer",
          "Software Engineer",
          "Account Manager",
          "Accountant",
          "Legal Team Lead",
          "Lawyer",
        ],
      },
      {
        name: "manager",
        type: "list",
        message: "Who is the employee's employee's manager?",
        choices: [
          "None",
          "John Smith",
          "Mike Chan",
          "Ashley Rodriguez",
          "Kevin Tupik",
          "Kunal Singh",
          "Malia Brown",
          "Sarah Lourd",
          "Tom Allen",
        ],
      },
    ])
    .then(function ({ first_name, last_name, role, manager }) {
      db.query(
        "SELECT e.first_name, e.last_name, r.title, d.name as department, r.salary, e.manager_id FROM employee AS e JOIN role AS r on r.id = e.role_id INNER JOIN department AS d on d.id = r.department_id;",
        (first_name, last_name, role, manager), function (err, result) {
            if (err) throw err;
        }
      );
      startsPrompts();
    });
};

const updateEmployeeRole = () => {
  return inquirer
    .prompt([
      {
        name: "employee_name",
        type: "list",
        message: "Whish employee's role would you like to update?",
        choices: [
          "John Smith",
          "Mike Chan",
          "Ashley Rodriguez",
          "Kevin Tupik",
          "Kunal Singh",
          "Malia Brown",
          "Sarah Lourd",
          "Tom Allen",
        ],
      },
      {
        name: "employee_role",
        type: "list",
        message: "Which role do you want to assign the selected employee?",
        choices: [
          "Sales Lead",
          "Salesperson",
          "Lead Engineer",
          "Software Engineer",
          "Account Manager",
          "Accountant",
          "Legal Team Lead",
          "Lawyer",
        ],
      },
    ])
    .then(function ({ employee_name, employee_role }) {
      startsPrompts();
    });
};
const viewDepartments = () => {
  db.query(`SELECT * FROM department;`, function (err, results) {
    console.table(results);
  });
  startsPrompts();
};
const viewRoles = () => {
  db.query(
    `SELECT r.id, r.title, d.name AS department, r.salary FROM role AS r JOIN department AS d on d.id = r.department_id;`,
    function (err, results) {
      console.table(results);
    }
  );
  startsPrompts();
};
const viewEmployees = () => {
  db.query(
    `SELECT e.first_name, e.last_name, r.title, d.name as department, r.salary, e.manager_id FROM employee AS e JOIN role AS r on r.id = e.role_id INNER JOIN department AS d on d.id = r.department_id;`,
    function (err, results) {
      console.table(results);
    }
  );
  startsPrompts();
};
const startsPrompts = () => {
  return inquirer
    .prompt([
      {
        name: "selection",
        type: "list",
        message: "What would you like to do",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
        ],
      },
    ])
    .then((chosen) => {
      switch (chosen.selection) {
        case "View All Departments":
          viewDepartments();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "View All Employees":
          viewEmployees();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        default:
          startsPrompts();
      }
    });
};

startsPrompts();
