CREATE TABLE Course (
    cid int PRIMARY KEY AUTO_INCREMENT,
    cName VARCHAR(100) NOT NULL,
    cLocation VARCHAR(100),
    cDate DATETIME NOT NULL,
    cDescription VARCHAR(510),
    tid int NOT NULL,
    maxAttend int,
    FOREIGN KEY (tid) REFERENCES Trainer(tid)
);
