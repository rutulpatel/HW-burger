var connection = require('./connection.js');

// ORM : Object Relational Mapper
var orm = {
    selectAll: function(params, callback) {
        console.log(params);
        var q = "SELECT * FROM " + params.table;
        // Building whr clause on fly
        if (params.whrArrName && (params.whrArrName.length > 0) && (params.whrArrName.length === params.whrArrValue.length)) {
            q += " WHERE ";
            for (var i = 0; i < params.whrArrName.length; i++) {
                q += " " + params.whrArrName[i] + "=" + params.whrArrValue[i];
                if (params.whrArrName.length > 1 && (i !== (params.whrArrName.length - 1))) {
                    q += " AND ";
                }
            }
            q += ";";
        }
        //----------
        console.log("QUERY", q);
        connection.query(q, [],
            function(err, result) {
                if (err) {
                    console.log(err);
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