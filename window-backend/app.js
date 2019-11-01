const express = require('express');
const app = express();
 
const db = require('./db.js');
 
function updateEmployees(employeeReadyFn) {
  db.getEmployees(function(rows){
    employees = rows;
    employeeReadyFn();
  })
}

function updateCourses(courseReadyFn) {
  db.getCourses(function (rows) {
    courses = rows;
    courseReadyFn();
  })
}

app.use(express.json());
 
app.get('/employee', function(req, res) {
  updateEmployees(function(){
    res.send(employees)
  })
})

app.get('/courses', function (req, res) {
  updateCourses(function () {
    res.send(courses)
  })
})

app.post('/addcourse', function (req, res) {
  console.log('Add Course Called');
  db.addCourse(req.body, function(insertedKey) {
    updateCourses(function() {
      res.send(courses);
    })
  })
})

app.listen(8003, function(){
  console.log('listening on port 8003');
})