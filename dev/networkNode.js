const express = require('express');
const app = express();

app.get('/blockchain', function (req, res) {

});

app.post('/transaction', function(req, res) {
    res.send('It Works!!!');

});

app.get('/mine', function(req, res) {

});

app.listen(3000, function() {
    console.log('listenining on port 3000....');

});