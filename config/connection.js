// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  port: 3306,
  user: "b87f04b4fe5f6b",
  password: "cd011344",
  database: "heroku_eeb2d654e1c0e77"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
