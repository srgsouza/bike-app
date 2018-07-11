const express = require('express');
const router = express.Router();

const bikeList = require('../models/bikes');

router.get('/', (req, res) => {
  res.render('bikes.ejs', {bikeList})
});



module.exports = router;