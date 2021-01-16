const router = require("express").Router();

    router.get("/", function(req, res) {
      res.render('index');
    });

    router.get("/sleep-inquiry", function(req, res) {
        res.render('sleep');
      });
    
      router.get("/work-inquiry", function(req, res) {
        res.render('working');
      });
      
      router.get("/family&friends", function(req, res) {
        res.render('famfriend');
      });
    
      router.get("/exercise", function(req, res) {
        res.render('exercise');
      });
    
      router.get("/other-value", function(req, res) {
        res.render('other');
      });
    module.exports = router;