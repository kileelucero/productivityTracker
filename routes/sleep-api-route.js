const router = require("express").Router();
let db = require('../models');

    router.post('/new', function (req, res) {
        db.Sleep.create({
            ...req.body
        }).then(function (results) {
            res.end();
        });
    });

    router.get('/new', function(req, res) {
        db.Sleep.findAll({}).then(function(sleepData) {
            res.json(sleepData);
        });
    });
module.exports = router