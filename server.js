var express = require('express');
var app = express();
var configurations = require('./public/configurations.json');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('/index.html')
});

app.get('/download/request', function (req, res) {
    const maxHost = req.query.host;
    res.send(configurations.configurations.slice(0, maxHost));
});

app.listen(3000, function () {
    console.log('App listening on port 3000!')
});