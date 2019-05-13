var express = require("express");

var router = express.Router();

router.get("/", function(rec, res) {
    console.log("Hello World");
    res.render("index");
});

module.exports = router;