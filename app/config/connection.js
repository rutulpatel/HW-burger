var mysql = require('mysql');


// Heroku Jaws DB connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
}

connection.connect(function(err) {
    if (err) throw err;
    else console.log("connected to db, connection id:" + connection.threadId);
});

module.exports = connection;