const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Sql@2022Engin5783',
  database: 'gallery'
});

// Because this file is its own module, we will need to export
module.exports = db;
