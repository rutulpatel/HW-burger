var connection = require('./connection.js');

// ORM : Object Relational Mapper
var orm = {
    selectAll: function(tableName, callback) {
        var q = "SELECT * FROM ??";
        connection.query(q, [tableName],
            function(err, result) {
                if (err) {
                    throw err;
                    return -1;
                } else {
                    return callback(result);
                }
            });
    },
    insertOne: function(tableName, colNames, colValues, callback) {
        var q = "INSERT INTO ?? (??) VALUES (??)";
        connection.query(q, [tableName, colNames.toString(), colValues.toString()],
            function(err, result) {
                if (err) {
                    throw err;
                    return -1;
                } else {
                    return callback(result);
                }
            });
    },
    updateOne: function(tableName, colName, colValue, matchColName, matchColValue, callback) {
        var q = "UPDATE ?? SET ??=?? WHERE ??=??";
        connection.query(q, [tableName, colNames.toString(), colValues.toString(), matchColName.toString(), matchColValue.toString()],
            function(err, result) {
                if (err) {
                    throw err;
                    return -1;
                } else {
                    return callback(result);
                }
            });
    }
}

module.exports = orm;