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
    "select cName, cLocation, cDate from Course",
    function (err, rows) {
      if (err) throw err;
      callback(rows)
    }
  )
}