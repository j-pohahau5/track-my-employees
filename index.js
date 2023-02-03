const inquirer = require("inquirer");
const Department = require("./lib/department");
const Employee = require("./lib/employee");
const Role = require("./lib/role");

function addDepartment() {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the name of the department?",
      },
    ])
    .then(function ({ name }) {
      const department = new Department(null, name);
      department.addDepartment();
      startsPrompts();
    });
}

const addRole = () => {
    let department = new Department();
    department.getDepartments().then((department) => {
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
        choices: department.map((d) => {
            return `${d.id} ${d.name}`;
          }),
      },
    ])
    .then(function ({ title, salary, department_name }) {
      const role = new Role(null, title, salary, department_name);
      role.addRole;
      startsPrompts();
    });
});
};

const addEmployee = () => {
    let role = new Role();
  role.getRoles().then((role) => {
    let employee = new Employee();
    employee.getEmployees().then((employee) => {
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
        name: "role_id",
        type: "list",
        message: "What is the employee's role?",
        choices: role.map((r) => {
            return `${r.id}. ${r.title}`;
          }),
      },
      {
        name: "manager_id",
        type: "list",
        message: "Who is the employee's employee's manager?",
        choices: employee.map((e) => {
            return `${e.id} ${e.first_name} ${e.last_name}`;
          }),
      },
    ])
    .then(function ({ first_name, last_name, role_id, manager_id }) {
      const employee = new Employee(
        null,
        first_name,
        last_name,
        role_id,
        manager_id
      );
      employee.addEmployee;
      startsPrompts();
    });
});
});
};

const updateEmployeeRole = () => {
  let role = new Role();
  role.getRoles().then((role) => {
    let employee = new Employee();
    employee.getEmployees().then((employee) => {
      return inquirer
        .prompt([
          {
            name: "employee",
            type: "list",
            message: "Whish employee's role would you like to update?",
            choices: employee.map((e) => {
              return ` ${e.id} ${e.first_name} ${e.last_name}`;
            }),
          },
          {
            name: "role",
            type: "list",
            message: "Which role do you want to assign the selected employee?",
            choices: role.map((r) => {
              return `${r.id}. ${r.title}`;
            }),
          },
        ])
        .then(function ({ employee, role }) {
          employee = new Employee().updateEmployee
            console.log("Successfully Updated Employee Role");
          startsPrompts();
        });
    });
  });
};
function viewDepartments() {
  let department = new Department();
  department
    .getDepartments()
    .then((rows) => {
      console.log("View all Department");
      console.table(rows);
    })
    .then(() => {
      startsPrompts();
    });
}

const viewRoles = () => {
    let role = new Role();
    role
    .getRoles()
    .then((rows) => {
      console.log("View all Department");
      console.table(rows);
    })
    .then(() => {
      startsPrompts();
    });
};
const viewEmployees = () => {
    let employee = new Employee();
    employee
    .getEmployees()
    .then((rows) => {
      console.log("View all Department");
      console.table(rows);
    })
    .then(() => {
      startsPrompts();
    });
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
          viewDepartments(startsPrompts);
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
