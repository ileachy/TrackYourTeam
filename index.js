// Global vars
const mysql = require("mysql2");
const inquirer = require("inquirer");
const conTable = require("console.table");
const figlet = require("figlet");
require("dotenv").config();

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "TrackYourTeam_db",
});

// checks for connection
db.connect(function () {
  menuOptions();
});

// initial menu
const menuOptions = (answer) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "view",
        message: "What would you like to do?",
        choices: [
          "View all Departments?",
          "View all Roles?",
          "View all Employees?",
          "Add a new Department?",
          "Add a new Role?",
          "Add a new Employee?",
          "Update an Employees Role?",
          "Exit",
        ],
      },
    ])
    .then(() => {
      if (answer === "View all Departments?") {
        const output = `SELECT * FROM department`;
        console.table(output);
      }
      if (answer === "View all Roles?") {
        const output = `SELECT * FROM role`;
        console.table(output);
      }
      if (answer === "View all Employees?") {
        const output = `SELECT * FROM employee`;
        console.table(output);
      }
      if (answer === "Add a new Department?") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What department are you adding?",
              name: "newDep",
            },
          ])
          .then((input) => {
            const added = input.newDep;
            const info = `INSERT INTO department (name)
          VALUES (?)`;
            db.query(info, (err) => {
              if (err) {
                console.log("There was an error");
                menuOptions();
              } else {
                console.log(added + " has been added");
                menuOptions();
              }
            });
          });
      }
      if (answer === "Add a new Role?") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter new role title.",
              name: "newRole",
            },
            {
              type: "input",
              message: "Enter salary for role.",
              name: "roleSal",
            },
            {
              type: "input",
              message: "Enter department id for the new role.",
              name: "roleDep",
            },
          ])
          .then((input) => {
            const added = [input.newRole, input.roleSal, input.roleDep];
            const info = `INSERT INTO role (title, salary, department_id)
          VALUES (?, ?, ?)`;
            db.query(info, (err) => {
              if (err) {
                console.log("There was an error");
              } else {
                console.log(added + " has been added");
              }
            });
          });
      }
      if (answer === "Add a new Employee?") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter employees first name.",
              name: "firstName",
            },
            {
              type: "input",
              message: "Enter employees last name.",
              name: "lastName",
            },
            {
              type: "input",
              message: "Enter employees department.",
              name: "eDep",
            },
            {
              type: "input",
              message: "Please enter a role id for employee.",
              name: "eRole",
            },
          ])
          .then((input) => {
            const info = `INSERT INTO employee (first_name, last_name, role_id)
            VALUES (?, ?, ?)`;
            const added = [
              input.firstName,
              input.lastName,
              input.eDep,
              input.eRole,
            ];
            db.query(info, (err) => {
              if (err) {
                console.log("There was an error");
              } else {
                console.log(added + " has been added");
              }
            });
          });
      }
      if (answer === "Update an Employees Role?") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter updated first name.",
              name: "firstName",
            },
            {
              type: "input",
              message: "Enter updated last name.",
              name: "lastName",
            },
            {
              type: "input",
              message: "Enter updated department.",
              name: "eDep",
            },
            {
              type: "input",
              message: "Please enter an updated role id for employee.",
              name: "eRole",
            },
          ])
          .then((input) => {
            const added = [
              input.firstName,
              input.lastName,
              input.eDep,
              input.eRole,
            ];
          });
      }
    });
};
