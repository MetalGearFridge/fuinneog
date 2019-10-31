DROP DATABASE mapdb;
CREATE DATABASE mapdb;
USE mapdb;

source createEmployee.sql
source createTrainer.sql
source createCourse.sql
source createEmployeeCourse.sql
source createWaitingList.sql

source insertEmployee.sql
source insertTrainer.sql
source insertCourse.sql
source insertWaitingList.sql
source insertEmployeeCourse.sql