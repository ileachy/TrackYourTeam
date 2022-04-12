DROP DATABASE IF EXISTS TrackYourTeam_db;
CREATE DATABASE TrackYourTeam_db;
-- Uses created db --
USE TrackYourTeam_db;

-- Create schema tables --
CREATE TABLE depatment(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE role();

CREATE TABLE employee();
