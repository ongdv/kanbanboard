var mysql = require('mysql');

var info = {
    host: 'localhost',
    user: 'root',
    password: 'package.json',
    database: 'dnlab'
}

module.exports = {
    connection: mysql.createConnection(info),
    connectionPool: mysql.createPool(info)
}