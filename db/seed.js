require("dotenv").config();
const pool = require("./pool");

const SQL = `
               CREATE TABLE IF NOT EXISTS messages (
                   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
                   "user" VARCHAR ( 20 ),
                   text TEXT,
                   added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
               );
               
               INSERT INTO messages ("user", text, added)
               VALUES
                   ('Amando', 'Hi there!', NOW()),
                   ('Charles', 'Hello World!', NOW())
                ON CONFLICT (id) DO NOTHING;
               `;

async function main() {
  console.log("seeding...");
  await pool.query(SQL);
  await pool.end();
  console.log("done");
}

main();

/* 
async function main() {
  try {
    console.log("Seeding database...");
    await pool.query(SQL);
    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  } finally {
    pool.end(); // Close connection
  }
}

main();
*/
