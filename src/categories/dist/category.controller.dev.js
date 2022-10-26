"use strict";

// import { Category } from "../db.js"
// import { Category } from "../../models"
var models = require("../../db/models"); // const Category = require("../../models/category.js")


function listAll(req, res) {
  return regeneratorRuntime.async(function listAll$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = res;
          _context.next = 3;
          return regeneratorRuntime.awrap(models.Category.findAll());

        case 3:
          _context.t1 = _context.sent;

          _context.t0.send.call(_context.t0, _context.t1);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function listAllSite(req, res) {
  return regeneratorRuntime.async(function listAllSite$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = res;
          _context2.next = 3;
          return regeneratorRuntime.awrap(models.Site.findAll());

        case 3:
          _context2.t1 = _context2.sent;

          _context2.t0.send.call(_context2.t0, _context2.t1);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function listSites(req, res) {
  var category;
  return regeneratorRuntime.async(function listSites$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(models.Category.findByPk(req.params.id, {
            include: {
              model: models.Site,
              as: 'sites'
            }
          }));

        case 2:
          category = _context3.sent;
          res.send(category.sites);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function addNewSite(req, res) {
  var result;
  return regeneratorRuntime.async(function addNewSite$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(models.Site.build(req.body));

        case 2:
          result = _context4.sent;
          result.categoryId = req.params.id;
          _context4.next = 6;
          return regeneratorRuntime.awrap(result.save());

        case 6:
          res.send(result);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function init(app) {
  app.get('/categories/:id', listSites);
  app.post('/categories/:id', addNewSite);
  app.get('/categories', listAll);
  app.get('/sites', listAllSite);
} // export default {
//   init
// }


module.exports = {
  init: init
};