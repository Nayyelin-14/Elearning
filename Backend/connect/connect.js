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

console.log("Connecting to DB with the following configuration:");
console.log("DB Host:", process.env.DB_HOST);
console.log("DB Port:", process.env.DB_PORT);
console.log("DB User:", process.env.DB_USER);
console.log("DB Name:", process.env.DB_NAME);

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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
