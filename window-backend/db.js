const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mapdb'
});

db.connect(function(err){
    if (err){
        throw err;
    }
    console.log('Connected to MySQL');
});

exports.getEmployees = function(callback) {
  db.query(
    "select eName from Employee",
    function(err, rows) {
      if (err) throw err;
      callback(rows)
    }
  )
}

exports.getCourses = function (callback) {
  db.query(
    "select cName from Course",
    function (err, rows) {
      if (err) throw err;
      callback(rows)
    }
  )
}

exports.addCourse = function(course, readyFn) {
  db.query(
    "insert into Course SET ?", course,
    function(err, results, fields) {
      if (err) throw err;
      readyFn(results.insertId);
    }
  );
}