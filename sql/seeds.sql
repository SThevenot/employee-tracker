INSERT INTO department (department_name)
VALUES ("Sales"),
        ("Finance"),
        ("HR"),
        ("Customer Service"),
        ("Management"),
        ("Janitorial");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Salesman", 40000, 1),
        ("Salesman", 30000, 1),
        ("CFO", 100000, 2),
        ("Accountant", 80000, 2),
        ("HR Rep", 70000, 3),
        ("Customer Service Rep", 40000, 4),
        ("Manager", 80000, 5),
        ("Assistant to the manager", 40000, 5),
        ("Janitor", 30000, 006);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Jim", "Halpert", 1, 7),
        ("Andy", "Bernard", 2, 7),
    ("David", "Wallace", 3, null),
    ("Oscar", "Martinez", 4, 7),
    ("Toby", "Flenderson", 5, 7),
    ("Kelly", "Kapoor", 6, 7),
    ("Michael", "Scott", 7, 3),
    ("Dwight", "Schrute", 8, 7),
    ("Hank", "Janitor", 9, null);
