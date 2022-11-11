const mysql = require("mysql2");
const util  = require("util");
const CONFIGURATION = require("./../configuration");

const connection = mysql.createConnection({
    host            : CONFIGURATION.DB_HOST,
    user            : CONFIGURATION.DB_USER,
    password        : CONFIGURATION.DB_PASS,
    database        : CONFIGURATION.DB_NAME
});

module.exports = {
    connection: connection,
    query: util.promisify(connection.query).bind(connection)
}