var SqlRunner = require('../db/sql_runner.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  SqlRunner.run('SELECT * FROM events').then((result) => {
    res.status(200).json(result.rows);
  });
});

// GET by ID
router.get('/:id', function(req, res) {
  SqlRunner.run('SELECT * FROM events WHERE id = $1', [req.params.id]).then((result) => {
    res.status(200).json(result.rows);
  });
});


// CREATE
router.post('/', function(req, res) {
  SqlRunner.run('INSERT INTO events (style, distance, worldrecord) VALUES ($1, $2, $3)', [req.body.style, req.body.distance, req.body.worldrecord])
    .then((result) => {
      res.status(200).json(result);
    });
});

// UPDATE
router.put('/:id', function(req, res) {
  SqlRunner.run('UPDATE events SET style = $1, distance = $2, worldrecord = $3 WHERE id = $4', [req.body.style, req.body.distance, req.body.worldrecord, req.params.id])
    .then((result) => {
      res.status(200).json(result);
    });
});

// DELETE
router.delete('/:id', function(req, res) {
  SqlRunner.run('DELETE FROM events WHERE id = $1', [req.params.id])
    .then((result) => {
      res.status(200).json(result);
    });
});

module.exports = router;
