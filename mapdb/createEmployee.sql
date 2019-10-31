CREATE DATABASE mapdb;

CREATE TABLE Employee(
    eid INT PRIMARY KEY AUTO_INCREMENT,
    empName VARCHAR(50) NOT NULL,
    empEmail VARCHAR(50) NOT NULL,
    officeLocation VARCHAR(50) NOT NULL,
    managerEmail VARCHAR(50) NOT NULL
    );

