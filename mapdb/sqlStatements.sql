--Select Statement for MAP Admin List (Shows all employee's and the courses they're on)
SELECT Course.cName, Course.cLocation, Course.cDate, Course.maxAttend, Employee.eName 
    FROM EmployeeCourse 
        INNER JOIN Course ON Course.cid = EmployeeCourse.cid 
            INNER JOIN Employee ON EmployeeCourse.eid = Employee.eid;

--User Story 3, list information on course as well as trainer name
SELECT Course.cName, Course.cLocation, Course.cDate, Course.cLocation, Course.maxAttend, Trainer.trainerName
    FROM Course
        INNER JOIN Trainer ON Course.tid = Trainer.tid;

--User Story 4, Adding new course 
INSERT INTO Course 