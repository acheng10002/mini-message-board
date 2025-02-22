const pool = require("../db/pool");

/* with my pool initialized, I can use the query method */
async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(text, user) {
  /* pg does query parameterization: 
  user entered  values, text and user, are passed as an array as the second argument,
  pg prevents SQL injection */
  await pool.query(
    'INSERT INTO messages (text, "user", added) VALUES ($1, $2, NOW())',
    [text, user]
  );
}

module.exports = {
  getAllMessages,
  insertMessage,
};
