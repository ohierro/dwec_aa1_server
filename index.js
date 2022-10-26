const express = require('express')
// import express from "express"
// import users from "./users.js"
// import categories from "./src/categories/category.controller.js"
const db = require("./db/models/index.js")
// const categories = require("./models/category")
const categories = require("./src/categories/category.controller.js")


const app = express()
app.use(express.json());

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

  // users.init(app)
  categories.init(app)
})

