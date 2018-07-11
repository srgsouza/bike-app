const express = require('express');
const router = express.Router();

const bikeList = require('../models/bikes');

router.get('/', (req, res) => {
  res.render('index.ejs', {bikeList})
});

// display and edit page
router.get('/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    bike:bikeList[req.params.index],
    index:req.params.index
  });
});

router.put('/:index', (req, res) => {
  // req.body is the updated form info
  bikeList[req.params.index] = req.body;
  res.redirect('/bikes');
});

router.delete('/:index', (req, res) => {
  bikeList.splice(req.params.index, 1);
  res.redirect('/bikes');
});



module.exports = router;