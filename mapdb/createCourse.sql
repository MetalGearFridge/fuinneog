CREATE TABLE Course (
    cid int PRIMARY KEY AUTO_INCREMENT,
    cName VARCHAR(100) NOTNULL,
    cLocation VARCHAR(100),
    cDate DATETIME NOT NULL DEFAULT(GETDATE()),
    cDescription VARCHAR(510),
    tid int NOT NULL,
    MaxAttend int,
    FOREIGN KEY (tid) REFERENCES Trainer(tid)
);
