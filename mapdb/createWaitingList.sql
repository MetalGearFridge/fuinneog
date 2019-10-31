CREATE TABLE WaitingList (
    eid int FOREIGN KEY NOT NULL,
    cid int FOREIGN KEY NOT NULL,
    TimeStamp datetime NOT NULL DEFAULT(GETDATE()),
    PRIMARY KEY(eid, eid),
    FOREIGN KEY (eid) REFERENCES Employee(eid),
    FOREIGN KEY (eid) REFERENCES Course(cid)
);