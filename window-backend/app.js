const express = require('express');
const app = express();

const db = require('./db.js');

function updateEmployees(employeeReadyFn) {
  db.getEmployees(function(rows){
    employees = rows;
    employeeReadyFn();
  })
}

app.use(express.json());

app.get('/employee', function(req, res) {
  updateEmployees(function(){
    res.send(employees)
  })
})

app.listen(8003, function(){
  console.log('listening on port 8003');
})

