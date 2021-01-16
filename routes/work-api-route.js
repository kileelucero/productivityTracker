const router = require("express").Router();
const db = require('../models');

    router.post('/new', function (req, res) {
        db.Working.create({
            ...req.body
        }).then(function (results) {
            res.end();
        });
    });

    router.get('/new', function(req, res) {
        db.Working.findAll({}).then(function(workData) {
            res.json(workData);
        });
    });
module.exports = router;