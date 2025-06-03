require("dotenv").config();
const fs = require("fs");
const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("./certs/ca.pem"),
  },
});
