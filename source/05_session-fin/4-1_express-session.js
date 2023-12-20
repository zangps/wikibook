var express = require('express');
var parseurl = require('parseurl');
var session = require('express-session');

var app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function(req, res, next) {
    console.log(req.session);
    res.send('Hello session');
});

app.listen(3000, function() {
    console.log('3000!');
});
