const inquirer = require("inquirer");

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
  startsPrompts;
};
const viewRoles = () => {
  startsPrompts;
};
const viewEmployees = () => {
  startsPrompts;
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
