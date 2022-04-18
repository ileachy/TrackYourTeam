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
  if (error) {
    throw error;
  } else {
  }
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
        ],
      },
    ])
    .then(() => {
      if (answer === "View all Departments?") {
      }
      if (answer === "View all Roles?") {
      }
      if (answer === "View all Employees?") {
      }
      if (answer === "Add a new Department?") {
      }
      if (answer === "Add a new Role?") {
      }
      if (answer === "Add a new Employee?") {
      }
      if (answer === "Update an Employees Role?") {
      }
    });
};
