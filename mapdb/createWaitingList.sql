CREATE TABLE WaitingList (
    eid int NOT NULL,
    cid int NOT NULL,
    TimeStamp datetime NOT NULL DEFAULT(CURDATE()),
    PRIMARY KEY(eid, cid),
    FOREIGN KEY (eid) REFERENCES Employee(eid),
    FOREIGN KEY (eid) REFERENCES Course(cid)
);