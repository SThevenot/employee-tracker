/** @format */

const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require("mysql2");
var menu;
var data;
const cTable = require('console.table');
//connect to mysql

inquirer
  .prompt([
    {
      type: "checkbox",
      message: "What would you like to do?",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
      ],
      name: "menu",
    },
  ])
  .then((data) => {
    console.log(data);
menu = data.menu;
    queryFunctions();
  });
console.log(data);
function queryFunctions(data) {
  const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "KevinTheMan1286",
      database: "tracker_db",
    },
    console.log("Connected to tracker_db satabase")
  );
  console.log(menu);
  if (menu == "view all departments") {
    db.query("SELECT * FROM department;", function (err, results) {
      console.table(results);
    });
  }
}
