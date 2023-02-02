const inquirer = require("inquirer");

const startsPrompts = () => {
  return (inquirer.prompt([
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
  ]).then((chosen) => {
        switch (chosen.selection) {
          case "View All Departments":
            addEngineer();
            break;
          case "View All Roles":
            addIntern();
            break;
          case "View All Employees":
            addIntern();
            break;
          case "Add Department":
            addIntern();
            break;
          case "Add Role":
            addIntern();
            break;
          case "Add Employee":
            addIntern();
            break;
          case "Update Employee Role":
            addIntern();
            break;
          default:
            startHtml();
        }
      })
  );
};

