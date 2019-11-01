var express = require('express');
var router = express.Router();
const {
  find
} = require('../db/db');
/* GET home page. */
router.get('/entries', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin','*');
  let data = await find('element');
  res.json(data);
});

router.get('/restaurants', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin','*');
  let data = await find('restaurants');
  res.json(data);
});

module.exports = router;