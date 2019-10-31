const express = require('express');
const app = express()

app.get('/employee', function(req,res){
    employee = [
        "hello world"
    ]
    res.send(employee)
})

app.listen(8003, function(){
    console.log('Listening on port 8003')
})
