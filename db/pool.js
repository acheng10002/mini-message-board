require("dotenv").config();

const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  // uses SSL for cloud databases (Koyeb) automatically, disables SSL locally
  ssl: process.env.DATABASE_URL.includes("koyeb")
    ? { rejectUnauthorized: false }
    : false,
  /* enables SSL only in production, SSL is disabled in development 
    ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false, */
});
