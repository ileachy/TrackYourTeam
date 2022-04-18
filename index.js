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
              name: "newDep",
              message: "What department are you adding?",
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
        inquirer.prompt([]);
      }
      if (answer === "Add a new Employee?") {
        inquirer.prompt([]);
      }
      if (answer === "Update an Employees Role?") {
      }
      if (answer === "Exit") {
      }
    });
};
