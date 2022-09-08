/** @format */

const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require("mysql2");
var menu;
var data;
const cTable = require("console.table");
const { getRandomValues } = require("crypto");
//connect to mysql
const getStart = () => {
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
      menu = data.menu;
      if (menu == "add a department") {
        getDepartment();
      }
      if (menu == "add a role") {
        getRole();
      }
      if (menu == "add an employee") {
        getEmployee();
      }
      if (menu == "update an employee role") {
        getUpdate();
      } else {
        queryFunctions();
      }
    });
};
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
  if (menu == "view all departments") {
    db.query("SELECT * FROM department;", function (err, results) {
      console.table(results);
      getStart();
    });
  }
  if (menu == "view all roles") {
    db.query("SELECT * FROM role;", function (err, results) {
      console.table(results);
      getStart();
    });
  }
  if (menu == "view all employees") {
    db.query("SELECT * FROM employee;", function (err, results) {
      console.table(results);
      getStart();
    });
  }
}

const getDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What would you like your department to be called?",
        name: "departmentName",
      },
    ])
    .then((data) => {
      const db = mysql.createConnection(
        {
          host: "localhost",
          user: "root",
          password: "KevinTheMan1286",
          database: "tracker_db",
        },
        console.log("Connected to tracker_db satabase")
      );
      console.log(`showing ${data.departmentName}`);
      db.query(
        `INSERT INTO department (department_name) VALUES("${data.departmentName}");`,
        function (err, results) {
          console.log(`${data.departmentName} was successfully added!`);
          db.query("SELECT * FROM department;", function (err, results) {
            console.table(results);
            return getStart();
          });
        }
      );
    });
};

const getRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your employees' title?",
        name: "roleTitle",
      },
      {
        type: "input",
        message: "What is your employees' salary?",
        name: "roleSalary",
      },
      {
        type: "input",
        message: "What is your employees' department id?",
        name: "roleDepartmentId",
      },
    ])
    .then((data) => {
      const db = mysql.createConnection(
        {
          host: "localhost",
          user: "root",
          password: "KevinTheMan1286",
          database: "tracker_db",
        },
        console.log("Connected to tracker_db satabase")
      );
      db.query(
        `INSERT INTO role (title, salary, department_id) VALUES("${data.roleTitle}", ${data.roleSalary}, ${data.roleDepartmentId});`,
        function (err, results) {
          console.log(
            `"${data.roleTitle}", ${data.roleSalary}, ${data.roleDepartmentId} was successfully added!`
          );
          db.query("SELECT * FROM role;", function (err, results) {
            console.table(results);
            return getStart();
          });
        }
      );
    });
};

const getEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your employees' first name?",
        name: "employeeFirstName",
      },
      {
        type: "input",
        message: "What is your employees' last name?",
        name: "employeeLastName",
      },
      {
        type: "input",
        message: "What is your employees' role id?",
        name: "employeeRoleId",
      },
      {
        type: "input",
        message: "What is your employees' manager's id?",
        name: "employeeManager",
      },
    ])
    .then((data) => {
      const db = mysql.createConnection(
        {
          host: "localhost",
          user: "root",
          password: "KevinTheMan1286",
          database: "tracker_db",
        },
        console.log("Connected to tracker_db satabase")
      );
      db.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES("${data.employeeFirstName}", "${data.employeeLastName}", ${data.employeeRoleId}, ${data.employeeManager});`,
        function (err, results) {
          console.log(
            `"${data.employeeFirstName}", "${data.employeeLastName}", ${data.employeeRoleId}, ${data.employeeManager} was successfully added!`
          );
          db.query("SELECT * FROM employee;", function (err, results) {
            console.table(results);
            return getStart();
          });
        }
      );
    });
};

const getUpdate = () => {
  inquirer
    .prompt([
      {
        type: "checkbox",
        message: "Which employee's role would you like to change?",
        choices: [
          "Jim Halpert",
          "Andy Bernard",
          "David Wallace",
          "Oscar Martinez",
          "Toby Flenderson",
          "Kelly Kapoor",
          "Michael Scott",
          "Dwight Schrute",
          "Hank Janitor",
          "Creed Bratton",
        ],
        name: "updateEmployee",
      },
      {
        type: "checkbox",
        message: "What will their new role be?",
        choices: [
          "Lead Salesman",
          "Salesman",
          "CFO",
          "Accountant",
          "HR Rep",
          "Customer Service Rep",
          "Manager",
          "Assistant to the manager",
          "Janitor",
          "Quality Assurance Manager",
          "Vice President of NE",
        ],
        name: "updateRole",
      },
    ])
    .then((data) => {
      const db = mysql.createConnection(
        {
          host: "localhost",
          user: "root",
          password: "KevinTheMan1286",
          database: "tracker_db",
        },
        console.log("Connected to tracker_db satabase")
      );
      const test = data.updateEmployee;
      var firstName = JSON.stringify(test)
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .split(" ")[0];
      if (data.updateRole == "Lead Salesman") {
        db.query(
          `UPDATE employee SET role_id=1 WHERE first_name="${firstName}";`
        );
        db.query("SELECT * FROM employee;", function (err, results) {
          console.table(results);
          return getStart();
        });
      }
      if (data.updateRole == "Salesman") {
        db.query(
          `UPDATE employee SET role_id=2 WHERE first_name="${firstName}";`
        );
        db.query("SELECT * FROM employee;", function (err, results) {
          console.table(results);
          return getStart();
        });
      }
      if (data.updateRole == "CFO") {
        db.query(
          `UPDATE employee SET role_id=3 WHERE first_name="${firstName}";`
        );
        db.query("SELECT * FROM employee;", function (err, results) {
          console.table(results);
          return getStart();
        });
      }
      if (data.updateRole == "Accountant") {
        db.query(
          `UPDATE employee SET role_id=4 WHERE first_name="${firstName}";`
        );
        db.query("SELECT * FROM employee;", function (err, results) {
          console.table(results);
          return getStart();
        });
      }
      if (data.updateRole == "HR Rep") {
        db.query(
          `UPDATE employee SET role_id=1 WHERE first_name="${firstName}";`
        );
        db.query("SELECT * FROM employee;", function (err, results) {
          console.table(results);
          return getStart();
        });
      }
      if (data.updateRole == "Customer Service Rep") {
        db.query(
          `UPDATE employee SET role_id=5 WHERE first_name="${firstName}";`
        );
        db.query("SELECT * FROM employee;", function (err, results) {
          console.table(results);
          return getStart();
        });
      }
      if (data.updateRole == "Manager") {
        db.query(
          `UPDATE employee SET role_id=6 WHERE first_name="${firstName}";`
        );
        db.query("SELECT * FROM employee;", function (err, results) {
          console.table(results);
          return getStart();
        });
      }
      if (data.updateRole == "Assistant to the manager") {
        db.query(
          `UPDATE employee SET role_id=7 WHERE first_name="${firstName}";`
        );
        db.query("SELECT * FROM employee;", function (err, results) {
          console.table(results);
          return getStart();
        });
      }
      if (data.updateRole == "Janitor") {
        db.query(
          `UPDATE employee SET role_id=8 WHERE first_name="${firstName}";`
        );
        db.query("SELECT * FROM employee;", function (err, results) {
          console.table(results);
          return getStart();
        });
      }
      if (data.updateRole == "Quality Assurance Manager") {
        db.query(
          `UPDATE employee SET role_id=9 WHERE first_name="${firstName}";`
        );
        db.query("SELECT * FROM employee;", function (err, results) {
          console.table(results);
          return getStart();
        });
      }
    });
};

getStart();
