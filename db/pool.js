require("dotenv").config();
const { Pool } = require("pg");
const fs = require("fs");

const isProduction = process.env.NODE_ENV === "production";

/*
module.exports = new Pool({
  host: "localhost",
  user: "amycheng",
  database: "mini_message_board",
  password: "q",
  port: 5432,
});
*/

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction
    ? {
        rejectUnauthorized: true,
        ca: fs.readFileSync("/amycheng/Downloads/ca.pem").toString(),
      }
    : false,
  /* enables SSL only in production, SSL is disabled in development 
    ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false, */
});
