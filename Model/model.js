var mysql = require('mysql');

var connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    port: "3306",
    database: "bazaar"
})

connection.connect(function(err){
    if(err){
        console.log("error", err.sqlMessage)
    }
    else{
        console.log("Database Connection Established")
    }
})

module.exports = connection;