const { Client, Account } = require('appwrite');
try {
  const client = new Client();
  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('dummy-project-id');
  client.setJWT('dummy-jwt');
  const account = new Account(client);
  console.log('Appwrite Client setJWT and Account initialized successfully in Node!');
} catch (e) {
  console.error('Failed to run Appwrite setup in Node:', e.stack || e);
}
