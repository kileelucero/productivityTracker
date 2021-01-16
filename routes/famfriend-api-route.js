const router = require("express").Router();
const db = require('../models');

    router.post('/new', function (req, res) {
        db.Famfriend.create({
            ...req.body
        }).then(function (results) {
            res.end();
        });
    });

    router.get('/new', function(req, res) {
        db.Famfriend.findAll({}).then(function(ffData) {
            res.json(ffData);
        });
    });
module.exports = router;