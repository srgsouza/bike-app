const express = require('express');
const router = express.Router();

const bikeList = require('../models/bikes');

router.get('/', (req, res) => {
  res.render('index.ejs', {bikeList})
});

router.delete('/:index', (req, res) => {
  bikeList.splice(req.params.index, 1);
  res.redirect('/bikes');
})



module.exports = router;