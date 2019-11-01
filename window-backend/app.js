const express = require('express');
const app = express()

app.use(express.json());

app.get('/employee', function(req,res){
    employee = [
        {
            name: "Thomas"
        }
    ]
    res.send(employee)
})

app.post('/addemployee', function(req,res){
    employees.push(req.body);
    res.send(employees)
})

app.listen(8003, function(){
    console.log('Listening on port 8003')
})
