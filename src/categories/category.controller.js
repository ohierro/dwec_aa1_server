// import { Category } from "../db.js"
// import { Category } from "../../models"
const models = require("../../db/models")
// const Category = require("../../models/category.js")

async function listAll(req, res) {
  res.send(await models.Category.findAll())
}

async function listAllSite(req, res) {
  res.send(await models.Site.findAll())
}

async function listSites(req, res) {
  let category = await models.Category.findByPk(req.params.id, { include: { model: models.Site, as: 'sites'  } })
  res.send(category.sites)
}

async function addNewSite(req, res) {
  let result = await models.Site.build(req.body)
  result.categoryId = req.params.id
  await result.save()
  res.send(result)
}


function init(app) {
  app.get('/categories/:id', listSites)
  app.post('/categories/:id', addNewSite)
  app.get('/categories',listAll)
  app.get('/sites',listAllSite)
}

// export default {
//   init
// }
module.exports = {
  init
}