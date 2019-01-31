const express = require('express');
const router = express.Router();

const {connection} = require('../config/dbConnection');

const cnt = connection;

router.get('/', async(req, res) => {
   const result = await connection.query('SELECT * FROM mn_user', (err, result) => {
      if (err) throw err;
      res.send(result);
   });
});

module.exports = router;
