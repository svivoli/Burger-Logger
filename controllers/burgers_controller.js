var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

module.exports = router;