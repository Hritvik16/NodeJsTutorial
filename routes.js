var express = require("express");

var router = express.Router();

router.get("/", function(rec, res) {
    console.log("Hello World");
    res.render("index");
});

router.get("/about", function(rec, res) {
    console.log("Hello World");
    res.render("about");
});

router.get("/Log%20In", function(rec, res) {
    console.log("Hello World");
    res.render("login");
});

module.exports = router;