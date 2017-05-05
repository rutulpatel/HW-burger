// Dependencies
var express = require('express');
var bodyparser = require('body-parser');


// Set up express app instance
var app = express();
var PORT = process.env.PORT || 8080;

// Set up express app to handle data parsing
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.text());
app.use(bodyparser.json({ type: "application/vnd.api+json" }));

// Set up static routes
app.use(express.static("app/public"));

// Routes
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

// Start the server
app.listen(PORT, function() {
    console.log("app listening on PORT " + PORT);
});