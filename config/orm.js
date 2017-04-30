var connection = require('./connection.js');

// ORM : Object Relational Mapper
var orm = {
    selectAll: function(tableName) {
        var q = "SELECT * FROM ?";
        connection.query(q, [tableName],
            function(err, result) {
                if (err) {
                    throw err;
                    return false;
                } else {
                    return result;
                }
            });
    },
    insertOne: function(tableName, colNames, colValues) {
        var q = "INSERT INTO ? (?) VALUES (?)";
        connection.query(q, [tableName, colNames.toString(), colValues.toString()],
            function(err, result) {
                if (err) {
                    throw err;
                    return false;
                } else {
                    return result;
                }
            });
    },
    updateOne: function(tableName, colName, colValue, matchColName, matchColValue) {
        var q = "UPDATE ? SET ?=? WHERE ?=?";
        connection.query(q, [tableName, colNames.toString(), colValues.toString(), matchColName.toString(), matchColValue.toString()],
            function(err, result) {
                if (err) {
                    throw err;
                    return false;
                } else {
                    return result;
                }
            });
    }
}