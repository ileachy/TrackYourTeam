DROP DATABASE IF EXISTS TrackYourTeam_db;
CREATE DATABASE TrackYourTeam_db;
-- Uses created db --
USE TrackYourTeam_db;

-- Create schema tables --
CREATE TABLE depatment(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE role(
  id INTEGER PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER
);

CREATE TABLE employee(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  manager_id INTEGER
);
