require("dotenv").config();

const { Pool } = require("pg");

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
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
  /* enables SSL only in production, SSL is disabled in development 
    ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false, */
});
