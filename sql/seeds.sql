INSERT INTO department (name)
VALUES ("Sales"),
        ("Finance"),
        ("HR"),
        ("Customer Service"),
        ("Management"),
        ("Janitorial");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Salesman", 40.000, 001),
        ("Salesman", 30.000, 001),
        ("CFO", 100.000, 002),
        ("Accountant", 80.000, 002),
        ("HR Rep", 70.000, 003),
        ("Customer Service Rep", 40.000, 004),
        ("Manager", 80.000, 005),
        ("Assistant to the manager", 40.000, 005),
        ("Janitor", 30.000, 006);

INSERT INTO employee (first_name, last_name)
VALUES  ("Jim", "Halpert"),
    ("David", "Wallace"),
    ("Oscar", "Martinez"),
    ("Toby", "Flenderson"),
    ("Kelly", "Kapoor"),
    ("Michael", "Scott"),
    ("Dwight", "Schrute"),
    ("Hank", "Janitor");
