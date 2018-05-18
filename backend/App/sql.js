var mysql = require("mysql");

let connection = mysql.createConnection
(
    {
        host: "127.0.0.1",
        port: 3307,
        database: "kaintenun",
        user: "root",
        password: "usbw" ,
    }
);

module.exports = connection;