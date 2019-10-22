var express = require('express');
var router = express.Router();
const parksModel = require('../models/skateparkModel')

/* GET home page. */
router.get('/', async(req, res, next) => {
  const parksData = await parksModel.getAll();
  console.log('parksData FROM INDEX.JS', parksData)

  res.render('template', {
    locals: {
      title: "Something is off...",
      parks: parksData
    },
    partials: {
      partial: "partial-index"
    }
  });
});

router.get("/:parks_id", async (req, res, next) => {
  const { parks_id } = req.params;
  const thePark = await parksModel.getById(parks_id);

  res.render("template", {
    locals: {
      title: "this is one park",
      parksData: thePark
    },
    partials: {
      partial: "partial-single-park"
    }
  });
});

module.exports = router;
