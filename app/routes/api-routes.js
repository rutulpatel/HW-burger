// Dependencies
var burger = require("../models/burger-model.js");

module.exports = function(app) {

    // Get all burgers data
    app.get("/api/all", function(req, res) {

        if (Object.keys(req.query).length !== 0) {
            console.log(req.query);
            var whrArrName = [];
            var whrArrValue = [];
            for (var k in req.query) {
                if (req.query.hasOwnProperty(k)) {
                    console.log(k);
                    whrArrName.push(k);
                    console.log(req.query[k]);
                    whrArrValue.push(req.query[k]);
                }
                // console.log(req.query.[k])
            }
        } else {
            console.log("NO QUERY PARAMS FOUND");
        }
        burger.selectAll({ "table": "burgers", "whrArrName": whrArrName, "whrArrValue": whrArrValue },
            function(data) {
                if (data != -1) {
                    res.json(data);
                } else {
                    console.log("FATAL ERROR in orm.js > selectAll() function.");
                }
            });
    });

    // Add a burger
    app.post("/api/new", function(req, res) {
        console.log("Adding new burger:");
        console.log(req.body.burgerName);
        burger.insertOne("burgers", "burger_name", req.body.burgerName, function(data) {
            if (data != -1) {
                res.json(data);
            } else {
                console.log("FATAL ERROR in orm.js > insertOne() function.");
            }
        });
    });


    app.put("/api/all", function(req, res) {
        console.log("HERE-app.delete");
        var reqData = req.body.data;
        console.log(reqData);
        burger.updateOne("burgers", reqData[0], !!reqData[1], reqData[2], reqData[3], function(data) {
            console.log("response", data);
            if (data != -1) {
                console.log(data);
                res.json(data);
            } else {
                console.log("FATAL ERROR in orm.js > deleteOne() function.");
            }
        });
    });
}