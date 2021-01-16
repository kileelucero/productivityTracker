const router = require("express").Router();
const db = require('../models');

    router.post('/new', function (req, res) {
        db.Exercise.create({
           ...req.body
        }).then(function (res) {
            res.end();
        });
    });

    router.get('/new', function(req, res) {
        db.Exercise.findAll({}).then(function(efData) {
            res.json(efData);
        });
    });
module.exports = router;