// Dependencies
var path = require('path');


// Routes
module.exports = function(app) {
    // Index route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "../public/index.html"));
    });
};