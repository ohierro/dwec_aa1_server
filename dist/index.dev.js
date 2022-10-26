"use strict";

var express = require('express'); // import express from "express"
// import users from "./users.js"
// import categories from "./src/categories/category.controller.js"


var db = require("./db/models/index.js"); // const categories = require("./models/category")


var categories = require("./src/categories/category.controller.js");

var app = express();
app.use(express.json());
var port = 3000;
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port)); // users.init(app)

  categories.init(app);
});