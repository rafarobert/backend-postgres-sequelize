"use strict";

var config = require('dotenv');

var express = require('express');

var bodyParser = require('body-parser');

var bookRoutes = require('./server/routes/BookRoutes');

config.config();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
var port = process.env.DEV_PORT || 8000;
app.use('/api/v1/books', bookRoutes); // when a random route is inputed

app.get('*', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to this API.'
  });
});
app.listen(port, function () {
  console.log("Server is running on PORT ".concat(port));
});
module.exports = app;
//# sourceMappingURL=index.js.map