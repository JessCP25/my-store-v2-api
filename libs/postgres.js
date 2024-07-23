const {Client} = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'tester',
    password: '14db7d47-f442-4a90-b633-2a537c8b5c13',
    database: 'thingst'
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
