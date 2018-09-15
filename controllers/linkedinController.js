var express = require("express");
var router = express.Router();
var linkedin = require("../models/linkedin");

router.get("/", function (req, res) {
    linkedin.all(function (data) {
        var hbsObject = {
            linkedin: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/linkedin", function (req, res) {
    linkedin.create([
        "name", "url", "entered"
    ], [
            req.body.name, req.body.url, req.body.entered
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/linkedin/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    linkedin.update({
        entered: req.body.entered
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;