INSERT INTO department (name)
VALUES
  ("Warehouse"),
  ("Sales"),
  ("HR"),
  ("Accounting"),
  ("IT");

INSERT INTO role (title, salary, department_id)
VALUES 
  ("Stocker", 40000, 1),
  ("Lead Sales", 80000, 2),
  ("Junior Sales", 50000, 2),
  ("Recruiter", 75000, 3),
  ("Accountant", 70000, 4),
  ("IT Manager", 80000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ("John", "Doe", 1, NULL),
  ("Adam", "Smith", 3, 3),
  ("Jenny","Jacobs", 2, NULL),
  ("Derek","Day", 4, NULL),
  ("Hannah","O'Connor", 3, 3),
  ("Darren","Reed", 5, NULL),
  ("Sannen","Day", 6, NULL);