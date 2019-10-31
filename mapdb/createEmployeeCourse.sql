CREATE EmployeeCourse(
    eid INT NOT NULL,
    cid INT NOT NULL,
    PRIMARY KEY(cid, eid),

    FOREIGN KEY (eid) REFERENCES Employee(eid),
    FOREIGN KEY (cid) REFERENCES Course(cid)
);