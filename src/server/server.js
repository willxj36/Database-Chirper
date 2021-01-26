"use strict";
exports.__esModule = true;
var express = require("express");
var routes_1 = require("./routes");
var app = express();
app.use(express.static('public'));
app.use('/api', routes_1["default"]);
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("Server listening on port: " + port); });
