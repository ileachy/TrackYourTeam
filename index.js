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
