// Dependencies
var burger = require("../models/burger.js");


module.exports = function(app) {

    // Get all burgers data
    app.get("/api/all", function(req, res) {

    });

    // Add a burger
    app.post("/api/new", function(req, res) {
        console.log("Adding new burger:");
        console.log(req.body);

    });
}