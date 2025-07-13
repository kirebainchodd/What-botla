const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

module.exports = async () => {
  try {
    await client.connect();
    await client.query('CREATE TABLE IF NOT EXISTS ...');
  } catch (err) {
    console.error('Failed to initialize tables:', err.message);
    process.exit(1);
  }
};
