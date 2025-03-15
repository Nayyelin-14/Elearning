// const mysql = require("mysql2");
// //++++++++++++++++++++++++++++++++++++++++++
// // DB Connection
// //++++++++++++++++++++++++++++++++++++++++++
// require("dotenv").config();

// const connection = mysql.createConnection(process.env.DATABASE_URL);
// //++++++++++++++++++++++++++++++++++++++++++
// // DB Connection Test
// //++++++++++++++++++++++++++++++++++++++++++
// connection.connect((err) => {
//   if (err) {
//     console.log("There Is Error In DB Connection:" + err);
//   } else {
//     console.log("DB Connected Succefully");
//   }
// });
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// module.exports = connection;
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT, // Add the port
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.log("There Is Error In DB Connection: " + err);
  } else {
    console.log("DB Connected Successfully");
  }
});

module.exports = connection;
