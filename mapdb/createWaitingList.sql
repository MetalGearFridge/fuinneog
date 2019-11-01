CREATE TABLE WaitingList (
    eid int NOT NULL,
    cid int NOT NULL,
    TimeStamp datetime NOT NULL DEFAULT(NOW()),
    PRIMARY KEY(eid, cid),
    FOREIGN KEY (eid) REFERENCES Employee(eid),
    FOREIGN KEY (cid) REFERENCES Course(cid)
);