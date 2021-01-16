const router = require("express").Router();
const db = require('../models');

    router.post('/new', function (req, res) {
        db.Other.create({
            ...req.body
        }).then(function (results) {
            res.end();
        });
    });

    router.get('/new', function(req, res) {
        db.Other.findAll({}).then(function(otherData) {
            res.json(otherData);
        });
    });
module.exports = router;