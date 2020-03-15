const express = require('express');
const db = require('../DB/config');
const router = express.Router();

router.get('/', (req, res, next)=> {
    let sql = 'SELECT * FROM customer;'
   db.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;