var express = require('express');
var app = express();//we are instantiating the server object

app.get('/', function (req, res) {
    res.json({
        message: "Welcome to website !"
    })
})

app.get('/users', function (req, res) {
    res.json({
        message: "List of users"
    })
})

app.post('/users', function (req, res) {
    res.json({
        message: "New user record saved"
    })
})

app.put('/users/:id', function (req, res) {
    res.json({
        message: "User with id " + req.params.id + " gets updated!"
    })
})

app.delete("/users/:id", function (req, res) {
    res.json({
        message: "User with id " + req.params.id + " gets deleted!"
    })
})


app.listen(3000, function () {
    console.log('server starts')
})
